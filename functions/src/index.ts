import * as functions from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();
const RUNTIME = { memory: "256MiB", timeoutSeconds: 60 } as const;

/**
 * Devuelve el uid del usuario autenticado, o null si no lo esta.
 * Toda funcion protegida DEBE usar requesterUid y nunca confiar en datos
 * enviados por el cliente como autoridad.
 */
export function requesterUid(request: functions.CallableRequest): string | null {
  return request.auth?.uid ?? null;
}

/**
 * Crea el codigo OTP transaccional y lo envia por email.
 * Reglas: solo usuarios autenticados; OTP con expiracion corta y un solo uso.
 */
export const sendVerificationEmail = functions.onCall(
  { region: "us-central1", memory: RUNTIME.memory, timeoutSeconds: RUNTIME.timeoutSeconds },
  async (request): Promise<{ ok: boolean }> => {
    const uid = requesterUid(request);
    if (!uid) {
      throw new functions.HttpsError("unauthenticated", "Debes iniciar sesion.");
    }

    const email = request.data?.email as string | undefined;
    if (!email || typeof email !== "string") {
      throw new functions.HttpsError("invalid-argument", "email requerido.");
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    const nowMillis = Date.now();
    const expiresAt = admin.firestore.Timestamp.fromMillis(nowMillis + 10 * 60 * 1000);

    // Se guarda un hash del codigo, nunca el codigo en claro.
    const { createHash } = await import("node:crypto");
    const codeHash = createHash("sha256").update(code).digest("hex");

    await db.doc(`users/${uid}/verifications/${nowMillis}`).set({
      email,
      codeHash,
      expiresAt,
      used: false,
    });

    const { sendEmail, buildLayout } = await import("./email");
    await sendEmail({
      to: email,
      kind: "verification",
      subject: "Tu codigo de verificacion de Taberna",
      html: buildLayout(`
      <h1 style="font-size:28px;margin:0 0 12px;">Verifica tu email</h1>
      <p style="color:#9aa3ad;">Tu codigo (valido 10 minutos):</p>
      <div style="font-size:32px;font-weight:700;letter-spacing:4px;color:#4f8cff;">
        ${code}
      </div>
    `),
    });

    return { ok: true };
  }
);
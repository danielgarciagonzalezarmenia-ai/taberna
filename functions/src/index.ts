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
 * Creacion inicial de la taberna del usuario.
 * Regla: el creador debe quedar como owner (los escriben los rules de Firestore).
 */
export const createTaberna = functions.onCall(
  { region: "us-central1", memory: RUNTIME.memory, timeoutSeconds: RUNTIME.timeoutSeconds },
  async (request): Promise<{ tabernaId: string }> => {
    const uid = requesterUid(request);
    if (!uid) {
      throw new functions.HttpsError("unauthenticated", "Debes iniciar sesion.");
    }

    const name = request.data?.name as string | undefined;
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      throw new functions.HttpsError("invalid-argument", "name requerido (min. 2 caracteres).");
    }

    const ref = db.collection("tabernas").doc();
    await ref.set({
      ownerId: uid,
      name: name.trim(),
      memberIds: { [uid]: true },
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { tabernaId: ref.id };
  }
);
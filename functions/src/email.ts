import { Resend } from "resend";

export type EmailKind = "verification" | "marketing" | "agent_notification";

export type SendEmailInput = {
  to: string;
  kind: EmailKind;
  subject: string;
  html: string;
};

const required = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const resend = new Resend(required("RESEND_API_KEY"));

/**
 * Envia un email a traves de Resend.
 * Origen siempre desde el dominio propio de marca (SPF/DKIM/DMARC).
 */
export async function sendEmail({ to, kind, subject, html }: SendEmailInput): Promise<void> {
  await resend.emails.send({
    from: `Taberna <no-reply@${required("MAIL_FROM_DOMAIN")}>`,
    to: [to],
    subject,
    html,
  });
}

/**
 * Plantilla comun (footer con datos de marca y baja).
 * Por politica, todo email indica emisor real y da via de contacto.
 */
export function buildLayout(innerHtml: string): string {
  const brand = process.env["BRAND_NAME"] ?? "Taberna";
  return `
  <!doctype html>
  <html>
    <body style="margin:0;padding:0;background:#0b0d10;font-family:sans-serif;">
      <div style="max-width:520px;margin:0 auto;padding:32px;color:#f4f6f8;">
        ${innerHtml}
        <div style="margin-top:32px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.1);color:#9aa3ad;font-size:13px;">
          <p>${brand}</p>
          <p>Recibiste este correo por una accion en tu cuenta.</p>
        </div>
      </div>
    </body>
  </html>`;
}
# TABERNA — Politica de Seguridad

> Principio honesto: **ningun sistema es "imposible de saltar"**. Lo que
> construimos es *defensa en profundidad* maxima: multiples capas independientes
> de modo que vulnerar una no comprometa el resto. Este documento es parte
> integral del producto, no un accesorio.

## 1. Postura por defecto: DENY

- Toda regla de Firebase **deniega por defecto**. Solo se permite lo explícito.
- Ningun cliente accede directamente a datos de otro usuario. Verificacion de
  `request.auth` + `uid` en cada regla.
- El cliente **nunca** contiene secretos. Las credenciales viven solo en el
  backend (Cloud Functions / entorno del servidor).

## 2. Autenticacion (Auth)

- Login con Google mediante Firebase Auth (OAuth 2.0).
- **Multi-factor** (2FA) para cuentas que gestionan datos sensibles.
- Verificacion de email en el alta (no confiar en un email no comprobado).
- Revocacion/sesiones: control de tokens y cierre de sesion forzado.

## 3. Antiabuso (App Check)

> **ESTADO ACTUAL: PENDIENTE.** Se anulo reCAPTCHA/App Check durante el
> desarrollo por friccion de configuracion. Reactivar antes de produccion:
> crear la site key de reCAPTCHA Enterprise, ponerla en
> `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (apps/web/.env.local) y activar
> "Enforce all apps" en la consola. Hasta entonces:
> - No abrir reglas de Firestore para compensar (mantener deny por defecto).
> - Considerar rate limiting en Cloud Functions como mitigacion temporal.

Objetivo (cuando se reactive):
- **Firebase App Check**: verifica que el cliente es nuestra app real
  (certificacion / Play Integrity / reCAPTCHA) antes de permitir llamadas.
- Rate limiting por usuario e IP en Cloud Functions.
- Captcha en formularios publicos (registro, contact, verificacion).
- Limites de cuota de email para evitar ser usado como relay de spam.

## 4. Datos en reposo y en transito

- TLS 1.2+ en todo (transito).
- Cifrado en reposo por defecto (Firestore/Storage/Cloud SQL lo hacen automatico).
- No almacenar secretos, tokens de acceso a terceros ni contenido de agentes en
  texto plano innecesario. Cifrar con KMS gestionado (Cloud KMS) lo sensible.
- Minimizacion: solo guardar los datos necesarios (ver PRIVACY.md).

## 5. Backend privado

- Toda logica de negocio sensible corre en Cloud Functions / backend.
- Validar y sanear toda entrada (nunca confiar en el cliente).
- No ejecutar codigo de usuario en el servidor (oscila el riesgo de inyeccion).
- Llamadas salientes a APIs de IA con credenciales del servidor, nunca del
  cliente.

## 6. Manejo de incidentes

- Logging estructurado SIN datos PII (emails, nombres, IP son PII).
- Alertas ante anomalias (picos de requests, tasas de error).
- Procedimiento de revocacion de credenciales y respuesta a brechas.

## 7. Checklist por despliegue

- [ ] App Check habilitado y aplicado a todos los endpoints.
- [ ] Security Rules: deny por defecto, uid-owned, probadas.
- [ ] Sin secretos en el repositorio ni en variables de cliente.
- [ ] Rate limits y cuotas configurados.
- [ ] Logs sin PII.
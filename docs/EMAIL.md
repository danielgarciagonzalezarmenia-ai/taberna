# TABERNA — Capa de Email

> **ESTADO ACTUAL: PAUSADA/SIN IMPLEMENTAR (decidido 2026-09).**
> Se elimino la integracion de email (Gmail API y Resend) del codebase.
> Sin dominio propio y sin gasto, no hay envio confiable ni marketing.
> Este documento queda como referencia para cuando se retome.

## Para retomar (cuando haya dominio + presupuesto)

- **Opcion recomendada:** Resend (gratis 3000/mes) + dominio propio con SPF/DKIM/DMARC.
  Correcto para transaccional (OTP, notificaciones) Y marketing.
- **Opcion transitoria (NO para marketing):** Gmail API vía app de Google con OAuth.
  Limite ~500 destinatarios/dia; token en servidor con refresh + endpoint de auth.

## Requisitos para no caer en spam (CRITICO al retomar)

- Dominio propio verificado en Resend (SPF, DKIM, DMARC en el DNS).
- NO usar gmail.com personal para marketing (viola ToS, te frenan la cuenta).
- Opt-in separado para marketing + baja en 1 clic (ver PRIVACY.md).
- Rate limits por usuario y manejo de bounces/quejas.

## Tipos de email planeados

| Tipo | Cuando | Regla anti-spam |
|------|--------|-----------------|
| Verificacion (OTP) | alta / 2FA | expira en minutos, un solo uso |
| Notificacion agente | tarea termina / necesita aprobacion | transaccional, derecho a baja |
| Marketing | ofertas / novedades | SOLO con opt-in explicito, baja en 1 clic |

## Pendiente al retomar

- [ ] Comprar dominio (~$10/año) o usar Resend de prueba (solo dev).
- [ ] Crear cuenta Resend, verificar dominio (SPF/DKIM/DMARC).
- [ ] Guardar API key en variables del backend (nunca en el repo).
- [ ] Reescribir la capa de email (sendEmail + plantillas).
- [ ] Rate limits y manejo de bounces.
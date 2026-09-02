# TABERNA — Capa de Email (Gmail/Workspace)

> Metas: codigos de verificacion (OTP), notificaciones transaccionales (agentes
> que terminan/necesitan accion) y marketing para registrados. **Sin este
> documento nos bloquean como spam** y "fallamos" en produccion.

## 1. Proveedor

- Opcion A (recomendada): **Google Workspace** + API Gmail para envio desde el
  dominio propio (`hola@taberna.app`). Mejor reputacion que gmail.com libre.
- Opcion B: servicio transaccional/marketing (SendGrid/Resend) si necesitamos
  volumen alto de marketing separado.
- Decision: separar **transaccional** (SIEMPRE de dominio propio) de
  **marketing** (con proceso de opt-in y baja).

## 2. Tipos de email y reglas

| Tipo | Cuando | Regla anti-spam |
|------|--------|-----------------|
| Verificacion (OTP) | alta / 2FA | expira en minutos, un solo uso |
| Notificacion agente | tarea termina / necesita aprobacion | transaccional, derecho a baja |
| Marketing | ofertas / novedades | SOLO con opt-in explicito, baja en 1 clic |

## 3. Autenticacion de dominio (imprescindible)

- Configurar **SPF**, **DKIM** y **DMARC** de `taberna.app` en el DNS.
- Falta de SPF/DKIM = emails van a spam o se rechazan. Esto ES el paso que
  "hace fallar" si se salta.

## 4. Limites y reputacion

- Empezar con volumen bajo y subir gradualmente (amplificacion de calentamiento).
- Rate limit por usuario (evitar enviar docenas en minutos).
- Procesamiento de **bounces/quejas** (complaints) en vez de ignorarlos.
- No importar listas compradas; ALTA CONSENTIDO.

## 5. Plantillas (estructura)

- Verificacion: 1 texto corto + enlace/boton + codigo + expiracion.
- Notificacion agente: asunto claro ("tu agente X termino"), resumen + accion.
- Marketing: disenado (HTML), footer con datos de contacto + baja legible.

## 6. Pendientes de implementacion (FASE 1.5)

- [ ] Crear dominio + DNS (SPF/DKIM/DMARC).
- [ ] Servicio de envio configurado y probado (no a spam).
- [ ] Plantillas y prueba en varios clientes (Gmail, Outlook, moviles).
- [ ] Rate limits y manejo de bounces.
- [ ] Logs de envio sin PII.
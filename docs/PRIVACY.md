# TABERNA — Privacidad y Cumplimiento Legal

> Documento vivo. ANTES de lanzar, una persona con conocimiento legal (o un
> servicio de compliance) debe revisar/adaptar estos textos. Aqui queda la
> base estructural para no traspapelarlo.

## 1. Marco legal aplicable (base)

- **RGPD** (UE) y equivalente local/EUA si hay usuarios de otras regiones:
  reconocimiento de que operamos internacionalmente por app web.
- Leyes de consumo, comercio electronico y autoria/IA segun donde se lance.

## 2. Piezas legales necesarias

- **Politica de Privacidad**: qu� se recoge, por que, base legal del
  tratamiento, derechos (acceso, rectificacion, borrado, portabilidad),
  plazo de retencion, DPO/contacto.
- **Terminos de Servicio (ToS)**: uso, limites, propiedad de datos del
  usuario, responsabilidad del resultado de los agentes, exclusiones.
- **Politica de Cookies**: si usamos cookies/metrics, consentimiento.
- **Aviso de registro/alta de email**: base de consentimiento para marketing
  (no asumir: el usuario debe opt-in separado a comunicaciones comerciales).
- **DPA (Data Processing Agreement)**: con Firebase/Google y proveedores de IA.

## 3. Minimizacion y retencion de datos

- Guardar SOLO lo necesario. Definir TTLs:
  - OTP / codigos de verificacion: minutos (expirar).
  - Datos de cuenta / agentes: mientras la cuenta este activa.
  - Emails de marketing: mientras el usuario no se dé de baja (baja inmediata).
- Registros de actividad de agentes: retencion configurable, borrado a
  solicitud y tras baja de cuenta.

## 4. Consentimiento correcto (clave para "no fallar" legalmente)

- **Opt-in separado** para marketing (casillas desmarcadas, no pre-marcadas).
- Baja en un clic en cada email (requisito anti-spam) + enlace en el footer.
- Eleccion explicita de recibir notificaciones de agentes (transaccionales:
  requieren consentimiento bien explicado).

## 5. Datos de terceros / proveedores de IA

- Revelar en privacidad que se usan proveedores LLM y con que fines.
- No mandar datos sensibles del usuario a modelos salvo con consentimiento.
- Asegurar that los proveedores no entrenan con los datos del cliente.

## 6. Derechos del usuario (RGPD)

- Acceso: exportar datos (JSON).
- Borrado: "borrame todo" elimina de verdad (no solo marcar).
- Portabilidad via Firestore export.

## 7. Seguridad de datos personales

- Referenciar SECURITY.md: cifrado, minimizacion, acceso restringido.
- Incidentes: notificacion a usuarios/autoridades dentro de plazos si aplica.

## 8. Checklist pre-lanzamiento

- [ ] Politica de Privacidad y ToS visibles y aprobadas legalmente.
- [ ] Consentimiento de marketing en form establecido (opt-in).
- [ ] Baja de suscripcion en un clic.
- [ ] Retencion/proceso de borrado de datos implementado y testeado.
- [ ] DPA firmado con Firebase y proveedores de IA.
- [ ] Mecanismo de contacto/DPO publico.
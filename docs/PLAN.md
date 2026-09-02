# TABERNA — Plan Maestro (Roadmap de fundaciones)

> Nombre elegido: **Taberna**. Metafora de marca: cada agente IA es un *tabernero*:
> un artesano especializado en su oficio. El usuario es el **propietario** de la
> taberna que contrata a su equipo de especialistas IA y ve trabajar a su
> "clientela" (personitas) en vivo.

## Principio rector

**No saltar pasos.** Cada fase termina con un punto de control verificable y una
deuda técnica mínima. Si algo no está probado, no avanza a la siguiente fase.

---

## FASE 0 — Fundaciones (NO se codea todavía)

Objetivo: definir identidad, arquitectura, riesgo legal y de seguridad antes de
escribir código.

- [ ] 0.1 Verificar disponibilidad de marca/dominio/redes (`taberna`).
- [ ] 0.2 Decidir stack final (ver `STACK.md`).
- [ ] 0.3 Arquitectura de datos y de seguridad (ver `SECURITY.md`).
- [ ] 0.4 Política de privacidad + términos legales (ver `PRIVACY.md`).
- [ ] 0.5 Plan de costos/FaaS + límites de cuota de email.

## FASE 1 — Esqueleto técnico (Firebase + Email)

Objetivo: infraestructura auth, datos, antiabuso y comunicación en regla.

- [ ] 1.1 Crear proyecto Firebase, activar **Auth** (Google) y **App Check**.
- [ ] 1.2 Configurar **Security Rules** de Firestore/Storage (deny por defecto).
- [ ] 1.3 Set up **Firestore** (colecciones y índices).
- [ ] 1.4 Set up **Cloud Functions** (backend privado, solo vía SDK).
- [ ] 1.5 Capa de **email**: proveedor (Gmail/Workspace o servicio SMTP),
      plantillas (verificación, marketing, notificación de agentes) y límites
      de envío anti-spam.
- [ ] 1.6 Integración continua inicial (lint, typecheck, build) para que nada
      se rompa en silencio.

## FASE 2 — Diseño de marca (no genérico)

Objetivo: sistema de diseño tipo **liquid glass** a lo Apple, diferenciado.

- [ ] 2.1 Design tokens: color, tipografia, spacing, radios, sombras, blur.
- [ ] 2.2 Botones con **radios de bordes redondeados-parciales** (no 50%).
- [ ] 2.3 Glassmorphism (backdrop-filter, superficies translúcidas).
- [ ] 2.4 Layout de la "oficina" con personitas-agente y estados visuales.
- [ ] 2.5 Documentación de componentes (storybook o galería).

## FASE 3 — Producto central (MVP)

- [ ] 3.1 Onboarding: login con Google, crear la primera "taberna".
- [ ] 3.2 Alta de agentes: rol, nombre, avatar, instrucciones, herramientas.
- [ ] 3.3 Oficina visual: cada agente con estado `idle | trabajando | termino`.
- [ ] 3.4 Orquestador: cola de tareas por agente (no saturarlos).
- [ ] 3.5 Log visual de cada tarea + resultado legible.
- [ ] 3.6 Notificaciones por email cuando un agente termina o necesita acción.

## FASE 4 — Endurecimiento y producción

- [ ] 4.1 Pruebas de seguridad (reglas Firestore, App Check, rate limiting).
- [ ] 4.2 Monitoreo, alertas, logging estructurado (sin datos PII en logs).
- [ ] 4.3 Plan de monetización (Gratis / Pro / Empresa).
- [ ] 4.4 Lanzamiento controlado (alpha -> beta -> producción).
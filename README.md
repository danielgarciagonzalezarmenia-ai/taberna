# TABERNA

**Tu taberna de especialistas IA.** Crea agentes (tus *taberneros*), asignalos
a una oficina virtual y mira en vivo a cada uno cumplir su rol: investigar,
escribir, revisar correos, ejecutar tareas. Un agente por oficina = sin
saturacion, con log visual de cada trabajo completado.

Producto: utilidad real (multiagentes especializados) + confianza por
visibilidad + experien€ia entretenida (personitas trabajando).

## Docs de fundacion

- [Plan maestro](docs/PLAN.md) — fases y checklist sin pasos salteados.
- [Seguridad](docs/SECURITY.md) — defensa en profundidad (App Check, reglas deny, cifrado).
- [Privacidad / legal](docs/PRIVACY.md) — RGPD, consentimiento, retencion.
- [Stack](docs/STACK.md) — tecnologias y estructura de monorepo.
- [Design system](docs/DESIGN.md) — liquid glass, botones de radios parciales.
- [Email](docs/EMAIL.md) — verificacion, marketing, notificaciones anti-spam.

## Estado

- Fase 0 (fundaciones) ✓
- Fase 1 (esqueleto): monorepo, Firebase SDK + Google Sign-In + functions + rules ✓
- **Pausado**: email (sin dominio/gasto; ver docs/EMAIL.md).
- **Pendiente**: App Check (anulado temporalmente), deploy a produccion,
  la vista de la oficina con agentes (Fase 3).

La web corre en local (`npm run dev`) lista para probar login.

## Comandos (cuando exista codigo)

- `npm run lint` · `npm run typecheck` · `npm run build`
# TABERNA — Stack y Arquitectura de Repositorio

## Stack propuesto

- **Frontend**: React + Next.js (App Router) + TypeScript.
- **Estilado**: CSS Modules o Tailwind + design tokens (ver DESIGN.md).
- **Estado/UI oficina**: componente reactivo que representa `idle|trabajando|termino`.
- **Backend**: Firebase (Auth, App Check, Firestore, Storage, Cloud Functions).
- **Agentes**: orquestacion multiagente (LangGraph/CrewAI planteado mas adelante);
  el frontend solo muestra estado. Backend ejecuta.
- **Email**: proveedor SMTP/API (Google Workspace / Raya / SendGrid) con
  plantillas + limites anti-spam (ver EMAIL.md).

## Regla de secretos

- Variables de entorno en el servidor (Cloud Functions / .env no commiteado).
- `.env.local` y claves en `.gitignore`. Nunca en el repo.

## Estructura de monorepo

```
MARK01/
  docs/          # PLAN, SECURITY, PRIVACY, DESIGN, EMAIL, STACK
  apps/
    web/         # Frontend Next.js
  functions/
    src/         # Cloud Functions (orquestacion, email, auth)
  functions/src/services/
  shared/
    types/       # Tipos compartidos front/back
    contracts/   # Contractos (DTOs) entre cliente y servidor
```

## Punto de control

- Verificable por despliegue: `npm run lint`, `npm run typecheck`, `npm run build`
  pasan en CI antes de cualquier merge.
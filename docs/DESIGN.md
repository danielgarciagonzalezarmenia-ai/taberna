# TABERNA — Design System (liquid glass, no generico)

> Direccion: superficies translucidas tipo *liquid glass* a lo Apple, con
> variantes nuestras de marca. Botones con radios de borde REDONDEADOS-PARCIALES
> (no circulares al 50%). Predominio de seguridad visual = interfaces calmadas
> y precisas.

## 1. Radios de boton (firma de marca)

- Radio parcial: `border-radius: 8px` ~ `14px` segun tamano (nunca `999px`/50%).
- Botones grandes a 14px, medianos a 10px, pequenos a 8px.
- Variante "pill" SOLO para estados/tags tiny, nunca para CTAs primarios.

## 2. Glassmorphism

- `backdrop-filter: blur(...)` + `background: rgba(variable)` + borde 1px
  translucido (`rgba(255,255,255,0.08)` para dark).
- Sombra difusa alta y suave: `box-shadow` multicapa con poca opacidad.
- Superficies sobre fondos degradados sutiles, no gris planos.

## 3. Design tokens (CSS variables)

```css
:root {
  /* Espacio */
  --space-1: 4px; --space-2: 8px; --space-3: 12px;
  --space-4: 16px; --space-6: 24px; --space-8: 32px; --space-12: 48px;

  /* Radios */
  --radius-xs: 6px; --radius-sm: 8px; --radius-md: 12px;
  --radius-lg: 16px; --radius-xl: 20px;  /* nunca 50% */
  --radius-pill: 999px; /* SOLO tags tiny */

  /* Color (dark-mode base) */
  --bg-base: #0b0d10;
  --bg-elev: rgba(255,255,255,0.04);
  --surface-glass: rgba(255,255,255,0.06);
  --border-glass: rgba(255,255,255,0.10);
  --text-primary: #f4f6f8;
  --text-muted: #9aa3ad;
  --accent: #4f8cff;
  --accent-soft: rgba(79,140,255,0.14);

  /* Tipografia */
  --font-display: "SF Pro Display", "Inter", system-ui, sans-serif;
  --font-body: "SF Pro Text", "Inter", system-ui, sans-serif;
  --text-display: 56px; --text-h1: 40px; --text-h2: 28px;
  --text-body: 16px; --text-caption: 13px;
  --leading-tight: 1.05; --leading-body: 1.55;

  /* Sombra glass */
  --shadow-card:
    0 1px 0 rgba(255,255,255,0.06) inset,
    0 8px 24px rgba(0,0,0,0.35);
  --shadow-float:
    0 1px 0 rgba(255,255,255,0.08) inset,
    0 20px 60px rgba(0,0,0,0.5);

  /* Motion */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 120ms; --dur-base: 240ms; --dur-slow: 500ms;
}
```

## 4. Reglas de estilo (no-genérico)

- **Tipografia amplia**: titulos muy contrastados vs cuerpo; lineas largas.
- **Gradiente sutil** en fondos de seccion, no color plomo.
- **Microinteracciones** fluidas con `--ease-out`, transiciones no bruscas.
- **Grid asimetrico** en hero/sections (firma de marca, no siempre texto-izq).
- **Permitir fondo de imagen** de marca, no solo cajas.

## 5. Personitas-agente (ofiça)

- Avatar circular (estado) que cambia segun `idle|trabajando|termino`:
  - idle: reposo, baja luminosidad.
  - trabajando: animacion leve + anillo de progreso alrededor.
  - termino: marca de exito.
- No usar emojis de forma indiscriminada; avatares disenados.

## 6. Accesibilidad y rendimiento

- Contraste AA minimo en texto.
- Respetar `prefers-reduced-motion`.
- `backdrop-filter` costoso: usarlo con moderacion y `will-change` puntual;
  fallback a fondo casi opaco si no soporta.
# BASELINES

Registro de los baselines de página de `design/design-system.pen` (reglas en `DESIGN-RULES.md`, sección 1.2).

Cada fila es una ruta pública del sitio. Un baseline se dibuja **al tocar** la ruta (antes de diseñar su cambio), no todos de golpe.

**Estados**: `pendiente` (sin frame) · `dibujado` (frame al día con el commit indicado) · `desactualizado` (el código cambió después del commit indicado) · `n/a` (no lleva baseline).

**Móvil**: todas las rutas públicas llevan frame móvil (390 px) además de escritorio (1440 px).

---

## Rutas

| Frame | Archivo | Estado | Commit | Deuda |
|---|---|---|---|---|
| `PG/index` | `app/[locale]/page.tsx` | pendiente | — | Rediseño en curso en `CH-inicio: pantallas` (rama `feat/inicio`). El baseline del Inicio anterior no se dibujó: la página se reemplaza completa; al mergear, `CH-inicio/Landing` pasa a ser `PG/index`. |
| `PG/about` | `app/[locale]/about/page.tsx` | pendiente | — | — |
| `PG/contact` | `app/[locale]/contact/page.tsx` | pendiente | — | Dibujar estados del formulario: base, enviando, enviado, error. |
| `PG/careers` | `app/[locale]/careers/page.tsx` | pendiente | — | — |
| `PG/careers/[id]` | `app/[locale]/careers/[id]/page.tsx` | pendiente | — | — |
| `PG/posts` | `app/[locale]/posts/page.tsx` | pendiente | — | Dibujar estados: con resultados, búsqueda sin resultados. |
| `PG/posts/[slug]` | `app/[locale]/posts/[slug]/page.tsx` | pendiente | — | Hex sueltos (`bg-[#0000d3]`, `from-[#0000d3]/10`): migrar a `bg-primary` / `from-primary/10`. |
| `PG/privacidad` | `app/[locale]/privacidad/page.tsx` | pendiente | — | — |
| `PG/services` | `app/[locale]/services/page.tsx` | pendiente | — | Hex sueltos en `_components` de services (6 archivos, sin contar ilustraciones). |
| `PG/services/data-consulting` | `app/[locale]/services/data-consulting/page.tsx` | pendiente | — | — |
| `PG/services/data-health-check` | `app/[locale]/services/data-health-check/page.tsx` | pendiente | — | — |
| `PG/services/data-analytics-use-case` | `app/[locale]/services/data-analytics-use-case/page.tsx` | pendiente | — | — |
| `PG/services/digital-product` | `app/[locale]/services/digital-product/page.tsx` | pendiente | — | — |
| `PG/services/product-design-discovery` | `app/[locale]/services/product-design-discovery/page.tsx` | pendiente | — | — |
| `PG/services/application-development` | `app/[locale]/services/application-development/page.tsx` | pendiente | — | — |
| `PG/services/dashboards-analytics-interfaces` | `app/[locale]/services/dashboards-analytics-interfaces/page.tsx` | pendiente | — | — |
| `PG/services/data-engineering` | `app/[locale]/services/data-engineering/page.tsx` | pendiente | — | — |
| `PG/services/custom-ai-agents` | `app/[locale]/services/custom-ai-agents/page.tsx` | pendiente | — | — |
| `PG/services/ai-readiness-assessment` | `app/[locale]/services/ai-readiness-assessment/page.tsx` | pendiente | — | Hex sueltos en `_components`. |
| `PG/ruta-ia` | `app/ruta-ia/page.tsx` | pendiente | — | Fuera de `[locale]` (solo español). Hex y gradientes en línea en 5 archivos: migrar a `.text-gradient-cabana` / tokens. |

## Sin baseline

| Ruta | Motivo |
|---|---|
| `app/[locale]/_disabled-case-studies/*` | Desactivada (prefijo `_`). Dibujar solo si se reactiva. |
| `/api/og`, `/api/contact` | Endpoints, no páginas. |
| Nav, footer, menú móvil | Componentes del design system (`Components` → `Layout Blocks`), no rutas. |

## Deuda global

Afecta a todo el sitio. Se resuelve con un cambio propio, no al dibujar baselines.

- `h4` usa `--heading-sm-size` / `--heading-sm-line-height`, que no están definidos en `globals.css`.
- Footer usa `bg-gray-100` (sin token).
- El logo en el `.pen` es texto; falta la imagen del logo real.
- Componentes del código sin par en el `.pen`: `Accordion`, `Carousel`, `Drawer`, `Sheet`, `Select`, `Pagination`, `NavigationMenu`, `DropdownMenu`, `Stat`.

---

Último repaso del registro: commit `82016ec` (2026-10-24).

# BASELINES

Registro de los baselines de página de `design/design-system.pen` (reglas en `DESIGN-RULES.md`, sección 1.2).

Cada fila es una ruta pública del sitio. Un baseline se dibuja **al tocar** la ruta (antes de diseñar su cambio), no todos de golpe.

**Estados**: `pendiente` (sin frame) · `dibujado` (frame al día con el commit indicado) · `desactualizado` (el código cambió después del commit indicado) · `n/a` (no lleva baseline).

**Móvil**: todas las rutas públicas llevan frame móvil (390 px) además de escritorio (1440 px).

---

## Rutas

| Frame | Archivo | Estado | Commit | Deuda |
|---|---|---|---|---|
| `PG/index` | `app/[locale]/page.tsx` | dibujado | `0ff1f25` | Enlaces subrayados del hero y de las tarjetas de servicios hechos a mano: falta la variante `Button/link` en el DS (`.pen` y código). Diagonales decorativas con `clip-path` arbitrario en código. Logos de clientes en escala de grises (`grayscale`) en código, a color en el `.pen`. Títulos de `capabilities` y `cases` (`text-2xl`, `text-lg`) fuera de la escala global de headings. |
| `PG/about` | `app/[locale]/about/page.tsx` | pendiente | — | — |
| `PG/contact` | `app/[locale]/contact/page.tsx` | pendiente | — | Dibujar estados del formulario: base, enviando, enviado, error. |
| `PG/careers` | `app/[locale]/careers/page.tsx` | pendiente | — | — |
| `PG/careers/[id]` | `app/[locale]/careers/[id]/page.tsx` | pendiente | — | — |
| `PG/posts` | `app/[locale]/posts/page.tsx` | dibujado | `2dab7f6` | Estados dibujados: con resultados y sin resultados (escritorio y móvil). Títulos de posts existentes con tuteo/voseo (fuera de alcance del rediseño). |
| `PG/posts/[slug]` | `app/[locale]/posts/[slug]/page.tsx` | dibujado | `2dab7f6` | Dibujado con `infraestructura-que-no-esta-lista-para-ia` (artículo truncado) y sidebar/CTA de Ruta IA; la variante de AI First Move no tiene frame. `MdxLayout` mantiene tamaños propios de headings (h2 36, h3 30) fuera de la escala global. |
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
| `PG/ruta-ia` | `app/ruta-ia/page.tsx` | pendiente | — | Fuera de `[locale]` (solo español). Hex y gradientes en línea en 5 archivos: migrar a `.text-gradient-cabana` / tokens. Las pantallas de `CH-ruta-ia` no tienen el hero dividido ni las ilustraciones (hero, Promise, card destacado de Deliverables); referencia en el frame `Ilustraciones`. |
| `PG/ai-first-move` | `app/[locale]/ai-first-move/page.tsx` | pendiente | — | Las pantallas de `CH-ai-first-move` no tienen el hero dividido ni las ilustraciones (hero, Promise, card destacado de Deliverables); referencia en el frame `Ilustraciones`. |

## Sin baseline

| Ruta | Motivo |
|---|---|
| `app/[locale]/_disabled-case-studies/*` | Desactivada (prefijo `_`). Dibujar solo si se reactiva. |
| `/api/og`, `/api/contact` | Endpoints, no páginas. |
| Nav, footer, menú móvil | Componentes del design system (`Components` → `Layout Blocks`), no rutas. |

## Ilustraciones

Frame `Ilustraciones` del `.pen`: las ilustraciones del home, Ruta IA, AI First Move y las cuatro capacidades, con su uso. Las imágenes del `.pen` apuntan a `design/images/illustrations/` (copias de las de `public/`, incluido el hero del home); si se regenera una, se reemplazan ambas. Estilo y prompts: `design/illustration-style-doodle.yaml` y `design/illustrations/*.yaml`.

Las pantallas `CH-capacidades/*` (escritorio y móvil) ya tienen el hero dividido con la ilustración de cada capacidad (`components/capacidades/capability-hero.tsx`). En los frames móviles de Data Consulting, Digital Product y Custom AI Agents, el `Header` de `Services` aparece recortado; es previo a este cambio.

## Deuda global

Afecta a todo el sitio. Se resuelve con un cambio propio, no al dibujar baselines.

- `h4` usa `--heading-sm-size` / `--heading-sm-line-height`, que no están definidos en `globals.css`.
- Footer compacto (fondo `cabana-dark`): textos en `slate-300`/`slate-400` y divisor `white/10` sin token en el `.pen` (hex sueltos).
- El logo en el `.pen` es texto; falta la imagen del logo real.
- Componentes del código sin par en el `.pen`: `Accordion`, `Carousel`, `Drawer`, `Sheet`, `Pagination`, `NavigationMenu`, `DropdownMenu`, `Stat`.

---

Último repaso del registro: commit `82016ec` (2026-10-24).

# DESIGN-RULES

Reglas que el agente (y el equipo) deben respetar al diseñar y al implementar UI en el sitio web de Cabana Data (cabanadata.com). Cada regla es verificable.

Stack de referencia: Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + shadcn/ui (`default`, base `neutral`) + Radix + lucide + brijr/craft (`Section`, `Container`, `Article`, `Prose`) + next-intl (`es`, `en`).

Design system y pantallas: `design/design-system.pen` (archivo cifrado: se accede solo con el MCP `pencil`, nunca con Read ni Grep).

---

## 1. Fuente de verdad

- `design/design-system.pen` es el **único archivo de diseño**. Contiene el **design system** (tokens y componentes reutilizables), los **baselines de página** (cómo se ve hoy cada ruta en producción, sección 1.2) y las **pantallas de cada cambio** (lo propuesto, sección 1.1).
- El design system vive en dos frames de primer nivel: `Foundations` (colores, tipografía, gradientes) y `Components` (primitivos y bloques de layout, sección 4.1).
- Jerarquía: el brief o la tarea de ClickUp manda sobre el diseño (el `.pen`), y el diseño manda sobre el código.
- Si el código contradice el frame, se corrige el código o se corrige el frame (con su razón). Nunca se resuelve en silencio.
- El código existente (`app/globals.css`, `components/ui/*`) es la implementación vigente de los tokens y componentes. Si `.pen` y código difieren, aplica la sección 9.
- Este archivo es la **única fuente de las reglas de UI**. `CLAUDE.md` y los demás documentos lo referencian, no lo duplican.

### 1.1 Frames de un cambio

- Cada cambio de UI (página nueva, rediseño de sección, landing) tiene un contenedor de primer nivel `CH-<slug>: pantallas`, donde `<slug>` es un nombre corto en kebab-case (ej. `CH-ruta-ia: pantallas`). Si viene de una tarea de ClickUp, el slug la identifica en la descripción de la tarea.
- Cada pantalla es un frame con nombre `CH-<slug>/Pantalla (estado)`; el estado se omite para el estado base (ej. `CH-ruta-ia/Landing`, `CH-ruta-ia/Landing (formulario enviado)`).
- Cada pantalla tiene variante de escritorio (1440 px) y móvil (390 px). El frame sin sufijo es escritorio; el móvil agrega `móvil` en el paréntesis (ej. `CH-ruta-ia/Landing (móvil)`).
- Lo que se repite en varias páginas **sube al design system**: se convierte en componente reutilizable con nombre `Familia/Variante`, se agrega a la sección 4.1 y al código en el mismo cambio.
- Si el cambio toca una ruta existente, sus frames se crean **copiando** el `PG/...` de esa ruta y modificando la copia; nunca se dibujan desde cero ni se edita el baseline directamente.

### 1.2 Baselines de página

Un baseline es el dibujo de una ruta **tal como está hoy en producción** (rama `main`). Es permanente y se edita en el lugar.

**Nombres** (la clave es la ruta del código):

- Ruta: la carpeta de `page.tsx` bajo `app/[locale]/`, sin `[locale]` ni `page.tsx`, con segmentos dinámicos tal cual (`[slug]`). La raíz se llama `index`. Rutas fuera de `[locale]` (ej. `app/ruta-ia/`) usan su carpeta.
- Contenedor de primer nivel por sección (primer segmento): `Página: /<segmento>` (ej. `Página: /services`, `Página: /index`).
- Un frame por ruta: `PG/<ruta>` (ej. `PG/services/data-engineering`, `PG/posts/[slug]`).
- Estados y móvil con el mismo sufijo que la sección 1.1: `PG/contact (enviado)`, `PG/contact (enviado, móvil)`.
- Elementos sin ruta propia (menú móvil, modal, sheet): `PG/<ruta> · <Nombre>` (ej. `PG/index · Menú móvil`).
- Nav y footer no tienen baseline: son componentes del DS (sección 4).
- Se dibuja en español (`es`, idioma por defecto). La versión `en` no tiene frames propios salvo que el texto en inglés rompa el layout.

**Qué se dibuja**:

- Lo que existe, no lo que debería existir. Los problemas detectados (valores sueltos, componentes a mano) se anotan como deuda en `design/BASELINES.md`.
- Escritorio y móvil para todas las rutas públicas (es un sitio de marketing: el tráfico móvil importa).
- Con instancias del design system. Si el código usa algo que el DS no tiene, primero se agrega al DS.

**Ciclo de vida**:

1. **Baseline al tocar**: un cambio que modifica una ruta sin baseline dibuja primero el baseline (tal cual), y después sus frames `CH-<slug>/...` como copia modificada.
2. **Integración**: al mergear el PR a `main`, los `PG/...` de cada ruta tocada se actualizan con la versión final, las rutas nuevas reciben su baseline y el contenedor `CH-<slug>: pantallas` se elimina del `.pen` (queda en el historial de git).
3. `design/BASELINES.md` lleva el registro: ruta, estado del baseline, último commit sincronizado y deuda.

### 1.3 Un solo archivo `.pen`

Git no puede combinar dos versiones del `.pen`. Por eso:

- **Una sola persona o sesión edita el `.pen` a la vez.** Antes de editarlo: avisar al equipo, traer `main` al día y confirmar que no hay cambios del `.pen` sin mergear en otras ramas.
- **Los cambios del `.pen` se mergean pronto**, en un PR corto. El `.pen` no vive semanas en una rama.
- **Si hay conflicto**: nunca editar el archivo a mano. Se queda una versión completa (`git checkout --ours` o `--theirs`) y los cambios de la otra se rehacen en pen.dev.

---

## 2. Tokens (variables)

### 2.1 Nombres

Las variables del `.pen` usan los mismos nombres que los tokens de `app/globals.css`, sin prefijo `--`:

- Superficie: `background`, `foreground`, `card`, `card-foreground`
- Acción: `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `accent`, `accent-foreground`, `destructive`, `destructive-foreground`
- Neutros: `muted`, `muted-foreground`
- Contornos: `border`, `input`, `ring`
- Marca: `cabana-blue` (`#0000d3`), `cabana-green` (`#57ff8f`), `cabana-lime` (`#c6f590`), `cabana-dark` (`#0f172a`), `cabana-dark-2` (`#1e212b`), `cabana-navy` (`#16364d`), `cabana-light` (`#e0e6f5`), `cabana-slate` (`#f1f5f9`)
- Fondos de sección: `section-light` (`#f8f9ff`), `section-slate` (`#f8fcff`)
- Tipografía: `font-sans` (Reddit Sans)
- Radios: `radius-sm` (6), `radius-md` (8), `radius-lg` (10), `radius-xl` (12), `radius-full`
- Espaciado: `space-1` … `space-24` (4–96 px), `container-padding-x` (24), `section-padding-y` (96)

En código viven en `@theme` y `:root` / `.dark` de `app/globals.css` y se consumen con clases (`bg-primary`, `text-cabana-green`, `bg-section-dark`).

### 2.2 Temas

- El `.pen` define el eje `mode` (`light`, `dark`). Los tokens semánticos tienen valor claro y oscuro; los de marca son fijos.
- El sitio se publica en modo claro. El modo oscuro existe en código (`.dark`, `next-themes`) pero no es obligatorio diseñarlo salvo que el cambio lo pida.
- Las secciones oscuras (hero, CTA) **no son modo oscuro**: son fondos de marca (`cabana-dark`, `bg-section-dark`) dentro del modo claro.

### 2.3 Uso

- **Azul de marca único: `#0000d3`.** El valor `#0048ff` está retirado; no se reintroduce.
- Prohibido usar valores sueltos en diseño o código: hex, px o fuentes arbitrarias (`bg-[#1a1a1a]`, `text-[13px]`). Excepción: ilustraciones SVG de servicios, que usan los hex de marca literales.
- Colores semánticos: `primary` = acción principal y enlaces, `cabana-green` = acento y pretítulos, `destructive` = errores de formulario, `muted` = texto de apoyo.
- Gradiente de marca: `cabana-blue → cabana-green` (`.text-gradient-cabana`, `.icon-wrapper-gradient`); sobre fondo oscuro, `cabana-lime → cabana-green` (`.text-gradient-cabana-light`). Un gradiente destacado por sección, no más.
- Si falta un token, se agrega a ambos lados (`.pen` y `globals.css`) en el mismo cambio.
- Espaciado: escala de Tailwind (múltiplos de 4 px). Secciones con `section-padding-y` (96 px escritorio).
- Radios: `rounded-sm` en botones, `rounded-md` en inputs, `rounded-xl` en tarjetas y bloques CTA, `rounded-full` en badges e icon wrappers.
- Sombras: solo `shadow-xs` / `shadow-sm` / `shadow-md` / `shadow-lg` de `globals.css`.

---

## 3. Tipografía

- Fuente única: **Reddit Sans**, cargada con `next/font/google` en `app/[locale]/layout.tsx` como `--font-sans`. No se agregan otras fuentes.
- Escala:

  | Uso | `.pen` | Código |
  |---|---|---|
  | Heading XL (hero) | 72 / 72, 700 | `h1` global |
  | Heading LG (título de sección) | 36 / 40, 700 | `h2` global |
  | Heading MD (subtítulo, tarjeta) | 24 / 32, 600 | `h3` global |
  | Cuerpo destacado | 18 / 1.5 | `text-lg` |
  | Cuerpo | 16 / 1.5 | `text-base` |
  | Botones, labels, apoyo | 14 | `text-sm` |
  | Badges, pretítulos | 12, 600 | `text-xs font-semibold` |

- `h1`–`h4` traen estilo global en `globals.css`: no se re-estilizan por página salvo el tamaño móvil (`text-4xl md:text-7xl`).
- Pretítulos de sección: `Badge` variante `pretitle` (mayúsculas sobre `cabana-green`).
- Artículos del blog: `Prose` de craft (`@tailwindcss/typography`); no se estilizan párrafos a mano.

---

## 4. Componentes

### 4.1 Inventario del design system

Frame `Components` del `.pen`:

| Componente en `.pen` | Variantes | Código |
|---|---|---|
| `Button` | `Default`, `Secondary`, `Outline`, `Ghost`, `Destructive`, `Large` | `components/ui/button.tsx` |
| `Badge` | `Default`, `Secondary`, `Green`, `Pretitle`, `Outline` | `components/ui/badge.tsx` |
| `Input Field` | — (label + input) | `components/ui/input.tsx`, `label.tsx`, `form.tsx` |
| `Card` | — (icono, título, descripción) | `components/ui/card.tsx` |
| `Icon Wrapper` | `sm`, `md`, `lg`, `gradient` | utilidades `.icon-wrapper-*` en `globals.css` |
| `Nav` | — | `components/nav/*`, `menu.config.ts` |
| `Section Header` | — (pretítulo, título, subtítulo) | `_components` de cada página |
| `CTA Block` | — | `_components/cta-section.tsx` por página |
| `Footer` | — | `components/footer.tsx` |

### 4.2 Reglas

- Se diseña y se implementa con instancias del DS. No se dibujan botones, badges, inputs ni tarjetas a mano.
- Antes de crear un elemento, buscar en el DS y en `components/`. Si existe, se usa.
- Si falta un primitivo shadcn, se agrega con el CLI de shadcn y se refleja en el `.pen` en el mismo cambio.
- Variantes de código sin par en el `.pen`: `Button` → `link`, tamaños `sm`/`icon`. Antes de usarlas en una pantalla nueva, se agregan al `.pen`.
- Mapeo de tamaños de `Button`: `.pen` normal ≈ `default` (`h-10`); `Large` ≈ `lg` (`h-11`).
- Ubicación del código (ver `CLAUDE.md`): secciones de una página en `app/[locale]/<ruta>/_components/`; compartidos en `components/`; primitivos en `components/ui/`.
- Bloques que se repiten entre páginas (`Section Header`, `CTA Block`) se extraen a `components/` cuando aparecen en 3+ páginas.
- Layout con craft: `Section` + `Container` para cada bloque de página; `Prose` para contenido largo.
- Formularios: React Hook Form + Zod + `form.tsx`. Leads van a `/api/contact` (ClickUp).
- Iconos: `lucide-react`. 16 px por defecto; 24 px dentro de icon wrappers `md`.
- Animaciones: `framer-motion` / `components/animations`. Sutiles, respetando `prefers-reduced-motion`.
- Imágenes: `next/image`, formato WebP, con `alt` descriptivo.

---

## 5. Layout y responsive

- Todo con flex/grid y la escala de espaciado. Posición absoluta solo para decoración y overlays.
- Contenedor: utilidad `container` (`max-w-[1280px]` desde 1400 px, padding `container-padding-x`).
- Ritmo de página: alternar fondos de sección (`background` → `section-light` → `cabana-dark` …) para separar bloques; no usar divisores donde basta el cambio de fondo.
- Cada página funciona en móvil (390 px) y escritorio (1440 px). Breakpoints de Tailwind (`sm`, `md`, `lg`, `xl`); sin media queries propias.

---

## 6. Contenido e idiomas

- Sitio bilingüe: **español** (por defecto) e **inglés**. Todo texto de UI vive en `messages/es.json` (fuente de verdad) y `messages/en.json`; nada de texto quemado en componentes.
- Diseñar con textos reales del sitio o de `es.json`. Sin "Lorem ipsum".
- Verificar que el texto en inglés (suele ser más largo o más corto) no rompa el layout de títulos y botones.
- Cada página nueva tiene metadatos SEO y su imagen OG (`/api/og` o `opengraph-image`).
- CTAs con verbo de acción claro ("Agenda una llamada", "Contáctanos").

---

## 7. Accesibilidad mínima

- Contraste AA. Ojo: `cabana-green` sobre blanco no cumple para texto; úsalo como fondo (con texto oscuro) o sobre fondos oscuros.
- Áreas táctiles mínimas de 44 px en móvil (usar `Button` `lg` en móvil para CTAs principales).
- Foco visible en elementos interactivos (`focus-visible:ring-2 ring-ring`).
- No comunicar información solo con color.
- Botones de solo icono llevan `aria-label`.
- Menús y overlays usan Radix (`NavigationMenu`, `Sheet`, `DropdownMenu`); no se reimplementan.
- Una sola `h1` por página; jerarquía de headings sin saltos.

---

## 8. Del diseño al código

- No se pega HTML exportado del `.pen`. Se usa como referencia visual y se construye con componentes shadcn, craft y clases Tailwind.
- Mapeo: instancia del DS (`Familia/Variante`) → componente con la prop `variant`/`size` equivalente; frame `PG/<ruta>` → `app/[locale]/<ruta>/page.tsx`; secciones del frame → archivos en `_components/` (`hero-section.tsx`, `cta-section.tsx`).
- El `.pen` dibuja con hex y px; el código traduce a tokens y clases (`$primary` → `bg-primary`, 36 px → `h2`, `cornerRadius: 12` → `rounded-xl`).
- Ningún PR cambia UI de una página sin un frame que lo respalde (`CH-<slug>/...` o `PG/...`).

---

## 9. Diferencias conocidas `.pen` ↔ código

Se resuelven en un cambio explícito, nunca en silencio.

| Tema | `.pen` | Código | Criterio |
|---|---|---|---|
| Formato de color | hex | `hsl()` en `:root` / `.dark` | Mismo valor. El código manda para el valor final. |
| Fondo del footer | `#F3F4F6` | `bg-gray-100` | Proponer token `section-gray` o usar `section-slate`. |
| Logo | texto "Cabana Data" | SVG en `public/` | Reemplazar por imagen del logo en el `.pen`. |
| Tokens `heading-sm-*` | no existen | referenciados por `h4` sin definir | Definir en `globals.css` y en el `.pen`. |
| Componentes sin par | — | `Accordion`, `Carousel`, `Drawer`, `Sheet`, `Select`, `Pagination`, `NavigationMenu`, `DropdownMenu`, `Stat` | Agregar al `.pen` antes de usarlos en una pantalla nueva. |
| Modo oscuro | `mode: dark` con valores | `.dark` | No obligatorio; verificar solo si el cambio lo activa. |

---

## Verificación al implementar

Una tarea de UI está hecha cuando:

- [ ] Se contrastó contra su frame (`CH-<slug>/...` o `PG/...`) en escritorio y móvil.
- [ ] Usa solo componentes y variantes del DS (o los agregó al `.pen` y al código en el mismo cambio).
- [ ] No hay valores hardcodeados fuera de los tokens; el azul es `#0000d3` vía `primary` / `cabana-blue`.
- [ ] Solo Reddit Sans; headings con los estilos globales.
- [ ] Textos en `es.json` y `en.json`; ambos idiomas se ven bien.
- [ ] Funciona en móvil y escritorio.
- [ ] Cumple los mínimos de accesibilidad de la sección 7.
- [ ] SEO: metadatos e imagen OG presentes en páginas nuevas.
- [ ] Lo repetido entre páginas es componente del DS, no copia.
- [ ] Después del merge: `PG/...` actualizados, contenedor `CH-<slug>: pantallas` eliminado y `design/BASELINES.md` al día.

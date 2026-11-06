---
name: cabana-illustration
description: Crea una ilustración doodle de Cabana Data (estilo cabana-ink-doodle) de punta a punta. Propone conceptos a partir del copy de la página, escribe el YAML y el prompt (light o dark), procesa la imagen que el usuario genera (white-to-alpha o fondo navy), la integra en la sección elegida y actualiza el .pen. Usar cuando digan "/cabana-illustration", "hagamos una ilustración para...", "necesito una imagen para la sección X", "genera el prompt de una ilustración" o "integra esta ilustración".
argument-hint: "[ruta o sección]"
---

# /cabana-illustration

Una ilustración por corrida: concepto → prompt → imagen del usuario → procesado → (opcional) página + `.pen`.

Antes de empezar, lee:
- `design/illustration-style-doodle.yaml`: el estilo, las paletas `light`/`dark` y las reglas del verde.
- Un ejemplo de escena del mismo tema en `design/illustrations/*.yaml` (light: `ruta-ia-roadmap.yaml`; dark: `ruta-ia-hero-dark.yaml`).
- `design/DESIGN-RULES.md` si la ilustración va a una página.

Pregunta una cosa a la vez con `AskUserQuestion` y no avances hasta tener la respuesta.

## 1 · Contexto y concepto

1. Pregunta para qué es: página o ruta (`/ruta-ia`, home, una capacidad…), sección y qué debe comunicar. Si el usuario ya trae una idea clara, salta al paso 2.
2. Lee el copy real de esa sección en `messages/es.json` (y su componente) para que el concepto cuente lo mismo que el texto. Respeta `docs/content/GUIA-TONO.md`: nada que prometa más de lo que dice el copy (p. ej. la IA propone, su equipo decide; un caso de uso, no varios).
3. Propón 2 o 3 conceptos breves, cada uno con: escena en una frase, qué elemento lleva el verde y por qué cuenta el mensaje. Marca tu recomendación. Reglas:
   - Escenas simples, figuras de palitos, sin texto ni números, sin robots humanoides.
   - Verde `#57ff8f` solo en el elemento que resuelve el problema (máx. 10–15 % del área).
   - No repetir la escena de otra ilustración de la misma página (revisa el frame `Ilustraciones` del `.pen` o `design/illustrations/`).

## 2 · Tema y formato

Pregunta `light` o `dark` y sugiere según dónde va:

| Contenedor | Tema | Formato | Fondo de generación |
|---|---|---|---|
| Sección clara, card `bg-cabana-light`, card blanco | `light` | 16:9 o 3:2 | blanco puro `#ffffff` (luego white-to-alpha) |
| Hero o sección `bg-section-dark` / `bg-cabana-dark` | `dark` | 1:1 (o 4:5 si el hueco es vertical) | navy `#0f172a`, opaco |
| Card `bg-cabana-blue` | partir de la versión `light` y convertir la tinta a blanco (ver paso 4) | igual que la light | — |

Mira el componente destino para elegir el formato: si usa `object-cover`, deja zonas seguras (contenido importante al centro); si se puede usar `contain`, el fondo igual al contenedor oculta el borde.

## 3 · YAML y prompt

1. Escribe `design/illustrations/<slug>.yaml` siguiendo los ejemplos: `style_ref`, `theme`, `background`, `aspect_ratio`, `export.path`, `objects` (con `accent` y `accent_target`), `decor`, `prompt`, `negative_prompt` y notas de post-proceso.
2. Prompt en inglés, completo y listo para copiar, con:
   - Light: `Isolated on a pure flat white #ffffff background, all object interiors the same pure white, black #111111 ink`.
   - Dark: `flat solid dark navy #0f172a background`, tinta `#f1f5f9`, tramas `#cbd5e1`, decoración `#94a3b8`, `All object interiors are the same dark navy #0f172a as the background`.
   - Siempre: `No text, no letters, no words, no labels, no numbers anywhere`, sin degradados, sin sombras, sin 3D realista.
3. `negative_prompt`: incluye `text, letters, numbers, checkerboard, transparency grid, beige, cream, paper texture, gradient, photorealistic, 3d render, humanoid robot, multiple accent colors`. En dark agrega `white background, glow`.
4. Entrega al usuario el prompt y el negative prompt en bloques de código, y explica en una línea dónde va el verde.

Luego pide la ruta de la imagen generada. Para `dark`, pide el archivo **original** (`.jpeg`/`.png`), nunca una versión `-transparent`.

## 4 · Procesar la imagen

Trabaja en el scratchpad para las vistas previas; el resultado final va a `public/`.

**Light** (fondo blanco):

```bash
uv run ./design/tools/white-to-alpha.py "<ruta>" "<scratchpad>/<slug>.png"
```

- Si queda tono crema o gris en interiores: repite con `--lo 55 --hi 130`.
- Si la imagen ya viene transparente, el script la aplana sobre blanco y recalcula; está bien.
- Verifica: 0 píxeles beige visibles (alpha > 20 y canal mínimo > 170) y una vista previa compuesta sobre `#e0e6f5`.
- Recorta el margen vacío (bbox de alpha > 20 + 40–60 px) y guarda como WebP (`quality=90`).

**Dark** (fondo navy): **no** uses white-to-alpha (borra la tinta clara).

```bash
uv run ./design/tools/match-navy.py "<ruta>" "public/<carpeta>/<nombre>.webp" --crop
```

Quita `--crop` si el formato debe quedar exacto (p. ej. un hueco 4:5 con `object-cover`).

**Sobre azul** (`bg-cabana-blue`): a partir de la versión light transparente, invierte solo los píxeles grises (saturación < 40) para que la tinta pase a blanco y el verde quede igual; si el card de al lado tiene otra proporción, rellena con transparente hasta igualarla.

Muestra la vista previa al usuario (Read de la imagen) antes de integrarla. Si el generador puso texto, letras en una brújula o un elemento equivocado, dilo y ofrece ajustar el prompt.

## 5 · Integrar en la página (opcional)

Pregunta si la quiere colocar y en qué sección. Si dice que no, termina aquí con la ruta del archivo.

1. Crea una rama desde `main` actualizado si estás en `main`.
2. Nombre de archivo **nuevo** cada vez que reemplaces una imagen (p. ej. `hero-<concepto>.webp`): `next/image` cachea por ruta y seguiría mostrando la anterior.
3. Usa `next/image` con `width`/`height` reales (o `fill` + `sizes`) y:
   - Ilustración sobre el mismo color del contenedor → `object-contain` (en `ServiceHero`, `image.fit: "contain"`).
   - Cards destacados: imagen arriba con `mb-auto`, `max-w-md`, centrada.
4. `alt`: descriptivo y en es/en (`messages/*.json`) cuando la imagen aporta información (heros, secciones). Decorativa (`alt=""`) cuando el título contiguo ya dice lo mismo. Los alt nuevos pasan por el agente `brand-guardian` antes del PR; aplica sus correcciones.
5. Si una imagen anterior queda sin uso, ofrece borrarla. Antes, busca referencias en el código y en el `.pen` (fills `type: "image"` con esa URL); si un baseline `PG/...` la usa, muévela a `design/images/baseline/` en lugar de borrarla.
6. Verifica en el navegador (preview `cabana-dev`) en 1440 px y 375 px: que se vea entera, sin borde visible contra el fondo y sin tapar texto. Corre `npx tsc --noEmit` y `pnpm seo:lint` si tocaste `messages/`.

## 6 · Actualizar el `.pen` (si se integró)

Solo con las herramientas `pencil` (nunca Read/Grep sobre el `.pen`). Una sola persona edita el `.pen` a la vez: confírmalo con el usuario.

1. Copia la imagen final a `design/images/illustrations/<nombre>.webp` y usa esa URL relativa (`./images/illustrations/...`) en los fills; las rutas a `../public/` dejan de cargar tras cambiar de rama.
2. Agrega una tarjeta al frame `Ilustraciones` (nombre, imagen sobre su fondo real y dónde se usa).
3. Refleja la sección:
   - Si la ruta tiene pantallas `CH-<slug>`, modifica esas.
   - Si solo tiene baseline `PG/<ruta>`, copia a un contenedor `CH-<slug>: pantallas` y modifica la copia (nunca el baseline directo). Al mergear: actualizar `PG/...` y borrar el `CH`.
   - Imagen como fill `{type: "image", url, mode: "contain"}` sobre un frame con el color de fondo de la sección. Si el contenedor de página tiene alto fijo y la página crece, agrándalo.
   - Verifica con `TakeScreenshot`; los avisos "partially clipped" en nodos que se ven bien suelen ser cálculos desfasados.
4. Actualiza `design/BASELINES.md` (frame `Ilustraciones` y pendientes al mergear).
5. Pide al usuario que guarde el `.pen` (Cmd+S) y confirma con `git status` que cambió en disco.

## 7 · Cierre

Resume: archivos creados, dónde se ve, qué falta (revisión de alt, guardar `.pen`, PR). No hagas commit ni abras PR salvo que el usuario lo pida; si lo pide, un PR por ilustración o por grupo coherente, y mergear pronto porque incluye el `.pen`.

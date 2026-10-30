---
name: seo-fix
description: Toma un ítem de docs/seo/BACKLOG.md (el indicado, o el primer "listo" con gate auto de mayor prioridad), lo implementa con el agente seo-implementer, lo revisa con brand-guardian si toca texto visible y abre un PR. Usar cuando digan "/seo-fix", "/seo-fix B-001", "arregla el siguiente ítem SEO" o "toma el backlog SEO". Un ítem por PR.
argument-hint: "[B-xxx]"
---

# /seo-fix [B-xxx]

Un ítem del backlog → un PR. Lee primero `docs/seo/STRATEGY.md` §5 (quién aprueba qué).

## 1 · Elegir el ítem

- Con argumento: ese ID.
- Sin argumento: el primer ítem de `docs/seo/BACKLOG.md` con estado `listo`, gate `auto` y la prioridad más alta (P0 antes que P1; dentro de la misma prioridad, el orden de la tabla).

Detente y explica por qué si el ítem:
- tiene gate `dirección` o está `bloqueado`: cita la decisión o el acceso que falta en `DECISIONS.md`;
- ya está `en PR`: da el enlace.

Di en una línea qué ítem vas a tomar antes de empezar.

## 2 · Rama

Parte de `main` actualizado: `git checkout main && git pull && git checkout -b seo/<id-en-minúsculas>-<slug-corto>` (por ejemplo `seo/b-002-robots-ai-crawlers`).

## 3 · Implementar

Lanza el agente `seo-implementer`:

> Implementa el ítem <ID> de `docs/seo/BACKLOG.md`. Rama actual: <rama>. Sigue tus instrucciones y devuélveme tu resumen.

Si devuelve "bloqueado", vuelve a `main`, borra la rama y explícalo.

## 4 · Revisar copy (solo gate `copy` o si cambió texto visible)

Hay texto visible si el diff toca `messages/`, `data/blog/` o strings en JSX/metadata. Revísalo con `git diff main -- messages data/blog app`.

1. Lanza `brand-guardian` con el diff y los textos que citó el implementador.
2. Si devuelve `CAMBIOS`, aplica las correcciones (tú o de nuevo `seo-implementer`) y vuelve a revisar. Máximo dos vueltas; si sigue en `CAMBIOS`, detente y muéstrale al usuario el desacuerdo.
3. Con `APROBADO`, **muestra al usuario los textos antes → después y pide su aprobación explícita.** Sin aprobación no hay PR (STRATEGY §5).

## 5 · Verificar tú mismo

No confíes solo en el resumen del agente:

```bash
node scripts/seo-lint.mjs
pnpm exec tsc --noEmit
pnpm build
```

Los tres deben pasar. Confirma que el hallazgo del ítem ya no aparece en la salida de seo-lint.

## 6 · PR

1. En `docs/seo/BACKLOG.md`, cambia el estado del ítem a `en PR`. El enlace se agrega después de crear el PR.
2. Commit con mensaje convencional que cite el ítem: `fix(seo): <qué> (B-xxx)`.
3. `git push -u origin <rama>` y `gh pr create` con:
   - título: el mismo del commit;
   - cuerpo: ítem y evidencia, qué cambió, salida de seo-lint antes → después, resultado de `pnpm build` y, si hubo copy, el veredicto de brand-guardian y la aprobación del usuario.
4. Pon el enlace del PR en la fila del backlog, haz commit y push.

## 7 · Responder

Ítem, enlace del PR, qué verificaste y qué queda para la persona que revisa. El ítem pasa a "Hechos" cuando la siguiente `/seo-weekly` confirma en vivo que el hallazgo desapareció.

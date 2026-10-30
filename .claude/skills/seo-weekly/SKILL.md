---
name: seo-weekly
description: Corrida semanal del ciclo SEO de cabanadata.com. Mide (seo-lint en vivo, Search Console, drift), escribe el reporte en docs/seo/runs/<fecha>/, agrega la fila de KPIs a docs/seo/metrics.csv y actualiza el backlog con el agente seo-strategist. Usar cuando digan "corrida semanal SEO", "/seo-weekly", "¿cómo va el SEO esta semana?" o desde la tarea programada. No cambia código del sitio.
---

# /seo-weekly

Mide, compara con la semana anterior y deja el backlog al día. **No toca código del sitio ni copy.** Los cambios los hace `/seo-fix`.

Lee primero `docs/seo/STRATEGY.md` (metas y definición de no-marca).

## 0 · Preparación

```bash
RUN=docs/seo/runs/$(date +%F)
mkdir -p "$RUN"
SEO=$(ls -d ~/.claude/plugins/cache/agricidaniel-claude-seo/claude-seo/*/ | tail -1)
PY=~/.cache/claude-seo/venv/bin/python
```

Si `$PY` no existe, crea el venv una sola vez:

```bash
python3 -m venv ~/.cache/claude-seo/venv && ~/.cache/claude-seo/venv/bin/pip install -q -r "$SEO/requirements.txt"
```

Si falla una fuente (credenciales, red, cuota), sigue con las demás y anota "sin datos: <motivo>" en el reporte. Nunca estimes un número que no mediste.

## 1 · Recolectar (en paralelo)

**Lint en vivo**: copy, rutas, hreflang, titles y redirects en producción.

```bash
node scripts/seo-lint.mjs --live https://cabanadata.com --json > "$RUN/lint.json"
```

**Search Console**: últimos 7 días completos y los 7 anteriores. GSC tiene ~2 días de retraso, así que termina la ventana hace 3 días.

```bash
END=$(date -v-3d +%F); START=$(date -v-9d +%F)
PEND=$(date -v-10d +%F); PSTART=$(date -v-16d +%F)
for dims in query page; do
  $PY "$SEO/scripts/gsc_query.py" --property sc-domain:cabanadata.com --start-date $START --end-date $END --dimensions $dims --json > "$RUN/gsc-$dims.json"
  $PY "$SEO/scripts/gsc_query.py" --property sc-domain:cabanadata.com --start-date $PSTART --end-date $PEND --dimensions $dims --json > "$RUN/gsc-$dims-prev.json"
done
```

**Drift** de las páginas objetivo contra su última baseline:

```bash
for p in / /en /ruta-ia /ai-first-move /en/ai-first-move /capacidades /en/capacidades; do
  $PY "$SEO/scripts/drift_compare.py" "https://cabanadata.com$p" --skip-cwv
done > "$RUN/drift.txt" 2>&1
```

## 2 · Interpretar

1. **No-marca:** separa las consultas que contienen `cabana`, `ruta ia`, `ruta ai` o `ai first move`. Suma clics e impresiones no-marca de las dos ventanas.
2. **Drift con contexto:** cruza cada hallazgo de drift con los merges desde la última corrida (`git log --merges --since=<fecha de la corrida anterior> --oneline` y los PR que citan `B-0xx`).
   - Si el cambio vino de un PR intencional, es **esperado**. Al final de la corrida, captura una baseline nueva de esa URL: `$PY "$SEO/scripts/drift_baseline.py" <url> --skip-cwv`.
   - Si no hay PR que lo explique, es una **regresión**: va al reporte y al backlog como P0.
3. **Lint:** compara `summary` y los hallazgos con el `lint.json` de la corrida anterior: nuevos, resueltos y persistentes. Cuenta las páginas del sitemap con hreflang (`pages[].hreflang`) y los redirects `applied`.
4. **Oportunidades GSC:** consultas no-marca con posición 4–20 e impresiones crecientes, y páginas con impresiones pero CTR 0. Cruza cada una con la página objetivo de STRATEGY §3; si la consulta cae en la página equivocada, anótalo como canibalización.

## 3 · Escribir

**`$RUN/report.md`**, en este orden y en español:

1. Una línea de estado: etapa actual y si va mejor, igual o peor que la semana anterior.
2. Tabla de KPIs (columnas de `metrics.csv`) con el valor anterior, el actual y la meta.
3. Regresiones (drift sin PR, errores nuevos de lint, páginas que dejaron de responder 200).
4. Lo que mejoró y qué PR lo explica.
5. Oportunidades de GSC.
6. Fuentes sin datos y por qué.

**Una fila en `docs/seo/metrics.csv`** con las mismas columnas del encabezado. Deja vacío lo que no se midió.

## 4 · Backlog

Lanza el agente `seo-strategist` con la ruta del reporte:

> Corrida semanal en `docs/seo/runs/<fecha>/`. Lee `report.md` y los JSON de esa carpeta, actualiza `docs/seo/BACKLOG.md` y `docs/seo/DECISIONS.md` según tus instrucciones y devuélveme tu resumen.

## 5 · Cerrar

- Commit en una rama `seo/run-<fecha>` con `docs/seo/runs/<fecha>/`, `metrics.csv`, `BACKLOG.md` y `DECISIONS.md`, y abre un PR titulado `docs(seo): corrida semanal <fecha>`. El PR solo tiene documentación, nunca código.
- Responde al usuario con: estado en una línea, las 3 cifras que más cambiaron, regresiones (si hay), preguntas nuevas para dirección y el próximo ítem que tomaría `/seo-fix`.

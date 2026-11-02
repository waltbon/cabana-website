# Corridas del ciclo SEO

Una carpeta por corrida de `/seo-weekly`: `runs/AAAA-MM-DD/`.

| Archivo | Contenido |
|---|---|
| `report.md` | Resumen legible: KPIs vs. semana anterior, regresiones, cambios en el backlog |
| `lint.json` | Salida de `node scripts/seo-lint.mjs --live https://cabanadata.com --json` |
| `gsc.json` | Search Console, últimos 7 días (y 7 días previos para comparar) |
| `drift.json` | `seo-drift compare` de las páginas objetivo contra la última baseline |

Los JSON son evidencia, no se editan a mano. La fila de KPIs va en `../metrics.csv`.

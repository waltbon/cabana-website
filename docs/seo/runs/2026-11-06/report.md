# Corrida SEO 2026-11-06 (tras #35–#53)

**Estado:** etapa 1 (técnica), **mejor**. 0 errores de lint, advertencias en vivo 47 → 16, 7 de 7 páginas objetivo indexadas (`/ruta-ia` ya indexa). Sin regresiones.

Ventanas GSC: actual 2026-10-28 → 2026-11-03; anterior 2026-10-21 → 2026-10-27. La corrida del 11-03 usó 25–31 oct, así que las cifras de GSC no se comparan con la fila anterior sino con la ventana previa de esta corrida.

## 1 · KPIs

| Métrica | Anterior (11-03, 2ª) | Actual | Meta |
|---|---|---|---|
| Errores de lint | 0 | 0 | 0 |
| Advertencias de lint (en vivo) | 47 | 16 | ≤ 5 justificadas |
| Páginas con hreflang | 32/33 (el reporte decía 33/33) | 31/32 | 100 % de las que tienen par |
| Redirects del mapa aplicados | 15/37 | 15/37 | 100 % de los confirmados |
| Páginas objetivo indexadas | 6/7 | 7/7 | 100 % |
| Clics GSC 7d | 2 | 3 | n/a |
| Impresiones GSC 7d | 71 | 176 | n/a |
| Clics no-marca 7d | 0 | 0 | meta inicial 30/mes |
| Impresiones no-marca 7d | 2 | 77 | creciente |
| Posición media (consultas visibles) | 29.5 | 56.3 | n/a |
| Regresiones de drift | 0 | 0 | 0 |

Notas de método:
- **hreflang:** el 11-03 el reporte contó 33/33 sin incluir `/ruta-ia`; `lint.json` de esa corrida tenía 33 páginas y 32 con hreflang. Hoy son 32 páginas (el sitemap ya no lista `/en/careers`, B-016) y 31 con hreflang. La única sin hreflang sigue siendo `/ruta-ia` (B-007).
- **Posición:** pasó de 7 a 24 consultas visibles; el promedio sube porque entraron consultas de cola larga en posiciones 65–95 (no-marca: 19 consultas, posición 65.7). Es más cobertura, no una caída de las que ya había. Las de marca: 24.6 (antes 33.6).

## 2 · Confirmado en producción

- **B-025 (#35):** el footer enlaza `href="/ruta-ia"` y `/ruta-ia` pasó de "Discovered - currently not indexed" a `PASS`, "Submitted and indexed", último rastreo 2026-11-04.
- **B-010 (#42):** los 7 titles responden con el texto nuevo (`/` "Consultoría de IA en Costa Rica", `/ai-first-move`, `/en/ai-first-move`, Data Engineering es/en). `seo-lint --live` ya no reporta `title-length`.
- **B-011 (#39):** los 4 titles de los posts responden con el texto nuevo.
- **B-016 (#43):** `/en/careers` responde 200 con canonical `https://cabanadata.com/careers` y ya no está en el sitemap.
- **B-030 (#45):** `/careers` responde "Carreras — Únase al equipo | Cabana Data".
- **B-031 (#44):** `/careers/career-pm-01` responde "Delivery Lead / IT Account Manager — Carreras | Cabana Data" (sin la marca repetida).
- **B-026 (#46–#50, #52):** `/posts/metodologia-aer` ya no contiene "AEB"; `/posts/inversion-en-ia` firma "Walter Bonilla"; los CTA de `infraestructura` e `inversion-en-ia` dicen "Conocer Ruta IA".
- **B-029 (#53) y B-017:** el namespace `metadata` ya no viaja en el HTML; el hallazgo `description-length` de `metadata.blog` en desapareció.
- **B-027 (#37) y B-022 (#38):** la regla `hreflang-x-default-missing` corre en `--live` sin hallazgos (x-default presente en todas las páginas con par); `gsc-summary.mjs` se usó en esta corrida y dio la posición ponderada.
- **B-028 (#41) y B-033 (#49):** herramientas de CI. `seo-lint` corrió en #50, #52 y #53 (PR solo de MDX y messages) y pasó.

## 3 · Regresiones

Ninguna.

- **Lint:** 0 errores. En vivo: 10 `sitemap-redirected`, 2 `benchmark` (D-002), 1 `ruta-ia-validada` (D-003), 1 `description-length` (`/about`, 163 caracteres), 1 `hreflang-missing` (`/ruta-ia`) y 1 `redirect-temporary` (`/case-studies` 307).
- **Drift:** 7 páginas objetivo, 0 críticos. `title_changed` (WARNING) en `/`, `/ai-first-move` y `/en/ai-first-move`: todos explicados por B-010 (#42). `content_hash_changed` (INFO) en las 7: explicado por #35, #42 y #50. Se recapturan las baselines de las 7 URL.

### Lint: nuevos, resueltos y persistentes

- **Resueltos:** los 4 `title-length` estáticos (B-010) y los de Data Engineering; el de `metadata.blog` en (B-017); los 13 de `data/blog/index.ts` (B-011); el tuteo de `metadata.about` (B-029). El total en vivo baja de 47 a 16.
- **Nuevos:** ninguno.
- **Persistentes:** los 16 listados arriba (todos con backlog o decisión: B-004, B-007, B-003, B-020, D-002, D-003, B-023).

## 4 · Indexación de páginas objetivo

| URL | Veredicto | Cobertura | Último rastreo | Canónica de Google |
|---|---|---|---|---|
| `/` | PASS | Submitted and indexed | 2026-11-03 | coincide |
| `/en` | PASS | Submitted and indexed | 2026-10-24 | coincide |
| `/ruta-ia` | PASS | Submitted and indexed | 2026-11-04 | coincide |
| `/ai-first-move` | PASS | Submitted and indexed | 2026-10-31 | coincide |
| `/en/ai-first-move` | PASS | Submitted and indexed | 2026-10-31 | coincide |
| `/capacidades` | PASS | Submitted and indexed | 2026-11-01 | coincide |
| `/en/capacidades` | PASS | Submitted and indexed | 2026-10-31 | coincide |

7/7. Los titles nuevos de `/` y de AI First Move aún no se han rastreado (último rastreo anterior a los merges de B-010 el 11-06), así que GSC todavía muestra los viejos.

## 5 · Lo que mejoró

- Indexación 6/7 → 7/7 (`/ruta-ia`), tras enlazarla desde el footer y los posts (#35).
- Lint en vivo 47 → 16 advertencias (#39, #42, #53).
- GSC: impresiones 86 → 176 y clics 1 → 3 entre las dos ventanas de esta corrida; impresiones no-marca 0 → 77.

## 6 · Oportunidades de GSC

Datos aún escasos (176 impresiones en 7 días, 0 clics no-marca).

- **Consultas no-marca visibles (19), con más impresiones:** "data architecture consulting" (22 imp., pos. 82), "database consulting" (12, pos. 78), "agentes ia personalizados" (10, pos. 19), "agentes de ia personalizados" (6, pos. 41), "data infrastructure consulting" (5, pos. 95).
- **Mejor posicionada:** "agentes ia personalizados" en pos. 19 → cae en la capacidad Custom AI Agents (`/capacidades/agentes-ia-a-medida`): sin canibalización. Es la única no-marca cerca de la primera página.
- **Consultas en inglés de consultoría de datos** (pos. 78–96) apuntan a `/en/capacidades/consultoria-de-datos`; dependen de B-008 (slugs propios en inglés) y de la decisión Q3.
- **Rutas viejas con impresiones:** siguen pendientes los redirects de B-004 (`/services`, `/contact`, `/about`).

## 7 · Fuentes sin datos

- **Core Web Vitals:** sin API key de PageSpeed Insights (`--skip-cwv`).
- **DataForSEO:** sin acceso; no hay posiciones top 10 por término principal.
- **Dominios de referencia:** sin Moz ni Bing Webmaster.
- **Leads y prospectos fuera del envase:** sin medir; falta definir la métrica con dirección.

## 8 · Nota fuera del lint

El HTML de todas las páginas lleva el payload completo de `NextIntlClientProvider`, con namespaces heredados que aún dicen "2 a 3 semanas", "6 dimensiones", tuteo y códigos internos (p. ej. `rutaIa.timeline.duration`). No es texto visible en el cuerpo, pero lo leen rastreadores y LLM. Ya está en B-032 (pasar solo los namespaces que cada página usa).

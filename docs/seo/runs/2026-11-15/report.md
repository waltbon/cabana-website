# Corrida semanal SEO · 2026-11-15

**Estado:** etapa 1 (técnica) con etapa 2 (contenido) en curso. Mejor que el 2026-11-11: 0 errores, advertencias de 16 a 12, 7/7 páginas objetivo indexadas, posición media de 57,4 a 44,9. No-marca sigue en 0 clics.

GSC: ventana actual 2026-11-06 → 2026-11-12; anterior 2026-10-30 → 2026-11-05. Los merges #70–#72 (guía de tono v2) son de hoy y la ventana de GSC todavía no los refleja.

## 1 · KPIs

| Métrica | 2026-11-11 | 2026-11-15 | Meta |
|---|---|---|---|
| Errores de `seo-lint` | 0 | 0 | 0 |
| Advertencias de `seo-lint` (en vivo) | 16 | 12 | ≤ 5, justificadas |
| Páginas del sitemap con hreflang | 31/32 | 39/40 | 100 % de las que tienen par |
| Redirects aplicados (301) | 15/37 | 17/37 | 100 % de los confirmados |
| Páginas objetivo indexadas | 7/7 | 7/7 | 100 % |
| Clics 7 días (gsc-page) | 5 | 4 | — |
| Impresiones 7 días (gsc-page) | 347 | 321 | crecimiento |
| Clics no-marca 7 días | 0 | 0 | 30 / mes |
| Impresiones no-marca 7 días (visibles) | 175 | 135 | crecimiento |
| Posición media (consultas visibles) | 57,4 | 44,9 | — |
| Regresiones de drift | 0 | 0 | 0 |

Nota: la corrida del 11-11 midió GSC 2–8 nov; `gsc-summary` de hoy da para la ventana anterior (30 oct–5 nov) 288 impresiones y 141 no-marca. La comparación válida semana contra semana es la de `gsc-summary.json`: impresiones 288 → 321, no-marca 141 → 135, posición no-marca 64,3 → 48,7.

## 2 · Regresiones

Ninguna. Sin errores nuevos de lint, las 7 páginas objetivo responden y siguen indexadas.

Drift (todo con PR que lo explica, esperado):

| URL | Cambios | PR |
|---|---|---|
| `/`, `/en` | H1 (CRITICAL), title, meta description, schema, H2 | #67 y #69 (copy v2 de Inicio y hero), #72 (title de 48 caracteres) |
| `/ai-first-move`, `/en/ai-first-move`, `/capacidades`, `/en/capacidades` | schema, contenido | #65, #67, #72 |
| `/ruta-ia` | contenido | #72 |

Baselines recapturadas al cierre de la corrida.

## 3 · Indexación de páginas objetivo

| URL | Verdict | Cobertura | Último rastreo | Canónica respetada |
|---|---|---|---|---|
| `/` | PASS | Submitted and indexed | 2026-11-07 | sí |
| `/en` | PASS | Submitted and indexed | 2026-11-07 | sí |
| `/ruta-ia` | PASS | Submitted and indexed | 2026-11-04 | sí |
| `/ai-first-move` | PASS | Submitted and indexed | 2026-10-31 | sí |
| `/en/ai-first-move` | PASS | Submitted and indexed | 2026-10-31 | sí |
| `/capacidades` | PASS | Submitted and indexed | 2026-11-01 | sí |
| `/en/capacidades` | PASS | Submitted and indexed | 2026-10-31 | sí |

`/como-trabajamos` (B-012, #65) ya está publicada: agregarla a drift e inspección desde la próxima corrida.

## 4 · Lo que mejoró

| Hallazgo resuelto | PR |
|---|---|
| `sitemap-redirected` `/about` y `/en/about` | #65 (B-012, `/about` → `/como-trabajamos`) |
| `description-length` en `/about` (cierra B-023) | #65 |
| `benchmark` en `inicio.method.body` | #67 (copy v2 de Inicio) |
| Sitemap con hreflang 31 → 39 páginas | #65, #67 |
| Redirects aplicados 15 → 17 | #65 |

## 5 · Oportunidades de GSC

| Consulta | Imp. | Posición | Página objetivo (§3) | Nota |
|---|---|---|---|---|
| data consulting | 27 | 19,7 | Data Consulting | top 20; en inglés cae en `/en/capacidades/consultoria-de-datos` (slug en español, B-008) |
| data architecture consulting | 16 | 68,6 | Data Consulting | sube de 38 imp. pero posición lejana |
| agente ia personalizado | 10 | 64,3 | Custom AI Agents | B-035 (variante "personalizados") se publicó hoy en #72 |
| consultoria de calidad de datos | 8 | 33,8 | Data Consulting | dentro del perfil; candidato a brief |
| custom ia / dataconsulting / agente ia a medida | 1–3 | 7–8 | varias | volumen bajo, posición alta |

Páginas con impresiones y CTR 0: `/capacidades/consultoria-de-datos` (118 imp., pos. 37,7), `/capacidades/agentes-ia-a-medida` (42, 34,8), `/en/capacidades/consultoria-de-datos` (19, 82,1), `/capacidades` (17, 55,3). `/services` (13 imp.) y `/about` (7) siguen recibiendo impresiones residuales; ya redirigen con 301.

## 6 · Fuentes sin datos

- Core Web Vitals: sin datos (drift con `--skip-cwv`; falta PageSpeed API key, B-015).
- DataForSEO (volúmenes, SERPs, visibilidad en IA): sin datos (B-015).
- Dominios de referencia: sin datos (B-015).

# Brief · Casos · es

> Datos de volumen y dificultad: **estimado, sin DataForSEO**. SERPs observados con localización EE. UU.; validar con datos de Costa Rica. El número de palabras es referencia, no meta. Este brief no es copy final: el texto se escribe con la guía de tono (usted, frases < 25 palabras, cifras en lugar de adjetivos).

## Objetivo
- **URL:** /casos (índice) + /casos/<slug> por caso
- **Término principal (índice):** casos de éxito de inteligencia artificial y datos
- **Long tail por caso:** <industria> + <problema> + resultado (p. ej. "reducción de horas de reporte con ingeniería de datos"). Se define con cada caso real.
- **Intención:** informativa / prueba social.
- **SXO:** el head term lo dominan inventarios masivos (EY "100 casos rentables de IA en Latinoamérica", Google Cloud "90 casos de IA en Latinoamérica"). Con pocos casos no se gana; apostar a páginas individuales.

## Estructura del índice
Introducción breve (40-70) → tarjetas por caso con cifra principal (unidad + periodo) y servicio/capacidad → CTA a servicios.

## Estructura por caso (guía de tono)
| Sección | Contenido | Palabras (ref.) |
|---|---|---|
| Situación | Industria, tamaño, problema de negocio | 80-120 |
| Qué hicimos | Servicio o capacidad; técnica como prueba | 120-200 |
| Resultado | Al menos una cifra verificable con unidad y periodo | 60-100 |
| CTA | Servicio relacionado | — |

## Reglas
- Nombre del cliente solo con autorización escrita; si no, "empresa de distribución en Costa Rica".
- Sin códigos internos, costos ni horas facturadas.
- Los casos actuales del sitio ("Proyectos reales. Impacto medible.") deben revisarse: ¿hay autorización escrita? ¿qué servicio de la nueva oferta representan?

## Schema
Índice: `CollectionPage`. Cada caso: `Article` (o `CreativeWork`) con `about` al servicio; `BreadcrumbList`.

## GEO
Las cifras de resultados en texto plano (no solo en gráficos) son la evidencia que más se cita.

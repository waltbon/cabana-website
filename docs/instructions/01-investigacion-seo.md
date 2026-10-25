# Instrucciones: investigación SEO para el rediseño de cabanadata.com (fases 0 a 2)

## Objetivo
Producir la base de investigación para redactar el nuevo sitio en dos mercados:
- es: Costa Rica como base y Latinoamérica como ampliación.
- en-US: Estados Unidos, investigado como mercado propio (no como traducción).
Esta tarea es SOLO de investigación. No redactar copy final, no modificar páginas en
producción y no hacer deploy.

## Contexto obligatorio (leer antes de empezar)
- docs/content/brief-marketing.md: modelo de oferta, servicios, reglas de redacción.
- docs/content/guia-tono.md: idea central, pilares de voz, glosario, checklist.
Si una recomendación SEO contradice el brief o la guía, manda el brief o la guía.
Registrar el conflicto en el informe en lugar de resolverlo.

## La oferta en una línea por servicio
- Ruta IA: diagnóstico de 4 semanas que dice por cuáles oportunidades de IA empezar y si
  los datos las soportan. Entrega OPORTUNIDADES, no casos de uso. No entrega ROI.
- AI First Move: 10 semanas; un caso de uso en producción + un caso de inversión para la
  junta. No es PoC.
- Capacidades (se cotizan a medida): Data Consulting, Data Engineering, Digital Product,
  Custom AI Agents.
- Cliente: empresa mediana, con datos en sistemas propios, sin equipo de IA maduro.
  Fuera de perfil: grandes corporaciones multiunidad y entornos industriales OT.

## Arquitectura objetivo (por validar con esta investigación)
Inicio · Ruta IA · AI First Move · Cómo trabajamos · Capacidades (+4 subpáginas) ·
Casos · Blog · Agendar. Cada página responde una sola intención de búsqueda por idioma.
Slugs en español propuestos: /ruta-ia, /ai-first-move, /como-trabajamos, /capacidades.
Los slugs en inglés se proponen a partir de la investigación (no traducir literal).

## Fase 0 · Línea base
1. Revisar la configuración actual de Next.js e i18n: locales, rutas (/en), hreflang,
   canonical, sitemap y robots. Documentar cómo está y qué falta.
2. seo-google: exportar de Search Console (16 meses) clics, impresiones y posición por
   URL y por consulta, para cabanadata.com Y para ruta-ai.cabanadata.com. Agregar
   páginas de destino orgánicas de GA4.
3. Identificar las URLs con tráfico orgánico real o con backlinks externos
   (seo-backlinks si hay acceso).
4. seo-technical sobre el sitio actual.
5. seo-drift: guardar la línea base antes de cualquier cambio.
6. Proponer el mapa de redirects 301 de las URLs actuales (incluido el subdominio
   ruta-ai) hacia la arquitectura objetivo.

## Fase 1 · Investigación de keywords (un proceso por idioma)
Semillas en español (del brief):
por dónde empezar con IA, estrategia de IA para empresas, diagnóstico de datos para IA,
IA en producción, caso de negocio de IA, consultoría de IA Costa Rica, consultoría de IA
Latinoamérica, piloto vs producción IA, ingeniería de datos Costa Rica.
Semillas en inglés (punto de partida; ampliar desde los SERPs de EE. UU.):
where to start with AI, AI strategy consulting, AI opportunity assessment,
AI readiness assessment, AI consulting for mid-sized companies, AI in production,
AI pilot to production, AI investment case, data engineering consulting.

Para cada idioma, por separado:
1. seo-dataforseo: volumen, dificultad y tendencia. En español, medir Costa Rica y
   también México, Colombia y el agregado LATAM; si Costa Rica da volúmenes cercanos a
   cero, no descartar el término por eso. En inglés, medir Estados Unidos.
2. seo-cluster: agrupar por coincidencia real de SERP y proponer páginas pilar y
   satélite.
3. seo-sxo: para cada página objetivo, confirmar qué tipo de página muestra Google
   (servicio, artículo, listado, comparación). Si el término principal es informativo,
   recomendar que vaya al blog con enlace al servicio, no a la página de servicio.
4. seo-geo: revisar si Cabana Data aparece en AI Overviews, ChatGPT y Perplexity para
   los términos principales, y quién aparece en su lugar.
5. Competidores: en español, incluir SmartGo360, Datasys Group, Novitec y Opinosis
   Analytics, más los que aparezcan en los SERPs. En inglés, identificarlos desde los
   SERPs de EE. UU. (consultoras de IA y datos para empresas medianas).

## Fase 2 · Brief de contenido por página y por idioma
Correr seo-content-brief para: Inicio, Ruta IA, AI First Move, Cómo trabajamos,
Capacidades y Casos, en es y en en-US.
Reglas que el brief NO puede cambiar:
- Estructura fija de las páginas de servicio: momento del cliente → promesa → qué se
  lleva → cómo funciona → duración y precio → para quién no es → FAQ → CTA.
- El número de palabras de la competencia es solo referencia, no meta.
- Términos prohibidos, aunque tengan volumen:
  - Ruta IA: "casos de uso" / "use cases", "business case", "ROI".
  - AI First Move: "PoC", "prueba de concepto" / "proof of concept", "piloto" / "pilot"
    como descripción del servicio, "agente autónomo" / "autonomous agent".
  - Todo el sitio: "desde" / "starting at" junto a un precio; planes o tiers.
  - Nunca: códigos internos (DHC, DUC, RIA, AIF, WBS).
Si un término prohibido es importante para SEO, puede apuntarse a un artículo del blog
que lo explique y enlace al servicio. Registrarlo como recomendación.

## Entregables (en docs/seo/)
- 00-baseline.md: estado técnico, i18n y URLs con tráfico.
- redirects.csv: origen, destino, motivo.
- 01-keyword-map-es.md y 01-keyword-map-en.md: por página, término principal,
  secundarios, intención, tipo de página en SERP y recomendación.
- 02-briefs/<pagina>.<locale>.md: un brief por página y por idioma.
- 03-resumen.md: hallazgos clave, conflictos con el brief o la guía, y preguntas
  abiertas para dirección.

## Si algo falla
Si faltan claves de API (Search Console, DataForSEO, Moz), continuar con lo que sí se
pueda y listar en 03-resumen.md qué quedó sin datos y qué acceso hace falta.
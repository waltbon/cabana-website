# Decisiones SEO

Registro de conflictos entre SEO y el brief o la guía de tono, y de preguntas que solo dirección puede responder. Los agentes agregan filas con estado `abierta`; nunca las cierran. Una decisión cerrada se cita desde el backlog o desde `rules.json` por su ID.

Estados: `abierta` · `decidida` · `descartada`.

## Decisiones

| ID | Tema | Decisión | Estado | Fecha |
|---|---|---|---|---|
| D-001 | La FAQ de Ruta IA cita "business case" para negarlo | Permitido solo en la pregunta de la FAQ que lo niega (brief §3.6). Excepción en `rules.json` | decidida | 2026-10-30 |
| D-002 | "benchmark" usado en contraste ("no de un benchmark genérico") en `inicio.method.body` y `rutaIa.process.method`, es y en. La guía lo lista en "No usar"; el brief §3.3 usa la misma frase como mensaje clave del método. ¿Se permite en contraste y se registra como excepción en `rules.json` (como D-001), o se reescribe con "evidencia de su operación"? Manda la guía; la decide dirección. Bloquea B-020. 2026-11-20: el copy web v2 suma el mismo uso en contraste en `comoTrabajamos.hero.body.1` y `comoTrabajamos.notDo.items.0` (es) | — | abierta | 2026-11-01 |
| D-003 | "confirmed" en `rutaIa.deliverables.note` (en): "Whether it can be built is confirmed in the next stage". Repite brief §3.4 (lo que se confirma después es la viabilidad, no la oportunidad) y el texto es no lo marca ("se confirma"). ¿Excepción en `rules.json` para esta clave, o se reformula? Manda la guía; la decide dirección. Bloquea B-020 | — | abierta | 2026-11-01 |
| D-004 | `/en/careers` está escrita en español con voseo y sin par en inglés (B-016). Opciones: (A) traducir la sección y las vacantes; (B) dejarla solo en español | B: la sección de carreras existe solo en español (mismo patrón que `/careers/[id]` y los posts). `/en/careers` sale del sitemap y declara canonical y hreflang a `/careers`. La corrección del texto a usted va en B-030 | decidida | 2026-11-06 |
| D-005 | Posts: autor de `inversion-en-ia` y cliente de `metodologia-aer` (B-026) | Autor: Walter Bonilla, con el cargo ya publicado "Fundador y Líder Técnico" (el MDX decía "Walter Campos" y "CEO & Co-fundador"). Cliente: sin permiso escrito, así que el post no lo hace identificable (sin sector, país, tecnología ni modelo de negocio) | decidida | 2026-11-06 |
| D-006 | Nombre del método en `metodologia-aer` (B-026): AER (slug) vs AEB (cuerpo) | Sin acrónimo: el cuerpo habla de "la evaluación de arquitectura" y no presenta el método como producto con sigla (BRIEF §1.1). El slug `metodologia-aer` no cambia. LinkedIn de Walter Bonilla: `https://www.linkedin.com/in/waltbon/` | decidida | 2026-11-06 |
| D-007 | CTA de Ruta IA en los posts y cierre de `el-error-mas-caro` (B-026) | Los CTA siguen la ficha vigente: "por dónde empezar con IA", 4 semanas, 5 mejores oportunidades; sin "assessment", "6 dimensiones" ni "2 a 3 semanas". El cierre de `el-error-mas-caro` va a Ruta IA en lugar de "Data Health Check", como puente hacia la intención de IA. Queda abierto qué servicio atiende a quien solo busca un dashboard (Q6, Q10, Q13) | decidida | 2026-11-06 |
| D-008 | FAQ de `metodologia-aer`: "servicio standalone" y "el costo se descuenta del proyecto" (B-026) | Se quita la condición comercial: el sitio solo vende dos servicios con precio fijo (Ruta IA y AI First Move; BRIEF §1.3). La pregunta se reformula a "¿En qué momento del proyecto se hace la evaluación?" y no afirma que la evaluación se venda ni deje de venderse aparte | decidida | 2026-11-06 |
| D-009 | `/about` y Cómo trabajamos (B-012, Q10 parte `/about`, C12 parte `/about`) | `/about` se retira: 301 a `/como-trabajamos` y `/en/about` → `/en/how-we-work`. Se crean `/como-trabajamos` y `/en/how-we-work`; el slug en inglés queda provisional hasta Q2/Q3. El equipo se muda a Cómo trabajamos, después de "El método". Decidido por Walter Bonilla | decidida | 2026-11-11 |
| D-010 | Contenido de Cómo trabajamos (B-012, pendientes del copy v1) | Equipo publicado: Walter, Evelyn, Thomas, Eduardo y Melissa (sin Sergio ni Rebeca). Se quita `principle.items[2]` ("cada acción queda registrada"): no es práctica de todos los proyectos; queda solo el enlace al caso. Se quita la cita del fundador. La página sale en español y en inglés. Copy en `docs/content/pages/COMO-TRABAJAMOS.md`. Decidido por Walter Bonilla | decidida | 2026-11-11 |
| D-011 | Enfoque y término SEO de Cómo trabajamos (B-012) | La página no habla de trabajar con IA (el Home ya lo cubre): habla de sistemas propios, seriedad en la ejecución y fases con criterio de salida verificable (base: Constitución de Sistemas v1.0). Término objetivo pasa a marca + método ("cómo trabajamos", "metodología de consultoría"). "IA con supervisión humana" / "human-in-the-loop AI implementation" se mueve a `/ai-first-move` (STRATEGY §3). Decidido por Walter Bonilla (opción A) | decidida | 2026-11-11 |
| D-012 | Sección del fundador en Cómo trabajamos (B-012) | Se agrega una sección con foto de Walter Bonilla (avatar redondo) y una cita breve, antes del CTA. Reemplaza la parte de D-010 que quitaba la cita del fundador: la cita anterior de /about no vuelve; la nueva sigue el enfoque de D-011. Decidido por Walter Bonilla | decidida | 2026-11-11 |

## Conflictos heredados de la investigación (`03-resumen.md` §2)

| ID | Conflicto | Manda | Estado |
|---|---|---|---|
| C1 | El mercado llama "casos de uso", "ROI" y "business case" a lo que entrega Ruta IA | Guía: los términos van al blog | decidida |
| C2 | "No es una prueba de concepto" (brief) vs. término prohibido en AI First Move | — | abierta |
| C3 | Capacidades en inglés vs. búsquedas en español ("ingeniería de datos") | — | abierta |
| C4 | "Sponsor" en el brief vs. prohibido en texto público | Guía | decidida |
| C5 | "IA en producción" lleva a resultados de OT | Brief (perfil) | decidida |
| C6 | `/ai-first-move` no contiene términos buscados en español | Brief (marca) | decidida |
| C7 | Home con "tú" vs. "usted" | Guía | decidida |
| C8 | Falta ICP y voz para en-US | — | abierta |
| C9 | "USD X + IVA" no funciona en EE. UU. | — | abierta |
| C10 | SERPs premian "autonomous"; Cabana se posiciona en human-in-the-loop | Guía | decidida |
| C11 | Capacidad de un cliente por servicio vs. demanda en EE. UU. | — | abierta |
| C12 | `/about`, `/careers`, `/privacidad` fuera de la arquitectura objetivo | `/about`: D-009 (se retira, 301 a `/como-trabajamos`). `/careers` y `/privacidad` siguen sin decidir | abierta |
| C13 | GUIA-TONO v2 (2026-11-15): "IA" no va en title ni primer párrafo de Cómo trabajamos, Data Consulting, Data Engineering ni Digital Product, pero D-011 fija "IA con supervisión humana" como secundario de `/como-trabajamos` y `/capacidades` apuntaba a "consultoría de datos e IA" | Guía: se quita el secundario (Q14, 2026-11-15) | decidida |
| C14 | GUIA-TONO v2 no cubre inglés: ¿la dosis de IA y el término de Inicio ("AI, software and data consulting") aplican a `/en`? | Sí, se aplica igual en inglés (Q15, 2026-11-15) | decidida |
| C15 | GUIA-TONO v2 cita el brief de Marketing v1.1; el repo tenía `BRIEF-MARKETING.md` v1.0 | Brief v1.1 (15 nov 2026) incorporado al repo (Q16) | decidida |
| C16 | Web v2 (copy 6M-02.1, brief v2.0): Ruta IA cambia su término principal a "estrategia de IA para empresas" y deja de presentarse como "diagnóstico". El keyword map es (§1, §3) asigna a `/ruta-ia` "diagnóstico de IA para empresas" y deja "estrategia de IA para empresas" al blog pilar ("servicio no ranquearía"). Implementado tal cual el copy en la rama `feat/web-v2-como-trabajamos` (2026-11-20) | — | decidida: Q17 (copy web v2 manda, 2026-11-20) |
| C17 | Web v2 (copy 6M-02.4, brief v2.3): Cómo trabajamos vuelve a "IA" en title/H1 ("Cómo trabajamos con IA…") y usa "IA con supervisión humana" como eyebrow. Choca con D-011, Q14/C13 y la regla `ia-dosis-title-hero` de GUIA-TONO v2 (seo-lint: 6 advertencias es/en) | — | decidida: Q17 (copy web v2 manda, 2026-11-20) |
| C18 | Web v2 (copy 6M-02.3): `/lo-que-hacemos` reemplaza a `/capacidades` con el término "soluciones de IA y datos para empresas" y cinco áreas con sus propios términos (modernización de datos, conocimiento empresarial, ciencia de datos y machine learning, automatización con agentes de IA, productos digitales con IA integrada). El keyword map tiene el hub sin "IA" y los términos de las 4 capacidades anteriores; falta el cluster nuevo | — | decidida: Q17 (copy web v2 manda, 2026-11-20) |
| C19 | GUIA-TONO v2 "Dosis de IA" (encabezados sin IA salvo uno por sección) vs. copy web v2 de Inicio: síntomas, sección de IA, principio, CTA y dos nombres de área llevan "IA" (seo-lint `ia-dosis-encabezados`, es/en). La guía manda sobre el copy (CLAUDE.md); el copy viene de un brief posterior (v2.x) | — | decidida: Q17 (copy web v2 manda, 2026-11-20) |
| C20 | Title de AI First Move del copy web v2 ("AI First Move: lleve su primer caso de IA a producción \| Cabana Data") tiene 68 caracteres, sobre el máximo de 60 de `rules.json` (seo-lint `title-length`, es/en) | — | abierta |
| C21 | Copy web v2 de Automatización con agentes (6M-02.3.4) dice "Cada recomendación y cada aprobación quedan registradas"; D-010 quitó "cada acción queda registrada" de Cómo trabajamos porque no es práctica de todos los proyectos (decisión abierta 3 del LEEME del copy). Publicado tal cual el copy | — | abierta |

## Preguntas abiertas para dirección (`03-resumen.md` §3)

| ID | Pregunta | Bloquea | Estado |
|---|---|---|---|
| Q1 | ¿Se publica el precio en la web? ¿Cómo se expresa para EE. UU.? | C9 | abierta |
| Q2 | Nombre y slug de Ruta IA en inglés (propuesta: "Ruta IA — AI Opportunity Assessment", `/en/ai-opportunity-assessment`) | B-007, B-008 | abierta |
| Q3 | ¿Mercado inglés en-US o inglés genérico? (define hreflang `en-US` vs. `en`) | B-008 | abierta |
| Q4 | ¿Qué frase reemplaza "no es una prueba de concepto / not a pilot"? | C2 | abierta |
| Q5 | ¿Término en español junto al nombre en inglés en títulos de capacidades? | C3 | abierta |
| Q6 | ¿Dónde queda "Dashboards y analítica"? | — | abierta |
| Q7 | ¿Permiso escrito para nombrar clientes en casos? ¿Casos publicables en inglés? | B-003 | abierta |
| Q8 | ¿Cuánto tiempo del equipo del cliente toma Ruta IA? (2026-11-20: el copy web v2 lo publica en `rutaIa.clientTime`; dirección confirma si esto la responde) | FAQ Ruta IA | abierta |
| Q9 | ¿Se crean perfiles en Clutch y Consultancy.org, y se actualiza The Manifest? | B-014 | abierta |
| Q10 | Redirects por confirmar: `data-health-check` → `/ruta-ia`, `data-analytics-use-case` → `/ai-first-move`, `dashboards-analytics-interfaces` → Data Engineering, `/about` → `/como-trabajamos` (esta parte decidida en D-009, 2026-11-11) | B-004 | abierta |
| Q11 | ¿Se mueven los posts de `/posts/<slug>` a `/blog/<slug>`? | — | abierta |
| Q12 | Dominios de SmartGo360 y Novitec | Competencia | abierta |
| Q13 | `/services/dashboards-analytics-interfaces` ya responde 301 → `/capacidades/ingenieria-de-datos` en producción (lint `redirects` 2026-11-03, estado `applied`), pero Q10 lo lista como "por confirmar" y `redirects.csv` dice "alternativa: Digital Product; confirmar". ¿Se ratifica el destino Data Engineering o se cambia a Digital Product? Relacionada con Q6 (dónde queda "Dashboards y analítica"). Registrado el 2026-11-03 | Q10 (parte), Q6 | abierta |
| Q14 | ¿Se quita "IA con supervisión humana" como secundario de `/como-trabajamos` (D-011) para cumplir la dosis de IA de GUIA-TONO v2? | C13, B-038 | decidida 2026-11-15: sí, se quita |
| Q15 | ¿Se aplica GUIA-TONO v2 (tesis software + datos, dosis de IA) al sitio en inglés? | C14 | decidida 2026-11-15: sí |
| Q16 | Compartir el brief de Marketing v1.1 para reemplazar `docs/content/BRIEF-MARKETING.md` | C15 | decidida 2026-11-15: v1.1 compartida por dirección e incorporada |
| Q17 | ¿El copy web v2 (brief v2.x) reemplaza las decisiones D-011 y Q14 y la "Dosis de IA" de GUIA-TONO v2? Si sí, hay que actualizar la guía, `rules.json` y el keyword map; si no, el copy de Ruta IA, Cómo trabajamos, Lo que hacemos e Inicio se corrige primero en el Google Doc | C16, C17, C18, C19; B-008, B-036, B-037, B-038, B-049, B-050, B-051 | decidida 2026-11-20: sí. El copy web v2 reemplaza D-011, Q14 y la "Dosis de IA". Guía actualizada, `aiDose` fuera de `rules.json`, keyword map es al día; pendiente reflejar la guía en el Google Doc y el mapa en inglés |
| Q18 | El copy de Inicio (JSON-LD) pide `description: <footer.tagline>` para la Organization, pero `footer.tagline` no existe en `messages/*.json`. ¿Qué frase se usa? (Cómo trabajamos usa "Cabana Data es una consultoría de IA en Costa Rica que lleva la IA a producción con método") | — | decidida 2026-11-20: "Cabana Data es una consultoría de IA en Costa Rica que lleva la IA a producción con método." (`footer.tagline`, es/en; inglés traducido por Claude, sin revisión humana) |
| Q19 | `ruta-ai.cabanadata.com`: el redirect por host (→ `/ruta-ia`) quedó en `next.config.ts`, pero solo aplica si el subdominio apunta a este proyecto en Vercel. Confirmar el DNS o hacer el redirect en el proyecto actual del subdominio | — | decidida 2026-11-20: el sitio se da de baja; el 301 a `/ruta-ia` se mantiene un tiempo y luego se elimina el dominio y la regla de `next.config.ts`. DNS y Vercel los gestiona dirección |
| Q20 | Web v2 (#80) hace 301 de `/en/ruta-ia` a `/ruta-ia`: Ruta IA queda solo en español. ¿Es definitivo? Si sí, Q2 deja de aplicar a Ruta IA, el lint registra la excepción de hreflang e i18n-parity y el mapa de redirects pierde `/en/ruta-ia` → `/en/ai-opportunity-assessment`; si no, falta definir la página en inglés (Q2). Registrado el 2026-11-20 | B-047, Q2 (parte) | abierta |
| Q21 | ¿Se redirige a `/en` a quien tiene el navegador en inglés? Hasta hoy `localeDetection: false` en `i18n/routing.ts` mostraba español a todos | — | decidida 2026-11-25: sí. `localeDetection: true`: next-intl usa la cookie `NEXT_LOCALE` y, si no existe, `Accept-Language`. Googlebot rastrea sin ese encabezado y sigue viendo `/` en español; hreflang no cambia |

# Copy web · Ruta IA (v1 borrador)

Oct 25, 2026 · @Walter Bonilla

## Cómo leer este borrador

Este es el copy completo de la página `/ruta-ia`, en el orden fijo de las páginas de servicio. Cada bloque lleva una clave i18n propuesta para que Claude Code lo pase a `es.json` sin reinterpretar.

- **Claves:** formato `rutaIa.<seccion>.<elemento>`. Si el repo usa otra convención, se ajusta al convertir; el texto no cambia.
- **Fuentes:** brief de Marketing v1.0, guía de comunicación y tono, keyword map `es` y la descripción del tiempo del cliente que envió dirección.
- **Término principal SEO:** "diagnóstico de IA para empresas". Aparece en title, H1, primer párrafo y un H2.
- **Revisión:** comente directamente sobre el texto. En cada tabla, la columna "Texto" es lo que se publica; la columna "Clave" no se ve en la página.

## Metadatos SEO

| Clave | Texto | Nota |
| --- | --- | --- |
| `rutaIa.meta.title` | Ruta IA: diagnóstico de IA para empresas \| Cabana Data | 54 caracteres |
| `rutaIa.meta.description` | Sepa en 4 semanas por cuáles oportunidades de IA empezar y si sus datos las soportan. Precio fijo: USD 12,000 + IVA. | 118 caracteres |
| `rutaIa.meta.ogTitle` | Ruta IA: sepa por dónde empezar con IA | Para LinkedIn y redes |
| `rutaIa.meta.ogDescription` | Sus 5 mejores oportunidades de IA, ordenadas y contrastadas contra sus datos, en 4 semanas. |  |
| Slug | `/ruta-ia` | 301 desde `ruta-ai.cabanadata.com` y desde `/services/data-health-check` |
| H1 | Ruta IA: el diagnóstico de IA que le dice por dónde empezar | Ver Hero |

## Hero y momento del cliente

### Hero

| Clave | Texto |
| --- | --- |
| `rutaIa.hero.eyebrow` | Diagnóstico de IA para empresas |
| `rutaIa.hero.title` | Ruta IA: el diagnóstico de IA que le dice por dónde empezar |
| `rutaIa.hero.subtitle` | En 4 semanas recibe sus 5 mejores oportunidades de IA, ordenadas: cuáles puede arrancar ya y qué hay que resolver para habilitar las demás. |
| `rutaIa.hero.facts[0]` | 4 semanas + 30 días de seguimiento |
| `rutaIa.hero.facts[1]` | USD 12,000 + IVA, precio fijo |
| `rutaIa.hero.facts[2]` | Basado en sus datos y su gente |
| `rutaIa.hero.ctaPrimary` | Agendar una conversación |
| `rutaIa.hero.ctaSecondary` | Ver qué incluye |

### Momento del cliente

| Clave | Texto |
| --- | --- |
| `rutaIa.moment.title` | Cuando alguien pregunta "¿por dónde empezamos con IA?" |
| `rutaIa.moment.body[0]` | La junta o la casa matriz piden avanzar con IA. Cada área tiene su idea, y nadie sabe cuál conviene primero ni si los datos alcanzan para alguna. |
| `rutaIa.moment.body[1]` | En esa reunión, la respuesta suele ser una opinión. Ruta IA la reemplaza con evidencia de su propia operación: entrevistas a su gente y revisión directa de sus sistemas. |

## Promesa y qué se lleva

### Promesa

| Clave | Texto |
| --- | --- |
| `rutaIa.promise.title` | Lo que la dirección sabe al terminar |
| `rutaIa.promise.items[0]` | Por cuáles oportunidades de IA empezar, en orden. |
| `rutaIa.promise.items[1]` | Cuáles soportan hoy sus datos. |
| `rutaIa.promise.items[2]` | Qué hay que resolver para habilitar las demás, y en qué orden. |

### Qué se lleva

| Clave | Texto |
| --- | --- |
| `rutaIa.deliverables.title` | Qué recibe en el diagnóstico de IA |
| `rutaIa.deliverables.items[0].title` | Mapa de Oportunidades de IA |
| `rutaIa.deliverables.items[0].body` | Sus 5 mejores oportunidades ordenadas. Cada una marcada como lista para arrancar, requiere remediación o no ahora, con la decisión de negocio que mueve, su dueño y lo que la bloquea. |
| `rutaIa.deliverables.items[1].title` | Reporte ejecutivo |
| `rutaIa.deliverables.items[1].body` | La salud de sus datos, qué bloquea la IA hoy y si el problema que la dirección creía tener es el real. |
| `rutaIa.deliverables.items[2].title` | Roadmap de remediación |
| `rutaIa.deliverables.items[2].body` | Qué arreglar en sus datos y en qué orden, según esfuerzo e impacto. |
| `rutaIa.deliverables.items[3].title` | Sesión de devolución |
| `rutaIa.deliverables.items[3].body` | Presentamos los resultados a la dirección y respondemos sus preguntas. |
| `rutaIa.deliverables.items[4].title` | Seguimiento de 30 días |
| `rutaIa.deliverables.items[4].body` | Dos llamadas, a los 7 y a los 21 días, para acompañar la decisión. |
| `rutaIa.deliverables.note` | "Lista para arrancar" significa que sus datos no la bloquean. La viabilidad de construirla se confirma en la siguiente etapa. |

## Cómo funciona y tiempo de su equipo

### Cómo funciona

| Clave | Texto |
| --- | --- |
| `rutaIa.process.title` | Cómo funciona: 4 semanas, con evidencia de su operación |
| `rutaIa.process.steps[0].label` | Semana 1 |
| `rutaIa.process.steps[0].title` | Arranque y taller de oportunidades |
| `rutaIa.process.steps[0].body` | Reunimos a la dirección y a los líderes de área para registrar cada idea de IA con la decisión de negocio que mueve y su dueño. |
| `rutaIa.process.steps[1].label` | Semanas 2 y 3 |
| `rutaIa.process.steps[1].title` | Entrevistas y revisión de sistemas |
| `rutaIa.process.steps[1].body` | Conversamos con su gente y revisamos directamente sus sistemas para ver qué datos existen y en qué estado están. |
| `rutaIa.process.steps[2].label` | Semana 4 |
| `rutaIa.process.steps[2].title` | Evaluación y devolución |
| `rutaIa.process.steps[2].body` | Ordenamos las oportunidades, armamos el mapa y lo presentamos a la dirección. |
| `rutaIa.process.steps[3].label` | 30 días después |
| `rutaIa.process.steps[3].title` | Seguimiento |
| `rutaIa.process.steps[3].body` | Dos llamadas para acompañar la decisión sobre el siguiente paso. |
| `rutaIa.process.method` | Todo sale de entrevistas a su gente y de la revisión de sus sistemas, no de un benchmark genérico. |

### Tiempo de su equipo

| Clave | Texto |
| --- | --- |
| `rutaIa.clientTime.title` | Cuánto tiempo pide a su equipo |
| `rutaIa.clientTime.intro` | El trabajo pesado lo hace nuestro equipo. De su lado, el tiempo se concentra en pocos espacios: |
| `rutaIa.clientTime.items[0]` | Dirección: una reunión de arranque de 60 minutos y la sesión de devolución de 120 minutos. |
| `rutaIa.clientTime.items[1]` | Dirección y líderes de área: un taller de oportunidades de 140 minutos. |
| `rutaIa.clientTime.items[2]` | Personas clave de la operación: hasta 8 entrevistas individuales. |
| `rutaIa.clientTime.items[3]` | Tecnología: acceso de lectura a los sistemas relevantes o, si no es posible, sesiones de pantalla compartida. |

## Duración, precio y para quién no es

### Duración y precio

| Clave | Texto |
| --- | --- |
| `rutaIa.pricing.title` | Un precio, un alcance, sin sorpresas |
| `rutaIa.pricing.price` | USD 12,000 + IVA |
| `rutaIa.pricing.duration` | 4 semanas + 30 días de seguimiento |
| `rutaIa.pricing.scope` | Para 1 o 2 unidades de negocio |
| `rutaIa.pricing.payment` | 30 % a la firma y 70 % a la entrega |
| `rutaIa.pricing.credit` | Si contrata un proyecto de implementación en los 90 días siguientes, le acreditamos el 50 % de lo invertido en Ruta IA. |

### Para quién no es

| Clave | Texto |
| --- | --- |
| `rutaIa.notFor.title` | Cuándo Ruta IA no es el punto de partida |
| `rutaIa.notFor.items[0]` | Si quien decide ya eligió la idea de IA, el siguiente paso es AI First Move. |
| `rutaIa.notFor.items[1]` | Si ya tiene decisión, presupuesto y mandato, conviene un proyecto directo. |
| `rutaIa.notFor.items[2]` | Si ya sabe cuál es su brecha de datos, conviene un proyecto de Data Engineering. |
| `rutaIa.notFor.items[3]` | Si involucra más de dos unidades de negocio con arquitecturas distintas, o un entorno industrial de planta, Ruta IA no está diseñado para ese alcance. |

## Preguntas frecuentes

| Clave | Pregunta | Respuesta |
| --- | --- | --- |
| `rutaIa.faq[0]` | ¿Me entregan el business case de cada oportunidad? | No. Ruta IA le dice por dónde empezar y si sus datos lo soportan. El caso de inversión se construye con evidencia real, al llevar el primer caso a producción con AI First Move. |
| `rutaIa.faq[1]` | Nuestro equipo puede hacer la lista de ideas. ¿Qué aporta Ruta IA? | La lista, sí. Lo que aporta Ruta IA es contrastarla contra sus datos con evidencia, y una mirada externa que puede decirle a la dirección que su idea favorita no está lista sin costo político interno. |
| `rutaIa.faq[2]` | ¿Y si ninguna idea está lista? | Se lo decimos, con lo que hay que resolver y en qué orden. Saberlo en 4 semanas cuesta menos que descubrirlo a mitad de un proyecto. |
| `rutaIa.faq[3]` | ¿Por qué pagar un diagnóstico si después viene la implementación? | Porque la mitad se acredita: si contrata un proyecto de implementación en los 90 días siguientes, le reconocemos el 50 % de lo invertido. |
| `rutaIa.faq[4]` | ¿Cuánto tiempo le toma a mi equipo? | Pocos espacios concentrados: una reunión de arranque de 60 minutos, un taller de 140 minutos, hasta 8 entrevistas individuales y una sesión de devolución de 120 minutos. |
| `rutaIa.faq[5]` | ¿Necesitan acceso a nuestros sistemas? | Pedimos acceso de lectura a los sistemas relevantes. Si no es posible, revisamos los datos en sesiones de pantalla compartida con su equipo. |
| `rutaIa.faq[6]` | ¿Tengo que pasar por Ruta IA antes de AI First Move? | No. Si quien decide ya eligió la idea, puede empezar directamente con AI First Move. |

## CTA final y datos estructurados

### CTA final

| Clave | Texto |
| --- | --- |
| `rutaIa.cta.title` | ¿Por dónde empezar con IA en su empresa? |
| `rutaIa.cta.body` | En una conversación de 20 minutos con quien decide la inversión, revisamos si Ruta IA es el punto de partida correcto para su empresa. |
| `rutaIa.cta.button` | Agendar una conversación |

### Datos estructurados (JSON-LD)

Para Claude Code con `seo-schema`. Los textos salen de las claves anteriores; no se redactan aparte.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ruta IA",
  "serviceType": "Diagnóstico de IA para empresas",
  "description": "<rutaIa.meta.description>",
  "provider": { "@type": "Organization", "name": "Cabana Data", "url": "https://cabanadata.com" },
  "areaServed": ["Costa Rica", "Latinoamérica"],
  "offers": {
    "@type": "Offer",
    "price": "12000",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "12000",
      "priceCurrency": "USD",
      "valueAddedTaxIncluded": false
    }
  }
}
```

Además: un bloque `FAQPage` generado desde `rutaIa.faq[*]` y un `BreadcrumbList` (Inicio → Ruta IA).

## Decisiones confirmadas

Dirección resolvió los cinco puntos abiertos del borrador; el copy ya los refleja.

- [x] **Entrevistas:** "hasta 8" es correcto. Cubre al menos una por cada una de las seis dimensiones y permite hasta dos adicionales en áreas clave.
- [x] **Primera conversación:** 20 minutos con quien decide, según el argumentario comercial. Se corrigió `rutaIa.cta.body`.
- [x] **Entornos fuera de perfil:** exclusión simple, sin ofrecer propuesta a medida. Se corrigió `rutaIa.notFor.items[3]`.
- [x] **FAQ sobre business case:** se acepta, porque refleja la objeción literal del cliente validada en el argumentario.
- [x] **Casos:** la sección se omite hasta contar con un caso de Ruta IA autorizado.

Revisado contra el checklist de la guía: usted en todo el texto, "oportunidades" y nunca "casos de uso", precio completo sin "desde", sin códigos internos y sin nombres de clientes.

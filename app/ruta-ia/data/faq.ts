export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "¿Cuánto cuesta el diagnóstico Ruta IA?",
    answer:
      "Ruta IA tiene tres formatos según el tamaño y complejidad de tu empresa. Essentials va de USD 4,000 a 6,000, pensado para hasta 1 unidad de negocio. Standard, el más solicitado, va de USD 9,000 a 12,000 para 1 a 2 unidades de negocio con revisión de arquitectura de datos incluida. Enterprise, para organizaciones con múltiples unidades de negocio, se cotiza en la llamada de discovery según el alcance específico. En todos los casos el pago se divide en 30% al firmar y 70% contra entrega, y el 50% de la inversión se acredita contra un proyecto de implementación contratado dentro de los 90 días posteriores.",
  },
  {
    question: "¿Cuánto dura el proceso de diagnóstico?",
    answer:
      "El diagnóstico toma entre 2 y 3 semanas según el tier: Essentials se completa en 2 semanas, mientras que Standard y Enterprise toman 3 semanas (Enterprise con equipo extendido). El proceso tiene 4 fases: Pre-kickoff (identificación de entrevistados y documentación previa), Descubrimiento (entrevistas técnicas y revisión documental), Análisis y validación (scoring de las 6 dimensiones y validación de hallazgos), y Síntesis y entrega (presentación ejecutiva al C-level). Después de la entrega, Cabana Data da seguimiento durante 30 días adicionales para asegurar que el roadmap se traduzca en decisiones, no en un PDF archivado.",
  },
  {
    question: "¿Necesito dar acceso a mis sistemas productivos durante el diagnóstico?",
    answer:
      "No. La fase de Descubrimiento se ejecuta mediante entrevistas técnicas con tu equipo y revisión de documentación existente, sin necesidad de acceso a sistemas productivos. Esto hace que el proceso sea no invasivo para tu operación diaria: tu equipo participa en sesiones agendadas de antemano (identificadas junto a tu sponsor en la fase Pre-kickoff), pero no se requiere abrir credenciales ni integrar herramientas de monitoreo en tu infraestructura real durante esta etapa inicial.",
  },
  {
    question: "¿Qué pasa con el dinero invertido en Ruta IA si luego contratamos una implementación?",
    answer:
      "El 50% de la inversión realizada en el diagnóstico Ruta IA se acredita contra un proyecto de implementación (consultoría de datos, ingeniería de datos, aplicaciones a la medida o IA en producción) contratado con Cabana Data dentro de los 90 días posteriores a la entrega del reporte. Esto significa que el diagnóstico no es un gasto aislado: si tu organización decide avanzar con las recomendaciones del roadmap, la mitad de lo invertido en Ruta IA reduce directamente el costo del siguiente proyecto.",
  },
  {
    question: "¿Qué recibo exactamente al final del diagnóstico?",
    answer:
      "Los entregables varían por tier. Essentials incluye un reporte de madurez de 12-18 páginas, un roadmap a 12 meses, el top 3 de casos de uso viables y el top 5 de remediaciones priorizadas. Standard agrega un reporte ejecutivo de 25-40 páginas, roadmap a 18 meses, un backlog de 5 a 7 casos de uso con prerrequisitos identificados, y una presentación formal a nivel C-level con grabación. Enterprise extiende esto a un reporte de 40-60 páginas, roadmap a 24 meses, análisis comparativo entre unidades de negocio y un business case ejecutivo. En todos los casos, el objetivo es un plan accionable, no un documento genérico.",
  },
  {
    question: "¿Cómo sé cuál tier de Ruta IA aplica a mi empresa?",
    answer:
      "No tienes que decidirlo tú solo. En la llamada de discovery inicial, Cabana Data evalúa el número de unidades de negocio involucradas, la complejidad de tu arquitectura de datos actual y el alcance de las iniciativas de IA que estás considerando, y con base en eso recomienda si Essentials, Standard o Enterprise se ajusta mejor a tu caso. Empresas medianas evaluando IA por primera vez suelen encajar en Essentials o Standard; corporativos multi-país o multi-área con necesidad de alinear inversión a nivel de comité directivo suelen requerir Enterprise.",
  },
];

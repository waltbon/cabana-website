export interface Dimension {
  num: string;
  title: string;
  question: string;
  description: string;
}

export const dimensions: Dimension[] = [
  {
    num: "01",
    title: "Calidad e integridad de datos",
    question: "¿Tus datos son confiables, completos y consistentes?",
    description:
      "La calidad de datos es el fundamento de cualquier iniciativa de IA: sin datos confiables, completos y consistentes, ningún modelo puede producir resultados útiles, sin importar qué tan sofisticado sea su algoritmo. En esta dimensión evaluamos la cobertura de tus fuentes de datos, la consistencia entre sistemas (si el mismo dato significa lo mismo en CRM, ERP y data warehouse), y la frecuencia de problemas como duplicación de registros, valores nulos no gestionados y discrepancias de formato. También revisamos si existe un proceso de validación de calidad antes de que los datos lleguen a producción, o si los errores se descubren solo cuando ya afectaron un reporte o modelo. El resultado es un diagnóstico claro de qué tan lista está tu base de datos para soportar decisiones automatizadas — antes de invertir en modelos que heredarían esos mismos problemas.",
  },
  {
    num: "02",
    title: "Infraestructura y pipelines",
    question: "¿Tu arquitectura soporta cargas de IA en producción?",
    description:
      "La infraestructura de datos determina si un modelo de IA puede pasar de un experimento en notebook a un sistema confiable en producción. En esta dimensión revisamos tu stack completo: dónde y cómo se almacenan los datos, qué tan automatizada está la orquestación de pipelines, la latencia entre que un dato se genera y está disponible para consumo, y la capacidad de tu arquitectura para escalar ante picos de demanda sin degradar el servicio. También evaluamos la resiliencia — qué pasa cuando un pipeline falla, si hay monitoreo y alertas — y la deuda técnica acumulada en integraciones ad hoc. Muchas organizaciones tienen modelos que funcionan bien en pruebas pero colapsan en producción porque la infraestructura nunca fue diseñada para cargas reales y continuas — un riesgo que identificamos antes de que se materialice en producción.",
  },
  {
    num: "03",
    title: "Gobernanza y privacidad",
    question: "¿Tienes control sobre quién accede y cómo se usan tus datos?",
    description:
      "La gobernanza de datos define quién puede acceder a qué información, bajo qué condiciones, y cómo se garantiza que ese acceso sea trazable y auditable. En esta dimensión auditamos tus controles de acceso, tus políticas de retención y eliminación de datos, y tu nivel de cumplimiento frente a marcos regulatorios como GDPR, CCPA o leyes locales de protección de datos. También revisamos los mecanismos de trazabilidad — si puedes responder con certeza quién usó qué dato, cuándo y para qué propósito. Una gobernanza débil no solo representa un riesgo legal: también genera fricción interna, ya que equipos de negocio y de tecnología dudan en avanzar con iniciativas de IA cuando no está claro quién es responsable de los datos que las alimentan. Resolver esto antes de invertir en IA evita retrabajos costosos más adelante.",
  },
  {
    num: "04",
    title: "Madurez de procesos",
    question: "¿Tus procesos están documentados y son reproducibles?",
    description:
      "Un modelo de IA no opera en el vacío: se apoya en procesos de negocio que deben estar documentados, ser reproducibles y tener puntos de control claros. En esta dimensión analizamos qué tan documentados están tus flujos de trabajo clave, qué nivel de automatización tienen frente a tareas manuales repetitivas, y si un proceso puede ejecutarse de forma consistente sin depender del conocimiento tácito de una sola persona. También evaluamos la trazabilidad de decisiones dentro de esos procesos. Los procesos manuales, no documentados o dependientes de una persona clave son uno de los mayores obstáculos para escalar IA, porque cualquier automatización construida sobre un proceso inconsistente hereda esa misma inconsistencia — y falla de forma impredecible en producción. Documentar esto a tiempo evita reconstruir el proceso dos veces.",
  },
  {
    num: "05",
    title: "Estrategia y casos de uso de IA",
    question: "¿Saben para qué quieren IA — y tienen presupuesto para ejecutarlo?",
    description:
      "Antes de construir cualquier solución de IA, una organización necesita claridad sobre para qué la quiere y cómo va a medir si funcionó. En esta dimensión evaluamos si existe una visión priorizada de casos de uso — cuáles resuelven un problema real de negocio y cuáles son solo experimentos sin dueño claro — y si esos casos de uso tienen criterios de éxito definidos desde el inicio, no después de implementados. También revisamos la alineación entre el área técnica y el negocio, y si existe presupuesto asignado específicamente para ejecutar, no solo para explorar. La ausencia de esta claridad estratégica es una de las causas más comunes por las que proyectos técnicamente exitosos nunca llegan a generar valor medible para el negocio. Priorizar bien estos casos de uso, antes de construir, es lo que separa un piloto de un proyecto con retorno real.",
  },
  {
    num: "06",
    title: "Talento y capacidad organizacional",
    question: "¿Quién va a operar, mantener y evolucionar esto?",
    description:
      "La tecnología de IA es solo una parte de la ecuación: alguien tiene que operarla, mantenerla y evolucionarla en el tiempo. En esta dimensión mapeamos las capacidades actuales de tu equipo — qué roles existen, qué brechas de conocimiento hay entre lo que se necesita y lo que se tiene — y si existe una estructura organizacional clara de quién es responsable de cada parte del ciclo de vida de un sistema de IA. También evaluamos la dependencia de proveedores externos frente a la capacidad interna real de sostener la operación a largo plazo. Un modelo sin un equipo capaz de monitorearlo, ajustarlo y responder cuando algo falla se convierte rápidamente en un pasivo técnico en lugar de un activo. Esta dimensión determina si tu organización puede sostener la IA en el tiempo, no solo lanzarla una vez.",
  },
];

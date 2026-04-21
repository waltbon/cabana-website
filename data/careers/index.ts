export interface Career {
  id: string;
  title: string;
  location: string;
  modality: string;
  level: string;
  department: string;
  shortDescription: string;
  intro: string;
  responsibilities: string[];
  requirements: string[];
  differentiators: string[];
  benefits: string[];
  selectionProcess: string[];
  active: boolean;
}

export const getCareerById = (id: string): Career | null => {
  return CAREERS.find((c) => c.id === id) || null;
};

export const getCareerIds = (): string[] => {
  return CAREERS.map((c) => c.id);
};

export const CAREERS: Career[] = [
  {
    id: "career-pm-01",
    title: "Delivery Lead / IT Account Manager",
    location: "Costa Rica",
    modality: "Remoto",
    level: "Mid-Level",
    department: "Operaciones y Clientes",
    shortDescription:
      "El puente entre nuestros clientes y nuestros equipos técnicos — alguien que entienda lo suficiente de tecnología para participar en decisiones reales.",
    intro:
      "En Cabana Data acompañamos a nuestros clientes en todo el ciclo de vida de sus soluciones tecnológicas: desde la definición técnica hasta la entrega, el soporte y la evolución continua. Trabajamos rápido, con estándares altos, y con clientes que eventualmente aprenden a hablar de tú a tú con nosotros en lo técnico.",
    responsibilities: [
      "Gestionar una cartera de 4 a 6 cuentas simultáneas: implementaciones de software, soporte continuo, consultoría técnica y desarrollo a la medida.",
      "Ser el punto de contacto principal para tus clientes — desde el kick-off hasta el cierre, y en todo lo que venga después.",
      "Participar activamente en decisiones técnicas del día a día junto al equipo de desarrollo: estimaciones, cambios de scope, integraciones, despliegues.",
      "Traducir requerimientos del cliente en criterios claros para el equipo, y avances técnicos en lenguaje ejecutivo para el cliente.",
      "Sostener conversaciones difíciles con madurez: retrasos, cambios de scope, expectativas mal alineadas, clientes bajo presión.",
    ],
    requirements: [
      "2 a 6 años gestionando proyectos tecnológicos con clientes externos — no solo proyectos internos.",
      "Criterio técnico funcional: APIs, ciclos de desarrollo ágil, pruebas (unitarias, UAT, integración), ETLs, dashboards. No necesitás codificar, pero sí entender el costo real de las decisiones.",
      "Capacidad de decirle \"no\" a un cliente con diplomacia — y de mantenerte firme cuando la conversación se pone tensa.",
      "Disciplina de seguimiento sin que nadie te lo pida: actualizaciones de estado, gestión de riesgos, control de scope.",
      "Mentalidad de co-dueño del resultado, no de ejecutor de tareas.",
      "Herramientas de gestión (ClickUp, Jira, Asana o similares).",
    ],
    differentiators: [
      "Has creado procesos de gestión en entornos donde no existían.",
      "Podés moverte con comodidad entre una llamada con un gerente del cliente y una sesión de estimación con el equipo técnico.",
      "Aprendés rápido cuando el contexto lo exige — con o sin un curso formal.",
      "Tenés criterio para saber cuándo escalar y cuándo resolver por tu cuenta.",
    ],
    benefits: [
      "Trabajo 100% remoto desde Costa Rica",
      "Un rol con alto impacto y visibilidad directa en la dirección de la empresa",
      "La oportunidad de construir procesos desde cero — con autonomía real",
      "Un equipo técnico comprometido, que va rápido y tiene estándares altos",
      "Compensación competitiva acorde a experiencia",
    ],
    selectionProcess: [
      "Revisión de CV",
      "Entrevista de fit cultural (30 min)",
      "Caso práctico con escenarios reales — enviado con anticipación",
      "Entrevista con el equipo + presentación del caso",
      "Oferta",
    ],
    active: true,
  },
];

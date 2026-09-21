export interface Profile {
  role: string;
  description: string;
}

export const profiles: Profile[] = [
  {
    role: "CTO / Director de Tecnología",
    description:
      "Necesitas saber qué arreglar primero en tu infraestructura de datos antes de comprometer presupuesto en IA — y necesitas un diagnóstico que no le tema a las conversaciones difíciles con el negocio.",
  },
  {
    role: "COO / Director de Operaciones",
    description:
      "Quieres entender el gap entre donde estás y donde necesitas estar — en lenguaje de negocio, no en jerga técnica. Y necesitas claridad sobre el riesgo operativo de invertir en IA sobre una base no preparada.",
  },
  {
    role: "Data Leader / Head of Analytics",
    description:
      "Sabes que hay deuda técnica y gaps de gobernanza. Necesitas que alguien los documente formalmente y te ayude a priorizarlos frente al comité ejecutivo.",
  },
  {
    role: "Empresa de tecnología",
    description:
      "Necesitas un partner técnico que valide tu infraestructura antes de ofrecer capacidades de IA a tus clientes — con el respaldo de una metodología certificable.",
  },
];

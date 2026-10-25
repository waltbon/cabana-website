export type MenuChild =
  | string
  | { href: string; children: Record<string, string> };

export type MenuChildren = Record<string, MenuChild>;

export type MenuItem =
  | string
  | { href: string; children: MenuChildren };

export const mainMenu: Record<string, MenuItem> = {
  home: "/",
  about: "/about",
  capabilities: {
    href: "/capacidades",
    children: {
      dataConsulting: "/capacidades/consultoria-de-datos",
      dataEngineering: "/capacidades/ingenieria-de-datos",
      digitalProduct: "/capacidades/producto-digital",
      customAiAgents: "/capacidades/agentes-ia-a-medida",
    },
  },
  // caseStudies: "/case-studies",
  // careers: "/careers",
  blog: "/posts",
  contact: "/contact",
};

export const contentMenu = {
  categories: "/posts/categories",
  tags: "/posts/tags",
  authors: "/posts/authors",
};

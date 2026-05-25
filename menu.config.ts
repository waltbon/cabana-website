export type MenuChildren = Record<string, string>;

export type MenuItem =
  | string
  | { href: string; children: MenuChildren };

export const mainMenu: Record<string, MenuItem> = {
  home: "/",
  about: "/about",
  services: {
    href: "/services",
    children: {
      dataStrategy: "/services/data-strategy",
      aiReadinessAssessment: "/services/ai-readiness-assessment",
    },
  },
  caseStudies: "/case-studies",
  careers: "/careers",
  blog: "/posts",
  contact: "/contact",
};

export const contentMenu = {
  categories: "/posts/categories",
  tags: "/posts/tags",
  authors: "/posts/authors",
};

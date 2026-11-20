export type MenuChild =
  | string
  | { href: string; children: Record<string, string> };

export type MenuChildren = Record<string, MenuChild>;

export type MenuItem =
  | string
  | { href: string; children: MenuChildren };

export const mainMenu: Record<string, MenuItem> = {
  home: "/",
  about: "/como-trabajamos",
  whatWeDo: "/lo-que-hacemos",
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

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
  services: {
    href: "/services",
    children: {
      dataConsulting: {
        href: "/services/data-consulting",
        children: {
          dataHealthCheck: "/services/data-health-check",
          dataAnalyticsUseCase: "/services/data-analytics-use-case",
        },
      },
      digitalProduct: {
        href: "/services/digital-product",
        children: {
          productDesignDiscovery: "/services/product-design-discovery",
          applicationDevelopment: "/services/application-development",
          dashboardsAnalyticsInterfaces:
            "/services/dashboards-analytics-interfaces",
        },
      },
      dataEngineering: "/services/data-engineering",
      customAIAgents: "/services/custom-ai-agents",
      aiReadinessAssessment: "/services/ai-readiness-assessment",
    },
  },
  // caseStudies: "/case-studies",
  careers: "/careers",
  blog: "/posts",
  contact: "/contact",
};

export const contentMenu = {
  categories: "/posts/categories",
  tags: "/posts/tags",
  authors: "/posts/authors",
};

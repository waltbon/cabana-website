import { siteConfig } from "@/site.config";
import { CAPABILITIES_PATH, localePath } from "./config";

type Crumb = { name: string; path: string };

export function breadcrumbSchema(locale: string, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${siteConfig.site_domain}${localePath(locale, c.path)}`,
    })),
  };
}

export function serviceSchema({
  locale,
  name,
  serviceType,
  description,
  slug,
}: {
  locale: string;
  name: string;
  serviceType: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${siteConfig.site_domain}${localePath(locale, `${CAPABILITIES_PATH}/${slug}`)}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.site_name,
      url: siteConfig.site_domain,
    },
    areaServed: ["Costa Rica", "Latinoamérica"],
  };
}

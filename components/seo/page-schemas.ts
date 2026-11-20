import { siteConfig } from "@/site.config";
import { localePath } from "@/components/capacidades/config";

type Crumb = { name: string; path: string };
type Faq = { question: string; answer: string };

const domain = siteConfig.site_domain;

export function breadcrumbList(locale: string, crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${domain}${localePath(locale, c.path)}`,
    })),
  };
}

export function faqPage(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export const providerOrganization = {
  "@type": "Organization",
  name: "Cabana Data",
  url: domain,
};

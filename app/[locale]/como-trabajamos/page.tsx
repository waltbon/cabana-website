import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/site.config";
import { JsonLd } from "@/components/capacidades/json-ld";
import { localePath } from "@/components/capacidades/config";
import { localizedHref } from "@/lib/localized-paths";
import {
  HeroSection,
  SystemsApprovalSection,
  JourneySection,
  NotDoSection,
  TeamSection,
  FounderSection,
  CTASection,
} from "./_components";

// Spanish path; the English route (/en/how-we-work) re-exports this page (D-009)
const PATH = "/como-trabajamos";

function pagePath(locale: string) {
  return localePath(locale, localizedHref(PATH, locale));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "comoTrabajamos.meta" });
  const url = `${siteConfig.site_domain}${pagePath(locale)}`;

  return {
    // The copy's title already ends in "| Cabana Data"; skip the layout template
    title: { absolute: t("title") },
    description: t("description"),
    alternates: {
      canonical: pagePath(locale),
      languages: {
        es: pagePath("es"),
        en: pagePath("en"),
        "x-default": pagePath("es"),
      },
    },
    openGraph: { title: t("ogTitle"), description: t("ogDescription"), url },
    twitter: { title: t("ogTitle"), description: t("ogDescription") },
  };
}

export default async function ComoTrabajamosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [tMeta, tHero] = await Promise.all([
    getTranslations({ locale, namespace: "comoTrabajamos.meta" }),
    getTranslations({ locale, namespace: "comoTrabajamos.hero" }),
  ]);
  const domain = siteConfig.site_domain;
  const pageUrl = `${domain}${pagePath(locale)}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: tMeta("title"),
      description: tMeta("description"),
      url: pageUrl,
      inLanguage: locale,
      about: [
        { name: "Ruta IA", path: "/ruta-ia" },
        { name: "AI First Move", path: localePath(locale, "/ai-first-move") },
      ].map(({ name, path }) => ({ "@type": "Service", name, url: `${domain}${path}` })),
      publisher: { "@type": "Organization", "@id": `${domain}/#organization`, name: siteConfig.site_name },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: tMeta("breadcrumbHome"), item: `${domain}${localePath(locale)}` },
        { "@type": "ListItem", position: 2, name: tHero("eyebrow"), item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <JsonLd schemas={schemas} />
      <HeroSection />
      <SystemsApprovalSection />
      <JourneySection />
      <NotDoSection />
      <TeamSection />
      <FounderSection />
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/site.config";
import { CTASection } from "@/components/capacidades/cta-section";
import { JsonLd } from "@/components/capacidades/json-ld";
import { capabilitiesMetadata } from "@/components/capacidades/metadata";
import { localePath } from "@/components/capacidades/config";
import {
  breadcrumbList,
  faqPage,
  providerOrganization,
} from "@/components/seo/page-schemas";
import {
  AREAS,
  getArea,
  AreaHero,
  MomentSection,
  ChangeSection,
  ServicesSection,
  ProcessSection,
  CaseSection,
  BridgeSection,
  FaqSection,
} from "./_components";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map(({ slug }) => ({ area: slug }));
}

type Params = { params: Promise<{ locale: string; area: string }> };

const pathOf = (slug: string) => `/lo-que-hacemos/${slug}`;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, area: slug } = await params;
  if (!getArea(slug)) return {};
  return capabilitiesMetadata(locale, `areasImpacto.${slug}.meta`, pathOf(slug));
}

export default async function AreaPage({ params }: Params) {
  const { locale, area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const [t, tHub] = await Promise.all([
    getTranslations({ locale, namespace: `areasImpacto.${area.slug}` }),
    getTranslations({ locale, namespace: "loQueHacemos" }),
  ]);
  const name = t("hero.eyebrow");

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      serviceType: name,
      description: t("meta.description"),
      url: `${siteConfig.site_domain}${localePath(locale, pathOf(area.slug))}`,
      provider: providerOrganization,
      areaServed: ["Costa Rica", "Latinoamérica"],
    },
    faqPage(t.raw("faq")),
    breadcrumbList(locale, [
      { name: tHub("breadcrumbHome"), path: "" },
      { name: tHub("breadcrumb"), path: "/lo-que-hacemos" },
      { name, path: pathOf(area.slug) },
    ]),
  ];

  return (
    <>
      <JsonLd schemas={schemas} />
      <AreaHero area={area} />
      <MomentSection slug={area.slug} />
      <ChangeSection area={area} />
      <ServicesSection slug={area.slug} />
      <ProcessSection slug={area.slug} />
      <CaseSection slug={area.slug} />
      <BridgeSection slug={area.slug} />
      <FaqSection slug={area.slug} />
      <CTASection namespace={`areasImpacto.${area.slug}.cta`} />
    </>
  );
}

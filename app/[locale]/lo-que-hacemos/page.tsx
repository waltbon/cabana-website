import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/site.config";
import { CTASection } from "@/components/capacidades/cta-section";
import { JsonLd } from "@/components/capacidades/json-ld";
import { capabilitiesMetadata } from "@/components/capacidades/metadata";
import { localePath } from "@/components/capacidades/config";
import { breadcrumbList, faqPage } from "@/components/seo/page-schemas";
import {
  HeroSection,
  AreasSection,
  StartSection,
  MethodSection,
  StackSection,
  FaqSection,
} from "./_components";
import { AREAS } from "./[area]/_components/areas";

const PATH = "/lo-que-hacemos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return capabilitiesMetadata(locale, "loQueHacemos.meta", PATH);
}

export default async function LoQueHacemosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "loQueHacemos" });
  const areas = t.raw("areas.items") as { name: string }[];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: t("meta.title"),
      description: t("meta.description"),
      url: `${siteConfig.site_domain}${localePath(locale, PATH)}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: AREAS.map(({ slug }, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: areas[i].name,
            url: `${siteConfig.site_domain}${localePath(locale, `${PATH}/${slug}`)}`,
          },
        })),
      },
    },
    faqPage(t.raw("faq")),
    breadcrumbList(locale, [
      { name: t("breadcrumbHome"), path: "" },
      { name: t("breadcrumb"), path: PATH },
    ]),
  ];

  return (
    <>
      <JsonLd schemas={schemas} />
      <HeroSection />
      <AreasSection />
      <StartSection />
      <MethodSection />
      <StackSection />
      <FaqSection />
      <CTASection namespace="loQueHacemos.cta" />
    </>
  );
}

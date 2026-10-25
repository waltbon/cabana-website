import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/site.config";
import { JsonLd } from "@/components/capacidades/json-ld";
import { capabilitiesMetadata } from "@/components/capacidades/metadata";
import { breadcrumbSchema } from "@/components/capacidades/schemas";
import {
  CAPABILITIES,
  CAPABILITIES_PATH,
  localePath,
} from "@/components/capacidades/config";
import { PricingSection } from "@/components/capacidades/pricing-section";
import { CTASection } from "@/components/capacidades/cta-section";
import { HeroSection } from "./_components/hero-section";
import { CapabilitiesGrid } from "./_components/capabilities-grid";
import { BridgeSection } from "./_components/bridge-section";
import { StackSection } from "./_components/stack-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return capabilitiesMetadata(locale, "capacidades.meta", CAPABILITIES_PATH);
}

export default async function CapacidadesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "capacidades" });
  const items = t.raw("items") as { name: string }[];
  const pageUrl = `${siteConfig.site_domain}${localePath(locale, CAPABILITIES_PATH)}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: t("meta.breadcrumb"),
      description: t("meta.description"),
      url: pageUrl,
      hasPart: CAPABILITIES.map(({ slug }, i) => ({
        "@type": "Service",
        name: items[i].name,
        url: `${siteConfig.site_domain}${localePath(locale, `${CAPABILITIES_PATH}/${slug}`)}`,
      })),
    },
    breadcrumbSchema(locale, [
      { name: t("meta.breadcrumbHome"), path: "" },
      { name: t("meta.breadcrumb"), path: CAPABILITIES_PATH },
    ]),
  ];

  return (
    <>
      <JsonLd schemas={schemas} />
      <HeroSection />
      <CapabilitiesGrid />
      <BridgeSection />
      <StackSection />
      <PricingSection />
      <CTASection />
    </>
  );
}

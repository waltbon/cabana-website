import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/site.config";
import { JsonLd } from "@/components/capacidades/json-ld";
import { localePath } from "@/components/capacidades/config";
import { CTASection } from "@/components/capacidades/cta-section";
import { HeroSection } from "./_components/hero-section";
import { ClientsSection } from "./_components/clients-section";
import { SymptomsSection } from "./_components/symptoms-section";
import { JourneySection } from "./_components/journey-section";
import { ServicesSection } from "./_components/services-section";
import { MethodSection } from "./_components/method-section";
import { CasesSection } from "./_components/cases-section";
import { CapabilitiesSection } from "./_components/capabilities-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "inicio.meta" });
  const url = `${siteConfig.site_domain}${localePath(locale)}`;

  return {
    // The copy's title already ends in "| Cabana Data"; skip the layout template
    title: { absolute: t("title") },
    description: t("description"),
    alternates: {
      canonical: localePath(locale),
      languages: { es: localePath("es"), en: localePath("en") },
    },
    openGraph: { title: t("ogTitle"), description: t("ogDescription"), url },
    twitter: { title: t("ogTitle"), description: t("ogDescription") },
  };
}

// Extends the layout's Organization node (same @id) with the home entity data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.site_domain}/#organization`,
  name: siteConfig.site_name,
  url: siteConfig.site_domain,
  logo: `${siteConfig.site_domain}/logo-horizontal-light.svg`,
  foundingDate: "2021",
  email: siteConfig.site_email,
  telephone: siteConfig.site_phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San José",
    addressCountry: "CR",
  },
  areaServed: ["Costa Rica", "Latinoamérica"],
  makesOffer: [
    { name: "Ruta IA", path: "/ruta-ia" },
    { name: "AI First Move", path: "/ai-first-move" },
  ].map(({ name, path }) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      url: `${siteConfig.site_domain}${path}`,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd schemas={[organizationSchema]} />
      <HeroSection />
      <ClientsSection />
      <SymptomsSection />
      <JourneySection />
      <ServicesSection />
      <MethodSection />
      <CasesSection />
      <CapabilitiesSection />
      <CTASection namespace="inicio.cta" className="bg-section-light" />
    </>
  );
}

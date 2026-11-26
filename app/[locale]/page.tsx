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
import { WhatWeDoSection } from "./_components/what-we-do-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "inicio.meta" });
  const url = `${siteConfig.site_domain}${localePath(locale)}`;

  return {
    // Home title is the guide's term alone (GUIA-TONO v2, <= 60 chars); skip the layout template
    title: { absolute: t("title") },
    description: t("description"),
    alternates: {
      canonical: localePath(locale),
      languages: {
        es: localePath("es"),
        en: localePath("en"),
        "x-default": localePath("es"),
      },
    },
    openGraph: { title: t("ogTitle"), description: t("ogDescription"), url },
    twitter: { title: t("ogTitle"), description: t("ogDescription") },
  };
}

// Extends the layout's Organization node (same @id) with the home entity data
const buildOrganizationSchema = (description: string) => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.site_domain}/#organization`,
  name: siteConfig.site_name,
  description,
  url: siteConfig.site_domain,
  logo: `${siteConfig.site_domain}/logo-horizontal-light.svg`,
  foundingDate: "2018",
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
    // The five impact areas of /lo-que-hacemos (copy 6M-02.0)
    { name: "Modernización de datos", path: "/lo-que-hacemos/modernizacion-de-datos" },
    { name: "Conocimiento empresarial disponible", path: "/lo-que-hacemos/conocimiento-empresarial" },
    { name: "Ciencia de datos y machine learning", path: "/lo-que-hacemos/ciencia-de-datos-y-machine-learning" },
    { name: "Automatización con agentes de IA", path: "/lo-que-hacemos/automatizacion-con-agentes-de-ia" },
    { name: "Productos digitales con IA integrada", path: "/lo-que-hacemos/productos-digitales" },
  ].map(({ name, path }) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      url: `${siteConfig.site_domain}${path}`,
    },
  })),
});

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tFooter = await getTranslations({ locale, namespace: "footer" });

  return (
    <>
      <JsonLd schemas={[buildOrganizationSchema(tFooter("tagline"))]} />
      <HeroSection />
      <SymptomsSection />
      <JourneySection />
      <ServicesSection />
      <WhatWeDoSection />
      <CasesSection />
      <MethodSection />
      <ClientsSection />
      <CTASection namespace="inicio.cta" className="bg-section-light" />
    </>
  );
}

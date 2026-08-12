import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  HeroSection,
  ServicesGridSection,
  FAQSection,
  ContactCTASection,
} from "./_components";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ServiceWhySection } from "./_components/service-why-section";
import { ServiceGetReadySection } from "./_components/service-get-ready-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services" : `/${locale}/services`,
    },
  };
}

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Services", href: "/services" }]}
        className="sr-only"
      />
      <HeroSection />
      <ServicesGridSection />
      <ServiceWhySection />
      <ServiceGetReadySection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}

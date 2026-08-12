import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { HeroSection } from "./_components/hero-section";
import { CasesGridSection } from "./_components/cases-grid-section";
import { CTASection } from "../_components/cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "caseStudies.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/case-studies" : `/${locale}/case-studies`,
    },
  };
}

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Case Studies", href: "/case-studies" }]}
        className="sr-only"
      />
      <HeroSection />
      <CasesGridSection />
      <CTASection />
    </>
  );
}

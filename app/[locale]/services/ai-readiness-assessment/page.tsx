import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "./_components/hero-section";
import { ProblemSection } from "./_components/problem-section";
import { DimensionsSection } from "./_components/dimensions-section";
import { DeliverablesSection } from "./_components/deliverables-section";
import { TrustSignalSection } from "./_components/trust-signal-section";
import { TimelineSection } from "./_components/timeline-section";
import { PersonasSection } from "./_components/personas-section";
import { CTASection } from "./_components/cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.rutaIA.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services/ai-readiness-assessment" : `/${locale}/services/ai-readiness-assessment`,
    },
  };
}

export default function AIReadinessAssessmentPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <DimensionsSection />
      <DeliverablesSection />
      <TrustSignalSection />
      <TimelineSection />
      <PersonasSection />
      <CTASection />
    </>
  );
}

import { Metadata } from "next";
import { capabilitiesMetadata } from "@/components/capacidades/metadata";
import { capabilityPath } from "@/components/capacidades/config";
import { CapabilitySchemas } from "@/components/capacidades/capability-page";
import { CapabilityHero } from "@/components/capacidades/capability-hero";
import { ProblemsSection } from "@/components/capacidades/problems-section";
import { ServicesSection } from "@/components/capacidades/services-section";
import { PricingSection } from "@/components/capacidades/pricing-section";
import { CTASection } from "@/components/capacidades/cta-section";
import { CaseSection } from "@/components/capacidades/case-section";
import { FaqSection } from "@/components/capacidades/faq-section";
import { getTranslations } from "next-intl/server";
import {
  BrainCircuit,
  ChartColumn,
  DatabaseZap,
  Sheet,
  ShieldCheck,
  TrendingDown,
  TriangleAlert,
  Unplug,
  Warehouse,
  Workflow,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return capabilitiesMetadata(
    locale,
    "capacidades.dataEngineering.meta",
    capabilityPath("dataEngineering"),
  );
}

export default async function DataEngineeringPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "capacidades.dataEngineering" });

  return (
    <>
      <CapabilitySchemas locale={locale} capability="dataEngineering" />
      <CapabilityHero capability="dataEngineering" secondaryHref="#caso" />
      <ProblemsSection
        capability="dataEngineering"
        icons={[Unplug, Sheet, TrendingDown, TriangleAlert]}
      />
      <ServicesSection
        capability="dataEngineering"
        icons={[Warehouse, Workflow, ChartColumn, BrainCircuit]}
        proofIcon={DatabaseZap}
        proofKey="proof"
        showStack
      />
      <CaseSection
        capability="dataEngineering"
        footnote={t("how")}
        footnoteIcon={ShieldCheck}
      />
      <FaqSection capability="dataEngineering" />
      <PricingSection />
      <CTASection />
    </>
  );
}

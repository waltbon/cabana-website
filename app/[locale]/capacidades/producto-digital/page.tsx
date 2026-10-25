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
import {
  Activity,
  GitBranch,
  PenTool,
  Puzzle,
  Smartphone,
  TriangleAlert,
  UserX,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return capabilitiesMetadata(
    locale,
    "capacidades.digitalProduct.meta",
    capabilityPath("digitalProduct"),
  );
}

export default async function DigitalProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <CapabilitySchemas locale={locale} capability="digitalProduct" />
      <CapabilityHero capability="digitalProduct" secondaryHref="#caso" />
      <ProblemsSection
        capability="digitalProduct"
        icons={[UserX, Puzzle, TriangleAlert]}
      />
      <ServicesSection
        capability="digitalProduct"
        icons={[PenTool, Smartphone, Activity]}
        proofIcon={GitBranch}
        proofKey="proof"
      />
      <CaseSection capability="digitalProduct" />
      <PricingSection />
      <CTASection />
    </>
  );
}

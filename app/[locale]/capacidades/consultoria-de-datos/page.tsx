import { Metadata } from "next";
import { capabilitiesMetadata } from "@/components/capacidades/metadata";
import { capabilityPath } from "@/components/capacidades/config";
import { CapabilitySchemas } from "@/components/capacidades/capability-page";
import { CapabilityHero } from "@/components/capacidades/capability-hero";
import { ProblemsSection } from "@/components/capacidades/problems-section";
import { ServicesSection } from "@/components/capacidades/services-section";
import { PricingSection } from "@/components/capacidades/pricing-section";
import { CTASection } from "@/components/capacidades/cta-section";
import {
  CircleHelp,
  GitCompare,
  Map as MapIcon,
  Network,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";
import { VsRutaIaSection } from "./_components/vs-ruta-ia-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return capabilitiesMetadata(
    locale,
    "capacidades.dataConsulting.meta",
    capabilityPath("dataConsulting"),
  );
}

export default async function DataConsultingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <CapabilitySchemas locale={locale} capability="dataConsulting" />
      <CapabilityHero capability="dataConsulting" secondaryHref="#ruta-ia" />
      <ProblemsSection
        capability="dataConsulting"
        icons={[GitCompare, ShoppingCart, CircleHelp]}
      />
      <ServicesSection
        capability="dataConsulting"
        icons={[ShieldCheck, Network, Ruler, MapIcon]}
        proofIcon={Users}
        proofKey="how"
      />
      <VsRutaIaSection />
      <PricingSection />
      <CTASection />
    </>
  );
}

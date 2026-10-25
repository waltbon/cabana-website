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
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Bot,
  Building,
  CircleArrowRight,
  EyeOff,
  Layers,
  Plug,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { PrincipleSection } from "./_components/principle-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return capabilitiesMetadata(
    locale,
    "capacidades.customAiAgents.meta",
    capabilityPath("customAiAgents"),
  );
}

export default async function CustomAiAgentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "capacidades.customAiAgents" });

  return (
    <>
      <CapabilitySchemas locale={locale} capability="customAiAgents" />
      <CapabilityHero capability="customAiAgents" secondaryHref="#caso" />
      <ProblemsSection
        capability="customAiAgents"
        icons={[Building, Layers, EyeOff]}
      />
      <ServicesSection
        capability="customAiAgents"
        icons={[Plug, UsersRound, UserCheck]}
        proofIcon={Bot}
        proofKey="stack"
      />
      <PrincipleSection />
      <CaseSection
        capability="customAiAgents"
        footnoteIcon={CircleArrowRight}
        footnote={
          <>
            {t("bridge")}{" "}
            <Link
              href="/ai-first-move"
              className="inline-flex items-center gap-1 font-semibold text-cabana-green hover:underline"
            >
              {t("bridgeLink")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </>
        }
      />
      <FaqSection capability="customAiAgents" />
      <PricingSection />
      <CTASection />
    </>
  );
}

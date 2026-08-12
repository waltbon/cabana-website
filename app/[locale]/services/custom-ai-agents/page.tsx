import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Unplug,
  Hand,
  AlertTriangle,
  FileWarning,
  Compass,
  Bot,
  Clock,
  ShieldCheck,
  Cpu,
  Zap,
} from "lucide-react";
import { ServiceHero } from "../_components/service-hero";
import { GroundedAgent } from "../_components/illustrations/grounded-agent";
import { IconTile } from "../_components/illustrations/icon-tile";
import { DeliverablesProgress } from "../_components/illustrations/deliverables-progress";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceOfferings } from "../_components/service-offerings";
import { ServiceDeliverables } from "../_components/service-deliverables";
import { ServiceCredibility } from "../_components/service-credibility";
import { ServiceLogistics } from "../_components/service-logistics";
import { ServicePersonas } from "../_components/service-personas";
import { ContactCTASection } from "../_components/contact-cta-section";
import { FAQSection } from "../_components/faq-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.customAIAgents.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services/custom-ai-agents" : `/${locale}/services/custom-ai-agents`,
    },
  };
}

const faqKeys = [
  "needsRutaIA",
  "hallucinationRisk",
  "realExperience",
  "needsCleanData",
  "unsupervisedDecisions",
  "cost",
];

export default async function CustomAIAgentsPage() {
  const tHero = await getTranslations("services.customAIAgents.hero");
  const tProblem = await getTranslations("services.customAIAgents.problem");
  const tOfferings = await getTranslations(
    "services.customAIAgents.offerings",
  );
  const tDeliverables = await getTranslations(
    "services.customAIAgents.deliverables",
  );
  const tCredibility = await getTranslations(
    "services.customAIAgents.credibility",
  );
  const tLogistics = await getTranslations(
    "services.customAIAgents.logistics",
  );
  const tPersonas = await getTranslations("services.customAIAgents.personas");
  const tCta = await getTranslations("services.customAIAgents.cta");

  return (
    <>
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        illustration={<GroundedAgent className="h-full w-full p-12" />}
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        items={[
          {
            title: tProblem("items.dontKnowData.title"),
            description: tProblem("items.dontKnowData.description"),
            icon: Unplug,
          },
          {
            title: tProblem("items.stopsAtResponse.title"),
            description: tProblem("items.stopsAtResponse.description"),
            icon: Hand,
          },
          {
            title: tProblem("items.hallucinations.title"),
            description: tProblem("items.hallucinations.description"),
            icon: AlertTriangle,
          },
          {
            title: tProblem("items.noDataFoundation.title"),
            description: tProblem("items.noDataFoundation.description"),
            icon: FileWarning,
          },
        ]}
      />

      <ServiceOfferings
        tagline={tOfferings("tagline")}
        headlineDark={tOfferings("headlineDark")}
        headlineBlue={tOfferings("headlineBlue")}
        items={[
          {
            title: tOfferings("items.rutaIA.title"),
            whatIsIt: tOfferings("items.rutaIA.whatIsIt"),
            href: "/services/ai-readiness-assessment",
            linkLabel: tOfferings("items.rutaIA.link"),
            illustration: (
              <IconTile icon={Compass} className="h-full w-full bg-section-slate" />
            ),
          },
          {
            title: tOfferings("items.agentDevelopment.title"),
            whatIsIt: tOfferings("items.agentDevelopment.whatIsIt"),
            // TODO: page doesn't exist yet — sub-service page pending (separate handoff doc)
            href: "/services/agent-development",
            linkLabel: tOfferings("items.agentDevelopment.link"),
            illustration: (
              <IconTile icon={Bot} className="h-full w-full bg-section-slate" />
            ),
          },
        ]}
        note={tOfferings("note")}
      />

      <ServiceDeliverables
        tagline={tDeliverables("tagline")}
        headlineDark={tDeliverables("headlineDark")}
        headlineBlue={tDeliverables("headlineBlue")}
        illustration={<DeliverablesProgress className="h-full w-full p-8" />}
        items={[
          tDeliverables("items.roadmapOrAgent"),
          tDeliverables("items.realConnection"),
          tDeliverables("items.referenceCases"),
        ]}
      />

      {/*
        Credibility names a real client (MadGroup / "Dupla" agent) per the
        source doc. Doc explicitly flags: confirm MadGroup has given explicit
        approval to be named publicly before this ships — not yet confirmed
        beyond internal sign-off.
      */}
      <ServiceCredibility
        proofPoint="Dupla — MadGroup"
        icon={Bot}
        headline={tCredibility("headline")}
        description={tCredibility("description")}
      />

      <ServiceLogistics
        tagline={tLogistics("tagline")}
        items={[
          {
            label: tLogistics("items.duration.label"),
            description: tLogistics("items.duration.description"),
            icon: Clock,
          },
          {
            label: tLogistics("items.workMode.label"),
            description: tLogistics("items.workMode.description"),
            icon: ShieldCheck,
          },
        ]}
      />

      <ServicePersonas
        tagline={tPersonas("tagline")}
        headline={tPersonas("headline")}
        items={[
          {
            title: tPersonas("items.cto.title"),
            description: tPersonas("items.cto.description"),
            icon: Cpu,
          },
          {
            title: tPersonas("items.coo.title"),
            description: tPersonas("items.coo.description"),
            icon: Zap,
          },
          {
            title: tPersonas("items.noWhereToStart.title"),
            description: tPersonas("items.noWhereToStart.description"),
            icon: Compass,
          },
        ]}
      />

      <ContactCTASection
        namespace="services.customAIAgents.cta"
        cta={{ label: tCta("cta"), href: "/contact" }}
      />

      <FAQSection namespace="services.customAIAgents.faq" keys={faqKeys} />
    </>
  );
}

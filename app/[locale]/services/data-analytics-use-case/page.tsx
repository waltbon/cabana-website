import { siteConfig } from "@/site.config";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  UserX,
  ListTree,
  Hourglass,
  Sparkles,
  MessagesSquare,
  FileEdit,
  ListOrdered,
  Blocks,
  Clock,
  Users2,
  Cpu,
  Shuffle,
} from "lucide-react";
import { ServiceHero } from "../_components/service-hero";
import { DecisionPriority } from "../_components/illustrations/decision-priority";
import { DeliverablesProgress } from "../_components/illustrations/deliverables-progress";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceProcess } from "../_components/service-process";
import { ServiceDeliverables } from "../_components/service-deliverables";
import { ServiceCredibility } from "../_components/service-credibility";
import { ServiceLogistics } from "../_components/service-logistics";
import { ServicePersonas } from "../_components/service-personas";
import { ContactCTASection } from "../_components/contact-cta-section";
import { FAQSection } from "../_components/faq-section";
import { ServiceSchema } from "@/components/seo/service-schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.dataAnalyticsUseCase.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services/data-analytics-use-case" : `/${locale}/services/data-analytics-use-case`,
    },
    openGraph: {
      url: locale === "es" ? `${siteConfig.site_domain}/services/data-analytics-use-case` : `${siteConfig.site_domain}/${locale}/services/data-analytics-use-case`,
    },
  };
}

// Same booking link used on /services/ai-readiness-assessment and /services/data-consulting
const CALENDAR_URL = "https://calendar.app.google/pwhXdBodbhqfYVXNA";

const faqKeys = [
  "needsDHC",
  "replacesConsultant",
  "duration",
  "splitPhases",
  "afterRoadmap",
  "cost",
];

export default async function DataAnalyticsUseCasePage() {
  const tSeo = await getTranslations("services.dataAnalyticsUseCase.seo");
  const tHero = await getTranslations(
    "services.dataAnalyticsUseCase.hero",
  );
  const tProblem = await getTranslations(
    "services.dataAnalyticsUseCase.problem",
  );
  const tProcess = await getTranslations(
    "services.dataAnalyticsUseCase.process",
  );
  const tDeliverables = await getTranslations(
    "services.dataAnalyticsUseCase.deliverables",
  );
  const tCredibility = await getTranslations(
    "services.dataAnalyticsUseCase.credibility",
  );
  const tLogistics = await getTranslations(
    "services.dataAnalyticsUseCase.logistics",
  );
  const tPersonas = await getTranslations(
    "services.dataAnalyticsUseCase.personas",
  );
  const tCta = await getTranslations("services.dataAnalyticsUseCase.cta");

  return (
    <>
      <ServiceSchema
        name={tSeo("title")}
        description={tSeo("description")}
        path="/services/data-analytics-use-case"
      />
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        illustration={<DecisionPriority className="h-full w-full p-12" />}
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        items={[
          {
            title: tProblem("items.noOwner.title"),
            description: tProblem("items.noOwner.description"),
            icon: UserX,
          },
          {
            title: tProblem("items.everythingPriority.title"),
            description: tProblem("items.everythingPriority.description"),
            icon: ListTree,
          },
          {
            title: tProblem("items.noQuickWins.title"),
            description: tProblem("items.noQuickWins.description"),
            icon: Hourglass,
          },
          {
            title: tProblem("items.trendDriven.title"),
            description: tProblem("items.trendDriven.description"),
            icon: Sparkles,
          },
        ]}
      />

      <ServiceProcess
        tagline={tProcess("tagline")}
        headlineDark={tProcess("headlineDark")}
        headlineBlue={tProcess("headlineBlue")}
        steps={[
          {
            title: tProcess("steps.workshop.title"),
            description: tProcess("steps.workshop.description"),
            icon: MessagesSquare,
          },
          {
            title: tProcess("steps.definition.title"),
            description: tProcess("steps.definition.description"),
            icon: FileEdit,
          },
          {
            title: tProcess("steps.roadmap.title"),
            description: tProcess("steps.roadmap.description"),
            icon: ListOrdered,
          },
          {
            title: tProcess("steps.architecture.title"),
            description: tProcess("steps.architecture.description"),
            icon: Blocks,
          },
        ]}
      />

      <ServiceDeliverables
        tagline={tDeliverables("tagline")}
        headlineDark={tDeliverables("headlineDark")}
        headlineBlue={tDeliverables("headlineBlue")}
        items={[
          tDeliverables("items.card"),
          tDeliverables("items.roadmap"),
          tDeliverables("items.architecture"),
        ]}
        illustration={<DeliverablesProgress className="h-full w-full p-8" />}
      />

      <ServiceCredibility
        proofPoint="DAMA-DMBOK"
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
            icon: MessagesSquare,
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
            icon: Users2,
          },
          {
            title: tPersonas("items.scattered.title"),
            description: tPersonas("items.scattered.description"),
            icon: Shuffle,
          },
        ]}
      />

      <ContactCTASection
        namespace="services.dataAnalyticsUseCase.cta"
        cta={{ label: tCta("cta"), href: CALENDAR_URL }}
      />

      <FAQSection
        namespace="services.dataAnalyticsUseCase.faq"
        keys={faqKeys}
      />
    </>
  );
}

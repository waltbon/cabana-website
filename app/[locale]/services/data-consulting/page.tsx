import { siteConfig } from "@/site.config";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  GitCompareArrows,
  Wrench,
  Shuffle,
  Hourglass,
  Clock,
  MessagesSquare,
  Cpu,
  Users2,
  TrendingUp,
} from "lucide-react";
import { ServiceHero } from "../_components/service-hero";
import { DataConvergence } from "../_components/illustrations/data-convergence";
import { DiagnosticGrid } from "../_components/illustrations/diagnostic-grid";
import { PriorityRoadmap } from "../_components/illustrations/priority-roadmap";
import { DeliverablesProgress } from "../_components/illustrations/deliverables-progress";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceOfferings } from "../_components/service-offerings";
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
  const t = await getTranslations({ locale, namespace: "services.dataConsulting.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services/data-consulting" : `/${locale}/services/data-consulting`,
    },
    openGraph: {
      url: locale === "es" ? `${siteConfig.site_domain}/services/data-consulting` : `${siteConfig.site_domain}/${locale}/services/data-consulting`,
    },
  };
}

// Same booking link used on /services/ai-readiness-assessment
const CALENDAR_URL = "https://calendar.app.google/pwhXdBodbhqfYVXNA";

const faqKeys = [
  "whyNotBuild",
  "genericConsulting",
  "bothServices",
  "howInvasive",
  "notReady",
  "cost",
];

export default async function DataConsultingPage() {
  const tSeo = await getTranslations("services.dataConsulting.seo");
  const tHero = await getTranslations("services.dataConsulting.hero");
  const tProblem = await getTranslations("services.dataConsulting.problem");
  const tOfferings = await getTranslations("services.dataConsulting.offerings");
  const tDeliverables = await getTranslations(
    "services.dataConsulting.deliverables",
  );
  const tCredibility = await getTranslations(
    "services.dataConsulting.credibility",
  );
  const tLogistics = await getTranslations("services.dataConsulting.logistics");
  const tPersonas = await getTranslations("services.dataConsulting.personas");
  const tCta = await getTranslations("services.dataConsulting.cta");

  return (
    <>
      <ServiceSchema
        name={tSeo("title")}
        description={tSeo("description")}
        path="/services/data-consulting"
      />
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        illustration={<DataConvergence className="h-full w-full p-12" />}
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        description=""
        items={[
          {
            title: tProblem("items.decisions.title"),
            description: tProblem("items.decisions.description"),
            icon: GitCompareArrows,
          },
          {
            title: tProblem("items.tools.title"),
            description: tProblem("items.tools.description"),
            icon: Wrench,
          },
          {
            title: tProblem("items.direction.title"),
            description: tProblem("items.direction.description"),
            icon: Shuffle,
          },
          {
            title: tProblem("items.quickWins.title"),
            description: tProblem("items.quickWins.description"),
            icon: Hourglass,
          },
        ]}
      />

      <ServiceOfferings
        tagline={tOfferings("tagline")}
        headlineDark={tOfferings("headlineDark")}
        headlineBlue={tOfferings("headlineBlue")}
        items={[
          {
            title: tOfferings("items.dhc.title"),
            whatIsIt: tOfferings("items.dhc.whatIsIt"),
            href: "/services/data-health-check",
            linkLabel: tOfferings("items.dhc.link"),
            illustration: <DiagnosticGrid className="h-full w-full p-8" />,
          },
          {
            title: tOfferings("items.duc.title"),
            whatIsIt: tOfferings("items.duc.whatIsIt"),
            href: "/services/data-analytics-use-case",
            linkLabel: tOfferings("items.duc.link"),
            illustration: <PriorityRoadmap className="h-full w-full p-8" />,
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
          tDeliverables("items.diagnosis"),
          tDeliverables("items.roadmap"),
          tDeliverables("items.engineering"),
        ]}
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
            title: tPersonas("items.growth.title"),
            description: tPersonas("items.growth.description"),
            icon: TrendingUp,
          },
        ]}
      />

      <ContactCTASection
        namespace="services.dataConsulting.cta"
        cta={{ label: tCta("cta"), href: CALENDAR_URL }}
      />

      <FAQSection namespace="services.dataConsulting.faq" keys={faqKeys} />
    </>
  );
}

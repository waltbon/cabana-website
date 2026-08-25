import { siteConfig } from "@/site.config";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Network,
  FileWarning,
  AlertTriangle,
  Bug,
  Database,
  Workflow,
  FlaskConical,
  Clock,
  Eye,
  Cpu,
  Zap,
  RotateCcw,
} from "lucide-react";
import { ServiceHero } from "../_components/service-hero";
import { CentralizedPipeline } from "../_components/illustrations/centralized-pipeline";
import { DeliverablesProgress } from "../_components/illustrations/deliverables-progress";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceDimensions } from "../_components/service-dimensions";
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
  const t = await getTranslations({ locale, namespace: "services.dataEngineering.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services/data-engineering" : `/${locale}/services/data-engineering`,
    },
    openGraph: {
      url: locale === "es" ? `${siteConfig.site_domain}/services/data-engineering` : `${siteConfig.site_domain}/${locale}/services/data-engineering`,
    },
  };
}

const faqKeys = [
  "needsDHCorDUC",
  "includesDashboards",
  "whatMLTypes",
  "whoPaysCloud",
  "migrateAllAtOnce",
  "cost",
];

export default async function DataEngineeringPage() {
  const tSeo = await getTranslations("services.dataEngineering.seo");
  const tHero = await getTranslations("services.dataEngineering.hero");
  const tProblem = await getTranslations("services.dataEngineering.problem");
  const tIncludes = await getTranslations(
    "services.dataEngineering.includes",
  );
  const tDeliverables = await getTranslations(
    "services.dataEngineering.deliverables",
  );
  const tCredibility = await getTranslations(
    "services.dataEngineering.credibility",
  );
  const tLogistics = await getTranslations(
    "services.dataEngineering.logistics",
  );
  const tPersonas = await getTranslations("services.dataEngineering.personas");
  const tCta = await getTranslations("services.dataEngineering.cta");

  return (
    <>
      <ServiceSchema
        name={tSeo("title")}
        description={tSeo("description")}
        path="/services/data-engineering"
      />
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        illustration={<CentralizedPipeline className="h-full w-full p-12" />}
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        items={[
          {
            title: tProblem("items.silosDontTalk.title"),
            description: tProblem("items.silosDontTalk.description"),
            icon: Network,
          },
          {
            title: tProblem("items.manualExtraction.title"),
            description: tProblem("items.manualExtraction.description"),
            icon: FileWarning,
          },
          {
            title: tProblem("items.doesntScale.title"),
            description: tProblem("items.doesntScale.description"),
            icon: AlertTriangle,
          },
          {
            title: tProblem("items.dirtyData.title"),
            description: tProblem("items.dirtyData.description"),
            icon: Bug,
          },
        ]}
      />

      <ServiceDimensions
        tagline={tIncludes("tagline")}
        headline={tIncludes("headline")}
        note={tIncludes("note")}
        items={[
          {
            title: tIncludes("items.storage.title"),
            description: tIncludes("items.storage.description"),
            icon: Database,
          },
          {
            title: tIncludes("items.pipelines.title"),
            description: tIncludes("items.pipelines.description"),
            icon: Workflow,
          },
          {
            title: tIncludes("items.ml.title"),
            description: tIncludes("items.ml.description"),
            icon: FlaskConical,
          },
        ]}
      />

      <ServiceDeliverables
        tagline={tDeliverables("tagline")}
        headlineDark={tDeliverables("headlineDark")}
        headlineBlue={tDeliverables("headlineBlue")}
        illustration={<DeliverablesProgress className="h-full w-full p-8" />}
        items={[
          tDeliverables("items.infrastructure"),
          tDeliverables("items.pipelines"),
          tDeliverables("items.models"),
        ]}
      />

      <ServiceCredibility
        proofPoint="50+ pipelines en BigQuery"
        icon={Workflow}
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
            icon: Eye,
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
            title: tPersonas("items.mlFailed.title"),
            description: tPersonas("items.mlFailed.description"),
            icon: RotateCcw,
          },
        ]}
      />

      <ContactCTASection
        namespace="services.dataEngineering.cta"
        cta={{ label: tCta("cta"), href: "/contact" }}
      />

      <FAQSection namespace="services.dataEngineering.faq" keys={faqKeys} />
    </>
  );
}

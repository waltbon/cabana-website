import { siteConfig } from "@/site.config";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  LayoutDashboard,
  GitCompareArrows,
  Unplug,
  CircleHelp,
  Database,
  Server,
  CheckCircle2,
  KeyRound,
  Eye,
  Users2,
  Clock,
  FileText,
  Cpu,
  RotateCcw,
} from "lucide-react";
import { ServiceHero } from "../_components/service-hero";
import { DiagnosticScan } from "../_components/illustrations/diagnostic-scan";
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
  const t = await getTranslations({ locale, namespace: "services.dataHealthCheck.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services/data-health-check" : `/${locale}/services/data-health-check`,
    },
    openGraph: {
      url: locale === "es" ? `${siteConfig.site_domain}/services/data-health-check` : `${siteConfig.site_domain}/${locale}/services/data-health-check`,
    },
  };
}

// Same booking link used on /services/ai-readiness-assessment and /services/data-consulting
const CALENDAR_URL = "https://calendar.app.google/pwhXdBodbhqfYVXNA";

const faqKeys = [
  "whyDiagnose",
  "itAudit",
  "howInvasive",
  "notReady",
  "duration",
  "cost",
];

export default async function DataHealthCheckPage() {
  const tSeo = await getTranslations("services.dataHealthCheck.seo");
  const tHero = await getTranslations("services.dataHealthCheck.hero");
  const tProblem = await getTranslations("services.dataHealthCheck.problem");
  const tDimensions = await getTranslations(
    "services.dataHealthCheck.dimensions",
  );
  const tDeliverables = await getTranslations(
    "services.dataHealthCheck.deliverables",
  );
  const tCredibility = await getTranslations(
    "services.dataHealthCheck.credibility",
  );
  const tLogistics = await getTranslations(
    "services.dataHealthCheck.logistics",
  );
  const tPersonas = await getTranslations("services.dataHealthCheck.personas");
  const tCta = await getTranslations("services.dataHealthCheck.cta");

  return (
    <>
      <ServiceSchema
        name={tSeo("title")}
        description={tSeo("description")}
        path="/services/data-health-check"
      />
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        illustration={<DiagnosticScan className="h-full w-full p-12" />}
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        items={[
          {
            title: tProblem("items.dashboards.title"),
            description: tProblem("items.dashboards.description"),
            icon: LayoutDashboard,
          },
          {
            title: tProblem("items.ownTruth.title"),
            description: tProblem("items.ownTruth.description"),
            icon: GitCompareArrows,
          },
          {
            title: tProblem("items.silentFailures.title"),
            description: tProblem("items.silentFailures.description"),
            icon: Unplug,
          },
          {
            title: tProblem("items.unknownSeverity.title"),
            description: tProblem("items.unknownSeverity.description"),
            icon: CircleHelp,
          },
        ]}
      />

      <ServiceDimensions
        tagline={tDimensions("tagline")}
        headline={tDimensions("headline")}
        items={[
          {
            title: tDimensions("items.sources.title"),
            description: tDimensions("items.sources.description"),
            icon: Database,
          },
          {
            title: tDimensions("items.infrastructure.title"),
            description: tDimensions("items.infrastructure.description"),
            icon: Server,
          },
          {
            title: tDimensions("items.quality.title"),
            description: tDimensions("items.quality.description"),
            icon: CheckCircle2,
          },
          {
            title: tDimensions("items.governance.title"),
            description: tDimensions("items.governance.description"),
            icon: KeyRound,
          },
          {
            title: tDimensions("items.consumption.title"),
            description: tDimensions("items.consumption.description"),
            icon: Eye,
          },
          {
            title: tDimensions("items.team.title"),
            description: tDimensions("items.team.description"),
            icon: Users2,
          },
        ]}
      />

      <ServiceDeliverables
        tagline={tDeliverables("tagline")}
        headlineDark={tDeliverables("headlineDark")}
        headlineBlue={tDeliverables("headlineBlue")}
        items={[
          tDeliverables("items.report"),
          tDeliverables("items.remediation"),
          tDeliverables("items.roadmap"),
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
            icon: FileText,
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
            title: tPersonas("items.failedBefore.title"),
            description: tPersonas("items.failedBefore.description"),
            icon: RotateCcw,
          },
        ]}
      />

      <ContactCTASection
        namespace="services.dataHealthCheck.cta"
        cta={{ label: tCta("cta"), href: CALENDAR_URL }}
      />

      <FAQSection namespace="services.dataHealthCheck.faq" keys={faqKeys} />
    </>
  );
}

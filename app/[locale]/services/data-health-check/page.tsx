import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServiceHero } from "../_components/service-hero";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceDimensions } from "../_components/service-dimensions";
import { ServiceDeliverables } from "../_components/service-deliverables";
import { ServiceCredibility } from "../_components/service-credibility";
import { ServiceLogistics } from "../_components/service-logistics";
import { ServicePersonas } from "../_components/service-personas";
import { ContactCTASection } from "../_components/contact-cta-section";
import { FAQSection } from "../_components/faq-section";

export const metadata: Metadata = {
  title: "Cabana Data | Data Health Check",
  description:
    "Evaluamos 6 dimensiones de tu infraestructura de datos y te decimos, con evidencia, qué tan lista está tu empresa para escalar.",
  alternates: { canonical: "/services/data-health-check" },
};

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
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        imageSrc="/services/data-health-check/hero.png"
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        items={[
          {
            title: tProblem("items.dashboards.title"),
            description: tProblem("items.dashboards.description"),
          },
          {
            title: tProblem("items.ownTruth.title"),
            description: tProblem("items.ownTruth.description"),
          },
          {
            title: tProblem("items.silentFailures.title"),
            description: tProblem("items.silentFailures.description"),
          },
          {
            title: tProblem("items.unknownSeverity.title"),
            description: tProblem("items.unknownSeverity.description"),
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
          },
          {
            title: tDimensions("items.infrastructure.title"),
            description: tDimensions("items.infrastructure.description"),
          },
          {
            title: tDimensions("items.quality.title"),
            description: tDimensions("items.quality.description"),
          },
          {
            title: tDimensions("items.governance.title"),
            description: tDimensions("items.governance.description"),
          },
          {
            title: tDimensions("items.consumption.title"),
            description: tDimensions("items.consumption.description"),
          },
          {
            title: tDimensions("items.team.title"),
            description: tDimensions("items.team.description"),
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
          },
          {
            label: tLogistics("items.workMode.label"),
            description: tLogistics("items.workMode.description"),
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
          },
          {
            title: tPersonas("items.coo.title"),
            description: tPersonas("items.coo.description"),
          },
          {
            title: tPersonas("items.failedBefore.title"),
            description: tPersonas("items.failedBefore.description"),
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

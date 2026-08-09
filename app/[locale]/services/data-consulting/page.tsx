import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServiceHero } from "../_components/service-hero";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceOfferings } from "../_components/service-offerings";
import { ServiceDeliverables } from "../_components/service-deliverables";
import { ServiceCredibility } from "../_components/service-credibility";
import { ServiceLogistics } from "../_components/service-logistics";
import { ServicePersonas } from "../_components/service-personas";
import { ContactCTASection } from "../_components/contact-cta-section";
import { FAQSection } from "../_components/faq-section";

export const metadata: Metadata = {
  title: "Cabana Data | Consultoría Estratégica de Datos",
  description:
    "Evaluamos dónde estás parado y definimos qué construir primero — con evidencia, no con opinión.",
  alternates: { canonical: "/services/data-consulting" },
};

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
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        imageSrc="/services/data-consulting/hero2.png"
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
          },
          {
            title: tProblem("items.tools.title"),
            description: tProblem("items.tools.description"),
          },
          {
            title: tProblem("items.direction.title"),
            description: tProblem("items.direction.description"),
          },
          {
            title: tProblem("items.quickWins.title"),
            description: tProblem("items.quickWins.description"),
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
          },
          {
            title: tOfferings("items.duc.title"),
            whatIsIt: tOfferings("items.duc.whatIsIt"),
            // TODO: page doesn't exist yet — sub-service page pending
            href: "/services/data-analytics-use-case",
            linkLabel: tOfferings("items.duc.link"),
          },
        ]}
        note={tOfferings("note")}
      />

      <ServiceDeliverables
        tagline={tDeliverables("tagline")}
        headlineDark={tDeliverables("headlineDark")}
        headlineBlue={tDeliverables("headlineBlue")}
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
            title: tPersonas("items.growth.title"),
            description: tPersonas("items.growth.description"),
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

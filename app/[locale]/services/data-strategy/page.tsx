import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServiceHero } from "../_components/service-hero";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceSolution } from "../_components/service-solution";
import { ServiceOfferings } from "../_components/service-offerings";
import { ServiceProcess } from "../_components/service-process";

export const metadata: Metadata = {
  title: "Data Strategy & Consulting",
  description: "Data Strategy & Consulting services by Cabana Data.",
  alternates: {
    canonical: "/services/data-strategy",
  },
};

export default async function DataStrategyPage() {
  const tHero = await getTranslations("services.dataStrategy.hero");
  const tProblem = await getTranslations("services.dataStrategy.problem");
  const tSolution = await getTranslations("services.dataStrategy.solution");
  const tOfferings = await getTranslations("services.dataStrategy.offerings");
  const tProcess = await getTranslations("services.dataStrategy.process");

  return (
    <>
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        imageSrc="/services/data-strategy/hero9.png"
        imageAlt={tHero("imageAlt")}
      />
      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        description={tProblem("description")}
        items={[
          {
            title: tProblem("items.decisions.title"),
            description: tProblem("items.decisions.description"),
          },
          {
            title: tProblem("items.ideas.title"),
            description: tProblem("items.ideas.description"),
          },
        ]}
      />
      <ServiceSolution
        tagline={tSolution("tagline")}
        headlineDark={tSolution("headlineDark")}
        headlineBlue={tSolution("headlineBlue")}
        description={tSolution("description")}
        imageSrc="/services/data-strategy/solution.png"
        imageAlt={tSolution("imageAlt")}
      />
      <ServiceOfferings
        tagline={tOfferings("tagline")}
        headlineDark={tOfferings("headlineDark")}
        headlineBlue={tOfferings("headlineBlue")}
        items={[
          {
            title: tOfferings("items.aiReadiness.title"),
            whatIsIt: tOfferings("items.aiReadiness.whatIsIt"),
            whoIsItFor: tOfferings("items.aiReadiness.whoIsItFor"),
          },
          {
            title: tOfferings("items.digitalFeasibility.title"),
            whatIsIt: tOfferings("items.digitalFeasibility.whatIsIt"),
            whoIsItFor: tOfferings("items.digitalFeasibility.whoIsItFor"),
          },
          {
            title: tOfferings("items.dataHealthCheck.title"),
            whatIsIt: tOfferings("items.dataHealthCheck.whatIsIt"),
            whoIsItFor: tOfferings("items.dataHealthCheck.whoIsItFor"),
          },
          {
            title: tOfferings("items.designThinking.title"),
            whatIsIt: tOfferings("items.designThinking.whatIsIt"),
            whoIsItFor: tOfferings("items.designThinking.whoIsItFor"),
          },
        ]}
      />
      <ServiceProcess
        tagline={tProcess("tagline")}
        headlineDark={tProcess("headlineDark")}
        headlineBlue={tProcess("headlineBlue")}
        steps={[
          {
            title: tProcess("steps.discover.title"),
            description: tProcess("steps.discover.description"),
          },
          {
            title: tProcess("steps.analyze.title"),
            description: tProcess("steps.analyze.description"),
          },
          {
            title: tProcess("steps.strategize.title"),
            description: tProcess("steps.strategize.description"),
          },
          {
            title: tProcess("steps.empower.title"),
            description: tProcess("steps.empower.description"),
          },
        ]}
      />
    </>
  );
}

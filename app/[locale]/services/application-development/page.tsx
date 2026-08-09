import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Hammer,
  UserX,
  AlertTriangle,
  FileWarning,
  Server,
  MonitorSmartphone,
  UploadCloud,
  Clock,
  Layers,
  Cpu,
  Users2,
  PackageCheck,
} from "lucide-react";
import { ServiceHero } from "../_components/service-hero";
import { ArchitectureBuild } from "../_components/illustrations/architecture-build";
import { DeliverablesProgress } from "../_components/illustrations/deliverables-progress";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceDimensions } from "../_components/service-dimensions";
import { ServiceDeliverables } from "../_components/service-deliverables";
import { ServiceLogistics } from "../_components/service-logistics";
import { ServicePersonas } from "../_components/service-personas";
import { ContactCTASection } from "../_components/contact-cta-section";
import { FAQSection } from "../_components/faq-section";

export const metadata: Metadata = {
  title: "Cabana Data | Application Development",
  description:
    "Construimos aplicaciones web y móviles sobre arquitectura cloud-native, listas para crecer junto a tu operación.",
  alternates: { canonical: "/services/application-development" },
};

const faqKeys = [
  "needsDesign",
  "onlyGCP",
  "whoPaysHosting",
  "postLaunchSupport",
  "integrations",
  "cost",
];

export default async function ApplicationDevelopmentPage() {
  const tHero = await getTranslations(
    "services.applicationDevelopment.hero",
  );
  const tProblem = await getTranslations(
    "services.applicationDevelopment.problem",
  );
  const tIncludes = await getTranslations(
    "services.applicationDevelopment.includes",
  );
  const tDeliverables = await getTranslations(
    "services.applicationDevelopment.deliverables",
  );
  const tLogistics = await getTranslations(
    "services.applicationDevelopment.logistics",
  );
  const tPersonas = await getTranslations(
    "services.applicationDevelopment.personas",
  );
  const tCta = await getTranslations("services.applicationDevelopment.cta");

  return (
    <>
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        illustration={<ArchitectureBuild className="h-full w-full p-12" />}
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        items={[
          {
            title: tProblem("items.improvised.title"),
            description: tProblem("items.improvised.description"),
            icon: Hammer,
          },
          {
            title: tProblem("items.singlePerson.title"),
            description: tProblem("items.singlePerson.description"),
            icon: UserX,
          },
          {
            title: tProblem("items.manualDeploys.title"),
            description: tProblem("items.manualDeploys.description"),
            icon: AlertTriangle,
          },
          {
            title: tProblem("items.genericSoftware.title"),
            description: tProblem("items.genericSoftware.description"),
            icon: FileWarning,
          },
        ]}
      />

      <ServiceDimensions
        tagline={tIncludes("tagline")}
        headline={tIncludes("headline")}
        items={[
          {
            title: tIncludes("items.backend.title"),
            description: tIncludes("items.backend.description"),
            icon: Server,
          },
          {
            title: tIncludes("items.frontend.title"),
            description: tIncludes("items.frontend.description"),
            icon: MonitorSmartphone,
          },
          {
            title: tIncludes("items.devops.title"),
            description: tIncludes("items.devops.description"),
            icon: UploadCloud,
          },
        ]}
      />

      <ServiceDeliverables
        tagline={tDeliverables("tagline")}
        headlineDark={tDeliverables("headlineDark")}
        headlineBlue={tDeliverables("headlineBlue")}
        illustration={<DeliverablesProgress className="h-full w-full p-8" />}
        items={[
          tDeliverables("items.application"),
          tDeliverables("items.cicd"),
          tDeliverables("items.monitoring"),
        ]}
      />

      {/*
        TODO: Section 5 (Credibility) intentionally omitted.
        Source doc: "Prueba de rigor: Pendiente de definir" — no proof point
        exists yet beyond "GCP as architecture standard". Doc explicitly asks
        to evaluate candidates (cloud certifications, production project
        volume, etc.) before publishing. Do not fabricate a proof point here —
        add ServiceCredibility back once one is defined.
      */}

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
            icon: Layers,
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
            title: tPersonas("items.designReady.title"),
            description: tPersonas("items.designReady.description"),
            icon: PackageCheck,
          },
        ]}
      />

      <ContactCTASection
        namespace="services.applicationDevelopment.cta"
        cta={{ label: tCta("cta"), href: "/contact" }}
      />

      <FAQSection
        namespace="services.applicationDevelopment.faq"
        keys={faqKeys}
      />
    </>
  );
}

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  UserX,
  Zap,
  LayoutGrid,
  Frown,
  Lightbulb,
  Compass,
  Palette,
  Clock,
  Users2,
  Rocket,
  RefreshCcw,
  UserCog,
} from "lucide-react";
import { ServiceHero } from "../_components/service-hero";
import { EmpathyStructure } from "../_components/illustrations/empathy-structure";
import { DeliverablesProgress } from "../_components/illustrations/deliverables-progress";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceProcess } from "../_components/service-process";
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
  const t = await getTranslations({ locale, namespace: "services.productDesignDiscovery.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services/product-design-discovery" : `/${locale}/services/product-design-discovery`,
    },
  };
}

const faqKeys = [
  "alsoBuilds",
  "needsBrand",
  "duration",
  "realUsers",
  "ideaDoesntWork",
  "cost",
];

export default async function ProductDesignDiscoveryPage() {
  const tHero = await getTranslations(
    "services.productDesignDiscovery.hero",
  );
  const tProblem = await getTranslations(
    "services.productDesignDiscovery.problem",
  );
  const tProcess = await getTranslations(
    "services.productDesignDiscovery.process",
  );
  const tDeliverables = await getTranslations(
    "services.productDesignDiscovery.deliverables",
  );
  const tCredibility = await getTranslations(
    "services.productDesignDiscovery.credibility",
  );
  const tLogistics = await getTranslations(
    "services.productDesignDiscovery.logistics",
  );
  const tPersonas = await getTranslations(
    "services.productDesignDiscovery.personas",
  );
  const tCta = await getTranslations("services.productDesignDiscovery.cta");

  return (
    <>
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        illustration={<EmpathyStructure className="h-full w-full p-12" />}
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        items={[
          {
            title: tProblem("items.unvalidated.title"),
            description: tProblem("items.unvalidated.description"),
            icon: UserX,
          },
          {
            title: tProblem("items.skipToHiFi.title"),
            description: tProblem("items.skipToHiFi.description"),
            icon: Zap,
          },
          {
            title: tProblem("items.noDesignSystem.title"),
            description: tProblem("items.noDesignSystem.description"),
            icon: LayoutGrid,
          },
          {
            title: tProblem("items.hiddenFriction.title"),
            description: tProblem("items.hiddenFriction.description"),
            icon: Frown,
          },
        ]}
      />

      <ServiceProcess
        tagline={tProcess("tagline")}
        headlineDark={tProcess("headlineDark")}
        headlineBlue={tProcess("headlineBlue")}
        steps={[
          {
            title: tProcess("steps.designThinking.title"),
            description: tProcess("steps.designThinking.description"),
            icon: Lightbulb,
          },
          {
            title: tProcess("steps.ux.title"),
            description: tProcess("steps.ux.description"),
            icon: Compass,
          },
          {
            title: tProcess("steps.ui.title"),
            description: tProcess("steps.ui.description"),
            icon: Palette,
          },
        ]}
      />

      <ServiceDeliverables
        tagline={tDeliverables("tagline")}
        headlineDark={tDeliverables("headlineDark")}
        headlineBlue={tDeliverables("headlineBlue")}
        illustration={<DeliverablesProgress className="h-full w-full p-8" />}
        items={[
          tDeliverables("items.prototypes"),
          tDeliverables("items.designSystem"),
          tDeliverables("items.userFlows"),
        ]}
      />

      <ServiceCredibility
        proofPoint="Design Thinking"
        icon={Lightbulb}
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
            icon: Users2,
          },
        ]}
      />

      <ServicePersonas
        tagline={tPersonas("tagline")}
        headline={tPersonas("headline")}
        items={[
          {
            title: tPersonas("items.newProduct.title"),
            description: tPersonas("items.newProduct.description"),
            icon: Rocket,
          },
          {
            title: tPersonas("items.redesign.title"),
            description: tPersonas("items.redesign.description"),
            icon: RefreshCcw,
          },
          {
            title: tPersonas("items.noDesigner.title"),
            description: tPersonas("items.noDesigner.description"),
            icon: UserCog,
          },
        ]}
      />

      <ContactCTASection
        namespace="services.productDesignDiscovery.cta"
        cta={{ label: tCta("cta"), href: "/contact" }}
      />

      <FAQSection
        namespace="services.productDesignDiscovery.faq"
        keys={faqKeys}
      />
    </>
  );
}

import { siteConfig } from "@/site.config";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Ghost,
  ClipboardX,
  MonitorX,
  ShieldQuestion,
  Clock,
  Users2,
  Cpu,
  RefreshCcw,
  Lightbulb,
} from "lucide-react";
import { ServiceHero } from "../_components/service-hero";
import { LegacyRebuild } from "../_components/illustrations/legacy-rebuild";
import { DiscoveryPrototype } from "../_components/illustrations/discovery-prototype";
import { CloudBuild } from "../_components/illustrations/cloud-build";
import { DashboardPanels } from "../_components/illustrations/dashboard-panels";
import { DeliverablesProgress } from "../_components/illustrations/deliverables-progress";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceOfferingsFlow } from "../_components/service-offerings-flow";
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
  const t = await getTranslations({ locale, namespace: "services.digitalProduct.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services/digital-product" : `/${locale}/services/digital-product`,
    },
    openGraph: {
      url: locale === "es" ? `${siteConfig.site_domain}/services/digital-product` : `${siteConfig.site_domain}/${locale}/services/digital-product`,
    },
  };
}

const faqKeys = [
  "partialModernization",
  "legacyData",
  "skipDesign",
  "duration",
  "worseThanExpected",
  "cost",
];

export default async function DigitalProductPage() {
  const tSeo = await getTranslations("services.digitalProduct.seo");
  const tHero = await getTranslations("services.digitalProduct.hero");
  const tProblem = await getTranslations("services.digitalProduct.problem");
  const tOfferings = await getTranslations(
    "services.digitalProduct.offerings",
  );
  const tDeliverables = await getTranslations(
    "services.digitalProduct.deliverables",
  );
  const tCredibility = await getTranslations(
    "services.digitalProduct.credibility",
  );
  const tLogistics = await getTranslations(
    "services.digitalProduct.logistics",
  );
  const tPersonas = await getTranslations("services.digitalProduct.personas");
  const tCta = await getTranslations("services.digitalProduct.cta");

  return (
    <>
      <ServiceSchema
        name={tSeo("title")}
        description={tSeo("description")}
        path="/services/digital-product"
      />
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        illustration={<LegacyRebuild className="h-full w-full p-12" />}
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        items={[
          {
            title: tProblem("items.survived.title"),
            description: tProblem("items.survived.description"),
            icon: Ghost,
          },
          {
            title: tProblem("items.manualWorkarounds.title"),
            description: tProblem("items.manualWorkarounds.description"),
            icon: ClipboardX,
          },
          {
            title: tProblem("items.datedInterfaces.title"),
            description: tProblem("items.datedInterfaces.description"),
            icon: MonitorX,
          },
          {
            title: tProblem("items.fearOfBreaking.title"),
            description: tProblem("items.fearOfBreaking.description"),
            icon: ShieldQuestion,
          },
        ]}
      />

      <ServiceOfferingsFlow
        tagline={tOfferings("tagline")}
        headlineDark={tOfferings("headlineDark")}
        headlineBlue={tOfferings("headlineBlue")}
        flowLabel={tOfferings("flowLabel")}
        branchLabel={tOfferings("branchLabel")}
        flow={[
          {
            title: tOfferings("items.design.title"),
            whatIsIt: tOfferings("items.design.whatIsIt"),
            href: "/services/product-design-discovery",
            linkLabel: tOfferings("items.design.link"),
            illustration: <DiscoveryPrototype className="h-full w-full p-8" />,
          },
          {
            title: tOfferings("items.development.title"),
            whatIsIt: tOfferings("items.development.whatIsIt"),
            href: "/services/application-development",
            linkLabel: tOfferings("items.development.link"),
            illustration: <CloudBuild className="h-full w-full p-8" />,
          },
        ]}
        branch={[
          {
            title: tOfferings("items.dashboards.title"),
            whatIsIt: tOfferings("items.dashboards.whatIsIt"),
            href: "/services/dashboards-analytics-interfaces",
            linkLabel: tOfferings("items.dashboards.link"),
            illustration: <DashboardPanels className="h-full w-full p-8" />,
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
          tDeliverables("items.prototypes"),
          tDeliverables("items.application"),
          tDeliverables("items.designSystem"),
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
            title: tPersonas("items.triedBefore.title"),
            description: tPersonas("items.triedBefore.description"),
            icon: RefreshCcw,
          },
        ]}
      />

      <ContactCTASection
        namespace="services.digitalProduct.cta"
        cta={{ label: tCta("cta"), href: "/contact" }}
      />

      <FAQSection namespace="services.digitalProduct.faq" keys={faqKeys} />
    </>
  );
}

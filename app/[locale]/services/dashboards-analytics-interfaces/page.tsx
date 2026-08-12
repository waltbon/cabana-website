import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  FileClock,
  ShieldOff,
  LayoutDashboard,
  RefreshCcw,
  Database,
  LayoutPanelTop,
  ShieldCheck,
  Clock,
  Eye,
  EyeOff,
  Users2,
} from "lucide-react";
import { ServiceHero } from "../_components/service-hero";
import { GovernedInsights } from "../_components/illustrations/governed-insights";
import { DashboardPanels } from "../_components/illustrations/dashboard-panels";
import { ServiceProblem } from "../_components/service-problem";
import { ServiceDimensions } from "../_components/service-dimensions";
import { ServiceDeliverables } from "../_components/service-deliverables";
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
  const t = await getTranslations({ locale, namespace: "services.dashboardsAnalyticsInterfaces.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/services/dashboards-analytics-interfaces" : `/${locale}/services/dashboards-analytics-interfaces`,
    },
  };
}

const faqKeys = [
  "needsDUC",
  "buildsWarehouse",
  "licenseCost",
  "rowLevelSecurity",
  "predictiveModels",
  "cost",
];

export default async function DashboardsAnalyticsInterfacesPage() {
  const tHero = await getTranslations(
    "services.dashboardsAnalyticsInterfaces.hero",
  );
  const tProblem = await getTranslations(
    "services.dashboardsAnalyticsInterfaces.problem",
  );
  const tIncludes = await getTranslations(
    "services.dashboardsAnalyticsInterfaces.includes",
  );
  const tDeliverables = await getTranslations(
    "services.dashboardsAnalyticsInterfaces.deliverables",
  );
  const tLogistics = await getTranslations(
    "services.dashboardsAnalyticsInterfaces.logistics",
  );
  const tPersonas = await getTranslations(
    "services.dashboardsAnalyticsInterfaces.personas",
  );
  const tCta = await getTranslations(
    "services.dashboardsAnalyticsInterfaces.cta",
  );

  return (
    <>
      <ServiceHero
        tagline={tHero("tagline")}
        headlineDark={tHero("headlineDark")}
        headlineBlue={tHero("headlineBlue")}
        description={tHero("description")}
        cta={{ label: tHero("cta"), href: "/contact" }}
        illustration={<GovernedInsights className="h-full w-full p-12" />}
        imageAlt={tHero("imageAlt")}
      />

      <ServiceProblem
        tagline={tProblem("tagline")}
        headline={tProblem("headline")}
        items={[
          {
            title: tProblem("items.lateReports.title"),
            description: tProblem("items.lateReports.description"),
            icon: FileClock,
          },
          {
            title: tProblem("items.wrongVisibility.title"),
            description: tProblem("items.wrongVisibility.description"),
            icon: ShieldOff,
          },
          {
            title: tProblem("items.prettyUseless.title"),
            description: tProblem("items.prettyUseless.description"),
            icon: LayoutDashboard,
          },
          {
            title: tProblem("items.staleData.title"),
            description: tProblem("items.staleData.description"),
            icon: RefreshCcw,
          },
        ]}
      />

      <ServiceDimensions
        tagline={tIncludes("tagline")}
        headline={tIncludes("headline")}
        items={[
          {
            title: tIncludes("items.modeling.title"),
            description: tIncludes("items.modeling.description"),
            icon: Database,
          },
          {
            title: tIncludes("items.visualDesign.title"),
            description: tIncludes("items.visualDesign.description"),
            icon: LayoutPanelTop,
          },
          {
            title: tIncludes("items.governance.title"),
            description: tIncludes("items.governance.description"),
            icon: ShieldCheck,
          },
        ]}
      />

      <ServiceDeliverables
        tagline={tDeliverables("tagline")}
        headlineDark={tDeliverables("headlineDark")}
        headlineBlue={tDeliverables("headlineBlue")}
        illustration={<DashboardPanels className="h-full w-full p-8" />}
        items={[
          tDeliverables("items.dashboard"),
          tDeliverables("items.rls"),
          tDeliverables("items.training"),
        ]}
      />

      {/*
        TODO: Section 5 (Credibility) intentionally omitted.
        Source doc: "Prueba de rigor: Pendiente de definir" — same open item
        as Application Development, no proof point beyond the platforms used
        (Power BI, Looker). Do not fabricate one — add ServiceCredibility
        back once a real proof point is defined.
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
            icon: Eye,
          },
        ]}
      />

      <ServicePersonas
        tagline={tPersonas("tagline")}
        headline={tPersonas("headline")}
        items={[
          {
            title: tPersonas("items.coo.title"),
            description: tPersonas("items.coo.description"),
            icon: EyeOff,
          },
          {
            title: tPersonas("items.dataTeam.title"),
            description: tPersonas("items.dataTeam.description"),
            icon: LayoutPanelTop,
          },
          {
            title: tPersonas("items.multiRole.title"),
            description: tPersonas("items.multiRole.description"),
            icon: Users2,
          },
        ]}
      />

      <ContactCTASection
        namespace="services.dashboardsAnalyticsInterfaces.cta"
        cta={{ label: tCta("cta"), href: "/contact" }}
      />

      <FAQSection
        namespace="services.dashboardsAnalyticsInterfaces.faq"
        keys={faqKeys}
      />
    </>
  );
}

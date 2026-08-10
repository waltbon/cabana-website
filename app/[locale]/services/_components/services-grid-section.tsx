"use client";

import { Cloud, Sparkles, PlaneIcon, AppWindowIcon, BarChart3, ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

// Service configuration (non-translated data)
const services = [
  { key: "dataConsulting", path: "/services/data-consulting" },
  { key: "dataEngineering", path: "/services/data-engineering" },
  { key: "appsDashboards", path: "/services/application-development" },
  { key: "dashboards", path: "/services/dashboards" },
  { key: "aiSystems", path: "/services/ai-solutions" },
];

export function ServicesGridSection() {
  const t = useTranslations("services.grid");
  const tSolution = useTranslations("solution");

  return (
    <Section id="services" className="bg-white py-24 pt-40">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <FadeIn>
            <div className="flex max-w-xl flex-col items-center gap-5 text-center">
              {/* Tagline */}
              <h4>{t("tagline")}</h4>

              {/* Headline */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("headline")}
                <br />
                <span className="text-cabana-blue">{t("headlineHighlight")}</span>
              </h2>

              {/* Description */}
              <div className="flex flex-col gap-4 text-base text-muted-foreground">
                <p>{t("description1")}</p>
                <p>{t("description2")}</p>
              </div>
            </div>
          </FadeIn>

          {/* Services Grid */}
          <StaggerChildren className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {services.map((service, index) => (
              <StaggerItem
                key={service.key}
                className={`flex flex-col gap-5 border rounded-2xl p-10 ${index === services.length - 1 && services.length % 2 === 1
                  ? "md:col-span-2 md:max-w-[calc(50%-2.5rem)] md:mx-auto"
                  : ""
                  }`}
              >
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {tSolution(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {tSolution(`services.${service.key}.description`)}
                  </p>

                  <span className="leading-relaxed uppercase text-sm font-bold mt-2 text-cabana-blue">
                    {tSolution("whatYouGet")}
                  </span>
                  <ul className="list-none flex flex-col content-center">
                    {tSolution(`services.${service.key}.whatYouGetList.wyg1`) && <li className="text-muted-foreground flex flex-row items-center gap-2 space-x-1.5"><ArrowRight className="text-muted-foreground" size={12}/> <span>{tSolution(`services.${service.key}.whatYouGetList.wyg1`)}</span></li>}
                    {tSolution(`services.${service.key}.whatYouGetList.wyg2`) && <li className="text-muted-foreground flex flex-row items-center gap-2 space-x-1.5"><ArrowRight className="text-muted-foreground" size={12}/> <span>{tSolution(`services.${service.key}.whatYouGetList.wyg2`)}</span></li>}
                    {tSolution(`services.${service.key}.whatYouGetList.wyg3`) && <li className="text-muted-foreground flex flex-row items-center gap-2 space-x-1.5"><ArrowRight className="text-muted-foreground" size={12}/> <span>{tSolution(`services.${service.key}.whatYouGetList.wyg3`)}</span></li>}
                    {tSolution(`services.${service.key}.whatYouGetList.wyg4`) && <li className="text-muted-foreground flex flex-row items-center gap-2 space-x-1.5"><ArrowRight className="text-muted-foreground" size={12}/> <span>{tSolution(`services.${service.key}.whatYouGetList.wyg4`)}</span></li>}
                  </ul>
                  <span className="leading-relaxed uppercase text-sm font-bold mt-2 text-cabana-blue">
                    {tSolution("outcome")}
                  </span>
                  <p className="text-muted-foreground">{tSolution(`services.${service.key}.outcome`)}</p>

                  <Button asChild className="mt-6">
                    <Link href={service.path}>
                      {t("learnMore")} {tSolution(`services.${service.key}.title`)} →
                    </Link>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}

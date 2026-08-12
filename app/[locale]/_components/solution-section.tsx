"use client";

import { Cloud, Sparkles, PlaneIcon, AppWindowIcon, BarChart3, ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Service configuration (non-translated data)
const services = [
  { key: "dataConsulting", icon: PlaneIcon, href: "/services/data-consulting" },
  { key: "dataEngineering", icon: Cloud, href: "/services/data-engineering" },
  { key: "appsDashboards", icon: AppWindowIcon, href: "/services/application-development" },
  { key: "dashboards", icon: BarChart3, href: "/services/dashboards-analytics-interfaces" },
  { key: "aiSystems", icon: Sparkles, href: "/services/custom-ai-agents" },
];

export function SolutionSection() {
  const t = useTranslations("solution");

  return (
    <div className="bg-cabana-green">
      <Section className=" text-cabana-dark dark:bg-section-dark-2 py-12">
        <Container className="max-w-full px-6">
          <div className="flex flex-col items-center gap-12">
            {/* Section Header */}
            <FadeIn>
              <div className="flex max-w-xl flex-col items-center gap-5 text-center">
                {/* Tagline */}
                <h4>{t("tagline")}</h4>

                {/* Headline */}
                <h2 className="text-3xl font-bold leading-12 tracking-tight text-cabana-gradient  md:text-5xl">
                  {t("headline")}
                  <br />
                  <span className="text-cabana-dark">{t("headlineHighlight")}</span>
                </h2>

                {/* Description */}
                <p className="text-base text-cabana-dark">
                  {t("description")}
                </p>
              </div>
            </FadeIn>

            {/* Services Grid */}
            <StaggerChildren className="grid w-full max-w-5xl auto-rows-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
              {services.map((service, index) => (
                <StaggerItem
                  key={service.key}
                  className={`flex h-full flex-col gap-5 ${index === services.length - 1 && services.length % 2 === 1
                    ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto"
                    : ""
                    }`}
                >
                  <Card className="flex h-full flex-col p-12 space-y-4 bg-gray-950 dark border rounded-3xl border-gray-800 shadow-sm ">

                    {/* Content */}
                    <div className="flex h-full flex-col gap-3">
                      <h3 className="text-3xl font-bold text-white">
                        {t(`services.${service.key}.title`)}
                      </h3>

                      <div className="flex flex-col gap-4">
                        <p className="text-lg leading-6 text-white/90">
                          {t(`services.${service.key}.description`)}
                        </p>

                      </div>
                      <div className="flex flex-1 flex-col justify-end">

                        <span className="leading-relaxed uppercase text-sm font-bold mt-2 text-cabana-green">
                          {t(`whatYouGet`)}
                        </span>
                        <ul className="list-none flex flex-col text-white/80">
                          {t(`services.${service.key}.whatYouGetList.wyg1`) && <li className="flex flex-row items-center gap-2 space-x-1.5`"><ArrowRight className="text-muted-foreground" size={12} /> <span>{t(`services.${service.key}.whatYouGetList.wyg1`)}</span></li>}
                          {t(`services.${service.key}.whatYouGetList.wyg2`) && <li className="flex flex-row items-center gap-2 space-x-1.5`"><ArrowRight className="text-muted-foreground" size={12} /> <span>{t(`services.${service.key}.whatYouGetList.wyg2`)}</span></li>}
                          {t(`services.${service.key}.whatYouGetList.wyg3`) && <li className="flex flex-row items-center gap-2 space-x-1.5`"><ArrowRight className="text-muted-foreground" size={12} /> <span>{t(`services.${service.key}.whatYouGetList.wyg3`)}</span></li>}
                          {t(`services.${service.key}.whatYouGetList.wyg4`) && <li className="flex flex-row items-center gap-2 space-x-1.5`"><ArrowRight className="text-muted-foreground" size={12} /> <span>{t(`services.${service.key}.whatYouGetList.wyg4`)}</span></li>}
                        </ul>
                        <span className="leading-relaxed uppercase text-sm font-bold mt-2 text-cabana-green">
                          {t(`outcome`)}
                        </span>
                        <p className="text-white/80">{t(`services.${service.key}.outcome`)}</p>
                      </div>
                    </div>

                    <Button
                      asChild
                      size={'sm'}
                      variant="outline"
                      className="mt-2 self-start bg-cabana-green text-primary hover:bg-cabana-green hover:text-cabana-dark"
                    >
                      <Link href={service.href}>
                        {t("learnMore")}
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </Section>
    </div>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from 'next/image'
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { CASE_STUDIES, CaseStudy } from "@/data/_disabled-case-studies";

const cases: CaseStudy[] = CASE_STUDIES;

export function CasesGridSection() {
  const t = useTranslations("caseStudies");
  const [featured, ...rest] = cases;

  const featuredContent = {
    title: t(`grid.cases.${featured.id}.title` as "grid.cases.personalytics.title"),
    description: t(`grid.cases.${featured.id}.description` as "grid.cases.personalytics.description"),
    tag: t(`grid.cases.${featured.id}.tag` as "grid.cases.personalytics.tag"),
    stat1Label: t(`grid.cases.${featured.id}.stat1Label` as "grid.cases.personalytics.stat1Label"),
    stat2Label: t(`grid.cases.${featured.id}.stat2Label` as "grid.cases.personalytics.stat2Label"),
  };

  const statLabels = [featuredContent.stat1Label, featuredContent.stat2Label];

  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          {/* Featured case */}
        <FadeIn>
            <Link
              href={featured.href}
              className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-border shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2"
            >
              {/* Thumbnail */}
              <div className={`h-64 w-full bg-linear-to-tr ${featured.style.colorFrom} ${featured.style.colorTo} flex items-center justify-center lg:h-auto`}>
                <div className="flex flex-col items-center gap-2 text-cabana-navy/30 rounded-2xl">
                  {
                    !!featured.images.hero1 ?
                      <Image className='rounded-md mx-4' src={featured.images.hero1} alt="Personalytics Hero" width={550} height={500} /> :
                      <div className="size-12 rounded-xl border border-cabana-navy/20 flex items-center justify-center">
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M6.75 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                        </svg>
                      </div>
                  }
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-cabana-blue/10 px-3 py-1 text-xs font-semibold text-cabana-blue">
                    {featuredContent.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {featured.client}
                    {featured.product && ` · ${featured.product}`}
                  </span>
                </div>
                <h2 className="text-2xl font-bold leading-snug tracking-tight group-hover:text-cabana-blue transition-colors md:text-3xl">
                  {featuredContent.title}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {featuredContent.description}
                </p>
                {featured.stats.length > 0 && (
                  <div className="flex gap-8 border-t border-border pt-5">
                    {featured.stats.map((s, i) => (
                      <div key={s.label} className="flex flex-col gap-0.5">
                        <span className="text-2xl font-bold tracking-tight text-foreground">
                          {s.value}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {statLabels[i] ?? s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cabana-blue">
                  {t("grid.readCaseStudy")}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </FadeIn>

          {/* Rest of cases */}
          <StaggerChildren className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {rest.map((item) => (
              <StaggerItem key={item.client}>
                <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md h-full">
                  {/* Thumbnail */}
                  <div
                    className={`h-44 w-full bg-gradient-to-br ${item.style.colorFrom} ${item.style.colorTo} flex items-center justify-center`}
                  >
                    <div className="flex flex-col items-center gap-2 text-cabana-navy/30">
                      <div className="size-10 rounded-lg border border-cabana-navy/20 flex items-center justify-center">
                        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M6.75 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.tag} · {item.client}
                    </span>
                    <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-cabana-blue transition-colors flex-1">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                      {t("grid.comingSoon")}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}

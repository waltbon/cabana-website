"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

export function MoreCasesSection() {
  const t = useTranslations("caseStudies.personalytics.moreCases");

  const cases = [
    {
      tag: t("case1Tag"),
      client: "FIFCO",
      title: t("case1Title"),
      href: "/case-studies/fifco-supply-chain",
      color: "from-cabana-blue/20 to-cabana-navy/30",
    },
    {
      tag: t("case2Tag"),
      client: "CIISA",
      title: t("case2Title"),
      href: "/case-studies/ciisa-academic-data",
      color: "from-cabana-green/20 to-cabana-blue/20",
    },
    {
      tag: t("case3Tag"),
      client: "Zebol",
      title: t("case3Title"),
      href: "/case-studies/zebol-ai-readiness",
      color: "from-cabana-navy/20 to-cabana-blue/20",
    },
  ];

  return (
    <Section className="bg-section-light py-24 border-t border-dashed border-border">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <FadeIn>
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {t("eyebrow")}
                </span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  {t("title")}
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="hidden items-center gap-1.5 text-sm font-medium text-cabana-blue hover:underline md:flex"
              >
                {t("viewAll")}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cases.map((item) => (
              <StaggerItem key={item.client}>
                <Link
                  href={item.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Thumbnail */}
                  <div
                    className={`h-44 w-full bg-linear-to-br ${item.color} flex items-center justify-center`}
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
                  <div className="flex flex-col gap-3 p-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.tag} · {item.client}
                    </span>
                    <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-cabana-blue transition-colors">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-cabana-blue">
                      {t("readCaseStudy")}
                      <ArrowRight className="size-3" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <Link
            href="/case-studies"
            className="flex items-center justify-center gap-1.5 text-sm font-medium text-cabana-blue hover:underline md:hidden"
          >
            {t("viewAllCaseStudies")}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

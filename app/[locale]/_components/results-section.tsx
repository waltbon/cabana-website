"use client";

import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

// Case configuration (non-translated data — content lives in messages.results.cases)
const cases = [
  { key: "aiAgentsSwarm", metricKeys: ["m1", "m2", "m3"] },
  { key: "excelToBigquery", metricKeys: ["m1", "m2", "m3"] },
  { key: "salesQuotaVisibility", metricKeys: ["m1", "m2", "m3"] },
];

export function ResultsSection() {
  const t = useTranslations("results");

  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <FadeIn>
            <div className="flex max-w-xl flex-col items-center gap-5 text-center">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-cabana-blue">
                {t("tagline")}
              </h4>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("headline")}{" "}
                <span className="text-gradient-cabana">{t("headlineHighlight")}</span>
              </h2>
              <p className="text-base text-muted-foreground">{t("description")}</p>
            </div>
          </FadeIn>

          {/* Cases Grid */}
          <StaggerChildren className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <StaggerItem key={c.key}>
                <Card className="flex h-full flex-col gap-4 rounded-2xl border p-6 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t(`cases.${c.key}.industry`)}
                    </span>
                    <time
                      dateTime={t(`cases.${c.key}.dateISO`)}
                      className="text-xs font-medium text-muted-foreground"
                    >
                      {t(`cases.${c.key}.dateLabel`)}
                    </time>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {t(`cases.${c.key}.headline`)}
                  </h3>

                  {/* Standalone quotable claim — full sentence for AI Overviews / LLM extraction */}
                  <blockquote className="border-l-2 border-cabana-blue pl-3 text-sm font-medium text-foreground">
                    {t(`cases.${c.key}.quote`)}
                  </blockquote>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`cases.${c.key}.summary`)}
                  </p>

                  <div className="mt-2 flex flex-col gap-4 border-t border-border pt-4">
                    {c.metricKeys.map((mKey) => (
                      <div key={mKey} className="flex flex-col">
                        <span className="text-2xl font-bold text-cabana-blue">
                          {t(`cases.${c.key}.metrics.${mKey}.value`)}
                        </span>
                        <span className="text-sm text-foreground/80">
                          {t(`cases.${c.key}.metrics.${mKey}.label`)}
                        </span>
                        {t.has(`cases.${c.key}.metrics.${mKey}.context`) && (
                          <span className="text-xs text-muted-foreground">
                            {t(`cases.${c.key}.metrics.${mKey}.context`)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="mt-auto w-fit gap-2 self-start px-0 text-cabana-blue hover:bg-transparent hover:text-cabana-blue/80"
                  >
                    <Link
                      href={t(`cases.${c.key}.serviceHref`) as `/${string}`}
                    >
                      {t("viewService")}: {t(`cases.${c.key}.service`)}
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
  );
}

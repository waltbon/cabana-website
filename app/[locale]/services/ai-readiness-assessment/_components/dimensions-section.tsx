import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { getTranslations } from "next-intl/server";
import { Database, Server, ShieldCheck, ClipboardList, ChevronRight } from "lucide-react";

const dimensionIcons = [Database, Server, ShieldCheck, ClipboardList];
const dimensionKeys = ["quality", "infrastructure", "governance", "maturity"] as const;

export async function DimensionsSection() {
  const t = await getTranslations("services.rutaIA.dimensions");

  return (
    <Section className="bg-section-slate py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <FadeIn>
              <p className="text-sm font-medium text-muted-foreground">
                {t("tagline")}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {t("headline")}
              </h2>
            </FadeIn>
          </div>

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dimensionKeys.map((key, index) => {
              const Icon = dimensionIcons[index];
              return (
                <StaggerItem key={key}>
                  <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 shadow-sm">
                    <div className="icon-wrapper icon-wrapper-sm bg-cabana-light">
                      <ChevronRight className="size-5 text-cabana-green" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-bold leading-tight text-foreground">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}

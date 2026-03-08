import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { getTranslations } from "next-intl/server";
import { BarChart3, MapPin, Route } from "lucide-react";

const deliverableIcons = [BarChart3, MapPin, Route];
const deliverableKeys = ["diagnosis", "blockers", "roadmap"] as const;

export async function DeliverablesSection() {
  const t = await getTranslations("services.rutaIA.deliverables");

  return (
    <Section className="border-b border-dashed py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <FadeIn>
              <p className="text-sm font-medium text-muted-foreground">
                {t("tagline")}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {t("headline")}{" "}
                <span className="text-cabana-blue">{t("headlineHighlight")}</span>
              </h2>
            </FadeIn>
          </div>

          <StaggerChildren className="grid gap-10 sm:grid-cols-3">
            {deliverableKeys.map((key, index) => {
              const Icon = deliverableIcons[index];
              return (
                <StaggerItem key={key}>
                  <div className="flex flex-col gap-4">
                    <div className="icon-wrapper icon-wrapper-md bg-cabana-light">
                      <Icon className="size-6 text-cabana-green" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold leading-tight text-foreground">
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

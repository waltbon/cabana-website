import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { getTranslations } from "next-intl/server";

const personaKeys = ["cto", "coo", "tech"] as const;

export async function PersonasSection() {
  const t = await getTranslations("services.rutaIA.personas");

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

          <StaggerChildren className="grid gap-6 sm:grid-cols-3">
            {personaKeys.map((key) => (
              <StaggerItem key={key}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 shadow-sm">
                  <span className="w-fit rounded-full bg-cabana-light px-3 py-1 text-xs font-semibold text-cabana-blue">
                    {t(`items.${key}.badge`)}
                  </span>
                  <h3 className="text-lg font-bold leading-tight text-foreground">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}

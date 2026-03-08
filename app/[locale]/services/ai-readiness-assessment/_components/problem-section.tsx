import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";
import { getTranslations } from "next-intl/server";

export async function ProblemSection() {
  const t = await getTranslations("services.rutaIA.problem");

  return (
    <Section className="py-24">
      <Container className="max-w-3xl px-6">
        <div className="flex flex-col gap-6">
          <FadeIn>
            <p className="text-sm font-medium text-muted-foreground">
              {t("tagline")}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-cabana-blue md:text-5xl">
              {t("headline")}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base leading-relaxed text-muted-foreground">
              {t("body1")}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-base leading-relaxed text-muted-foreground">
              {t("body2")}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-base font-semibold leading-relaxed text-foreground">
              {t("conclusion")}
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { getTranslations } from "next-intl/server";

export async function CTASection() {
  const t = await getTranslations("services.rutaIA.cta");

  return (
    <Section className="bg-section-dark py-24 text-white">
      <Container className="max-w-4xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              {t("description")}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Button
              asChild
              size="lg"
              className="rounded-lg bg-cabana-blue px-8 hover:bg-cabana-blue/90"
            >
              <a
                href="https://calendar.app.google/pwhXdBodbhqfYVXNA"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("button")}
              </a>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

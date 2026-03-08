import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";
import { getTranslations } from "next-intl/server";
import { Award } from "lucide-react";

export async function TrustSignalSection() {
  const t = await getTranslations("services.rutaIA.trustSignal");

  return (
    <Section className="bg-section-light py-24">
      <Container className="max-w-4xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <FadeIn>
            <div className="icon-wrapper icon-wrapper-lg bg-white shadow-sm">
              <Award className="size-8 text-cabana-green" strokeWidth={1.5} />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
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
            <div className="rounded-full border border-cabana-blue/30 bg-white px-6 py-2 text-sm font-semibold text-cabana-blue shadow-sm">
              ISO 42001 — {t("badge")}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

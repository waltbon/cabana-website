import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";
import { getTranslations } from "next-intl/server";
import { Clock } from "lucide-react";

export async function TimelineSection() {
  const t = await getTranslations("services.rutaIA.timeline");

  return (
    <Section className="border-b border-dashed py-24">
      <Container className="max-w-5xl px-6">
        <div className="flex flex-col gap-12">
          <FadeIn>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {t("headline")}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex w-fit items-start gap-4 rounded-xl border border-border bg-white p-6 shadow-sm">
              <div className="icon-wrapper icon-wrapper-sm bg-cabana-light shrink-0">
                <Clock className="size-5 text-cabana-green" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-3xl font-bold text-foreground">{t("duration")}</p>
                <p className="text-sm text-muted-foreground">{t("durationLabel")}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

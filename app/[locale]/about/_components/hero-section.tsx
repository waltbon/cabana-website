import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("about.hero");

  return (
    <Section className="bg-section-dark py-24">
      <Container className="max-w-7xl px-6 pt-12">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column - Headline */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-7xl">
              {t("headline")}
              <br />
              <span className="text-gradient-cabana">{t("headlineHighlight")}</span>
            </h1>
          </div>

          {/* Right Column - Description & CTA */}
          <div className="flex flex-1 flex-col justify-end gap-8">
            <p className="text-lg leading-relaxed text-white/90">
              {t("description")}
            </p>

            <div>
              <Button
                asChild
                className="rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
              >
                <Link href="/contact">{t("cta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

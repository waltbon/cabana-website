import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function ContactCTASection() {
  const t = useTranslations("services.contactCta");

  return (
    <Section className="bg-section-light py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Headline */}
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {t("headline")}
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            {t("description")}
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-lg bg-cabana-blue px-8 hover:bg-cabana-blue/90"
          >
            <Link href="/contact">{t("cta")}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

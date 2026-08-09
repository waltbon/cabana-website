"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/animations";

interface ContactCTASectionProps {
  /** Translation namespace holding headline/description/cta copy. Defaults to the shared services CTA. */
  namespace?: string;
  /** Overrides the default /contact link — e.g. a calendar booking URL. External links open in a new tab. */
  cta?: {
    label?: string;
    href: string;
  };
  /** Optional background illustration behind the headline. */
  imageSrc?: string;
  imageAlt?: string;
}

export function ContactCTASection({
  namespace = "services.contactCta",
  cta,
  imageSrc,
  imageAlt,
}: ContactCTASectionProps = {}) {
  const t = useTranslations(namespace);
  const href = cta?.href ?? "/contact";
  const label = cta?.label ?? t("cta");
  const isExternal = /^https?:\/\//.test(href);
  const description = t("description");

  return (
    <Section className="relative overflow-hidden bg-section-light py-24">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          className="object-cover opacity-20"
        />
      )}
      <Container className="relative max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Headline */}
          <FadeIn>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
          </FadeIn>

          {/* Description */}
          {description && (
            <FadeIn delay={0.1}>
              <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            </FadeIn>
          )}

          {/* CTA Button */}
          <FadeIn delay={0.2}>
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-lg bg-cabana-blue px-8 hover:bg-cabana-blue/90"
            >
              {isExternal ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

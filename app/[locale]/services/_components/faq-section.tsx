"use client";

import { Section, Container } from "@/components/craft";
import { FAQSchema } from "@/components/seo/faq-schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/animations";

// Default FAQ keys for the shared services.faq namespace
const defaultFaqKeys = [
  "whatServices",
  "projectDuration",
  "cloudPlatforms",
  "industries",
  "security",
];

interface FAQSectionProps {
  /** Translation namespace holding tagline/headline/description/items. Defaults to the shared services FAQ. */
  namespace?: string;
  /** Keys under `${namespace}.items` to render, in order. Defaults to the shared services FAQ keys. */
  keys?: string[];
}

export function FAQSection({
  namespace = "services.faq",
  keys = defaultFaqKeys,
}: FAQSectionProps = {}) {
  const t = useTranslations(namespace);

  // Build faqs array for schema
  const faqs = keys.map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));
  const description = t("description");

  return (
    <>
      <FAQSchema faqs={faqs} />
      <Section className="bg-section-slate py-24">
        <Container className="max-w-4xl px-6">
          <div className="flex flex-col items-center gap-12">
            {/* Section Header */}
            <FadeIn>
              <div className="flex max-w-xl flex-col items-center gap-5 text-center">
                <h4>{t("tagline")}</h4>
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  {t("headline")}{" "}
                  <span className="text-cabana-blue">{t("headlineHighlight")}</span>
                </h2>
                {description && (
                  <p className="text-base text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>
            </FadeIn>

            {/* FAQ Accordion */}
            <FadeIn delay={0.2} className="w-full">
              <Accordion type="single" collapsible className="w-full">
                {keys.map((key, index) => (
                  <AccordionItem key={key} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {t(`items.${key}.question`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {t(`items.${key}.answer`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}

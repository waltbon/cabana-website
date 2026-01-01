import { Section, Container } from "@/components/craft";
import { FAQSchema } from "@/components/seo/faq-schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

// FAQ keys for iteration
const faqKeys = [
  "whatServices",
  "projectDuration",
  "cloudPlatforms",
  "industries",
  "security",
];

export function FAQSection() {
  const t = useTranslations("services.faq");

  // Build faqs array for schema
  const faqs = faqKeys.map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <>
      <FAQSchema faqs={faqs} />
      <Section className="bg-section-slate py-24">
        <Container className="max-w-4xl px-6">
          <div className="flex flex-col items-center gap-12">
            {/* Section Header */}
            <div className="flex max-w-xl flex-col items-center gap-5 text-center">
              <h4>{t("tagline")}</h4>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("headline")}{" "}
                <span className="text-cabana-blue">{t("headlineHighlight")}</span>
              </h2>
              <p className="text-base text-muted-foreground">
                {t("description")}
              </p>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full">
              {faqKeys.map((key, index) => (
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
          </div>
        </Container>
      </Section>
    </>
  );
}

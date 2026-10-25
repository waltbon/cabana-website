import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTranslations } from "next-intl/server";
import type { CapabilityKey } from "./config";

export type FaqItem = { question: string; answer: string };

export async function FaqSection({ capability }: { capability: CapabilityKey }) {
  const [t, tCommon] = await Promise.all([
    getTranslations(`capacidades.${capability}`),
    getTranslations("capacidades.common"),
  ]);
  const items = t.raw("faq") as FaqItem[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[25rem_1fr] lg:gap-20">
        <h2 className="text-foreground">{tCommon("faqTitle")}</h2>
        <Accordion type="single" collapsible defaultValue="faq-0">
          {items.map((item, i) => (
            <AccordionItem key={item.question} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

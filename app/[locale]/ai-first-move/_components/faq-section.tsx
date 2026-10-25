import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTranslations } from "next-intl/server";

export type FaqItem = { question: string; answer: string };

export async function FaqSection() {
  const t = await getTranslations("aiFirstMove.faq");
  const items = t.raw("items") as FaqItem[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[25rem_1fr] lg:gap-20">
        <h2 className="text-foreground">{t("title")}</h2>
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

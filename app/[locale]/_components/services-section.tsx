import { getTranslations } from "next-intl/server";
import { BadgeDollarSign, CalendarRange } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceLink } from "./service-link";

type Service = {
  door: string;
  name: string;
  summary: string;
  facts: string[];
  cta: string;
  href: string;
};

const factIcons = [CalendarRange, BadgeDollarSign];

export async function ServicesSection() {
  const t = await getTranslations("inicio.services");
  const items = t.raw("items") as Service[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <h2 className="text-foreground">{t("title")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-5 rounded-xl border bg-card p-6 md:p-10"
            >
              <span className="text-xs font-semibold uppercase text-muted-foreground">
                {item.door}
              </span>
              <h3 className="text-3xl text-primary md:text-4xl md:font-bold">
                {item.name}
              </h3>
              <p className="text-lg text-foreground">{item.summary}</p>
              <ul className="flex flex-col gap-3">
                {item.facts.map((fact, i) => {
                  const Icon = factIcons[i];
                  return (
                    <li key={fact} className="flex items-center gap-3 text-foreground">
                      <Icon className="size-5 shrink-0 text-primary" aria-hidden />
                      {fact}
                    </li>
                  );
                })}
              </ul>
              <Button asChild variant="outline" size="lg" className="mt-auto self-start">
                <ServiceLink href={item.href}>{item.cta}</ServiceLink>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

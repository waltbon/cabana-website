import { getTranslations } from "next-intl/server";
import { ArrowRight, ArrowUpRight, BadgeDollarSign, CalendarRange } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ServiceLink } from "@/components/service-link";
import { cn } from "@/lib/utils";

type Service = {
  door: string;
  name: string;
  summary: string;
  facts: string[];
  cta: string;
  href: string;
};

const factIcons = [CalendarRange, BadgeDollarSign];

/** Card themes, in item order: light for Ruta IA, brand blue for AI First Move. */
const themes = [
  {
    card: "bg-cabana-light text-cabana-dark",
    muted: "text-slate-700",
    accent: "text-cabana-blue",
    underline: "border-cabana-blue",
  },
  {
    card: "bg-cabana-blue text-white",
    muted: "text-cabana-light",
    accent: "text-cabana-green",
    underline: "border-cabana-green",
  },
];

export async function ServicesSection() {
  const t = await getTranslations("inicio.services");
  const items = t.raw("items") as Service[];

  return (
    <section className="relative overflow-hidden bg-cabana-dark py-16 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-cabana-navy/35 [clip-path:polygon(100%_0,100%_100%,0_100%)]"
      />
      <div className="container relative flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-5">
          <Badge variant="pretitle" className="self-start">
            {t("pretitle")}
          </Badge>
          <h2 className="text-white text-3xl md:text-5xl">{t("title")}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => {
            const theme = themes[idx % themes.length];
            return (
              <article
                key={item.name}
                className={cn(
                  "flex min-h-115 flex-col justify-between gap-10 rounded-xl p-7 md:min-h-130 md:p-10",
                  theme.card,
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={cn("text-xs font-semibold uppercase tracking-wider", theme.accent)}>
                    {item.door}
                  </span>
                  <ArrowUpRight className="size-7 shrink-0" aria-hidden />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-4xl font-bold leading-tight md:text-5xl">{item.name}</h3>
                  <p className={cn("text-lg", theme.muted)}>{item.summary}</p>
                  <ul className="flex flex-col gap-2 py-2">
                    {item.facts.map((fact, i) => {
                      const Icon = factIcons[i];
                      return (
                        <li key={fact} className="flex items-center gap-3">
                          <Icon className={cn("size-5 shrink-0", theme.accent)} aria-hidden />
                          {fact}
                        </li>
                      );
                    })}
                  </ul>
                  <ServiceLink
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-2 self-start border-b-2 pb-1 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      theme.underline,
                    )}
                  >
                    {item.cta}
                    <ArrowRight className="size-4" aria-hidden />
                  </ServiceLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

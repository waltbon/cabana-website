import { BadgePercent, Building2, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getRutaIaTranslations } from "../lib/i18n";

/** Duration and scope (web v2: no price shown). */
export async function PricingSection() {
  const t = await getRutaIaTranslations("pricing");
  const terms = [
    { icon: CalendarClock, text: t("duration"), highlight: false },
    { icon: Building2, text: t("scope"), highlight: false },
    { icon: BadgePercent, text: t("credit"), highlight: true },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-8 md:items-center md:gap-12">
        <h2 className="text-foreground md:text-center">{t("title")}</h2>
        <ul className="grid w-full gap-4 md:grid-cols-3">
          {terms.map(({ icon: Icon, text, highlight }) => (
            <li
              key={text}
              className={cn(
                "flex flex-col gap-4 rounded-xl p-7",
                highlight ? "bg-cabana-light" : "border bg-card",
              )}
            >
              <span className="flex size-10 items-center justify-center rounded-md border bg-card">
                <Icon className="size-5 text-primary" aria-hidden />
              </span>
              <p
                className={cn(
                  "text-foreground",
                  highlight ? "text-[17px] font-medium" : "text-xl font-semibold",
                )}
              >
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

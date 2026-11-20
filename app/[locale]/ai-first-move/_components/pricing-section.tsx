import { Box, CalendarRange } from "lucide-react";
import { getTranslations } from "next-intl/server";

/** Duration and scope (web v2: no price shown). */
export async function PricingSection() {
  const t = await getTranslations("aiFirstMove.pricing");
  const terms = [
    { icon: CalendarRange, text: t("duration") },
    { icon: Box, text: t("scope") },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-8 md:items-center md:gap-12">
        <h2 className="text-foreground md:text-center">{t("title")}</h2>
        <ul className="grid w-full max-w-[51.25rem] gap-4 md:grid-cols-2">
          {terms.map(({ icon: Icon, text }) => (
            <li key={text} className="flex flex-col gap-4 rounded-xl border bg-card p-7">
              <span className="flex size-10 items-center justify-center rounded-md border bg-card">
                <Icon className="size-5 text-primary" aria-hidden />
              </span>
              <p className="text-xl font-semibold text-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

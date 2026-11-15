import { getTranslations } from "next-intl/server";
import { Database, ServerCrash, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Item = { title: string; body: string };

/** Bento themes, in item order: brand blue (large), white, dark. */
const cards = [
  {
    icon: ServerCrash,
    box: "bg-primary text-white md:row-span-2 md:justify-between md:p-11",
    iconWrap: "bg-white/15 text-white",
    number: "text-white/25",
    body: "text-cabana-light",
    big: true,
  },
  {
    icon: Database,
    box: "border bg-white text-foreground",
    iconWrap: "bg-cabana-light text-primary",
    number: "text-cabana-light",
    body: "text-muted-foreground",
    big: false,
  },
  {
    icon: Sparkles,
    box: "bg-cabana-dark text-white",
    iconWrap: "bg-cabana-green/15 text-cabana-green",
    number: "text-white/20",
    body: "text-cabana-light",
    big: false,
  },
];

export async function SymptomsSection() {
  const t = await getTranslations("inicio.symptoms");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-8 md:gap-14">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-20">
          <div className="flex max-w-170 flex-col gap-5">
            <Badge variant="pretitle" className="self-start">
              {t("eyebrow")}
            </Badge>
            <h2 className="text-foreground text-3xl md:text-5xl">{t("title")}</h2>
          </div>
          <p className="text-lg text-muted-foreground md:max-w-100">{t("intro")}</p>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-6">
          {items.map((item, i) => {
            const card = cards[i];
            const Icon = card.icon;
            return (
              <li
                key={item.title}
                className={cn(
                  "relative flex flex-col gap-5 overflow-hidden rounded-xl p-7 md:min-h-55 md:p-8",
                  card.box,
                )}
              >
                {card.big && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -bottom-20 hidden size-95 rounded-full border-32 border-cabana-green/15 md:block"
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <span
                    className={cn(
                      "flex items-center justify-center rounded-full",
                      card.big ? "size-16" : "size-12",
                      card.iconWrap,
                    )}
                  >
                    <Icon className={card.big ? "size-7" : "size-5.5"} aria-hidden />
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "font-bold leading-none",
                      card.big ? "text-7xl" : "text-4xl",
                      card.number,
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative flex flex-col gap-3">
                  <h3
                    className={cn(
                      "font-bold leading-tight",
                      card.big ? "text-2xl md:text-4xl" : "text-2xl",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className={cn(card.big ? "text-lg" : "text-base", card.body)}>
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

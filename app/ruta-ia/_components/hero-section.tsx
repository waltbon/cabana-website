import Link from "next/link";
import { BadgeDollarSign, CalendarClock, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlasmaField } from "@/components/plasma-field";
import { calendarUrl, getRutaIaTranslations } from "../lib/i18n";

const factIcons = [CalendarClock, BadgeDollarSign, Database];

export async function HeroSection() {
  const t = await getRutaIaTranslations("hero");
  const facts = t.raw("facts") as string[];

  return (
    <section className="relative overflow-hidden bg-section-dark py-20 md:pt-28 md:pb-24">
      {/* WebGL background */}
      <PlasmaField className="absolute inset-0 w-full h-full" />
      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      <div className="relative z-10 container flex flex-col items-center gap-8 text-center">
        <Badge variant="pretitle">{t("eyebrow")}</Badge>
        <h1 className="text-white text-4xl md:text-7xl max-w-5xl">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl">
          {t("subtitle")}
        </p>
        <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
          <Button asChild size="lg">
            <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
              {t("ctaPrimary")}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#incluye">{t("ctaSecondary")}</a>
          </Button>
        </div>
        <ul className="flex flex-col items-start gap-3 pt-6 md:flex-row md:items-center md:gap-10">
          {facts.map((fact, i) => {
            const Icon = factIcons[i];
            return (
              <li key={fact} className="flex items-center gap-2.5 text-white">
                <Icon className="size-5 shrink-0 text-cabana-green" aria-hidden />
                {fact}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

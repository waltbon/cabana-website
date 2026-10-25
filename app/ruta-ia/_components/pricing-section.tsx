import Link from "next/link";
import { BadgePercent, Building2, CalendarClock, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { calendarUrl, getRutaIaTranslations } from "../lib/i18n";

export async function PricingSection() {
  const t = await getRutaIaTranslations("pricing");
  const terms = [
    { icon: CalendarClock, text: t("duration") },
    { icon: Building2, text: t("scope") },
    { icon: Wallet, text: t("payment") },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        <h2 className="text-foreground text-center">{t("title")}</h2>
        <div className="grid w-full max-w-4xl gap-8 rounded-xl border bg-card p-6 md:grid-cols-[18rem_1fr] md:gap-12 md:p-12">
          <div className="flex flex-col items-start gap-2">
            <p className="text-5xl font-bold text-primary">{t("price")}</p>
            <p className="text-lg text-muted-foreground">{t("tax")}</p>
            <Button asChild size="lg" className="mt-4 w-full md:w-auto">
              <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
                {t("cta")}
              </Link>
            </Button>
          </div>
          <ul className="flex flex-col gap-4">
            {terms.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-foreground">
                <Icon className="size-5 shrink-0 text-primary" aria-hidden />
                {text}
              </li>
            ))}
            <li className="flex items-start gap-3 rounded-md bg-cabana-light p-4 text-sm text-foreground">
              <BadgePercent className="size-5 shrink-0 text-primary" aria-hidden />
              {t("credit")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

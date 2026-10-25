import { BadgeDollarSign, CalendarClock, Database } from "lucide-react";
import { ServiceHero } from "@/components/service-hero";
import { calendarUrl, getRutaIaTranslations } from "../lib/i18n";

const factIcons = [CalendarClock, BadgeDollarSign, Database];

export async function HeroSection() {
  const t = await getRutaIaTranslations("hero");

  return (
    <ServiceHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
      facts={t.raw("facts") as string[]}
      factIcons={factIcons}
      ctaPrimary={t("ctaPrimary")}
      ctaPrimaryHref={calendarUrl}
      ctaSecondary={t("ctaSecondary")}
      ctaSecondaryHref="#incluye"
      image={{ src: "/services/hero/ruta-ia.webp", alt: t("imageAlt") }}
    />
  );
}

import { BadgeDollarSign, CalendarRange, Rocket } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ServiceHero } from "@/components/service-hero";
import { calendarUrl } from "@/lib/calendar";

const factIcons = [CalendarRange, BadgeDollarSign, Rocket];

export async function HeroSection() {
  const t = await getTranslations("aiFirstMove.hero");

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
      image={{ src: "/services/hero/ai-first-move.webp", alt: t("imageAlt") }}
    />
  );
}

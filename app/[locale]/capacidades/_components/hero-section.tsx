import Link from "next/link";
import { DatabaseZap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { calendarUrl } from "@/lib/calendar";

export async function HeroSection() {
  const [t, tMeta] = await Promise.all([
    getTranslations("capacidades.hero"),
    getTranslations("capacidades.meta"),
  ]);

  return (
    <section className="bg-section-dark py-16 md:pt-28 md:pb-24">
      <div className="container flex flex-col items-start gap-7">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <ol className="flex gap-2">
            <li>{tMeta("breadcrumbHome")}</li>
            <li aria-hidden>/</li>
            <li className="text-slate-300">{tMeta("breadcrumb")}</li>
          </ol>
        </nav>
        <Badge variant="pretitle">{t("eyebrow")}</Badge>
        <h1 className="max-w-5xl text-4xl text-white md:text-6xl">
          {t("title")}
        </h1>
        <p className="max-w-3xl text-lg text-slate-300 md:text-xl">
          {t("body")}
        </p>
        <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
          <Button asChild size="lg">
            <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
              {t("ctaPrimary")}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#capacidades">{t("ctaSecondary")}</a>
          </Button>
        </div>
        <p className="flex items-start gap-3 pt-4 text-white md:items-center">
          <DatabaseZap
            className="size-5 shrink-0 text-cabana-green"
            aria-hidden
          />
          {t("proof")}
        </p>
      </div>
    </section>
  );
}

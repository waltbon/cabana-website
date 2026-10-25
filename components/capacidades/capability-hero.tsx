import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { calendarUrl } from "@/lib/calendar";
import type { CapabilityKey } from "./config";

export async function CapabilityHero({
  capability,
  secondaryHref,
}: {
  capability: CapabilityKey;
  secondaryHref: string;
}) {
  const [t, tHub] = await Promise.all([
    getTranslations(`capacidades.${capability}.hero`),
    getTranslations("capacidades"),
  ]);

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container flex flex-col items-start gap-6">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <ol className="flex flex-wrap gap-2">
            <li>{tHub("meta.breadcrumbHome")}</li>
            <li aria-hidden>/</li>
            <li>{tHub("meta.breadcrumb")}</li>
            <li aria-hidden>/</li>
            <li className="text-slate-300">{t("name")}</li>
          </ol>
        </nav>
        <h1 className="flex max-w-5xl flex-col gap-2 text-4xl text-white md:text-6xl">
          <span className="text-xl font-semibold text-cabana-green md:text-3xl">
            {t("name")}
            <span className="sr-only"> · </span>
          </span>
          {t("term")}
        </h1>
        <p className="max-w-3xl text-lg text-slate-300 md:text-xl">
          {t("subtitle")}
        </p>
        <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
          <Button asChild size="lg">
            <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
              {tHub("cta.button")}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={secondaryHref}>{t("ctaSecondary")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

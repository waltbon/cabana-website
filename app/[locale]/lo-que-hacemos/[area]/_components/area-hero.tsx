import Image from "next/image";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { calendarUrl } from "@/lib/calendar";
import { cn } from "@/lib/utils";
import type { AreaConfig } from "./areas";

export async function AreaHero({ area }: { area: AreaConfig }) {
  const [t, tHub] = await Promise.all([
    getTranslations(`areasImpacto.${area.slug}.hero`),
    getTranslations("loQueHacemos"),
  ]);
  const facts = t.raw("facts") as string[];

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div
        className={cn(
          "container grid items-center gap-10",
          area.heroImage && "lg:grid-cols-[1fr_minmax(0,40%)] lg:gap-12",
        )}
      >
        <div className="flex flex-col items-start gap-6">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <ol className="flex flex-wrap gap-2">
              <li>{tHub("breadcrumbHome")}</li>
              <li aria-hidden>/</li>
              <li>{tHub("breadcrumb")}</li>
              <li aria-hidden>/</li>
              <li className="text-slate-300">{t("eyebrow")}</li>
            </ol>
          </nav>
          <Badge variant="pretitle">{t("eyebrow")}</Badge>
          <h1 className="max-w-4xl text-4xl text-white md:text-[52px] md:leading-[1.08]">
            {t("title")}
          </h1>
          <p className="max-w-3xl text-lg text-slate-300 md:text-xl">
            {t("subtitle")}
          </p>
          <ul className="flex flex-col gap-2.5">
            {facts.map((fact) => (
              <li key={fact} className="flex items-start gap-2.5 font-medium text-white">
                <CircleCheck className="mt-0.5 size-4.5 shrink-0 text-cabana-green" aria-hidden />
                {fact}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-2 w-full sm:w-auto">
            <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
              {t("cta")}
            </Link>
          </Button>
        </div>
        {area.heroImage && (
          // Decorative: drawn on the section's own navy. No alt copy in the brief.
          <div className="relative aspect-square w-full max-w-md justify-self-center lg:max-w-none">
            <Image
              src={area.heroImage}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}

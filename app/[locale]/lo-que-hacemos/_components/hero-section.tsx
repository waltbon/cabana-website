import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { calendarUrl } from "@/lib/calendar";

export async function HeroSection() {
  const t = await getTranslations("loQueHacemos");

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,40%)] lg:gap-12">
        <div className="flex flex-col items-start gap-7">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <ol className="flex gap-2">
              <li>{t("breadcrumbHome")}</li>
              <li aria-hidden>/</li>
              <li className="text-slate-300">{t("breadcrumb")}</li>
            </ol>
          </nav>
          <Badge variant="pretitle">{t("hero.eyebrow")}</Badge>
          <h1 className="max-w-5xl text-4xl text-white md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="max-w-3xl text-lg text-slate-300 md:text-xl">
            {t("hero.subtitle")}
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
              {t("hero.cta")}
            </Link>
          </Button>
        </div>
        {/* Decorative: drawn on the section's own navy, shown whole. No alt copy in the brief. */}
        <div className="relative aspect-square w-full max-w-md justify-self-center lg:max-w-none">
          <Image
            src="/capacidades/hero-producto-digital.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

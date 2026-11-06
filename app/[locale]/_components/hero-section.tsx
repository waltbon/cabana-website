import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceLink } from "@/components/service-link";

type Door = { label: string; hint: string; href: string };
type Stat = { value: string; label: string };

/**
 * Split hero: copy on a dark band with diagonal accents, full-bleed photo on the
 * right (below on mobile) and a stats bar overlapping the band's bottom edge.
 */
export async function HeroSection() {
  const t = await getTranslations("inicio.hero");
  const [primary, secondary] = t.raw("doors") as Door[];
  const stats = t.raw("stats") as Stat[];

  return (
    <section className="relative bg-background">
      <div className="relative flex flex-col overflow-hidden bg-cabana-dark lg:block lg:min-h-180">
        {/* Decorative diagonals */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-cabana-navy/55 [clip-path:polygon(0_0,55%_100%,0_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-section-dark-2 opacity-80 [clip-path:polygon(0_20%,40%_100%,0_100%)]"
        />

        <div className="relative order-last aspect-4/3 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[46%] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src="/home/hero-team.webp"
            alt={t("imageAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="container relative py-14 lg:pt-24 lg:pb-40">
          <div className="flex flex-col gap-6 lg:max-w-150 lg:gap-7">
            <Badge variant="pretitle" className="self-start">
              {t("eyebrow")}
            </Badge>
            <h1 className="text-white text-4xl md:text-6xl">{t("title")}</h1>
            <p className="text-base md:text-lg text-slate-300">{t("subtitle")}</p>
            <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:gap-8">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <ServiceLink href={primary.href}>{primary.label}</ServiceLink>
              </Button>
              <ServiceLink
                href={secondary.href}
                className="inline-flex items-center gap-2 self-start border-b-2 border-cabana-green pb-1 font-semibold text-white transition-colors hover:text-cabana-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:self-auto"
              >
                {secondary.label}
                <ArrowRight className="size-4" aria-hidden />
              </ServiceLink>
            </div>
            {/* One hint per door, visibly separate: the doors are alternatives, not steps */}
            <ul className="flex flex-col gap-1 text-sm text-slate-400 sm:flex-row sm:gap-6">
              <li>{primary.hint}</li>
              <li>{secondary.hint}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats bar: flush to the right edge, overlapping the dark band on desktop */}
      <div className="relative pl-4 lg:-mt-24 lg:ml-auto lg:w-[58%] lg:pl-0">
        <dl
          aria-label={t("statsLabel")}
          className="grid grid-cols-1 gap-6 rounded-l-xl bg-cabana-blue px-6 py-8 sm:grid-cols-3 lg:px-12 lg:py-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center gap-1 text-center">
              <dt className="max-w-48 text-sm text-cabana-light">{stat.label}</dt>
              <dd className="whitespace-nowrap text-4xl font-bold leading-none text-white lg:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Blocks, Database, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { ServiceLink } from "@/components/service-link";

type Door = { label: string; hint: string; href: string };
type Stat = { value: string; label: string };

// Order matches `inicio.hero.doors`: system, data, AI
const doorIcons = [Blocks, Database, Sparkles];

/**
 * Split hero: copy on a dark band with diagonal accents and the illustration on
 * the right (below on mobile). Three equal "doors" sit under the copy, and a
 * stats bar overlaps the band's bottom edge.
 */
export async function HeroSection() {
  const t = await getTranslations("inicio.hero");
  const doors = t.raw("doors") as Door[];
  const stats = t.raw("stats") as Stat[];
  const [firstLine, secondLine] = t("title").split(/(?<=\.)\s+/);

  return (
    <section className="relative bg-background pb-5">
      <div className="relative flex flex-col overflow-hidden bg-cabana-dark lg:block">
        {/* Decorative diagonals */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-cabana-navy/55 [clip-path:polygon(0_0,55%_100%,0_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-section-dark-2 opacity-80 [clip-path:polygon(0_20%,40%_100%,0_100%)]"
        />

        <div className="relative order-last aspect-square w-full lg:absolute lg:top-0 lg:right-0 lg:aspect-auto lg:h-130 lg:w-[38%] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src="/home/hero-compass.webp"
            alt={t("imageAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-contain lg:object-cover"
          />
        </div>

        <div className="container relative py-14 lg:pt-16 lg:pb-20">
          <div className="flex flex-col gap-6 lg:gap-7">
            <div className="flex max-w-200 flex-col gap-6">
              <Badge variant="pretitle" className="self-start">
                {t("eyebrow")}
              </Badge>
              <h1 className="text-4xl text-white md:text-5xl lg:text-6xl">
                {firstLine}
                {secondLine && (
                  <>
                    <br />
                    <span className="text-gradient-cabana-light">{secondLine}</span>
                  </>
                )}
              </h1>
              <p className="max-w-150 text-base text-slate-300 md:text-lg">{t("subtitle")}</p>
            </div>

            {/* Three equal doors: same size, same style, none is "the main one" */}
            <ul className="mt-4 grid gap-3 md:grid-cols-3 md:gap-5 lg:mt-4">
              {doors.map((door, i) => {
                const Icon = doorIcons[i];
                return (
                  <li key={door.href} className="flex">
                    <ServiceLink
                      href={door.href}
                      className="flex w-full items-center gap-4 rounded-xl border border-white/20 bg-white/5 p-5 backdrop-blur-md transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:flex-col md:items-start md:gap-4 md:p-6"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cabana-green/15 text-cabana-green md:size-13">
                        <Icon className="size-5 md:size-6" aria-hidden />
                      </span>
                      <span className="flex flex-1 flex-col gap-1.5">
                        <span className="text-lg font-bold leading-tight text-white md:text-2xl">
                          {door.label}
                        </span>
                        <span className="text-sm text-cabana-light">{door.hint}</span>
                      </span>
                    </ServiceLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Stats bar: overlaps the dark band's bottom edge on desktop */}
      <div className="container relative mt-4 lg:-mt-14">
        <dl
          aria-label={t("statsLabel")}
          className="flex flex-col items-center gap-6 rounded-xl bg-cabana-blue px-6 py-8 sm:flex-row sm:justify-center sm:gap-0 sm:divide-x sm:divide-white/25 lg:py-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse items-center gap-1.5 px-4 text-center sm:w-56 lg:w-70"
            >
              <dt className="max-w-56 text-sm text-cabana-light">{stat.label}</dt>
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

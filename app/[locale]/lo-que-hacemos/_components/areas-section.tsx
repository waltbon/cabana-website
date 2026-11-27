import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { AREAS } from "../[area]/_components/areas";

type Area = {
  name: string;
  moment: string;
  change: string;
  metric: string;
  href: string;
};

/**
 * One card per impact area: illustration, before → after, and the dark
 * metric panel (design: CH-lqh-areas). Order matches `AREAS`.
 */
export async function AreasSection() {
  const t = await getTranslations("loQueHacemos.areas");
  const items = t.raw("items") as Area[];

  return (
    <section id="areas" className="scroll-mt-20 bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <h2 className="max-w-3xl text-foreground">{t("title")}</h2>
        <ul className="flex flex-col gap-4">
          {items.map((area, i) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="group flex h-full flex-col gap-2 overflow-hidden rounded-xl border bg-card p-2 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:min-h-65 lg:flex-row"
              >
                <div className="relative h-48 shrink-0 rounded-lg bg-section-light p-4 lg:h-auto lg:w-75">
                  <div className="relative size-full">
                    <Image
                      src={`/home/areas/${AREAS[i].slug}.webp`}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 300px, 100vw"
                      className="object-contain transition-transform duration-300 motion-safe:group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-4 px-3 pt-4 pb-3 md:px-8 md:py-7">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-sm font-semibold tracking-wide text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{area.moment}</p>
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-cabana-green text-cabana-dark"
                    >
                      <ArrowRight className="size-4" />
                    </span>
                    <p className="text-lg font-semibold text-foreground">{area.change}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-5 rounded-lg bg-cabana-dark p-6 md:p-7 lg:w-80 lg:shrink-0">
                  <div className="flex flex-col gap-4">
                    <span aria-hidden className="h-0.75 w-8 bg-cabana-green" />
                    <p className="text-xl font-bold leading-snug text-white">{area.metric}</p>
                  </div>
                  <span className="flex items-center gap-1.5 font-semibold text-cabana-green">
                    {t("cardCta")}
                    <ArrowRight
                      className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

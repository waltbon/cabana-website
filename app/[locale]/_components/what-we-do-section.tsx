import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AREAS } from "../lo-que-hacemos/[area]/_components/areas";

type Item = { name: string; body: string };

/**
 * Bento of the five impact areas (order matches `inicio.whatWeDo.items`).
 * The first area is the featured blue card; each card shows a doodle
 * illustration from `public/home/areas/<slug>.webp` (design: CH-home-areas).
 */
export async function WhatWeDoSection() {
  const t = await getTranslations("inicio.whatWeDo");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-20">
          <div className="flex max-w-180 flex-col gap-4">
            <h2 className="text-3xl text-foreground md:text-5xl">{t("title")}</h2>
            <p className="text-lg text-muted-foreground">{t("intro")}</p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link href="/lo-que-hacemos">{t("cta")}</Link>
          </Button>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {items.map((item, i) => (
            <li
              key={item.name}
              className={cn(
                "flex",
                i === 0 && "sm:col-span-2 lg:col-span-7",
                i === 1 && "lg:col-span-5",
                i > 1 && "lg:col-span-4",
              )}
            >
              <AreaCard item={item} index={i} slug={AREAS[i].slug} featured={i === 0} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AreaCard({
  item,
  index,
  slug,
  featured,
}: {
  item: Item;
  index: number;
  slug: string;
  featured: boolean;
}) {
  return (
    <Link
      href={`/lo-que-hacemos/${slug}`}
      className={cn(
        "group flex w-full flex-col gap-2 overflow-hidden rounded-xl p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        featured
          ? "bg-primary lg:min-h-100 lg:flex-row-reverse"
          : "border bg-section-light hover:border-primary hover:bg-background",
      )}
    >
      <div
        className={cn(
          "relative h-45 shrink-0 rounded-lg bg-background p-4",
          featured && "lg:h-auto lg:w-1/2",
        )}
      >
        <div className="relative size-full">
          <Image
            src={`/home/areas/${slug}.webp`}
            alt=""
            fill
            sizes={
              featured
                ? "(min-width: 1024px) 600px, 100vw"
                : "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            }
            className="object-contain transition-transform duration-300 motion-safe:group-hover:scale-103"
          />
        </div>
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col gap-2.5 px-4 pt-3 pb-4",
          featured && "lg:justify-end lg:p-6 lg:pl-8",
        )}
      >
        <h3
          className={cn(
            "text-xl font-bold leading-tight",
            featured ? "text-primary-foreground lg:text-3xl" : "text-foreground",
          )}
        >
          {item.name}
        </h3>
        <p
          className={cn(
            "text-base",
            featured ? "text-primary-foreground/80 lg:text-lg" : "text-muted-foreground",
          )}
        >
          {item.body}
        </p>
        <div
          className={cn(
            "flex items-center justify-between",
            featured ? "mt-auto pt-4 lg:mt-0 lg:pt-6" : "mt-auto pt-4",
          )}
        >
          <span
            className={cn(
              "text-sm font-semibold",
              featured ? "text-cabana-green" : "text-primary",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            aria-hidden
            className={cn(
              "flex size-10 items-center justify-center rounded-full transition-colors",
              featured
                ? "bg-cabana-green text-cabana-dark"
                : "border bg-background text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground",
            )}
          >
            <ArrowUpRight className="size-4.5 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

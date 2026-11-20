import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { AREAS } from "../lo-que-hacemos/[area]/_components/areas";

type Item = { name: string; body: string };

/** Five equal cards, one per impact area (order matches `inicio.whatWeDo.items`). */
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
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => (
            <li key={item.name} className="flex">
              <Link
                href={`/lo-que-hacemos/${AREAS[i].slug}`}
                className="group flex w-full flex-col gap-3.5 rounded-xl border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span aria-hidden className="h-0.75 w-8 bg-cabana-green" />
                <span className="text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold leading-tight text-foreground">{item.name}</h3>
                <p className="text-[15px] text-muted-foreground">{item.body}</p>
                <ArrowRight
                  className="mt-auto size-5 text-primary transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

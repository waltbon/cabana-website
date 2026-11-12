import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function FounderSection() {
  const t = await getTranslations("comoTrabajamos.founder");

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
        <figure className="flex flex-col gap-6">
          <span aria-hidden className="h-0.75 w-12 bg-cabana-green" />
          <blockquote className="text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            “{t("quote")}”
          </blockquote>
          <figcaption className="flex flex-col">
            <span className="font-semibold text-foreground">{t("name")}</span>
            <span className="text-muted-foreground">{t("role")}</span>
          </figcaption>
        </figure>
        <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-xl lg:w-50 lg:justify-self-end">
          <Image
            src="/como-trabajamos/walter-bonilla-retrato.webp"
            alt={t("imageAlt")}
            fill
            sizes="(min-width: 1024px) 200px, 160px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

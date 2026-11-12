import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function FounderSection() {
  const t = await getTranslations("comoTrabajamos.founder");

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure className="flex flex-col gap-6">
          <span aria-hidden className="h-[3px] w-12 bg-cabana-green" />
          <blockquote className="text-[22px] font-medium leading-snug text-foreground lg:text-[28px]">
            “{t("quote")}”
          </blockquote>
          <figcaption className="flex flex-col">
            <span className="font-semibold text-foreground">{t("name")}</span>
            <span className="text-muted-foreground">{t("role")}</span>
          </figcaption>
        </figure>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl lg:max-w-[360px] lg:justify-self-center">
          <Image
            src="/como-trabajamos/walter-bonilla-retrato.webp"
            alt={t("imageAlt")}
            fill
            sizes="(min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

/** Split hero (ServiceHero layout) without CTAs: copy on dark, 1:1 illustration on the right. */
export async function HeroSection() {
  const t = await getTranslations("comoTrabajamos.hero");

  return (
    <section className="bg-background px-3 pt-3 pb-8 md:px-6 md:pt-6 md:pb-12">
      <div className="flex flex-col overflow-hidden rounded-xl bg-section-dark lg:min-h-160 lg:flex-row">
        <div className="relative aspect-square w-full shrink-0 lg:order-last lg:aspect-auto lg:w-[42%] xl:w-165">
          <Image
            src="/como-trabajamos/hero-balanza.webp"
            alt={t("imageAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-5 px-6 pt-8 pb-10 md:gap-6 lg:py-16 lg:pr-14 lg:pl-20">
          <Badge variant="pretitle" className="self-start">
            {t("eyebrow")}
          </Badge>
          <h1 className="text-4xl text-white md:text-6xl md:leading-tight">
            {t("title")}
          </h1>
          <p className="text-base text-slate-300 md:text-lg">{t("body")}</p>
        </div>
      </div>
    </section>
  );
}

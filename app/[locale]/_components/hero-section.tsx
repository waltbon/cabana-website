import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceLink } from "./service-link";

type Door = { label: string; hint: string; href: string };

/** Split hero: copy on the left, team photo on the right (below on mobile). */
export async function HeroSection() {
  const t = await getTranslations("inicio.hero");
  const doors = t.raw("doors") as Door[];

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-6 md:gap-8">
          <Badge variant="pretitle" className="self-start">
            {t("eyebrow")}
          </Badge>
          <h1 className="text-white text-4xl md:text-6xl">{t("title")}</h1>
          <p className="text-lg md:text-xl text-slate-300">{t("subtitle")}</p>
          {/* Both doors carry the same visual weight: same size, same variant */}
          <div className="flex w-full flex-col gap-4 pt-2 sm:flex-row">
            {doors.map((door) => (
              <div key={door.href} className="flex flex-1 flex-col items-center gap-3">
                <Button asChild size="lg" className="w-full">
                  <ServiceLink href={door.href}>{door.label}</ServiceLink>
                </Button>
                <span className="text-sm text-slate-300">{door.hint}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl lg:size-130">
          <Image
            src="/home/hero-team.webp"
            alt={t("imageAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

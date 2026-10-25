import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlasmaField } from "@/components/plasma-field";
import { ServiceLink } from "./service-link";

type Door = { label: string; hint: string; href: string };

export async function HeroSection() {
  const t = await getTranslations("inicio.hero");
  const doors = t.raw("doors") as Door[];

  return (
    <section className="relative overflow-hidden bg-section-dark py-16 md:pt-28 md:pb-28">
      {/* WebGL background */}
      <PlasmaField className="absolute inset-0 w-full h-full" />
      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      <div className="relative z-10 container flex flex-col items-center gap-6 text-center md:gap-8">
        <Badge variant="pretitle">{t("eyebrow")}</Badge>
        <h1 className="text-white text-4xl md:text-7xl max-w-5xl">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl">
          {t("subtitle")}
        </p>
        {/* Both doors carry the same visual weight: same size, same variant */}
        <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row">
          {doors.map((door) => (
            <div key={door.href} className="flex flex-col items-center gap-3 sm:w-[21.25rem]">
              <Button asChild size="lg" className="w-full">
                <ServiceLink href={door.href}>{door.label}</ServiceLink>
              </Button>
              <span className="text-sm text-slate-300">{door.hint}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

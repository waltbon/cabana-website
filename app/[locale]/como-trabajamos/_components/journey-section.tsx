import { Fragment } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowDown, ArrowRight } from "lucide-react";

type Service = { duration: string; name: string; body: string };

// Order matches `comoTrabajamos.journey.items`; same light roadmaps as the service pages
const images = [
  { src: "/ruta-ai/roadmap.webp", width: 2000, height: 1116 },
  { src: "/ai-first-move/roadmap.webp", width: 2669, height: 924 },
];

export async function JourneySection() {
  const t = await getTranslations("comoTrabajamos.journey");
  const items = t.raw("items") as Service[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <h2 className="text-foreground">{t("title")}</h2>
        <ol className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {items.map((item, i) => (
            <Fragment key={item.name}>
              <li className="flex flex-1 flex-col gap-6 rounded-xl border bg-card p-6 lg:flex-row lg:items-center lg:p-8">
                <div className="relative h-38 w-full shrink-0 lg:order-last lg:h-42 lg:w-60">
                  <Image
                    src={images[i].src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 240px, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.duration}
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground">{item.name}</h3>
                  <p className="text-muted-foreground">{item.body}</p>
                </div>
              </li>
              {i < items.length - 1 && (
                <li aria-hidden className="shrink-0 self-center text-primary">
                  <ArrowDown className="size-6 lg:hidden" />
                  <ArrowRight className="hidden size-6 lg:block" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
        <p className="text-sm text-muted-foreground">{t("note")}</p>
      </div>
    </section>
  );
}

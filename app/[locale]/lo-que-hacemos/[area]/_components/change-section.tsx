import Image from "next/image";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { AreaConfig } from "./areas";

export async function ChangeSection({ area }: { area: AreaConfig }) {
  const t = await getTranslations(`areasImpacto.${area.slug}.change`);
  const items = t.raw("items") as string[];

  const image = area.changeImage && (
    // Decorative illustration (transparent background).
    <Image
      src={area.changeImage}
      alt=""
      width={440}
      height={266}
      sizes="(min-width: 1024px) 440px, 100vw"
      className="h-auto w-full max-w-md"
    />
  );

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[27.5rem_1fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl text-foreground md:text-4xl">{t("title")}</h2>
          {image && <div className="hidden lg:block">{image}</div>}
        </div>
        <ul className="flex flex-col border-b">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-5 border-t py-5">
              <span
                aria-hidden
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cabana-green text-cabana-dark"
              >
                <Check className="size-4" />
              </span>
              <span className="text-[17px] font-medium text-foreground md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
        {image && <div className="mx-auto lg:hidden">{image}</div>}
      </div>
    </section>
  );
}

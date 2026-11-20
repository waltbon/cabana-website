import { getTranslations } from "next-intl/server";
import type { AreaSlug } from "./areas";

type Item = { title: string; body: string };

export async function ServicesSection({ slug }: { slug: AreaSlug }) {
  const t = await getTranslations(`areasImpacto.${slug}.services`);
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-8 md:gap-10">
        <h2 className="text-3xl text-foreground md:text-4xl">{t("title")}</h2>
        <ol className="flex flex-col gap-3">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="flex flex-col gap-2 rounded-xl border bg-card p-6 md:flex-row md:items-center md:gap-8 md:px-8 md:py-7"
            >
              <span className="text-xl font-bold text-primary md:w-11 md:shrink-0 md:text-[28px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-foreground md:w-[22.5rem] md:shrink-0 md:text-[22px]">
                {item.title}
              </h3>
              <p className="text-muted-foreground md:text-[17px]">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

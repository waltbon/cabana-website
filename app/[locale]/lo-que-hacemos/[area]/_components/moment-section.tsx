import { getTranslations } from "next-intl/server";
import type { AreaSlug } from "./areas";

export async function MomentSection({ slug }: { slug: AreaSlug }) {
  const t = await getTranslations(`areasImpacto.${slug}.moment`);
  const body = t.raw("body") as string[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[27.5rem_1fr] lg:gap-20">
        <h2 className="text-3xl text-foreground md:text-4xl">{t("title")}</h2>
        <div className="flex flex-col gap-5 border-l-3 border-cabana-green pl-5 md:pl-8">
          {body.map((p) => (
            <p key={p} className="text-lg text-foreground md:text-xl">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

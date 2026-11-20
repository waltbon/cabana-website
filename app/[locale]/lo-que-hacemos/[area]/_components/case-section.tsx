import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import type { AreaSlug } from "./areas";

export async function CaseSection({ slug }: { slug: AreaSlug }) {
  const t = await getTranslations(`areasImpacto.${slug}.case`);

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container grid items-center gap-8 lg:grid-cols-[1fr_27.5rem] lg:gap-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="pretitle">{t("eyebrow")}</Badge>
            <span className="text-sm font-medium text-slate-400">{t("industry")}</span>
          </div>
          <h2 className="text-3xl text-white md:text-4xl">{t("title")}</h2>
          <p className="text-lg text-slate-300 md:text-xl">{t("body")}</p>
        </div>
        <div className="flex flex-col gap-3 rounded-xl border border-cabana-navy bg-section-dark-2 p-6 md:p-8">
          <span aria-hidden className="h-0.75 w-8 bg-cabana-green" />
          <p className="text-3xl font-bold leading-tight text-cabana-green md:text-4xl">
            {t("metric")}
          </p>
          <p className="text-slate-300 md:text-[17px]">{t("metricLabel")}</p>
        </div>
      </div>
    </section>
  );
}

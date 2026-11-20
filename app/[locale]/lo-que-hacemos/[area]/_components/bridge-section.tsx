import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { AreaSlug } from "./areas";

export async function BridgeSection({ slug }: { slug: AreaSlug }) {
  const t = await getTranslations(`areasImpacto.${slug}.bridge`);
  const [rutaIa, aiFirstMove] = t.raw("items") as string[];

  const cardClass =
    "flex flex-col justify-between gap-5 rounded-xl border bg-card p-6 md:p-7";
  const textClass = "text-lg font-medium text-foreground";
  const linkClass = "flex items-center gap-1.5 font-semibold text-primary";

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[27.5rem_1fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl text-foreground md:text-4xl">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">{t("body")}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className={cardClass}>
            <p className={textClass}>{rutaIa}</p>
            {/* /ruta-ia lives outside [locale] (Spanish only) */}
            <NextLink href="/ruta-ia" className={linkClass}>
              {t("ctaRutaIa")}
              <ArrowRight className="size-4" aria-hidden />
            </NextLink>
          </div>
          <div className={cardClass}>
            <p className={textClass}>{aiFirstMove}</p>
            <Link href="/ai-first-move" className={linkClass}>
              {t("ctaAiFirstMove")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

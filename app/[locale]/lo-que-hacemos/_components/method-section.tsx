import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FeatureItem } from "@/components/feature-item";

export async function MethodSection() {
  const t = await getTranslations("loQueHacemos.method");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-foreground">{t("title")}</h2>
          <Link
            href="/como-trabajamos"
            className="group hidden items-center gap-1.5 font-semibold text-primary md:flex"
          >
            {t("link")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((item, i) => (
            <FeatureItem
              key={item}
              variant="numbered"
              number={String(i + 1).padStart(2, "0")}
              title={item}
            />
          ))}
        </div>
        <Link
          href="/como-trabajamos"
          className="flex items-center gap-1.5 font-semibold text-primary md:hidden"
        >
          {t("link")}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

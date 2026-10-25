import { FilePenLine } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function PricingSection() {
  const t = await getTranslations("capacidades.pricing");

  return (
    <section className="bg-section-slate py-12 md:py-16">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:gap-16">
        <div className="flex items-center gap-4 md:w-[25rem] md:shrink-0">
          <span className="icon-wrapper icon-wrapper-md shrink-0">
            <FilePenLine className="size-6 text-white" aria-hidden />
          </span>
          <h2 className="text-2xl text-foreground md:text-[28px]">
            {t("title")}
          </h2>
        </div>
        <p className="text-lg text-muted-foreground">{t("body")}</p>
      </div>
    </section>
  );
}

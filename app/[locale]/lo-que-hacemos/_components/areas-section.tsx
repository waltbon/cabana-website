import { ArrowDown, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Area = {
  name: string;
  moment: string;
  change: string;
  metric: string;
  href: string;
};

export async function AreasSection() {
  const t = await getTranslations("loQueHacemos.areas");
  const items = t.raw("items") as Area[];

  return (
    <section id="areas" className="scroll-mt-20 bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <h2 className="max-w-3xl text-foreground">{t("title")}</h2>
        <ul className="flex flex-col gap-4">
          {items.map((area, i) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-primary lg:flex-row"
              >
                <div className="flex flex-1 flex-col justify-center gap-5 px-6 py-7 md:px-10 md:py-9">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
                    <span className="text-sm font-semibold tracking-wide text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                      {area.name}
                    </h3>
                  </div>
                  <span aria-hidden className="h-px w-full bg-border" />
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
                    <p className="text-muted-foreground md:flex-1">{area.moment}</p>
                    <span
                      aria-hidden
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cabana-green text-cabana-dark md:size-10"
                    >
                      <ArrowDown className="size-4 md:hidden" />
                      <ArrowRight className="hidden size-4.5 md:block" />
                    </span>
                    <p className="text-lg font-semibold text-foreground md:flex-1">
                      {area.change}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-5 bg-cabana-dark px-6 py-6 md:px-8 md:py-9 lg:w-[340px] lg:shrink-0">
                  <div className="flex flex-col gap-3.5">
                    <span aria-hidden className="h-0.75 w-8 bg-cabana-green" />
                    <p className="text-lg font-semibold text-white">{area.metric}</p>
                  </div>
                  <span className="flex items-center gap-1.5 font-semibold text-cabana-green">
                    {t("cardCta")}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CAPABILITIES, CAPABILITIES_PATH } from "@/components/capacidades/config";

type Item = { name: string; term: string; body: string };

export async function CapabilitiesGrid() {
  const t = await getTranslations("capacidades");
  const items = t.raw("items") as Item[];

  return (
    <section id="capacidades" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t("list.overline")}
          </p>
          <h2 className="max-w-3xl text-foreground">{t("list.title")}</h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {CAPABILITIES.map(({ key, slug, icon: Icon }, i) => {
            const item = items[i];
            return (
              <li key={key}>
                <Link
                  href={`${CAPABILITIES_PATH}/${slug}`}
                  className="group flex h-full flex-col gap-5 rounded-xl border bg-card p-6 transition-colors hover:border-primary md:p-10"
                >
                  <span className="icon-wrapper icon-wrapper-md">
                    <Icon className="size-6 text-white" aria-hidden />
                  </span>
                  <span className="flex flex-col gap-1">
                    <h3 className="text-2xl font-bold text-foreground md:text-[28px]">
                      {item.name}
                    </h3>
                    <span className="font-semibold text-primary md:text-lg">
                      {item.term}
                    </span>
                  </span>
                  <p className="text-muted-foreground md:text-[17px]">
                    {item.body}
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 font-semibold text-primary">
                    {t("list.link")}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

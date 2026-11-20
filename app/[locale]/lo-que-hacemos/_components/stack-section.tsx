import { getTranslations } from "next-intl/server";

type Group = { label: string; items: string[] };

/** Title/intro from loQueHacemos; the technology list is still the one from
 * /capacidades until the logo list is decided (open decision 5). */
export async function StackSection() {
  const [t, tGroups] = await Promise.all([
    getTranslations("loQueHacemos.stack"),
    getTranslations("capacidades.stack"),
  ]);
  const groups = tGroups.raw("groups") as Group[];

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-16">
          <h2 className="text-2xl text-foreground md:w-[30rem] md:shrink-0">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("intro")}</p>
        </div>
        <dl className="flex flex-col">
          {groups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-2 border-t py-4 md:flex-row md:items-center md:gap-6"
            >
              <dt className="text-sm font-semibold text-muted-foreground md:w-56 md:shrink-0">
                {group.label}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-section-slate px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

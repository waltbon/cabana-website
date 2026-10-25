import { getRutaIaTranslations } from "../lib/i18n";

type Item = { role: string; body: string };

export async function ClientTimeSection() {
  const t = await getRutaIaTranslations("clientTime");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-section-slate py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[30rem_1fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-foreground">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">{t("intro")}</p>
        </div>
        <dl className="divide-y">
          {items.map((item) => (
            <div
              key={item.role}
              className="flex flex-col gap-1 py-5 md:flex-row md:gap-8"
            >
              <dt className="font-semibold text-foreground md:w-60 md:shrink-0">
                {item.role}
              </dt>
              <dd className="text-muted-foreground">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

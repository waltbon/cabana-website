import { getTranslations } from "next-intl/server";

export async function ClientTimeSection() {
  const t = await getTranslations("aiFirstMove.clientTime");

  return (
    <section className="bg-section-slate py-16 md:py-24">
      <div className="container grid gap-4 lg:grid-cols-2 lg:gap-20">
        <h2 className="text-foreground">{t("title")}</h2>
        <p className="text-lg text-muted-foreground">{t("body")}</p>
      </div>
    </section>
  );
}

import { getRutaIaTranslations } from "../lib/i18n";

export async function MomentSection() {
  const t = await getRutaIaTranslations("moment");
  const [context, answer] = t.raw("body") as string[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid gap-8 md:grid-cols-2 md:gap-20">
        <h2 className="text-foreground">{t("title")}</h2>
        <div className="flex flex-col gap-5 text-lg">
          <p className="text-muted-foreground">{context}</p>
          <p className="text-foreground">{answer}</p>
        </div>
      </div>
    </section>
  );
}

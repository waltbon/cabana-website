import { getTranslations } from "next-intl/server";
import { FeatureItem } from "@/components/feature-item";

type Item = { title: string; body: string };

export async function NotDoSection() {
  const t = await getTranslations("comoTrabajamos.notDo");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-12">
        <h2 className="text-foreground">{t("title")}</h2>
        <ul className="grid gap-12 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <FeatureItem variant="numbered" title={item.title} body={item.body || undefined} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

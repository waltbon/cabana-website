import { ArrowRightLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function NotForSection() {
  const t = await getTranslations("aiFirstMove.notFor");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-12">
        <h2 className="text-foreground">{t("title")}</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl bg-card p-6 text-foreground"
            >
              <ArrowRightLeft
                className="mt-0.5 size-5 shrink-0 text-muted-foreground"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

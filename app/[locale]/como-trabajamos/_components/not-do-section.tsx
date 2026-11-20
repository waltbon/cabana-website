import { X } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function NotDoSection() {
  const t = await getTranslations("comoTrabajamos.notDo");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-8">
        <h2 className="text-foreground">{t("title")}</h2>
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-4 rounded-xl border bg-card px-6 py-5">
              <span
                aria-hidden
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cabana-light text-primary"
              >
                <X className="size-4" />
              </span>
              <span className="text-[17px] font-medium text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

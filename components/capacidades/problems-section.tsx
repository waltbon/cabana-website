import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";
import type { CapabilityKey } from "./config";

type Item = { title: string; body: string };

export async function ProblemsSection({
  capability,
  icons,
}: {
  capability: CapabilityKey;
  icons: LucideIcon[];
}) {
  const t = await getTranslations(`capacidades.${capability}.problems`);
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <h2 className="max-w-3xl text-foreground">{t("title")}</h2>
        <ul
          className={`grid gap-8 md:grid-cols-2 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
        >
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className="flex flex-col gap-3 border-t pt-6">
                <Icon className="size-6 text-destructive" aria-hidden />
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

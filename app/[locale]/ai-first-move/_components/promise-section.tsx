import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function PromiseSection() {
  const t = await getTranslations("aiFirstMove.promise");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-12">
        <h2 className="text-foreground text-center">{t("title")}</h2>
        <Image
          src="/ai-first-move/roadmap.webp"
          alt={t("illustrationAlt")}
          width={2669}
          height={924}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="mx-auto h-auto w-full max-w-5xl"
        />
        <ol className="grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex flex-col gap-4 rounded-xl border bg-card p-8"
            >
              <span className="text-5xl font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-foreground">{item}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

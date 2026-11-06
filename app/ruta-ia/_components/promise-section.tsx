import Image from "next/image";
import { getRutaIaTranslations } from "../lib/i18n";

export async function PromiseSection() {
  const t = await getRutaIaTranslations("promise");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-12">
        <h2 className="text-foreground text-center">{t("title")}</h2>
        <Image
          src="/ruta-ai/roadmap.webp"
          alt={t("illustrationAlt")}
          width={2000}
          height={1116}
          sizes="(min-width: 1024px) 896px, 100vw"
          className="mx-auto h-auto w-full max-w-4xl"
        />
        <ol className="grid gap-6 md:grid-cols-3">
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

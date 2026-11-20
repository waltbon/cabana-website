import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FeatureItem } from "@/components/feature-item";

type Item = { title: string; body: string };

export async function MethodSection() {
  const t = await getTranslations("comoTrabajamos.method");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1fr_17.5rem] lg:gap-14">
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-foreground">{t("title")}</h2>
            <p className="text-lg text-muted-foreground">{t("intro")}</p>
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {items.map((item, i) => (
              <FeatureItem
                key={item.title}
                variant="numbered"
                number={String(i + 1).padStart(2, "0")}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
        </div>
        <aside className="flex flex-col gap-6 self-start rounded-xl bg-section-dark p-7">
          <Image
            src="/como-trabajamos/aprobacion-talanquera.webp"
            alt=""
            width={1007}
            height={570}
            sizes="280px"
            className="h-auto w-full"
          />
          <p className="text-xl font-semibold text-white">{t("closing")}</p>
        </aside>
      </div>
    </section>
  );
}

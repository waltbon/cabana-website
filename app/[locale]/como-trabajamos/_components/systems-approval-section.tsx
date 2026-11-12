import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FeatureItem } from "@/components/feature-item";

type Item = { title: string; body: string };

/** "Lo que tiene cada sistema" (2x2) with the approval card on the right. */
export async function SystemsApprovalSection() {
  const [t, tApproval] = await Promise.all([
    getTranslations("comoTrabajamos.systems"),
    getTranslations("comoTrabajamos.approval"),
  ]);
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid gap-6 lg:grid-cols-4">
        <div className="flex flex-col gap-10 lg:col-span-3">
          <h2 className="text-foreground">{t("title")}</h2>
          <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {items.map((item, i) => (
              <li key={item.title}>
                <FeatureItem
                  variant="numbered"
                  number={String(i + 1).padStart(2, "0")}
                  title={item.title}
                  body={item.body}
                />
              </li>
            ))}
          </ol>
        </div>
        <div className="flex h-full flex-col justify-between gap-8 rounded-xl bg-cabana-dark p-8">
          <Image
            src="/como-trabajamos/aprobacion-talanquera.webp"
            alt=""
            width={1007}
            height={570}
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="h-auto w-full object-contain"
          />
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-white">{tApproval("title")}</h3>
            <p className="text-slate-300">{tApproval("body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

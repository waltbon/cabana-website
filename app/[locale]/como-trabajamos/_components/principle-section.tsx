import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";

export async function PrincipleSection() {
  const t = await getTranslations("comoTrabajamos.principle");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[32.5rem_1fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <Badge variant="pretitle" className="self-start">
            {t("eyebrow")}
          </Badge>
          <h2 className="text-white">{t("title")}</h2>
          <p className="text-lg text-slate-300">{t("body")}</p>
          <Link
            href="/lo-que-hacemos/automatizacion-con-agentes-de-ia"
            className="group flex items-center gap-1.5 font-semibold text-cabana-green"
          >
            {t("link")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
        <ol className="flex flex-col gap-3">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl border border-cabana-navy bg-section-dark-2 p-6"
            >
              <span className="font-bold text-cabana-green">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[17px] text-white">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import Image from "next/image";
import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Item = { body: string; cta: string };

export async function StartSection() {
  const t = await getTranslations("loQueHacemos.start");
  const [rutaIa, aiFirstMove] = t.raw("items") as Item[];

  const cardClass =
    "flex flex-col gap-4 rounded-xl border border-cabana-navy bg-section-dark-2 p-6 md:p-8";
  const bodyClass = "text-lg font-medium text-white md:text-xl";
  const linkClass = "flex items-center gap-1.5 font-semibold text-cabana-green";

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_480px] lg:gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl text-white md:text-3xl">{t("title")}</h2>
          <div className="flex flex-col gap-4">
            <div className={cardClass}>
              <p className={bodyClass}>{rutaIa.body}</p>
              {/* /ruta-ia lives outside [locale] (Spanish only) */}
              <NextLink href="/ruta-ia" className={linkClass}>
                {rutaIa.cta}
                <ArrowRight className="size-4" aria-hidden />
              </NextLink>
            </div>
            <div className={cardClass}>
              <p className={bodyClass}>{aiFirstMove.body}</p>
              <Link href="/ai-first-move" className={linkClass}>
                {aiFirstMove.cta}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/lo-que-hacemos/por-donde-empezar.webp"
          alt=""
          width={480}
          height={480}
          sizes="(min-width: 1024px) 480px, 100vw"
          className="mx-auto w-full max-w-md lg:max-w-none"
        />
      </div>
    </section>
  );
}

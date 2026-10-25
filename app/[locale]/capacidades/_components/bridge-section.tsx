import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";

type Item = { tag: string; text: string; link: string };

export async function BridgeSection() {
  const t = await getTranslations("capacidades.bridge");
  const [rutaIa, aiFirstMove] = t.raw("items") as Item[];

  const linkClass = "mt-auto flex items-center gap-1.5 font-semibold text-primary";
  const cardClass = "flex flex-col gap-4 rounded-xl bg-card p-6 md:p-8";

  return (
    <section className="bg-section-light py-16 md:py-20">
      <div className="container flex flex-col gap-8">
        <h2 className="text-2xl text-foreground md:text-3xl">{t("title")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className={cardClass}>
            <Badge className="self-start">{rutaIa.tag}</Badge>
            <p className="text-lg font-medium text-foreground md:text-xl">
              {rutaIa.text}
            </p>
            {/* /ruta-ia lives outside [locale] (Spanish only) */}
            <NextLink href="/ruta-ia" className={linkClass}>
              {rutaIa.link}
              <ArrowRight className="size-4" aria-hidden />
            </NextLink>
          </div>
          <div className={cardClass}>
            <Badge className="self-start">{aiFirstMove.tag}</Badge>
            <p className="text-lg font-medium text-foreground md:text-xl">
              {aiFirstMove.text}
            </p>
            <Link href="/ai-first-move" className={linkClass}>
              {aiFirstMove.link}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

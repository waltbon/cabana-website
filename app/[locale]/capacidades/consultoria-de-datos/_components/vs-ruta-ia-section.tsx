import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { CaseBand } from "@/components/capacidades/case-section";
import { capabilityPath } from "@/components/capacidades/config";

export async function VsRutaIaSection() {
  const t = await getTranslations("capacidades.dataConsulting");

  return (
    <CaseBand
      id="ruta-ia"
      left={
        <>
          <Badge variant="pretitle" className="self-start">
            {t("vsRutaIa.title")}
          </Badge>
          <p className="text-xl font-semibold text-white md:text-[26px] md:leading-snug">
            {t("vsRutaIa.body")}
          </p>
          {/* /ruta-ia lives outside [locale] (Spanish only) */}
          <NextLink
            href="/ruta-ia"
            className="flex items-center gap-1.5 self-start font-semibold text-cabana-green hover:underline"
          >
            {t("vsRutaIa.link")}
            <ArrowRight className="size-4" aria-hidden />
          </NextLink>
        </>
      }
      right={
        <div className="flex flex-col gap-4 rounded-xl bg-section-dark-2 p-6">
          <p className="text-lg text-white">{t("next")}</p>
          <Link
            href={capabilityPath("dataEngineering")}
            className="flex items-center gap-1.5 self-start font-semibold text-cabana-green hover:underline"
          >
            {t("nextLink")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      }
    />
  );
}

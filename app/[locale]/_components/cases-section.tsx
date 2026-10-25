import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { capabilityPath, type CapabilityKey } from "@/components/capacidades/config";

type Case = {
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
};

// Until /casos exists, each card links to its capability's case section.
// "Ver todos los casos" (inicio.cases.cta) stays hidden until then.
const caseCapabilities: CapabilityKey[] = [
  "customAiAgents",
  "dataEngineering",
  "digitalProduct",
];

export async function CasesSection() {
  const t = await getTranslations("inicio.cases");
  const items = t.raw("items") as Case[];

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-4">
          <Badge variant="pretitle" className="self-start">
            {t("eyebrow")}
          </Badge>
          <h2 className="text-white">{t("title")}</h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.title}>
              <Link
                href={`${capabilityPath(caseCapabilities[i])}#caso`}
                className="group flex h-full flex-col gap-3.5 rounded-xl bg-section-dark-2 p-6 md:p-8 focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="text-xs font-semibold uppercase text-cabana-green">
                  {item.industry}
                </span>
                <h3 className="text-lg font-semibold leading-normal text-white">
                  {item.title}
                </h3>
                <span className="text-3xl font-bold text-cabana-green md:text-4xl">
                  {item.metric}
                </span>
                <span className="text-slate-300">{item.metricLabel}</span>
                <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-white">
                  {t("link")}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

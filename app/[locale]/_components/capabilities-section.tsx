import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  CAPABILITIES_PATH,
  capabilityPath,
  type CapabilityKey,
} from "@/components/capacidades/config";

type Item = { name: string; body: string };

// Order matches `inicio.capabilities.items`
const itemKeys: CapabilityKey[] = [
  "dataEngineering",
  "dataConsulting",
  "digitalProduct",
  "customAiAgents",
];

export async function CapabilitiesSection() {
  const t = await getTranslations("inicio.capabilities");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[26rem_1fr] lg:gap-20">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-semibold leading-8 text-foreground md:text-2xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("intro")}</p>
          <Button asChild variant="outline">
            <Link href={CAPABILITIES_PATH}>{t("cta")}</Link>
          </Button>
        </div>
        <ul className="flex flex-col">
          {items.map((item, i) => (
            <li key={item.name} className="border-t">
              <Link
                href={capabilityPath(itemKeys[i])}
                className="group flex flex-col gap-1.5 py-4.5 md:flex-row md:items-center md:gap-6 focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="font-semibold text-foreground md:w-50 md:shrink-0">
                  {item.name}
                </span>
                <span className="flex-1 text-muted-foreground">{item.body}</span>
                <ArrowRight className="hidden size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1 md:block" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

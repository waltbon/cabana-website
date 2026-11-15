import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  CAPABILITIES,
  CAPABILITIES_PATH,
  capabilityPath,
  type CapabilityKey,
} from "@/components/capacidades/config";

type Item = { name: string; body: string };

// Order matches `inicio.capabilities.items`
const itemKeys: CapabilityKey[] = [
  "digitalProduct",
  "dataConsulting",
  "dataEngineering",
  "customAiAgents",
];

const slugOf = (key: CapabilityKey) => CAPABILITIES.find((c) => c.key === key)?.slug;

export async function CapabilitiesSection() {
  const t = await getTranslations("inicio.capabilities");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-8 md:gap-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-20">
          <div className="flex max-w-180 flex-col gap-4">
            <h2 className="text-foreground text-3xl md:text-5xl">{t("title")}</h2>
            <p className="text-lg text-muted-foreground">{t("intro")}</p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link href={CAPABILITIES_PATH}>{t("cta")}</Link>
          </Button>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {items.map((item, i) => {
            const key = itemKeys[i];
            return (
              <li key={item.name} className="flex">
                <Link
                  href={capabilityPath(key)}
                  className="group flex w-full flex-col rounded-xl bg-cabana-dark p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="relative h-45 overflow-hidden rounded-lg md:h-60">
                    <Image
                      src={`/capacidades/hero-${slugOf(key)}.webp`}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white/90 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="size-5" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5 px-3 pt-6 pb-4 md:px-5 md:pt-7 md:pb-5">
                    <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                      {item.name}
                    </h3>
                    <p className="text-cabana-light">{item.body}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { FeatureItem } from "@/components/feature-item";
import type { AreaSlug } from "./areas";

type Step = { title: string; body: string };

export async function ProcessSection({ slug }: { slug: AreaSlug }) {
  const t = await getTranslations(`areasImpacto.${slug}.process`);
  const steps = t.raw("steps") as Step[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-8 md:gap-10">
        <h2 className="text-3xl text-foreground md:text-4xl">{t("title")}</h2>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <FeatureItem
              key={step.title}
              variant="numbered"
              number={String(i + 1).padStart(2, "0")}
              title={step.title}
              body={step.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

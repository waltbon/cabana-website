import { Badge } from "@/components/ui/badge";
import { getTranslations } from "next-intl/server";

type Cycle = { label: string; title: string; body: string };

export async function ProcessSection() {
  const t = await getTranslations("aiFirstMove.process");
  const cycles = t.raw("cycles") as Cycle[];

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container flex flex-col gap-12">
        <h2 className="text-white max-w-3xl">{t("title")}</h2>
        <ol className="grid gap-10 md:grid-cols-2 md:gap-8">
          {cycles.map((step) => (
            <li key={step.label} className="flex flex-col gap-4">
              <span className="h-1 rounded-full bg-cabana-green" aria-hidden />
              <Badge variant="green" className="self-start">
                {step.label}
              </Badge>
              <h3 className="text-white">{step.title}</h3>
              <p className="text-slate-300">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="text-lg font-medium text-cabana-lime">{t("differentiator")}</p>
      </div>
    </section>
  );
}

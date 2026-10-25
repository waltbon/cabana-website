import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getRutaIaTranslations } from "../lib/i18n";

type Step = { label: string; title: string; body: string };

export async function ProcessSection() {
  const t = await getRutaIaTranslations("process");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="bg-section-dark py-16 md:py-24">
      <div className="container flex flex-col gap-12">
        <h2 className="text-white max-w-3xl">{t("title")}</h2>
        <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.label} className="flex flex-col gap-4">
              {/* The last step (follow-up) happens after the 4 weeks */}
              <span
                className={cn(
                  "h-1 rounded-full",
                  i < steps.length - 1 ? "bg-cabana-green" : "bg-white/20"
                )}
                aria-hidden
              />
              <Badge variant="green" className="self-start">
                {step.label}
              </Badge>
              <h3 className="text-white">{step.title}</h3>
              <p className="text-slate-300">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="text-lg font-medium text-cabana-lime">{t("method")}</p>
      </div>
    </section>
  );
}

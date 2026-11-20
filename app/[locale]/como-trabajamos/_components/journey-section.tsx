import NextLink from "next/link";
import { CornerDownRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Step = { stage: string; service: string; question: string; answer: string };

// Order matches `comoTrabajamos.journey.steps`
const stepHrefs = ["/ruta-ia", "/ai-first-move", "/lo-que-hacemos"];

export async function JourneySection() {
  const t = await getTranslations("comoTrabajamos.journey");
  const steps = t.raw("steps") as Step[];
  const rules = t.raw("rules") as string[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-foreground">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">{t("intro")}</p>
        </div>
        <ol className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, i) => {
            const dark = i === 1;
            // /ruta-ia lives outside [locale] (Spanish only)
            const LinkTag = i === 0 ? NextLink : Link;
            return (
              <li key={step.service} className="flex">
                <LinkTag
                  href={stepHrefs[i]}
                  className={cn(
                    "flex w-full flex-col gap-3.5 rounded-xl p-7 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    dark ? "bg-section-dark hover:bg-section-dark-2" : "border bg-card hover:border-primary",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wider",
                      dark ? "text-cabana-green" : "text-primary",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")} · {step.stage}
                  </span>
                  <h3 className={cn("text-2xl font-bold", dark ? "text-white" : "text-foreground")}>
                    {step.service}
                  </h3>
                  <p className={cn("italic", dark ? "text-slate-300" : "text-foreground")}>
                    {step.question}
                  </p>
                  <span aria-hidden className={cn("h-px w-full", dark ? "bg-cabana-navy" : "bg-border")} />
                  <p className={dark ? "text-slate-300" : "text-muted-foreground"}>{step.answer}</p>
                </LinkTag>
              </li>
            );
          })}
        </ol>
        <ul className="flex flex-col gap-3 rounded-xl bg-cabana-light px-6 py-6 md:px-7">
          {rules.map((rule) => (
            <li key={rule} className="flex items-start gap-2.5 text-foreground">
              <CornerDownRight className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

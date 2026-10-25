import { Fragment } from "react";
import { getTranslations } from "next-intl/server";
import { ArrowDown, ArrowRight, CornerDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = { label: string; title: string; body: string };

// Steps 2 and 3 are the two services (the entry points)
const highlighted = [false, true, true, false];

export async function JourneySection() {
  const t = await getTranslations("inicio.journey");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-foreground">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">{t("intro")}</p>
        </div>
        <ol className="flex flex-col items-center gap-4 lg:flex-row lg:items-stretch">
          {steps.map((step, i) => (
            <Fragment key={step.title}>
              <li
                className={cn(
                  "flex w-full flex-col gap-2.5 rounded-xl p-6 lg:min-h-55 lg:flex-1",
                  highlighted[i] ? "bg-section-dark" : "border bg-card",
                )}
              >
                <span
                  className={cn(
                    "text-xs font-semibold uppercase",
                    highlighted[i] ? "text-cabana-green" : "text-primary",
                  )}
                >
                  {step.label}
                </span>
                <h3 className={highlighted[i] ? "text-white" : "text-foreground"}>
                  {step.title}
                </h3>
                <p className={highlighted[i] ? "text-slate-300" : "text-muted-foreground"}>
                  {step.body}
                </p>
              </li>
              {i < steps.length - 1 && (
                <li aria-hidden className="shrink-0 self-center text-muted-foreground">
                  <ArrowDown className="size-6 lg:hidden" />
                  <ArrowRight className="hidden size-6 lg:block" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
        <p className="flex items-start gap-3 rounded-xl bg-cabana-light px-6 py-5 text-lg font-semibold text-foreground md:items-center">
          <CornerDownRight className="mt-1 size-5 shrink-0 text-primary md:mt-0" aria-hidden />
          {t("directEntry")}
        </p>
      </div>
    </section>
  );
}

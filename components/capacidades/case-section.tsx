import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import type { CapabilityKey } from "./config";

type Metric = { value: string; label: string };

/** Dark band with a published case (industry, story, metrics) and a closing line. */
export async function CaseSection({
  capability,
  footnote,
  footnoteIcon: FootnoteIcon,
}: {
  capability: CapabilityKey;
  footnote?: ReactNode;
  footnoteIcon?: LucideIcon;
}) {
  const t = await getTranslations(`capacidades.${capability}.case`);
  const metrics = t.raw("metrics") as Metric[];

  return (
    <CaseBand
      id="caso"
      footnote={footnote}
      footnoteIcon={FootnoteIcon}
      left={
        <>
          <Badge variant="pretitle" className="self-start">
            {t("industry")}
          </Badge>
          <p className="text-xl font-semibold text-white md:text-[26px] md:leading-snug">
            {t("body")}
          </p>
        </>
      }
      right={metrics.map((m) => (
        <div
          key={m.label}
          className="flex flex-col gap-1.5 rounded-xl bg-section-dark-2 p-6"
        >
          <span className="text-4xl font-bold text-cabana-green md:text-5xl">
            {m.value}
          </span>
          <span className="text-slate-300">{m.label}</span>
        </div>
      ))}
    />
  );
}

export function CaseBand({
  id,
  left,
  right,
  footnote,
  footnoteIcon: FootnoteIcon,
}: {
  id: string;
  left: ReactNode;
  right: ReactNode;
  footnote?: ReactNode;
  footnoteIcon?: LucideIcon;
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-section-dark py-16 md:py-24">
      <div className="container flex flex-col gap-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_32.5rem] lg:gap-20">
          <div className="flex flex-col gap-5">{left}</div>
          <div className="flex flex-col gap-4">{right}</div>
        </div>
        {footnote && (
          <div className="flex items-start gap-3 pt-2 text-slate-300 md:items-center">
            {FootnoteIcon && (
              <FootnoteIcon
                className="size-5 shrink-0 text-cabana-green"
                aria-hidden
              />
            )}
            <div>{footnote}</div>
          </div>
        )}
      </div>
    </section>
  );
}

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureItemProps = {
  title: string;
  body?: string;
  className?: string;
} & (
  | { variant: "numbered"; number?: string; icon?: never }
  | { variant: "icon"; icon: LucideIcon; number?: never }
);

/**
 * Feature Item (DESIGN-RULES §4.1).
 * `numbered`: top rule with a cabana-green accent, optional number in primary.
 * `icon`: lucide icon in a 1px-bordered box next to the title.
 */
export function FeatureItem(props: FeatureItemProps) {
  const { title, body, className } = props;

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      {props.variant === "numbered" ? (
        <>
          <div aria-hidden className="mb-2.5 flex items-end">
            <span className="h-[3px] w-12 bg-cabana-green" />
            <span className="h-px flex-1 bg-border" />
          </div>
          {props.number && (
            <span className="text-sm font-medium tracking-wide text-primary">{props.number}</span>
          )}
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </>
      ) : (
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md border">
            <props.icon className="size-[18px] text-primary" aria-hidden />
          </span>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
      )}
      {body && <p className="text-base leading-relaxed text-muted-foreground">{body}</p>}
    </div>
  );
}

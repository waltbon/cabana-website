import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  label: string;
  variant?: "outline" | "filled";
  className?: string;
}

export function SectionBadge({
  label,
  variant = "outline",
  className,
}: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-medium tracking-[0.12em] uppercase border",
        "rounded-md px-3.5 py-1",
        variant === "outline" &&
          "border border-border text-muted-foreground",
        variant === "filled" &&
          "bg-muted text-muted-foreground",
        className
      )}
    >
      {label}
    </span>
  );
}

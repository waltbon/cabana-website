"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ContactLinkProps {
  kind: "email" | "phone";
  value: string;
  label: string;
  className?: string;
  copyClassName?: string;
  children: React.ReactNode;
}

async function writeToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const el = document.createElement("textarea");
    el.value = value;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  }
}

export function ContactLink({
  kind,
  value,
  label,
  className,
  copyClassName,
  children,
}: ContactLinkProps) {
  const t = useTranslations("copy");
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const href =
    kind === "email" ? `mailto:${value}` : `tel:${value.replace(/[^+\d]/g, "")}`;

  const handleLinkClick = (e: React.MouseEvent) => {
    if (kind === "phone" && window.matchMedia("(pointer: fine)").matches) {
      e.preventDefault();
      void handleCopy();
    }
  };

  const handleCopy = async () => {
    if (!(await writeToClipboard(value))) return;
    setCopied(true);
    setOpen(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="inline-flex items-center gap-1">
      <a
        href={href}
        onClick={handleLinkClick}
        aria-label={`${label}: ${value}`}
        className={className}
      >
        {children}
      </a>
      <TooltipProvider delayDuration={150}>
        <Tooltip
          open={open}
          onOpenChange={(next) => {
            setOpen(next);
            if (!next) setCopied(false);
          }}
        >
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={handleCopy}
              aria-label={`${t("hint")}: ${value}`}
              className={cn(
                "inline-flex size-6 shrink-0 items-center justify-center rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring max-md:size-11",
                copyClassName,
              )}
            >
              {copied ? (
                <Check className="size-3.5" aria-hidden="true" />
              ) : (
                <Copy className="size-3.5" aria-hidden="true" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent role="status" className="text-xs">
            {copied ? t("done") : t("hint")}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  );
}

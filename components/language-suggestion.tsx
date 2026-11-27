"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Languages, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/config";

// Q22 (C): instead of redirecting by Accept-Language, suggest the English
// version to visitors whose browser prefers English and who have not chosen a
// language yet. Accepting or dismissing stores the choice in NEXT_LOCALE,
// which next-intl reads on the next request (proxy.ts, i18n/routing.ts).
const LOCALE_COOKIE = "NEXT_LOCALE";

// Spanish-only routes: /en/posts/<slug> 301s back to /posts/<slug>.
const SPANISH_ONLY = /^\/posts\/[^/]+\/?$/;

type Labels = {
  message: string;
  accept: string;
  dismiss: string;
  close: string;
};

function hasLocaleCookie() {
  return document.cookie
    .split(";")
    .some((c) => c.trim().startsWith(`${LOCALE_COOKIE}=`));
}

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; SameSite=Lax`;
}

// First browser language we support decides, as next-intl's negotiation did.
function browserPrefers(target: Locale) {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const lang of languages) {
    const base = lang.toLowerCase().split("-")[0];
    if (base === "es" || base === "en") return base === target;
  }
  return false;
}

export function LanguageSuggestion({
  target,
  labels,
}: {
  target: Locale;
  labels: Labels;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show =
      locale !== target &&
      !SPANISH_ONLY.test(pathname) &&
      !hasLocaleCookie() &&
      browserPrefers(target);
    // Reads browser-only state (cookies, navigator), so it runs after mount.
    setOpen(show);
  }, [locale, pathname, target]);

  if (!open) return null;

  const dismiss = () => {
    setLocaleCookie(locale);
    setOpen(false);
  };

  const accept = () => {
    setLocaleCookie(target);
    setOpen(false);
    router.replace(pathname, { locale: target });
  };

  return (
    <aside
      lang={target}
      aria-label={labels.message}
      className="fixed inset-x-4 bottom-4 z-50 flex flex-col gap-4 rounded-xl border bg-background p-5 shadow-lg sm:left-auto sm:right-6 sm:bottom-6 sm:w-100"
    >
      <div className="flex items-start gap-3">
        <Languages className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        <p className="flex-1 text-sm text-foreground">{labels.message}</p>
        <button
          type="button"
          onClick={dismiss}
          aria-label={labels.close}
          className="-m-1 flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
      <div className="flex gap-2 sm:pl-7">
        <Button size="lg" className="flex-1 px-4 sm:h-10 sm:flex-none" onClick={accept}>
          {labels.accept}
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className="flex-1 px-4 sm:h-10 sm:flex-none"
          onClick={dismiss}
        >
          {labels.dismiss}
        </Button>
      </div>
    </aside>
  );
}

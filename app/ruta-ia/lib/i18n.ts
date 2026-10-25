import { getTranslations } from "next-intl/server";

// /ruta-ia lives outside [locale] routing and is Spanish-only.
export const RUTA_IA_LOCALE = "es";

export function getRutaIaTranslations(section: string) {
  return getTranslations({
    locale: RUTA_IA_LOCALE,
    namespace: `rutaIa.${section}`,
  });
}

export const calendarUrl =
  process.env.NEXT_PUBLIC_DISCOVERY_CALENDAR_URL ?? "#contact";

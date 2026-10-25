import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/site.config";
import { localePath } from "./config";

export async function capabilitiesMetadata(
  locale: string,
  namespace: string,
  path: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const url = `${siteConfig.site_domain}${localePath(locale, path)}`;
  const ogTitle = t.has("ogTitle") ? t("ogTitle") : t("title");
  const ogDescription = t.has("ogDescription")
    ? t("ogDescription")
    : t("description");

  return {
    // The copy's titles already end in "| Cabana Data"; skip the layout template
    title: { absolute: t("title") },
    description: t("description"),
    alternates: {
      canonical: localePath(locale, path),
      languages: {
        es: localePath("es", path),
        en: localePath("en", path),
      },
    },
    openGraph: { title: ogTitle, description: ogDescription, url },
    twitter: { title: ogTitle, description: ogDescription },
  };
}

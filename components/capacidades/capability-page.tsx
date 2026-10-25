import { getTranslations } from "next-intl/server";
import { JsonLd } from "./json-ld";
import { breadcrumbSchema, serviceSchema } from "./schemas";
import { CAPABILITIES, CAPABILITIES_PATH, type CapabilityKey } from "./config";
import type { FaqItem } from "./faq-section";

/** JSON-LD shared by every capability subpage: Service, BreadcrumbList and FAQPage when present. */
export async function CapabilitySchemas({
  locale,
  capability,
}: {
  locale: string;
  capability: CapabilityKey;
}) {
  const [t, tHub] = await Promise.all([
    getTranslations({ locale, namespace: `capacidades.${capability}` }),
    getTranslations({ locale, namespace: "capacidades.meta" }),
  ]);
  const { slug } = CAPABILITIES.find((c) => c.key === capability)!;
  const name = t("hero.name");

  const schemas: Record<string, unknown>[] = [
    serviceSchema({
      locale,
      name,
      serviceType: t("meta.serviceType"),
      description: t("meta.description"),
      slug,
    }),
    breadcrumbSchema(locale, [
      { name: tHub("breadcrumbHome"), path: "" },
      { name: tHub("breadcrumb"), path: CAPABILITIES_PATH },
      { name, path: `${CAPABILITIES_PATH}/${slug}` },
    ]),
  ];

  if (t.has("faq")) {
    const faq = t.raw("faq") as FaqItem[];
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return <JsonLd schemas={schemas} />;
}

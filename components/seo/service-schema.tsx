import { siteConfig } from "@/site.config";

interface ServiceSchemaProps {
  name: string;
  description: string;
  /** Path relative to the domain, e.g. "/services/data-consulting" (no locale prefix). */
  path: string;
  /** Schema.org serviceType, e.g. "Data Engineering". */
  serviceType?: string;
}

const DEFAULT_AREA_SERVED = ["Costa Rica", "Latin America", "United States"];

export function ServiceSchema({ name, description, path, serviceType }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    ...(serviceType ? { serviceType } : {}),
    description,
    url: `${siteConfig.site_domain}${path}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.site_name,
      url: siteConfig.site_domain,
    },
    areaServed: DEFAULT_AREA_SERVED,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

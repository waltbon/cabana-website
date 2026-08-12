import { siteConfig } from "@/site.config";

interface ServiceSchemaProps {
  name: string;
  description: string;
  /** Path relative to the domain, e.g. "/services/data-consulting" (no locale prefix). */
  path: string;
}

export function ServiceSchema({ name, description, path }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.site_domain}${path}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.site_name,
      url: siteConfig.site_domain,
    },
    areaServed: "Worldwide",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

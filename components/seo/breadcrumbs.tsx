"use client";

import { Link } from "@/i18n/navigation";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/site.config";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  // Build the full breadcrumb list including Home
  const fullItems: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    ...items,
  ];

  // Generate JSON-LD structured data for BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.site_domain}${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="flex items-center hover:text-foreground transition-colors"
                    aria-label="Home"
                  >
                    <Home className="size-4" />
                  </Link>
                ) : isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {!isLast && (
                  <ChevronRight className="size-4 text-muted-foreground/50" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

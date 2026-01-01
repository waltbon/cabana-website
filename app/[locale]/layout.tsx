import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { siteConfig } from "@/site.config";
import { locales, type Locale } from "@/i18n/config";
import { Footer } from "@/components/footer";
import { Nav } from "./_components/nav";

import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: {
      default: siteConfig.site_name,
      template: `%s | ${siteConfig.site_name}`,
    },
    description: siteConfig.site_description,
    keywords: [
      "data strategy",
      "data engineering",
      "data architecture",
      "AI solutions",
      "machine learning",
      "business intelligence",
      "data consulting",
      "Google Cloud",
      "BigQuery",
      "data-driven",
    ],
    authors: [{ name: siteConfig.site_name }],
    creator: siteConfig.site_name,
    publisher: siteConfig.site_name,
    metadataBase: new URL(siteConfig.site_domain),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        en: "/",
        es: "/es",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: siteConfig.site_domain,
      siteName: siteConfig.site_name,
      title: siteConfig.site_name,
      description: siteConfig.site_description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.site_name,
      description: siteConfig.site_description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "theme-color": "#0048ff",
    },
  };
}

// JSON-LD structured data (Organization + WebSite schemas)
function getJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.site_domain}/#organization`,
        name: siteConfig.site_name,
        description: siteConfig.site_description,
        url: siteConfig.site_domain,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.site_domain}/logo-horizontal-light.svg`,
        },
        sameAs: ["https://www.linkedin.com/company/cabana-data/"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          url: `${siteConfig.site_domain}/contact`,
        },
        areaServed: "Worldwide",
        serviceType: [
          "Data Strategy & Consulting",
          "Data Engineering & Architecture",
          "Custom Application Development",
          "AI & Machine Learning Solutions",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.site_domain}/#website`,
        url: siteConfig.site_domain,
        name: siteConfig.site_name,
        description: siteConfig.site_description,
        publisher: {
          "@id": `${siteConfig.site_domain}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.site_domain}/posts?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        inLanguage: locale === "es" ? "es" : "en-US",
      },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await getMessages();

  const jsonLd = getJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NextIntlClientProvider messages={messages}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cabana-blue focus:text-white focus:rounded-md focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </NextIntlClientProvider>
    </>
  );
}

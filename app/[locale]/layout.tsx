import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Reddit_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Script from "next/script";

import { siteConfig } from "@/site.config";
import { locales, type Locale } from "@/i18n/config";
import { Footer } from "@/components/footer";
import { Nav } from "./_components/nav";
import { ContactDrawerProvider } from "@/components/contact/contact-drawer-provider";
import { LazyMotionProvider } from "@/components/animations/lazy-motion-provider";

import type { Metadata } from "next";

const font = Reddit_Sans({ subsets: ["latin"], variable: "--font-sans" });

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
      canonical: locale === "es" ? "/" : `/${locale}`,
      languages: {
        en: "/en",
        es: "/",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: locale === "es" ? siteConfig.site_domain : `${siteConfig.site_domain}/${locale}`,
      siteName: siteConfig.site_name,
      images: [{ url: "/opengraph-image.jpeg", width: 1200, height: 630, alt: siteConfig.site_name }],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.site_twitter,
      creator: siteConfig.site_twitter,
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

// Service pages included in the homepage OfferCatalog (slug + messages key under "services")
const OFFER_CATALOG_SERVICES = [
  { slug: "data-consulting", msgKey: "dataConsulting" },
  { slug: "data-engineering", msgKey: "dataEngineering" },
  { slug: "application-development", msgKey: "applicationDevelopment" },
  { slug: "dashboards-analytics-interfaces", msgKey: "dashboardsAnalyticsInterfaces" },
  { slug: "custom-ai-agents", msgKey: "customAIAgents" },
  { slug: "ai-readiness-assessment", msgKey: "rutaIA" },
  { slug: "data-health-check", msgKey: "dataHealthCheck" },
  { slug: "data-analytics-use-case", msgKey: "dataAnalyticsUseCase" },
  { slug: "digital-product", msgKey: "digitalProduct" },
  { slug: "product-design-discovery", msgKey: "productDesignDiscovery" },
] as const;

// Team members with a confirmed public LinkedIn profile (sameAs for Person schema).
// Only include people who have explicitly shared their profile URL — do not guess or scrape.
const TEAM_MEMBERS_WITH_PROFILE = [
  { name: "Walter Bonilla", roleKey: "techLead", sameAs: "https://www.linkedin.com/in/waltbon/" },
  { name: "Evelyn Gabriela Bonilla", roleKey: "adminManager", sameAs: "https://www.linkedin.com/in/gabriela-bonilla-a3b0991b8/" },
  { name: "Thomas Huber", roleKey: "dataEngineer", sameAs: "https://www.linkedin.com/in/thomas-huber-kelly-63885b31a/" },
  { name: "Rebeca Viana", roleKey: "uxDesigner", sameAs: "https://www.linkedin.com/in/rebecaviana/" },
] as const;

// JSON-LD structured data (Organization + WebSite + OfferCatalog schemas)
function getJsonLd(
  locale: string,
  messages: Awaited<ReturnType<typeof getMessages>>
) {
  const servicesMessages = messages.services as Record<
    string,
    { seo?: { title?: string; description?: string } }
  >;

  const roleLabels = (messages.about as { team?: { roles?: Record<string, string> } })
    ?.team?.roles;

  const employee = TEAM_MEMBERS_WITH_PROFILE.map(({ name, roleKey, sameAs }) => ({
    "@type": "Person",
    name,
    jobTitle: roleLabels?.[roleKey] ?? roleKey,
    sameAs,
    worksFor: { "@id": `${siteConfig.site_domain}/#organization` },
  }));

  const hasOfferCatalog = {
    "@type": "OfferCatalog",
    name: locale === "es" ? "Servicios de Cabana Data" : "Cabana Data Services",
    itemListElement: OFFER_CATALOG_SERVICES.map(({ slug, msgKey }) => {
      const seo = servicesMessages[msgKey]?.seo;
      return {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: seo?.title ?? slug,
          description: seo?.description ?? "",
          url: `${siteConfig.site_domain}/services/${slug}`,
        },
      };
    }),
  };

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
        address: {
          "@type": "PostalAddress",
          addressLocality: "San José",
          addressCountry: "CR",
        },
        sameAs: [
          "https://www.linkedin.com/company/cabana-data/",
          "https://x.com/cabanadata",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          url: `${siteConfig.site_domain}/contact`,
          email: siteConfig.site_email,
          telephone: siteConfig.site_phone,
        },
        areaServed: "Worldwide",
        hasOfferCatalog,
        employee,
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

  const jsonLd = getJsonLd(locale, messages);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight" strategy="afterInteractive">{`
          _linkedin_partner_id = "10268489";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}</Script>
        <Script
          id="linkedin-insight-loader"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          strategy="afterInteractive"
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=10268489&fmt=gif" />
        </noscript>
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
            enableSystem={false}
            disableTransitionOnChange
          >
            <LazyMotionProvider>
              <ContactDrawerProvider>
                <Nav />
                <main id="main-content">{children}</main>
                <Footer />
              </ContactDrawerProvider>
            </LazyMotionProvider>
          </ThemeProvider>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

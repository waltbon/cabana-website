import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "./_components/nav";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
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

// JSON-LD structured data (Organization + WebSite schemas)
const jsonLd = {
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
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
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
      </body>
    </html>
  );
}

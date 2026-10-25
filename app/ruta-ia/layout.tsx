import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import { getRutaIaTranslations } from "./lib/i18n";

const font = Reddit_Sans({ subsets: ["latin"], variable: "--font-sans" });

const SITE_URL = "https://cabanadata.com/ruta-ia";

const SITE_ORIGIN = "https://cabanadata.com";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getRutaIaTranslations("meta");
  const images = [
    {
      url: "/opengraph-image.jpeg",
      width: 1200,
      height: 630,
      alt: "Cabana Data",
    },
  ];

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: t("title"),
    description: t("description"),
    authors: [{ name: "Cabana Data", url: "https://cabanadata.com" }],
    creator: "Cabana Data",
    publisher: "Cabana Data",
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: SITE_URL,
      siteName: "Cabana Data",
      locale: "es_CR",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: images.map((image) => image.url),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Shared @id anchors so Organization/Person/Service are single nodes
// referenced (not duplicated) by the WebPage/FAQPage schema in page.tsx.
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const AUTHOR_ID = `${SITE_URL}/#walter-bonilla`;
export const SERVICE_ID = `${SITE_URL}/#service`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Cabana Data",
  url: "https://cabanadata.com",
  logo: "https://cabanadata.com/logo-horizontal-light.svg",
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: "Walter Bonilla",
  jobTitle: "Director de Cabana Data",
  worksFor: { "@id": ORGANIZATION_ID },
};

export default function RutaIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(authorSchema),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import { dimensions } from "./data/dimensions";

const font = Reddit_Sans({ subsets: ["latin"], variable: "--font-sans" });

const SITE_URL = "https://cabanadata.com/ruta-ia";

const SITE_ORIGIN = "https://cabanadata.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Ruta IA: Diagnóstico, Preparación y Planificación Empresarial",
    template: "%s | Ruta IA",
  },
  description:
    "Diagnóstico y estrategia para empresas en Costa Rica sobre Inteligencia Artificial, con un plan claro de acción",
  authors: [{ name: "Cabana Data", url: "https://cabanadata.com" }],
  creator: "Cabana Data",
  publisher: "Cabana Data",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Ruta IA: Diagnóstico, Preparación y Planificación Empresarial",
    description:
      "Diagnóstico y estrategia para empresas en Costa Rica sobre Inteligencia Artificial, con un plan claro de acción",
    url: SITE_URL,
    siteName: "Cabana Data",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Cabana Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruta IA — ¿Tu empresa está lista para la IA?",
    description:
      "Diagnóstico y estrategia para empresas en Costa Rica sobre Inteligencia Artificial, con un plan claro de acción",
    images: ["/opengraph-image.jpeg"],
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": SERVICE_ID,
  name: "Ruta IA",
  serviceType: "Ruta IA: Diagnóstico, Preparación y Planificación Empresarial",
  description:
    "Diagnóstico y estrategia para empresas en Costa Rica sobre Inteligencia Artificial, con un plan claro de acción",
  provider: { "@id": ORGANIZATION_ID },
  areaServed: {
    "@type": "Country",
    name: "Costa Rica",
  },
  url: SITE_URL,
  audience: {
    "@type": "BusinessAudience",
    audienceType: "CTOs, COOs, Data Leaders y empresas de tecnología",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dimensiones evaluadas",
    itemListElement: dimensions.map((d) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: d.title,
        description: d.description,
      },
    })),
  },
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
            __html: JSON.stringify(serviceSchema),
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

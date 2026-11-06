import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { pickMessages } from "@/lib/messages";

// Client components in this section read these namespaces; the root layout
// only ships the global ones (B-035).
const NAMESPACES = ["blog"];

export default async function PostsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={pickMessages(messages, NAMESPACES)}>
      {children}
    </NextIntlClientProvider>
  );
}

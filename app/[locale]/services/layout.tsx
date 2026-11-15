import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { pickMessages, sharedClientNamespaces } from "@/lib/client-messages";

// Legacy /services pages use client sections that read "services" and "solution".
export default async function ServicesLayout({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider
      messages={pickMessages(messages, [...sharedClientNamespaces, "services", "solution"])}
    >
      {children}
    </NextIntlClientProvider>
  );
}

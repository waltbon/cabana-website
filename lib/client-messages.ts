import type { AbstractIntlMessages } from "next-intl";

// Namespaces that client components read on every page (nav, contact drawer,
// blog search and sidebar). Server components read messages on the server, so
// they are not sent to the browser.
export const sharedClientNamespaces = ["nav", "footer", "common", "contact", "blog"] as const;

export function pickMessages(
  messages: AbstractIntlMessages,
  namespaces: readonly string[]
): AbstractIntlMessages {
  return Object.fromEntries(
    namespaces.filter((ns) => ns in messages).map((ns) => [ns, messages[ns]])
  ) as AbstractIntlMessages;
}

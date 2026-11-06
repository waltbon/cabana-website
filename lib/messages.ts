// Client components only receive the message namespaces they use, so the HTML
// payload of each page stops carrying the legacy namespaces (B-035).
export function pickMessages(
  messages: Record<string, unknown>,
  namespaces: readonly string[]
): Record<string, unknown> {
  return Object.fromEntries(
    namespaces.filter((ns) => ns in messages).map((ns) => [ns, messages[ns]])
  );
}

// Namespaces read by client components mounted in the root layout (Nav, Footer,
// language switcher, contact drawer).
export const GLOBAL_CLIENT_NAMESPACES = [
  "nav",
  "footer",
  "common",
  "languageSwitcher",
  "contact",
] as const;

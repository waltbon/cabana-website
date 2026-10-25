import {
  AppWindow,
  Bot,
  Compass,
  Database,
  type LucideIcon,
} from "lucide-react";

export const CAPABILITIES_PATH = "/capacidades";

export type CapabilityKey =
  | "dataConsulting"
  | "dataEngineering"
  | "digitalProduct"
  | "customAiAgents";

// Order matches `capacidades.items` in messages
export const CAPABILITIES: {
  key: CapabilityKey;
  slug: string;
  icon: LucideIcon;
}[] = [
  { key: "dataConsulting", slug: "consultoria-de-datos", icon: Compass },
  { key: "dataEngineering", slug: "ingenieria-de-datos", icon: Database },
  { key: "digitalProduct", slug: "producto-digital", icon: AppWindow },
  { key: "customAiAgents", slug: "agentes-ia-a-medida", icon: Bot },
];

export function capabilityPath(key: CapabilityKey) {
  const capability = CAPABILITIES.find((c) => c.key === key);
  return `${CAPABILITIES_PATH}/${capability?.slug}`;
}

export function localePath(locale: string, path = "") {
  return locale === "es" ? path || "/" : `/${locale}${path}`;
}

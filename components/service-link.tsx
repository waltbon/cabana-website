import type { ReactNode } from "react";
import NextLink from "next/link";
import { Link } from "@/i18n/navigation";

/** /ruta-ia lives outside [locale] (Spanish only), so it must not get a locale prefix. */
export function ServiceLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const LinkComponent = href.startsWith("/ruta-ia") ? NextLink : Link;
  return (
    <LinkComponent href={href} className={className}>
      {children}
    </LinkComponent>
  );
}

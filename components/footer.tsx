import { Link } from "@/i18n/navigation";
import { ServiceLink } from "@/components/service-link";
import { Section, Container } from "@/components/craft";
import { siteConfig } from "@/site.config";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Social media icons as SVG components
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// Footer navigation link keys
const footerLinkKeys = [
  { key: "rutaIa", href: "/ruta-ia" },
  { key: "capabilities", href: "/capacidades" },
  // { key: "caseStudies", href: "/case-studies" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/posts" },
  { key: "contact", href: "/contact" },
];

// Social media links
const socialLinks = [
  {
    key: "linkedin",
    href: "https://linkedin.com/company/cabanadata",
    icon: LinkedInIcon,
  },
];

export const Footer = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  const mutedLink = "text-sm text-slate-300 transition-colors hover:text-white";

  return (
    <footer className="bg-cabana-dark">
      <Section className="py-0 md:py-0">
        <Container className="max-w-7xl px-6">
          {/* Main row: logo · navigation · contact + social */}
          <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="block shrink-0">
              <Image
                src="/logo-horizontal-dark.svg"
                alt={siteConfig.site_name}
                width={120}
                height={80}
                className="h-8 w-auto"
              />
            </Link>

            <nav className="grid grid-cols-2 gap-x-4 gap-y-3 md:flex md:gap-8">
              {footerLinkKeys.map((link) => (
                <ServiceLink key={link.href} href={link.href} className={mutedLink}>
                  {t(`links.${link.key}`)}
                </ServiceLink>
              ))}
            </nav>

            <div className="flex items-center justify-between gap-6 md:justify-end">
              <div className="flex flex-col gap-1 md:flex-row md:gap-6">
                <a
                  href={`mailto:${siteConfig.site_email}`}
                  className={mutedLink}
                  aria-label={t("email")}
                >
                  {siteConfig.site_email}
                </a>
                <a
                  href={`tel:${siteConfig.site_phone.replace(/[^+\d]/g, "")}`}
                  className={mutedLink}
                  aria-label={t("phone")}
                >
                  {siteConfig.site_phone}
                </a>
              </div>
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-cabana-green"
                  aria-label={t(`social.${social.key}`)}
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal strip */}
          <div className="flex flex-col gap-1 border-t border-white/10 py-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>
              &copy; {currentYear} {siteConfig.site_domain.replace("https://", "")} ·{" "}
              {t("location")} 🇨🇷
            </p>
            <Link href="/privacidad" className="transition-colors hover:text-white">
              {t("privacy")}
            </Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
};

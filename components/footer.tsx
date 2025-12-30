import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { siteConfig } from "@/site.config";
import { ThemeLogo } from "@/components/theme/theme-logo";

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

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Footer navigation links
const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/posts" },
  { label: "Contact", href: "/contact" },
];

// Social media links
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/cabanadata",
    icon: LinkedInIcon,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/cabanadata",
    icon: XIcon,
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <Section className="py-0">
        <Container className="max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8">
            {/* Logo and Navigation */}
            <div className="flex flex-col items-center gap-8">
              {/* Logo */}
              <Link href="/" className="block">
                <ThemeLogo
                  lightSrc="/logo-vertical-light.svg"
                  darkSrc="/logo-vertical-dark.svg"
                  alt={siteConfig.site_name}
                  width={151}
                  height={120}
                  className="h-[120px] w-auto"
                />
              </Link>

              {/* Navigation Links */}
              <nav className="flex flex-wrap items-center justify-center gap-8">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Separator */}
            <div className="h-px w-full bg-border" />

            {/* Social Links */}
            <div className="flex flex-col items-center gap-6">
              <p className="text-lg font-bold text-foreground">Follow us</p>
              <div className="flex items-center gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-primary"
                    aria-label={social.label}
                  >
                    <social.icon className="size-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-8 text-center text-base text-muted-foreground">
            Copyright {currentYear} &copy; {siteConfig.site_domain.replace("https://", "")} <br />
          <span className="text-xs text-center">San José, Costa Rica 🇨🇷</span>
          </p>
        </Container>
      </Section>
    </footer>
  );
};

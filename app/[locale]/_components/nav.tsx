import { Link } from "@/i18n/navigation";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Button } from "@/components/ui/button";
import { ThemeLogo } from "@/components/theme/theme-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";
import { mainMenu } from "@/menu.config";
import { useTranslations } from "next-intl";

export const Nav = ({ className, children, id }: NavProps) => {
  const t = useTranslations("nav");

  return (
    <nav
      className={cn("sticky z-50 top-0 bg-background", "border-b", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-4 items-center"
          href="/"
        >
          <ThemeLogo
            lightSrc="/logo-horizontal-light.svg"
            darkSrc="/logo-horizontal-dark.svg"
            alt="Cabana Data"
            width={182}
            height={50}
          />
          <span className="text-xs -mb-3 -ml-3">{t("costaRica")} 🇨🇷</span>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" size="sm">
                <Link href={href}>{t(key)}</Link>
              </Button>
            ))}
          </div>
          <Button asChild className="hidden sm:flex">
            <Link href="/contact">{t("getStarted")}</Link>
          </Button>
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};


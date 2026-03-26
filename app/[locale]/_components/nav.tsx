"use client";

import { Link } from "@/i18n/navigation";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Button } from "@/components/ui/button";
import { ThemeLogo } from "@/components/theme/theme-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";
import { mainMenu } from "@/menu.config";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
          <span className="text-xs -mb-3 -ml-3">🇨🇷</span>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <NavigationMenu className="mx-2 hidden md:flex">
            <NavigationMenuList>
              {Object.entries(mainMenu).map(([key, item]) => {
                if (typeof item === "string") {
                  return (
                    <NavigationMenuItem key={key}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={item}>{t(key)}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger>{t(key)}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex flex-col gap-0.5 p-2 w-56">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            >
                              {t(`${key}Overview`)}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="my-1 h-px bg-border" />
                        {Object.entries(item.children).map(
                          ([childKey, childHref]) => (
                            <li key={childKey}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={childHref}
                                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                                >
                                  {t(childKey)}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          )
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
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

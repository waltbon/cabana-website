"use client";

// React and Next Imports
import * as React from "react";
import { Link } from "@/i18n/navigation";

// Utility Imports
import { Menu, ArrowRightSquare } from "lucide-react";
import { cn } from "@/lib/utils";

// Component Imports
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { mainMenu, contentMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { useContactDrawer } from "@/components/contact/contact-drawer-provider";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { openDrawer } = useContactDrawer();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 border w-10 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader>
          <SheetTitle className="text-left">
            <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={setOpen}
            >
              <ArrowRightSquare className="mr-2 h-4 w-4" />
              <span>{siteConfig.site_name}</span>
            </MobileLink>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-small mt-6">Menu</h3>
            <Separator />
            {Object.entries(mainMenu).map(([key, item]) => {
              if (typeof item === "string") {
                if (key === "contact") {
                  return (
                    <button
                      key={key}
                      type="button"
                      className="text-lg text-left"
                      onClick={() => {
                        setOpen(false);
                        openDrawer();
                      }}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  );
                }

                return (
                  <MobileLink key={key} href={item} onOpenChange={setOpen}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </MobileLink>
                );
              }
              return (
                <div key={key} className="flex flex-col gap-1">
                  <MobileLink href={item.href} onOpenChange={setOpen}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </MobileLink>
                  <div className="flex flex-col gap-1 pl-4 border-l border-border ml-1">
                    {Object.entries(item.children).map(
                      ([childKey, child]) => {
                        const label = childKey
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (s) => s.toUpperCase());

                        if (typeof child === "string") {
                          return (
                            <MobileLink
                              key={childKey}
                              href={child}
                              onOpenChange={setOpen}
                              className="text-base text-muted-foreground"
                            >
                              {label}
                            </MobileLink>
                          );
                        }

                        return (
                          <div key={childKey} className="flex flex-col gap-1">
                            <MobileLink
                              href={child.href}
                              onOpenChange={setOpen}
                              className="text-base"
                            >
                              {label}
                            </MobileLink>
                            <div className="flex flex-col gap-1 pl-4 border-l border-border ml-1">
                              {Object.entries(child.children).map(
                                ([grandchildKey, grandchildHref]) => (
                                  <MobileLink
                                    key={grandchildKey}
                                    href={grandchildHref}
                                    onOpenChange={setOpen}
                                    className="text-sm text-muted-foreground"
                                  >
                                    {grandchildKey
                                      .replace(/([A-Z])/g, " $1")
                                      .replace(/^./, (s) => s.toUpperCase())}
                                  </MobileLink>
                                ),
                              )}
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>
              );
            })}
            <h3 className="text-small pt-6">Blog Menu</h3>
            <Separator />
            {Object.entries(contentMenu).map(([key, href]) => (
              <MobileLink key={key} href={href} onOpenChange={setOpen}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </MobileLink>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps {
  href: string;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={cn("text-lg", className)}
    >
      {children}
    </Link>
  );
}

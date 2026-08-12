"use client";

import { createContext, useContext, useMemo, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { LeadCaptureForm } from "@/components/contact/LeadFormCapture";
import { Button } from "@/components/ui/button";
import { CalendarDays, X } from "lucide-react";
import { useTranslations } from "next-intl";

const calendarUrl = process.env.NEXT_PUBLIC_DISCOVERY_CALENDAR_URL ?? "#";

interface ContactDrawerContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const ContactDrawerContext = createContext<ContactDrawerContextValue | null>(
  null,
);

export function useContactDrawer() {
  const ctx = useContext(ContactDrawerContext);
  if (!ctx) {
    throw new Error(
      "useContactDrawer must be used within a ContactDrawerProvider",
    );
  }
  return ctx;
}

export function ContactDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("contact");

  const value = useMemo<ContactDrawerContextValue>(
    () => ({
      open,
      setOpen,
      openDrawer: () => setOpen(true),
      closeDrawer: () => setOpen(false),
    }),
    [open],
  );

  return (
    <ContactDrawerContext.Provider value={value}>
      {children}
      <Drawer open={open} onOpenChange={setOpen} direction="right">
        <DrawerContent
          direction="right"
          className="flex flex-col overflow-hidden"
        >
          <DrawerHeader className="flex flex-row items-center justify-between border-b">
            <DrawerTitle>{t("form.title")}</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="">
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-6">
            <h2 className="text-xl font-semibold">{t("headline")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("description")}
            </p>

            <div className="mt-6">
              <LeadCaptureForm submitLabel="Habla con un Experto →" />
            </div>

            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-cabana-blue px-4 py-3 text-sm font-semibold text-cabana-blue transition-colors hover:bg-cabana-blue/5"
            >
              <CalendarDays className="size-4" />
              {t("sidebar.calendarCta")}
            </a>
          </div>
        </DrawerContent>
      </Drawer>
    </ContactDrawerContext.Provider>
  );
}

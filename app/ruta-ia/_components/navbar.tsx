"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarCheck2, Menu, PencilIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const calendarUrl = process.env.NEXT_PUBLIC_DISCOVERY_CALENDAR_URL ?? "#";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="container flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/ruta-ia" className="flex items-center gap-2 shrink-0">
          <Image src="/logo-horizontal-light.svg" width={126} height={200} alt="Cabana Data" />
        </Link>

        {/* Desktop CTA */}
        <div className="hidden md:block space-x-1">
          <Button asChild variant="default" size="sm" className="font-semibold">
            <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
              <CalendarCheck2 />
              Agendar con un experto
            </a>
          </Button>

          <Button asChild variant="secondary" size="sm">
            <a href="#contact" rel="noopener noreferrer">
              <PencilIcon />
              Contáctanos
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 text-muted-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 border-b border-border bg-background",
          mobileOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <ul className="container flex flex-col gap-2 py-4">
          <li>
            <Button asChild variant="default" size="lg" className="w-full">
              <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                <CalendarCheck2 />
                Agendar con un experto
              </a>
            </Button>
          </li>
          <li>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href="#contact" rel="noopener noreferrer">
                <PencilIcon />
                Contáctanos
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

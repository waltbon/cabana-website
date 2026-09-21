import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t border-border", className)}>
      <div className="container py-6 space-y-5">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Logo + location */}
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-horizontal-light.svg" width={100} height={200} alt="Cabana Data" />
            </Link>
            <span className="text-[12px] text-muted-foreground">
              San José, Costa Rica 🇨🇷
            </span>
          </div>

          {/* ISO badge + copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center">
                <span className="text-[7px] font-semibold text-muted-foreground leading-none">ISO</span>
              </div>
              <span className="text-[11px] text-muted-foreground">42001</span>
            </div>
            <span className="text-[11px] text-muted-foreground">
              © {new Date().getFullYear()} cabanadata.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { LucideIcon } from "lucide-react";

/**
 * Minimal illustration slot: a single lucide icon centered on a flat tile.
 * For offering cards where a full custom SVG isn't warranted (e.g. linking
 * out to an existing page) but a bare imageless card would look too sparse.
 */
interface IconTileProps {
  icon: LucideIcon;
  className?: string;
}

export function IconTile({ icon: Icon, className }: IconTileProps) {
  return (
    <div className={`flex items-center justify-center ${className ?? ""}`}>
      <Icon className="size-16 text-cabana-blue" strokeWidth={1.5} />
    </div>
  );
}

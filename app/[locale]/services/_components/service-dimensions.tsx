import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

interface DimensionItem {
  title: string;
  description: string;
  /** Preferred over imageSrc — renders in a brand icon badge. Falls back to a numbered badge when neither is set. */
  icon?: LucideIcon;
  /** Optional raster icon/illustration. Ignored when `icon` is provided. */
  imageSrc?: string;
  imageAlt?: string;
}

interface ServiceDimensionsProps {
  tagline: string;
  headline: string;
  items: DimensionItem[];
  /** Optional footnote below the grid — e.g. clarifying the items aren't sold separately. */
  note?: string;
}

export function ServiceDimensions({
  tagline,
  headline,
  items,
  note,
}: ServiceDimensionsProps) {
  return (
    <Section className="py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <FadeIn>
              <p className="text-sm font-medium text-muted-foreground">
                {tagline}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {headline}
              </h2>
            </FadeIn>
          </div>

          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-secondary p-6">
                  {item.icon ? (
                    <span className="icon-wrapper icon-wrapper-md bg-cabana-light">
                      <item.icon className="size-5 text-cabana-blue" strokeWidth={2} />
                    </span>
                  ) : item.imageSrc ? (
                    <div className="relative h-10 w-10">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? ""}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="icon-wrapper icon-wrapper-sm bg-cabana-light text-sm font-bold text-cabana-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                  <h3 className="text-base font-bold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {note && (
            <FadeIn delay={0.2}>
              <p className="text-sm italic text-muted-foreground">{note}</p>
            </FadeIn>
          )}
        </div>
      </Container>
    </Section>
  );
}

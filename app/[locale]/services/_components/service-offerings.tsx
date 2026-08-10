import Image from "next/image";
import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui/button";

export interface OfferingItem {
  title: string;
  whatIsIt: string;
  /** Optional — omitted when the source copy doesn't separate "who is this for" from the description. */
  whoIsItFor?: string;
  /** Preferred over imageSrc — inline SVG/illustration for this offering card. */
  illustration?: ReactNode;
  /** Optional raster illustration. Ignored when `illustration` is provided. */
  imageSrc?: string;
  imageAlt?: string;
  /** Optional link to the offering's own sub-service page. Renders the card as a link when provided. */
  href?: string;
  linkLabel?: string;
}

interface ServiceOfferingsProps {
  tagline: string;
  headlineDark: string;
  headlineBlue: string;
  items: OfferingItem[];
  /** Optional footnote below the grid — e.g. clarifying the offerings aren't sequential. */
  note?: string;
}

export function ServiceOfferings({
  tagline,
  headlineDark,
  headlineBlue,
  items,
  note,
}: ServiceOfferingsProps) {
  return (
    <Section className="border-b border-dashed py-24 bg-gradient-cabana">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-5 max-w-2xl">
            <FadeIn>
              <p className="text-sm font-medium text-muted-foreground">
                {tagline}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-5xl font-bold leading-tight tracking-tight">
                {headlineDark}{" "}
                <span className="text-gradient-cabana">{headlineBlue}</span>
              </h2>
            </FadeIn>
          </div>

          {/* Offerings Grid */}
          <StaggerChildren className="grid gap-12 sm:grid-cols-2">
            {items.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex flex-row gap-5 border p-8 rounded-2xl bg-white">
                  {(item.illustration || item.imageSrc) && (
                    <div className="relative aspect-4/3 w-2/3 overflow-hidden rounded-xl bg-section-slate border">
                      {item.illustration ? (
                        item.illustration
                      ) : item.imageSrc ? (
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt ?? ""}
                          fill
                          className="object-center"
                        />
                      ) : null}
                    </div>
                  )}
                  <div className="flex flex-col w-auto gap-2">

                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-cabana-blue">
                      {item.title}

                    </h3>
                    <div className="flex flex-col gap-3 text-base leading-relaxed text-muted-foreground">
                      <p>{item.whatIsIt}</p>
                      {item.whoIsItFor && (
                        <p>
                          <strong className="font-semibold text-foreground">
                            ¿Para quién es?{" "}
                          </strong>
                          {item.whoIsItFor}
                        </p>
                      )}
                    </div>
                    {item.href && (
                      <Button className="flex-wrap mt-2">
                        <Link
                          href={item.href}
                          className="w-fit text-sm font-semibold"
                        >
                          {item.linkLabel ?? "Ver más →"}
                        </Link>
                      </Button>
                    )}
                  </div>
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

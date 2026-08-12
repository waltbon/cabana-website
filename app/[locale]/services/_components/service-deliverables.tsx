import Image from "next/image";
import { ReactNode } from "react";
import { CheckIcon } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

interface ServiceDeliverablesProps {
  tagline: string;
  headlineDark: string;
  headlineBlue: string;
  items: string[];
  /** Preferred over imageSrc — inline SVG/illustration shown beside the checklist. */
  illustration?: ReactNode;
  /** Optional raster illustration. Ignored when `illustration` is provided. Layout falls back to list-only when neither is set. */
  imageSrc?: string;
  imageAlt?: string;
}

export function ServiceDeliverables({
  tagline,
  headlineDark,
  headlineBlue,
  items,
  illustration,
  imageSrc,
  imageAlt,
}: ServiceDeliverablesProps) {
  const hasVisual = Boolean(illustration || imageSrc);
  return (
    <Section className="py-12 md:py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex gap-6 justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col gap-5 max-w-xl">
              <FadeIn>
                <p className="text-sm font-medium text-muted-foreground">
                  {tagline}
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-4xl font-bold leading-tight tracking-tight">
                  {headlineDark}{" "}
                  <span className="text-cabana-blue">{headlineBlue}</span>
                </h2>
              </FadeIn>
            </div>

            <div
              className={
                hasVisual
                  ? "mt-12 flex flex-col items-center gap-12 lg:flex-row"
                  : "mt-12"
              }
            >
              <StaggerChildren
                className={
                  hasVisual
                    ? "flex flex-1 flex-col gap-4"
                    : "flex flex-col gap-4 max-w-2xl"
                }
              >
                {items.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-4 rounded-lg border border-border bg-secondary p-4">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-cabana-blue text-white">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <p className="text-base leading-relaxed text-foreground">
                        {item}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>

          {hasVisual && (
            <FadeIn direction="left" className="w-full shrink-0 lg:w-[30%] hidden md:flex">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-section-slate">
                {illustration ? (
                  illustration
                ) : imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt ?? ""}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
            </FadeIn>
          )}
        </div>
      </Container>
    </Section>
  );
}

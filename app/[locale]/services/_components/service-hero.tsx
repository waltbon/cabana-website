import Image from "next/image";
import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { Badge } from "@/components/ui/badge";

interface ServiceHeroProps {
  tagline: string;
  headlineDark: string;
  headlineBlue: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  /** Raster image path. Ignored when `illustration` is provided. */
  imageSrc?: string;
  imageAlt?: string;
  /** Inline SVG/illustration to render instead of a raster image — preferred for brand illustrations. */
  illustration?: ReactNode;
}

export function ServiceHero({
  tagline,
  headlineDark,
  headlineBlue,
  description,
  cta,
  imageSrc,
  imageAlt,
  illustration,
}: ServiceHeroProps) {
  return (
    <Section className="py-24 bg-accent-foreground text-white">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <FadeIn>
                <Badge variant={'green'}>
                  {tagline}
                </Badge>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-[48px]">
                  {headlineDark}{" "}
                  <span className="text-gradient-cabana">{headlineBlue}</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="max-w-lg text-lg leading-relaxed text-white/90">
                  {description}
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <Button
                asChild
                className="w-fit rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </FadeIn>
          </div>

          {/* Right Column - Illustration */}
          <FadeIn direction="left" className="w-full shrink-0 lg:w-[45%]">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-section-slate">
              {illustration ? (
                illustration
              ) : imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? ""}
                  fill
                  className="object-cover"
                  priority
                />
              ) : null}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

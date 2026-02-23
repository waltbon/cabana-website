import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";

interface ServiceHeroProps {
  tagline: string;
  headlineDark: string;
  headlineBlue: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  imageSrc: string;
  imageAlt: string;
}

export function ServiceHero({
  tagline,
  headlineDark,
  headlineBlue,
  description,
  cta,
  imageSrc,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <Section className="py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <FadeIn>
                <p className="text-sm font-medium text-muted-foreground">
                  {tagline}
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-[48px]">
                  {headlineDark}{" "}
                  <span className="text-cabana-blue">{headlineBlue}</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
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

          {/* Right Column - Image */}
          <FadeIn direction="left" className="w-full shrink-0 lg:w-[45%]">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

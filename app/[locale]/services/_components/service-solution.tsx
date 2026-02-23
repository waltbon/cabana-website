import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

interface ServiceSolutionProps {
  tagline: string;
  headlineDark: string;
  headlineBlue: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function ServiceSolution({
  tagline,
  headlineDark,
  headlineBlue,
  description,
  imageSrc,
  imageAlt,
}: ServiceSolutionProps) {
  return (
    <Section className="border-b border-dashed py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Image */}
          <FadeIn direction="right" className="w-full shrink-0 lg:w-[40%]">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Right Column - Content */}
          <div className="flex flex-1 flex-col gap-5">
            <FadeIn delay={0.1}>
              <p className="text-sm font-medium text-muted-foreground">
                {tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-[36px]">
                {headlineDark}
                <br />
                <span className="text-cabana-blue">{headlineBlue}</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}

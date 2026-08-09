import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

interface ServiceCredibilityProps {
  /** e.g. "DAMA-DMBOK" — shown as a text mark when no badge image is supplied. */
  proofPoint: string;
  headline: string;
  description: string;
  /** Optional badge/illustration. Falls back to a text mark built from proofPoint. */
  imageSrc?: string;
  imageAlt?: string;
}

export function ServiceCredibility({
  proofPoint,
  headline,
  description,
  imageSrc,
  imageAlt,
}: ServiceCredibilityProps) {
  return (
    <Section className="bg-section-light py-24">
      <Container className="max-w-4xl px-6">
        <FadeIn>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-white p-10 text-center sm:flex-row sm:text-left">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-cabana-light">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? proofPoint}
                  fill
                  className="object-contain p-2"
                />
              ) : (
                <span className="px-1 text-center text-[11px] font-bold leading-tight text-cabana-blue">
                  {proofPoint}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-tight text-foreground">
                {headline}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

export function ContactCTASection() {
  return (
    <Section className="bg-section-light py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Headline */}
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Ready to Start Your{" "}
            <span className="text-[#0048ff]">Data Journey?</span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            Let&apos;s discuss how we can help transform your business with
            data-driven solutions tailored to your needs.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-lg bg-[#0048ff] px-8 hover:bg-[#0048ff]/90"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <Section className="bg-section-dark py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Headline */}
          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl lg:leading-[1.1]">
            Ready to Transform Your{" "}
            <span className="text-gradient-cabana">Business with Data?</span>
          </h2>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-lg bg-[#0048ff] px-6 hover:bg-[#0048ff]/90"
          >
            <Link href="/contact">
              Start building!
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

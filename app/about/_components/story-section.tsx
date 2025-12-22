import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

export function StorySection() {
  return (
    <Section className="border-y border-dashed border-border bg-section-slate py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-16">
          {/* Left Column - Logo Ship Illustration */}
          <div className="relative hidden aspect-square w-full max-w-md lg:block">
            <Image
              src="/home/rocket.svg"
              alt="Cabana Data Logo Ship"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Column - Quote and Content */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Quote Card */}
            <div className="flex flex-col gap-6 rounded-xl bg-white p-6 shadow-sm">
              <p className="text-center text-base text-muted-foreground">
                &ldquo;We&apos;ve come a long way.
                <br />
                This all started with a single developer and a big dream&rdquo;
              </p>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-medium text-foreground">
                  Walter Bonilla
                </span>
                <span className="text-sm text-muted-foreground">
                  The creator.
                </span>
              </div>
            </div>

            {/* Story Content */}
            <div className="flex flex-col gap-5">
              {/* Headline */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Small team,{" "}
                <span className="text-cabana-blue">Big Results</span>
              </h2>

              {/* Description */}
              <div className="flex flex-col gap-4 text-base text-muted-foreground">
                <p>
                  We are a dedicated team with purpose. Our goal is to help you
                  become a data-driven business and excel in the digital world.
                </p>
                <p className="font-bold text-foreground">Got a project?</p>
              </div>

              {/* CTA Button */}
              <div>
                <Button
                  asChild
                  className="rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
                >
                  <Link href="/contact">Let&apos;s Talk!</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function StorySection() {
  const t = useTranslations("about.story");

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
                &ldquo;{t("quote")}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-medium text-foreground">
                  {t("quoteAuthor")}
                </span>
                <span className="text-sm text-muted-foreground">
                  {t("quoteRole")}
                </span>
              </div>
            </div>

            {/* Story Content */}
            <div className="flex flex-col gap-5">
              {/* Headline */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("headline")}{" "}
                <span className="text-cabana-blue">{t("headlineHighlight")}</span>
              </h2>

              {/* Description */}
              <div className="flex flex-col gap-4 text-base text-muted-foreground">
                <p>{t("description")}</p>
                <p className="font-bold text-foreground">{t("gotProject")}</p>
              </div>

              {/* CTA Button */}
              <div>
                <Button
                  asChild
                  className="rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
                >
                  <Link href="/contact">{t("cta")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

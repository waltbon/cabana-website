import Image from "next/image";
import { Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { Parallax } from "@/components/animations/parallax";
import { getTranslations } from "next-intl/server";

export async function HeroSection() {
  const t = await getTranslations("services.rutaIA.hero");

  return (
    <Parallax
      intensity={20}
      direction="down"
      className="relative min-h-[560px] overflow-hidden"
      parallaxClassName="absolute inset-0 -top-[10%] h-[120%]"
      staticContent={
        <>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-cabana-dark/70" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[560px] items-center py-28 text-white">
            <Container className="max-w-5xl px-6">
              <div className="flex flex-col items-center gap-8 text-center">
                <FadeIn>
                  <p className="text-sm font-semibold uppercase tracking-widest text-gradient-cabana">
                    {t("tagline")}
                  </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
                    {t("headline")}{" "}
                    <span className="text-gradient-cabana">{t("headlineHighlight")}</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="max-w-2xl text-lg leading-relaxed text-white/80">
                    {t("description")}
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-lg bg-cabana-blue px-8 hover:bg-cabana-blue/90"
                  >
                    <a
                      href="https://calendar.app.google/pwhXdBodbhqfYVXNA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("cta")}
                    </a>
                  </Button>
                </FadeIn>
              </div>
            </Container>
          </div>
        </>
      }
    >
      <Image
        src="/services/ai-readiness-assessment/hero-section.jpg"
        alt="Ruta IA — AI Readiness Assessment"
        fill
        className="object-scale-down"
        priority
      />
    </Parallax>
  );
}

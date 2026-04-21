"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { CheckCircle } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/animations";
import { LeadCaptureForm } from "@/components/contact/LeadFormCapture";

type SubmitStatus = "idle" | "success" | "error";

export function ContactFormSection() {
  const t = useTranslations("contact");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  return (
    <Section className="bg-white py-0">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Column - Form */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
          <Container className="max-w-lg">
            <div className="flex flex-col gap-12">
              {/* Section Header */}
              <FadeIn>
                <div className="flex flex-col items-center gap-5 text-center">
                  {/* Tagline */}
                  <span className="text-sm font-medium text-muted-foreground">
                    {t("tagline")}
                  </span>

                  {/* Headline */}
                  <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                    {t("headline")}
                  </h1>

                  {/* Description */}
                  <p className="text-base text-muted-foreground">
                    {t("description")}
                  </p>
                </div>
              </FadeIn>

              {/* Success Message */}
              {submitStatus === "success" && (
                <FadeIn>
                  <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800">
                        {t("success.title")}
                      </p>
                      <p className="mt-1 text-sm text-green-700">
                        {t("success.message")}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )}

              {/* Form */}
              {submitStatus !== "success" && (
                <FadeIn delay={0.1}>
                  <LeadCaptureForm submitLabel="Habla con un Experto →"
                    layout="grid" />
                </FadeIn>
              )}

              {/* Show form again button after success */}
              {submitStatus === "success" && (
                <Button
                  variant="outline"
                  onClick={() => setSubmitStatus("idle")}
                  className="w-full"
                >
                  {t("form.submitAnother")}
                </Button>
              )}
            </div>
          </Container>
        </div>

        {/* Right Column - Info Panel */}
        <FadeIn direction="left" className="flex flex-1 flex-col items-center justify-center gap-4 bg-section-light px-6 py-24">
          <div className="max-w-md text-center">
            <p className="text-base leading-relaxed text-muted-foreground">
              {t("sidebar.paragraph1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("sidebar.paragraph2")}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <p className="text-base text-muted-foreground">
              <span className="font-bold">{t("sidebar.notAboutData")}</span>{" "}
              {t("sidebar.connectLinkedIn")}{" "}
              <Link
                href="https://www.linkedin.com/company/cabana-data/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                {t("sidebar.linkedin")}
              </Link>
            </p>
            <Link
              href="https://www.linkedin.com/company/cabana-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-cabana-blue"
            >
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { CalendarDays, CheckCircle } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/animations";
import { LeadCaptureForm } from "@/components/contact/LeadFormCapture";

type SubmitStatus = "idle" | "success" | "error";

const calendarUrl = process.env.NEXT_PUBLIC_DISCOVERY_CALENDAR_URL ?? "#";

export function ContactFormSection() {
  const t = useTranslations("contact");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  return (
    <Section className="bg-gradient-cabana py-0">
      <Container className="max-w-6xl px-6 py-8 lg:py-1">
        <div className="grid overflow-hidden rounded-[28px] border border-border lg:grid-cols-2">
          {/* Left Column - Pitch */}
          <FadeIn className="relative overflow-hidden bg-cabana-blue px-8 py-14 text-white sm:px-12 lg:py-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "54px 54px",
              }}
            />
            <div className="relative flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                {t("tagline")}
              </span>

              <h1 className="mt-5 text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-5xl">
                {t("headline")}
              </h1>

              <p className="mt-3 max-w-[34ch] text-base leading-relaxed text-white/90">
                {t("description")}
              </p>

              <div className="mt-5 grid gap-4 border-t border-white/25 pt-8">
                <p className="text-base leading-relaxed text-white/85">
                  {t("sidebar.paragraph1")}
                </p>
                <p className="text-base leading-relaxed text-white/85">
                  {t("sidebar.paragraph2")}
                </p>
              </div>

              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-3 rounded-lg bg-white px-6 py-3 font-semibold text-cabana-blue transition-transform hover:-translate-y-0.5"
              >
                <CalendarDays className="size-5" />
                {t("sidebar.calendarCta")}
              </a>

              <p className="mt-9 text-base text-white/85">
                <span className="font-semibold text-white">
                  {t("sidebar.notAboutData")}
                </span>{" "}
                {t("sidebar.connectLinkedIn")}{" "}
                <Link
                  href="https://www.linkedin.com/company/cabana-data/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-cabana-green/50 font-semibold !text-cabana-green"
                >
                  {t("sidebar.linkedin")}
                </Link>
              </p>
            </div>
          </FadeIn>

          {/* Right Column - Form */}
          <FadeIn
            direction="left"
            className="flex flex-col justify-center bg-white px-8 py-14 sm:px-12 lg:py-16"
          >
            {submitStatus === "success" ? (
              <div className="flex flex-col items-start gap-3 py-10">
                <div className="flex size-[50px] items-center justify-center rounded-full bg-cabana-blue text-xl text-white">
                  <CheckCircle className="size-6" />
                </div>
                <h2 className="text-2xl font-semibold">
                  {t("success.title")}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {t("success.message")}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-4 w-full"
                >
                  {t("form.submitAnother")}
                </Button>
              </div>
            ) : (
              <div>
                <div className="mb-7 flex items-baseline justify-between gap-4">
                  <span className="text-2xl font-semibold">
                    {t("form.title")}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t("form.timeEstimate")}
                  </span>
                </div>

                <LeadCaptureForm submitLabel="Habla con un Experto →" layout="grid" />

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  {t("form.responseTime")}
                </p>
              </div>
            )}
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData } from "@/lib/clickup";
import { useTranslations } from "next-intl";

// Position keys for dropdown
const positionKeys = ["ceo", "cto", "cfo", "dataLead", "developer", "analyst", "other"];

// Referral source keys
const referralKeys = ["linkedin", "google", "referral", "event", "other"];

type SubmitStatus = "idle" | "success" | "error";

export function ContactFormSection() {
  const t = useTranslations("contact");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      referral: "",
      comments: "",
      privacy: false,
    },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit form");
      }

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <Section className="bg-white py-0">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Column - Form */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
          <Container className="max-w-lg">
            <div className="flex flex-col gap-12">
              {/* Section Header */}
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

              {/* Success Message */}
              {submitStatus === "success" && (
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
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-red-600" />
                  <div>
                    <p className="font-medium text-red-800">
                      {t("error.title")}
                    </p>
                    <p className="mt-1 text-sm text-red-700">
                      {errorMessage || t("error.default")}
                    </p>
                  </div>
                </div>
              )}

              {/* Form */}
              {submitStatus !== "success" && (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("form.firstName")}</FormLabel>
                            <FormControl>
                              <Input placeholder="Walter" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("form.lastName")}</FormLabel>
                            <FormControl>
                              <Input placeholder="White" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Corporate Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form.email")}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="myname@mycompany.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone Number */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form.phone")}</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+506 000-0000"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Job Position */}
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form.position")}</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t("form.pleaseSelect")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {positionKeys.map((key) => (
                                <SelectItem key={key} value={key}>
                                  {t(`positions.${key}`)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* How did you hear about us */}
                    <FormField
                      control={form.control}
                      name="referral"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form.referral")}</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t("form.pleaseSelect")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {referralKeys.map((key) => (
                                <SelectItem key={key} value={key}>
                                  {t(`referrals.${key}`)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Additional Comments */}
                    <FormField
                      control={form.control}
                      name="comments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form.comments")}</FormLabel>
                          <FormControl>
                            <textarea
                              placeholder={t("form.commentsPlaceholder")}
                              className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Privacy Checkbox */}
                    <FormField
                      control={form.control}
                      name="privacy"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex gap-2">
                            <FormControl>
                              <input
                                type="checkbox"
                                checked={field.value}
                                onChange={field.onChange}
                                className="mt-0.5 size-4 rounded border-primary accent-cabana-blue"
                              />
                            </FormControl>
                            <FormLabel className="text-xs font-normal leading-relaxed text-muted-foreground">
                              {t("form.privacy")}
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? t("form.submitting")
                        : t("form.submit")}
                    </Button>
                  </form>
                </Form>
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
        <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-section-light px-6 py-24">
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
              <Linkedin className="size-6" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

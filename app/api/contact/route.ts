import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { createClickUpTask } from "./../../../lib/clickup";

export const maxDuration = 30;

// ─── Inbound DTO ──────────────────────────────────────────────────────────────

const leadContactSchema = z.object({
  fullName: z.string().min(2),
  corporateEmail: z.string().email(),
  company: z.string().min(2),
  role: z.string().min(2),
  industry: z.string().min(1),
});

/**
 * POST /api/contact
 * Creates a new lead task in ClickUp from the contact form submission.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = leadContactSchema.parse(body);

    const [firstName, ...rest] = data.fullName.trim().split(" ");

    await createClickUpTask({
      firstName: firstName ?? "",
      lastName: rest.join(" ") || "-",
      email: data.corporateEmail,
      position: data.role,
      referral: "website",
      privacy: true,
      industry: data.industry,
    });

    return NextResponse.json({
      success: true,
      message: "Your request has been submitted successfully!",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Contact form submission error:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit your request. Please try again later.",
        error: process.env.NODE_ENV === "development" ? errorMessage : undefined,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

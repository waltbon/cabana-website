import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, createClickUpTask } from "@/lib/clickup";
import { ZodError } from "zod";

export const maxDuration = 30;

/**
 * POST /api/contact
 * Creates a new lead task in ClickUp from the contact form submission
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Create the task in ClickUp
    const task = await createClickUpTask(validatedData);

    return NextResponse.json({
      success: true,
      message: "Your request has been submitted successfully!",
      taskId: task.id,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Contact form submission error:", error);

    // Handle Zod validation errors
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

    // Handle other errors
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

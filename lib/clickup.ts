import { z } from "zod";

// ClickUp API configuration
const CLICKUP_API_BASE = "https://api.clickup.com/api/v2";

// Contact form schema (matches the form in contact-form-section.tsx)
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z.string().optional(),
  position: z.string().min(1, "Please select a job position"),
  referral: z.string().min(1, "Please select how you heard about us"),
  comments: z.string().optional(),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ClickUp task creation schema
const clickUpTaskSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  markdown_description: z.string().optional(),
  status: z.string().optional(),
  priority: z.number().min(1).max(4).optional(),
  tags: z.array(z.string()).optional(),
  custom_fields: z
    .array(
      z.object({
        id: z.string(),
        value: z.union([z.string(), z.number(), z.boolean()]),
      })
    )
    .optional(),
});

export type ClickUpTask = z.infer<typeof clickUpTaskSchema>;

// ClickUp API response types
export interface ClickUpTaskResponse {
  id: string;
  name: string;
  status: {
    status: string;
    color: string;
  };
  url: string;
}

export interface ClickUpError {
  err: string;
  ECODE: string;
}

// Job position labels for task description
const jobPositionLabels: Record<string, string> = {
  ceo: "CEO / Founder",
  cto: "CTO / Technical Lead",
  cfo: "CFO / Finance",
  "data-lead": "Data Lead / Manager",
  developer: "Developer / Engineer",
  analyst: "Data Analyst",
  other: "Other",
};

// Referral source labels for task description
const referralSourceLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  google: "Google Search",
  referral: "Referral",
  event: "Event / Conference",
  other: "Other",
};

/**
 * Create a ClickUp task from contact form data
 */
export async function createClickUpTask(
  formData: ContactFormData
): Promise<ClickUpTaskResponse> {
  const apiKey = process.env.CLICKUP_API_KEY;
  const listId = process.env.CLICKUP_LIST_ID;

  if (!apiKey) {
    throw new Error("CLICKUP_API_KEY environment variable is not set");
  }

  if (!listId) {
    throw new Error("CLICKUP_LIST_ID environment variable is not set");
  }

  const fullName = `${formData.firstName} ${formData.lastName}`;
  const positionLabel = jobPositionLabels[formData.position] || formData.position;
  const referralLabel = referralSourceLabels[formData.referral] || formData.referral;

  // Build markdown description with contact details
  const markdownDescription = `
## Contact Information

| Field | Value |
|-------|-------|
| **Name** | ${fullName} |
| **Email** | ${formData.email} |
| **Phone** | ${formData.phone || "Not provided"} |
| **Position** | ${positionLabel} |
| **Referral Source** | ${referralLabel} |

## Additional Comments

${formData.comments || "No additional comments provided."}

---
*Submitted via Cabana Data Website Contact Form*
`.trim();

  // Build the task payload
  const taskPayload: ClickUpTask = {
    name: `Lead: ${fullName} - ${formData.email}`,
    markdown_description: markdownDescription,
    tags: ["website-lead", formData.referral],
  };

  // Add custom fields if configured
  // You can add custom field IDs here to map form fields to ClickUp custom fields
  // Example:
  // const customFields = [];
  // if (process.env.CLICKUP_EMAIL_FIELD_ID) {
  //   customFields.push({ id: process.env.CLICKUP_EMAIL_FIELD_ID, value: formData.email });
  // }
  // if (customFields.length > 0) {
  //   taskPayload.custom_fields = customFields;
  // }

  const response = await fetch(`${CLICKUP_API_BASE}/list/${listId}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify(taskPayload),
  });

  if (!response.ok) {
    const errorData = (await response.json()) as ClickUpError;
    throw new Error(
      `ClickUp API error: ${errorData.err || response.statusText}`
    );
  }

  return response.json() as Promise<ClickUpTaskResponse>;
}

import { NextResponse } from "next/server";
import { LLMS_HEADERS, llmsBody } from "@/lib/llms";

export async function GET() {
  return new NextResponse(llmsBody(), { headers: LLMS_HEADERS });
}

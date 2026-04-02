import { createGHLContact } from "@/lib/ghl";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Create contact in GHL
    const result = await createGHLContact({ name, email, phone });

    return NextResponse.json({
      success: true,
      message: "Contact created successfully",
      contactId: result.id,
    });
  } catch (error) {
    console.error("Contact creation error:", error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : "Failed to create contact" 
      },
      { status: 500 }
    );
  }
}

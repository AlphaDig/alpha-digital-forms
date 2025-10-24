import { NextRequest, NextResponse } from "next/server";
import { generateServiceReportEmail } from "@/utils/emailTemplate";
import { sendEmail } from "@/utils/emailService";

export async function POST(request: NextRequest) {
  try {
    // Parse JSON data
    const formData = await request.formData();
    const data: Record<string, any> = {};

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const arrayBuffer = await value.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        const mimeType = value.type || "image/png";
        data[key] = `data:${mimeType};base64,${base64}`;
      } else {
        data[key] = value;
      }
    }

    console.log("Received service report data:", {
      customer: data.customer,
      hasSignature: !!data.signature,
      signatureType: data.signature ? typeof data.signature : "none",
      signatureStartsWith: data.signature
        ? data.signature.substring(0, 50) + "..."
        : "none",
    });

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Extract signature - ensure it's a valid data URL
    let signatureImage = data.signature;

    // Validate signature data URL format
    if (signatureImage && typeof signatureImage === "string") {
      if (!signatureImage.startsWith("data:image/")) {
        console.log("Invalid signature format, attempting to fix...");
        // Try to fix common issues
        if (signatureImage.includes("base64,")) {
          const parts = signatureImage.split("base64,");
          if (parts.length > 1) {
            signatureImage = `data:image/png;base64,${parts[1]}`;
            console.log("Fixed signature format");
          }
        }
      }
    } else {
      signatureImage = undefined;
    }

    console.log("Final signature status:", {
      hasSignature: !!signatureImage,
      isValid: signatureImage
        ? signatureImage.startsWith("data:image/")
        : false,
    });

    // Generate email content with your exact template
    const emailHtml = generateServiceReportEmail(data, signatureImage);

    // Send email to company
    await sendEmail({
      to: process.env.COMPANY_EMAIL!,
      subject: `New Service Report - ${data.customer || "Unknown Customer"}`,
      html: emailHtml,
    });

    console.log("Main email sent successfully");

    // Optional: Send confirmation email to customer
    if (data.email) {
      try {
        const customerEmailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background: #f9f9f9; }
              .footer { text-align: center; padding: 20px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Service Report Submitted</h1>
              </div>
              <div class="content">
                <p>Dear ${data.contactPerson || "Customer"},</p>
                <p>Thank you for submitting your service report to Alpha Digital Company.</p>
                <p>We have received your request and our team will review it shortly.</p>
                <p><strong>Reference:</strong> ${data.customer} - ${new Date().toLocaleDateString()}</p>
                <p>If you have any questions, please don't hesitate to contact us.</p>
              </div>
              <div class="footer">
                <p><strong>Alpha Digital Company</strong></p>
                <p>© ${new Date().getFullYear()} All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `;

        await sendEmail({
          to: data.email as string,
          subject:
            "Service Report Submission Confirmation - Alpha Digital Company",
          html: customerEmailHtml,
        });

        console.log("Confirmation email sent to customer");
      } catch (customerEmailError) {
        console.error(
          "Failed to send confirmation email to customer:",
          customerEmailError
        );
        // Don't fail the main request if customer email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Service report submitted successfully and email sent",
    });
  } catch (error) {
    console.error("Error submitting service report:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Error submitting service report",
      },
      { status: 500 }
    );
  }
}

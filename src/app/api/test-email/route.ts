import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/emailService';

export async function GET() {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        success: false, 
        message: 'RESEND_API_KEY is not configured in environment variables' 
      }, { status: 500 });
    }

    // Try to send a test email
    await sendEmail({
      to: process.env.COMPANY_EMAIL!,
      subject: 'Test Email from Alpha Digital Forms',
      html: `
        <!DOCTYPE html>
        <html>
        <body>
          <h1>Test Email</h1>
          <p>This is a test email from your Alpha Digital Forms application.</p>
          <p>If you received this, your email configuration is working correctly!</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email service is configured correctly and test email sent' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: `Email test failed: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
}
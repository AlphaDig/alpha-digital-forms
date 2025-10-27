import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function generateEnquiryEmail(data: any, attachments: any[] = []) {
  const {
    name,
    company,
    telephone,
    email,
    interested = [],
    otherInterested,
    remark
  } = data;

  const interestedList = Array.isArray(interested) ? interested : [interested];
  
  // Add other interested if specified
  const allInterests = otherInterested 
    ? [...interestedList, `Other: ${otherInterested}`]
    : interestedList;

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Enquiry - ${name}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #1e3a8a, #3b82f6);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 25px;
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 20px;
        }
        .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .section-title {
            color: #1e3a8a;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            border-left: 4px solid #3b82f6;
            padding-left: 12px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .info-item {
            margin-bottom: 12px;
        }
        .info-label {
            font-weight: 600;
            color: #555;
            margin-bottom: 4px;
            font-size: 14px;
        }
        .info-value {
            color: #333;
            background: #f8fafc;
            padding: 8px 12px;
            border-radius: 6px;
            border-left: 3px solid #3b82f6;
        }
        .list {
            background: #f8fafc;
            padding: 15px;
            border-radius: 6px;
            border-left: 3px solid #3b82f6;
        }
        .list-item {
            padding: 4px 0;
            border-bottom: 1px solid #eaeaea;
        }
        .list-item:last-child {
            border-bottom: none;
        }
        .attachments {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 6px;
            padding: 15px;
            margin-top: 10px;
        }
        .footer {
            background: #f8fafc;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #eaeaea;
            color: #666;
            font-size: 14px;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>NEW ADPOS ENQUIRY RECEIVED</h1>
        </div>
        
        <div class="content">
            <!-- Contact Information -->
            <div class="section">
                <div class="section-title">Contact Information</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Name</div>
                        <div class="info-value">${name || 'Not provided'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Company</div>
                        <div class="info-value">${company || 'Not provided'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Telephone</div>
                        <div class="info-value">${telephone || 'Not provided'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Email</div>
                        <div class="info-value">${email || 'Not provided'}</div>
                    </div>
                </div>
            </div>

            <!-- Interested In -->
            <div class="section">
                <div class="section-title">Interested In</div>
                ${allInterests.length > 0 ? `
                    <div class="list">
                        ${allInterests.map((item: string) => `
                            <div class="list-item">• ${item}</div>
                        `).join('')}
                    </div>
                ` : '<div class="info-value">No specific interests selected</div>'}
            </div>

            <!-- Remarks -->
            ${remark ? `
            <div class="section">
                <div class="section-title">Remarks</div>
                <div class="info-value" style="white-space: pre-wrap;">${remark}</div>
            </div>
            ` : ''}

            <!-- Attachments -->
            ${attachments.length > 0 ? `
            <div class="section">
                <div class="section-title">Attachments</div>
                <div class="attachments">
                    <p><strong>Files attached:</strong> ${attachments.length} file(s)</p>
                    <ul>
                        ${attachments.map((file: any) => `
                            <li>${file.filename} (${(file.content.length / 1024).toFixed(1)} KB)</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            ` : ''}

            <!-- Submission Details -->
            <div class="section">
                <div class="section-title">Submission Details</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Submission Time</div>
                        <div class="info-value">${new Date().toLocaleString('en-GB')}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Source</div>
                        <div class="info-value">ADPOS Enquiry Form</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>This enquiry was submitted through Alpha Digital ADPOS enquiry form.</p>
            <p>© ${new Date().getFullYear()} Alpha Digital. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const telephone = formData.get('telephone') as string;
    const email = formData.get('email') as string;
    const interested = formData.getAll('interested') as string[];
    const otherInterested = formData.get('otherInterested') as string;
    const remark = formData.get('remark') as string;
    const file = formData.get('file') as File;
    const captchaToken = formData.get('captchaToken') as string;

    console.log('Enquiry Data Received:', {
      name,
      company,
      email,
      interested: interested.length,
      hasFile: !!file
    });

    // Verify reCAPTCHA token (optional but recommended)
    if (captchaToken) {
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`
      });
      
      const recaptchaData = await recaptchaResponse.json();
      
      if (!recaptchaData.success) {
        return NextResponse.json(
          { success: false, message: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    // Prepare attachments
    const attachments = [];
    if (file && file.size > 0) {
      const buffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(buffer)
      });
    }

    // Generate email content
    const emailHtml = generateEnquiryEmail({
      name,
      company,
      telephone,
      email,
      interested,
      otherInterested,
      remark
    }, attachments);

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'ADPOS Enquiry <noreply@yourdomain.com>', // Replace with your verified domain
      to: process.env.COMPANY_EMAIL || 'alphadigital@yahoo.com', // Your company email
      subject: `New ADPOS Enquiry - ${name} from ${company}`,
      html: emailHtml,
      attachments: attachments
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('Enquiry email sent successfully:', data);

    return NextResponse.json({ 
      success: true, 
      message: 'Enquiry submitted successfully and email sent' 
    });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Error submitting enquiry' 
      },
      { status: 500 }
    );
  }
}
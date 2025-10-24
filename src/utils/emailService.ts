import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailConfig {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, from }: EmailConfig) {
  try {
    const { data, error } = await resend.emails.send({
      from: from || `Alpha Digital Forms <${process.env.FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('Email sent successfully:', data?.id);
    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
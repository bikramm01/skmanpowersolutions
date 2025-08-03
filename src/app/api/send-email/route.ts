import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, service } = body;

  try {
    // 1. Send mail to the business owner
    await resend.emails.send({
      from: 'SK Website <noreply@skmanpower.com>',
      to: ['info@skmanpower.com'],
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    });

    // 2. Send auto-reply to the customer
    await resend.emails.send({
  from: 'SK Manpower Solutions <noreply@skmanpower.com>',
  to: [email],
  subject: 'We have received your service request',
  html: `
    <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <img src="https://skmanpower.in/logo.png" alt="SK Manpower Logo" style="height: 50px; margin-bottom: 20px;" />
        
        <h2 style="color: #0f172a;">Hi ${name},</h2>
        <p style="color: #334155; font-size: 16px;">
          Thank you for contacting <strong>SK Manpower Solutions</strong>.
        </p>
        <p style="color: #334155; font-size: 16px;">
          We have received your request for the service: <strong>${service}</strong>.
        </p>
        <p style="color: #334155; font-size: 16px;">
          Our team will contact you shortly at <strong>${phone}</strong> or respond to your email <strong>${email}</strong>.
        </p>

        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />

        <p style="color: #64748b; font-size: 14px;">
          This is an automated email. Please do not reply to this message.
        </p>

        <p style="color: #94a3b8; font-size: 12px; margin-top: 16px;">
          © ${new Date().getFullYear()} SK Manpower Solutions • <a href="https://skmanpower.in" style="color: #0ea5e9; text-decoration: none;">www.skmanpower.in</a>
        </p>
      </div>
    </div>
  `
});


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send emails' });
  }
}

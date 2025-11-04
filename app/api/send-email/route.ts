import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting: Store email addresses and their last submission timestamp
const rateLimitStore = new Map<string, number>();
const RATE_LIMIT_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

// Verify Cloudflare Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );

  const data = await response.json();
  return data.success;
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, turnstileToken } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message || !turnstileToken) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    const isValidToken = await verifyTurnstileToken(turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Invalid captcha. Please try again.' },
        { status: 400 }
      );
    }

    // Check rate limiting
    const now = Date.now();
    const lastSubmission = rateLimitStore.get(email.toLowerCase());

    if (lastSubmission && now - lastSubmission < RATE_LIMIT_DURATION) {
      const minutesRemaining = Math.ceil((RATE_LIMIT_DURATION - (now - lastSubmission)) / 60000);
      return NextResponse.json(
        { error: `Please wait ${minutesRemaining} minutes before sending another message.` },
        { status: 429 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You'll update this later with your domain
      to: 'boschifrancesco97@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Update rate limit store
    rateLimitStore.set(email.toLowerCase(), now);

    // Clean up old entries (optional, prevents memory buildup)
    for (const [storedEmail, timestamp] of rateLimitStore.entries()) {
      if (now - timestamp > RATE_LIMIT_DURATION) {
        rateLimitStore.delete(storedEmail);
      }
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

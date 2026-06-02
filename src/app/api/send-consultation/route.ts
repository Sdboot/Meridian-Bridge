import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  countryOfInterest: string;
  serviceNeeded: string;
  message: string;
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'consultations@meridianbridge.com';
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.countryOfInterest || !data.serviceNeeded || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using available service
    if (RESEND_API_KEY) {
      await sendWithResend(data);
    } else if (SENDGRID_API_KEY) {
      await sendWithSendGrid(data);
    } else {
      // Fallback: log to console (for development)
      console.log('Email notification (console fallback):', {
        to: ADMIN_EMAIL,
        from: data.email,
        ...data,
      });
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending consultation email:', error);
    return NextResponse.json(
      { error: 'Failed to submit consultation request' },
      { status: 500 }
    );
  }
}

async function sendWithResend(data: ContactFormData) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'consultations@meridianbridge.com',
      to: ADMIN_EMAIL,
      replyTo: data.email,
      subject: `New Consultation Request from ${data.name}`,
      html: generateEmailHTML(data),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend API error: ${response.statusText}`);
  }

  // Send confirmation email to user
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'consultations@meridianbridge.com',
      to: data.email,
      subject: 'We Received Your Consultation Request - MERIDIAN BRIDGE',
      html: generateConfirmationEmailHTML(data),
    }),
  });
}

async function sendWithSendGrid(data: ContactFormData) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: ADMIN_EMAIL }],
          subject: `New Consultation Request from ${data.name}`,
        },
      ],
      from: { email: 'consultations@meridianbridge.com', name: 'MERIDIAN BRIDGE' },
      replyTo: { email: data.email },
      content: [
        {
          type: 'text/html',
          value: generateEmailHTML(data),
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`SendGrid API error: ${response.statusText}`);
  }

  // Send confirmation email to user
  await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: data.email }],
          subject: 'We Received Your Consultation Request - MERIDIAN BRIDGE',
        },
      ],
      from: { email: 'consultations@meridianbridge.com', name: 'MERIDIAN BRIDGE' },
      content: [
        {
          type: 'text/html',
          value: generateConfirmationEmailHTML(data),
        },
      ],
    }),
  });
}

function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #0F2B4F; color: #F8F7F2; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background-color: #F8F7F2; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin: 15px 0; }
          .label { font-weight: bold; color: #0F2B4F; }
          .value { color: #333; margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Consultation Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${escapeHTML(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value">${escapeHTML(data.email)}</div>
            </div>
            <div class="field">
              <div class="label">Phone</div>
              <div class="value">${escapeHTML(data.phone)}</div>
            </div>
            <div class="field">
              <div class="label">Country of Interest</div>
              <div class="value">${escapeHTML(data.countryOfInterest)}</div>
            </div>
            <div class="field">
              <div class="label">Service Needed</div>
              <div class="value">${escapeHTML(data.serviceNeeded)}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="value">${escapeHTML(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function generateConfirmationEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0F2B4F 0%, #1B7E8C 100%); color: #F8F7F2; padding: 30px; border-radius: 8px; text-align: center; }
          .content { background-color: #F8F7F2; padding: 30px; margin-top: 20px; border-radius: 8px; }
          .accent { color: #D4AF37; font-weight: bold; }
          .button { 
            display: inline-block; 
            background-color: #1B7E8C; 
            color: #F8F7F2; 
            padding: 12px 30px; 
            text-decoration: none; 
            border-radius: 6px; 
            margin-top: 20px;
          }
          .footer { color: #666; font-size: 12px; margin-top: 20px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, ${escapeHTML(data.name)}!</h1>
            <p>Your consultation request has been received</p>
          </div>
          <div class="content">
            <p>Dear ${escapeHTML(data.name)},</p>
            <p>We're excited to help you with your immigration journey! We've received your consultation request for <span class="accent">${escapeHTML(data.serviceNeeded)}</span> in <span class="accent">${escapeHTML(data.countryOfInterest)}</span>.</p>
            <p>Our team will review your request and contact you within 24 business hours at <span class="accent">${escapeHTML(data.phone)}</span> or ${escapeHTML(data.email)}.</p>
            <p><strong>What to expect next:</strong></p>
            <ul>
              <li>Initial consultation call to understand your goals</li>
              <li>Personalized assessment of your eligibility</li>
              <li>Customized immigration strategy</li>
              <li>Clear timeline and next steps</li>
            </ul>
            <p>If you have any urgent questions, feel free to reach out to us:</p>
            <ul>
              <li>📧 Email: consultations@meridianbridge.com</li>
              <li>📞 Phone: +1 (555) 123-4567</li>
              <li>💬 WhatsApp: Available 24/7</li>
            </ul>
            <p>Best regards,<br><strong>MERIDIAN BRIDGE Team</strong></p>
            <div class="footer">
              <p>This is an automated confirmation email. Please do not reply to this message.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function escapeHTML(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

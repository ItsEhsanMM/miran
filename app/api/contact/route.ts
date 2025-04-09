import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const adminHtmlTemplate = (name: string, email: string, message: string) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #e7c87f;">📬 New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
      ${message.replace(/\n/g, "<br>")}
    </div>
    <hr style="margin: 20px 0;" />
    <footer style="font-size: 12px; color: #999;">This message was sent via the Miran Oil website contact form.</footer>
  </div>
`;

const autoReplyTemplate = (name: string) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #e7c87f;">Hi ${name},</h2>
    <p>Thank you for reaching out to <strong>Miran Oil</strong>. We have received your message and will get back to you shortly.</p>
    <p>If you need immediate assistance, feel free to email us directly at <a href="mailto:info@miranoil.com">info@miranoil.com</a>.</p>
    <br/>
    <p>Warm regards,</p>
    <p><strong>The Miran Oil Team</strong></p>
    <hr style="margin: 20px 0;" />
    <footer style="font-size: 12px; color: #999;">This is an automated response. Please do not reply directly to this email.</footer>
  </div>
`;

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // Or restrict to your frontend domain
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "mail.miranoil.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // Send to admin
    await transporter.sendMail({
      from: `"Miran Oil Contact" <info@miranoil.com>`,
      to: process.env.MAIL_TO,
      subject: `📩 Contact Form: ${name}`,
      html: adminHtmlTemplate(name, email, message),
    });

    // Auto-reply
    await transporter.sendMail({
      from: `"Miran Oil" <info@miranoil.com>`,
      to: email,
      subject: "✅ We received your message",
      html: autoReplyTemplate(name),
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Or your frontend origin
      },
    });
  } catch (error) {
    console.error("Email error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to send email" }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*", // Same here
        },
      }
    );
  }
}

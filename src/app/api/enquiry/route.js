export const runtime = "nodejs";

import { Resend } from "resend";
import nodemailer from "nodemailer";

/**
 * GET – health check
 */
export async function GET() {
  return new Response(
    JSON.stringify({ status: "API is running" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

/**
 * POST – handle enquiry
 */
export async function POST(req) {
  try {
    const { name, phone, email, enquiryType } = await req.json();

    if (!name || !phone || !enquiryType) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    /* -----------------------------
       1️⃣ BUSINESS EMAIL (RESEND)
    ------------------------------ */
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Nagpur Heights <onboarding@resend.dev>",
      to: process.env.BUSINESS_EMAIL,
      subject: "New Property Enquiry",
      replyTo: email || undefined,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Enquiry:</strong> ${enquiryType}</p>
      `,
    });

    /* -----------------------------
       2️⃣ AUTO-REPLY (GMAIL SMTP)
    ------------------------------ */
    if (email) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Nagpur Heights" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "We received your enquiry – Nagpur Heights",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting <strong>Nagpur Heights</strong>.</p>
          <p>We received your enquiry regarding:</p>
          <p><strong>${enquiryType}</strong></p>
          <p>Our team will contact you shortly.</p>
          <br />
          <p>Regards,<br />Nagpur Heights Team</p>
        `,
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("ENQUIRY API ERROR:", error);

    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

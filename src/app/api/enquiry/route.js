export const runtime = "nodejs";

import { Resend } from "resend";

/**
 * GET → Health check (for browser / sanity)
 */
export async function GET() {
  return new Response(
    JSON.stringify({ status: "API is running" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

/**
 * POST → Handle enquiry submission
 */
export async function POST(req) {
  try {
    // Ensure API key exists
    if (!process.env.RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ message: "RESEND_API_KEY missing" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, phone, email, enquiryType } = await req.json();

    // Validate required fields
    if (!name || !phone || !enquiryType) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    /* 1️⃣ Email to business */
    await resend.emails.send({
      from: "Nagpur Heights <onboarding@resend.dev>",
      to: process.env.BUSINESS_EMAIL,
      subject: "New Property Enquiry",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
      `,
    });

    /* 2️⃣ Auto-reply to user (if email provided) */
    if (email) {
      await resend.emails.send({
        from: "Nagpur Heights <onboarding@resend.dev>",
        to: email,
        subject: "We received your enquiry – Nagpur Heights",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting <strong>Nagpur Heights</strong>.</p>
          <p>We have received your enquiry regarding:</p>
          <p><strong>${enquiryType}</strong></p>
          <p>Our team will get in touch with you shortly.</p>
          <br />
          <p>Regards,<br /><strong>Nagpur Heights Team</strong></p>
        `,
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("ENQUIRY API ERROR:", error);

    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

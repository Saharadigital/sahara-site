import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { fullname, email, message, telephone } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.SAHARA_EMAIL_HOST,
    port: Number(process.env.SAHARA_EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.SAHARA_EMAIL_USER,
      pass: process.env.SAHARA_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Sahara Digital" <hello@saharadigital.co.uk>`,
    to: process.env.SAHARA_EMAIL_TO,
    subject: "New Contact Form Submission",
    html: `
  <div style="background-color:#1f1f1f; padding:16px 24px; font-family:'Barlow', sans-serif; color:#ffffff;">
    <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
      <tr>
        <td style="font-size:24px; font-weight:800; text-transform:uppercase; line-height:1.2;">
          SAHARA
          <div style="display:flex; align-items:center; gap:8px; font-size:24px;">
            <span style="display:inline-block; width:24px; height:24px; border-radius:50%; background-color:#f5a623; box-shadow:0 0 8px rgba(255,215,0,0.4); vertical-align:middle;"></span>
            <span>DIGITAL</span>
          </div>
        </td>
      </tr>
    </table>
  </div>

  <div style="background-color:#1f1f1f; padding:40px; font-family:'Barlow', sans-serif; color:#ffffff; border-radius:0 0 8px 8px;">
    <h2 style="color:#D4B05F; margin-top:0;">New Contact Submission</h2>
    <table style="width:100%; margin-top:20px; font-size:16px;">
      <tr>
        <td style="padding:8px 0; font-weight:bold;">Name:</td>
        <td style="padding:8px 0;">${fullname}</td>
      </tr>
      <tr>
        <td style="padding:8px 0; font-weight:bold;">Email:</td>
        <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#D4B05F;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 0; font-weight:bold;">Telephone:</td>
        <td style="padding:8px 0;">${telephone || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding:8px 0; font-weight:bold; vertical-align:top;">Message:</td>
        <td style="padding:8px 0; white-space:pre-wrap;">${
          message || "No message provided."
        }</td>
      </tr>
    </table>
    <p style="margin-top:40px; font-size:14px; color:#888;">
      Sent from the Sahara Digital website.
    </p>
  </div>
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, companyName, email, country } = body;

    // ======================
    // VALIDATION (WAJIB)
    // ======================
    const requiredFields = ["fullName", "companyName", "email", "country"];

    const missing = requiredFields.filter(
      (key) => !body[key] || body[key].toString().trim() === ""
    );

    if (missing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing fields: ${missing.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // ======================
    // ADMIN NOTIFICATION
    // ======================
    const notificationResult = await resend.emails.send({
      from: "Delvora Origins <info@delvoraorigins.com>",
      to: "info@delvoraorigins.com",
      reply_to: "info@delvoraorigins.com",
      subject: "Company Profile Request",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
      `,
    });

    console.log("ADMIN EMAIL SENT:", notificationResult);

    // ======================
    // PDF ATTACHMENT
    // ======================
    const pdfPath = path.join(
      process.cwd(),
      "public",
      "company-profile-DOI.pdf"
    );

    const pdfBuffer = fs.readFileSync(pdfPath); // ✅ FIX IMPORTANT

    // ======================
    // BUYER EMAIL
    // ======================
    const buyerResult = await resend.emails.send({
      from: "Delvora Origins <info@delvoraorigins.com>",
      to: email,
      subject: "Delvora Origins Company Profile",
      html: `
        <h2>Thank You for Your Interest</h2>

        <p>Dear ${fullName},</p>

        <p>
          We’ve received your request for our company profile.
          Attached is the document you requested.
        </p>

        <P>
          If you need anything else, just reply to this email.
        <P>

        <p>
          Warm Regards,<br/>
          Delvora Origins
        </p>
      `,
      attachments: [
        {
          filename: "Delvora-Origins-Company-Profile.pdf",
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    console.log("BUYER EMAIL SENT:", buyerResult);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("COMPRO EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
try {
const { fullName, companyName, email, country } =
await req.json();

console.log("=== NEW REQUEST ===");
console.log({
  fullName,
  companyName,
  email,
  country,
});

const notificationResult =
  await resend.emails.send({
    from: "Delvora Origins <info@delvoraorigins.com>",
    to: "info@delvoraorigins.com",
    subject: "New Company Profile Request",
    html: `
      <h2>New Lead Received</h2>

      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country}</p>
    `,
  });

console.log("NOTIFICATION RESULT:");
console.log(notificationResult);

const pdfPath = path.join(
  process.cwd(),
  "public",
  "company-profile-DOI.pdf"
);

console.log("PDF PATH:");
console.log(pdfPath);

const pdfBuffer =
  fs.readFileSync(pdfPath);

const buyerResult =
  await resend.emails.send({
    from: "Delvora Origins <onboarding@resend.dev>",
    to: email,
    subject:
      "Delvora Origins Company Profile",
    html: `
      <h2>Thank You for Your Interest</h2>

      <p>Dear ${fullName},</p>

      <p>
        Thank you for your interest in Delvora Origins. 
        We are pleased to share our Company Profile, which highlights our products, 
        values, and commitment to building trusted partnerships worldwide. 
      </p>

      <p>
        We look forward to the opportunity to work together and support your sourcing 
        needs with quality Indonesian natural products.
      </p>

      <p>
        Warm Regards,<br/>
        Delvora Origins
      </p>
    `,
    attachments: [
      {
        filename:
          "Delvora-Origins-Company-Profile.pdf",
        content: pdfBuffer,
      },
    ],
  });

console.log("BUYER RESULT:");
console.log(buyerResult);

return NextResponse.json({
  success: true,
});

} catch (error) {
console.error("ERROR:");
console.error(error);

return NextResponse.json(
  {
    success: false,
  },
  {
    status: 500,
  }
);

}
}

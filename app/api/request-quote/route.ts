import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
try {
const {
fullName,
companyName,
email,
phone,
country,
productRequested,
specifications,
quantity,
destinationPort,
incoterm,
packaging,
requirements,
} = await req.json();

console.log("REQUEST BODY:", body);
console.log("EMAIL:", body.email);

// RFQ Notification to Delvora

await resend.emails.send({
  from: "Delvora Origins <info@delvoraorigins.com>",
  to: "info@delvoraorigins.com",
  subject: `New RFQ - ${companyName}`,
  html: `
    <h2>New RFQ Received</h2>

    <table
      style="
        border-collapse: collapse;
        width: 100%;
        max-width: 700px;
      "
    >
      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Full Name</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${fullName}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Company Name</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${companyName}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Business Email</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${email}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Phone / WhatsApp</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${phone}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Country</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${country}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Product Requested</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${productRequested}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Specifications</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${specifications}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Quantity</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${quantity}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Destination Port</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${destinationPort}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Preferred Incoterm</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${incoterm}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Packaging Requirements</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${packaging}</td>
      </tr>

      <tr>
        <td style="border:1px solid #ddd;padding:10px;"><strong>Additional Requirements</strong></td>
        <td style="border:1px solid #ddd;padding:10px;">${requirements}</td>
      </tr>
    </table>
  `,
});

// Auto Reply to Buyer

await resend.emails.send({
  from: "Delvora Origins <info@delvoraorigins.com>",
  to: email,
  subject: "Request for Quotation Received",
  html: `
    <p>Dear ${fullName},</p>

    <p>
      Thank you for your interest in Delvora Origins.
    </p>

    <p>
      We have successfully received your Request for Quotation (RFQ).
      Our team will review the information provided and get back to you
      with the relevant details as soon as possible.
    </p>

    <p>
      If additional information is required, we may contact you directly.
    </p>

    <p>
      We appreciate the opportunity to support your sourcing needs and
      look forward to working with you.
    </p>

    <p>
      Warm Regards,<br/>
      Delvora Origins<br/>
      Rooted in Nature, Growing Prosperity
    </p>
  `,
});

return NextResponse.json({
  success: true,
});

} catch (error) {
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

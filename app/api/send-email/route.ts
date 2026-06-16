import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const to = formData.get("to") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const uploadedFiles = formData.getAll("attachments") as File[];

    const attachments = await Promise.all(
      uploadedFiles.map(async (file) => {
        const bytes = await file.arrayBuffer();

        return {
          filename: file.name,
          content: Buffer.from(bytes).toString("base64"),
        };
      })
    );

    const { data, error } = await resend.emails.send({
      from: "Delvora Origins <info@delvoraorigins.com>",
      to,
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;">
          ${message.replace(/\n/g, "<br />")}

          <br /><br />

          <strong>Best regards,</strong><br />
          Delvora Origins<br />
          Indonesian Spice & Agricultural Export Supplier<br />
          info@delvoraorigins.com<br />
          www.delvoraorigins.com
        </div>
      `,
      attachments,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("SEND EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}
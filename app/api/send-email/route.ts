import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const to = formData.get("to") as string;
    const subject = formData.get("subject") as string;
    const message = (formData.get("message") as string) || "";

    // =========================
    // CLEAN MESSAGE (ANTI MAILTO BUG)
    // =========================
    const cleanMessage = message
      .replace(/\[([^\]]+)\]\(mailto:[^)]+\)/g, "$1")
      .replace(/mailto:\d*/g, "")
      .replace(/mailto:/g, "")
      .replace(/\n/g, "<br />");

    // =========================
    // ATTACHMENTS
    // =========================
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

    // =========================
    // PLAIN TEMPLATE
    // =========================
    const html = `
      <div style="
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: #222;
        line-height: 1.8;
      ">
        <p>${cleanMessage}</p>

        <br/>

        <p>Best regards,</p>
        <p>
          Delvora Origins<br/>
          info@delvoraorigins.com<br/>
          www.delvoraorigins.com
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Delvora Origins <info@delvoraorigins.com>",
      to,
      subject,
      html,
      attachments,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
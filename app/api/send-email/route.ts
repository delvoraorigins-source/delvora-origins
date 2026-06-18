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
    // EMAIL TEMPLATE
    // =========================
    const html = `
      <div style="
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: #222;
        line-height: 1.8;
      ">
        ${cleanMessage}

        <div style="
          margin-top: 32px;
          border-top: 2px solid #B68D40;
          padding-top: 20px;
        ">

          <div style="
            font-size: 18px;
            font-weight: 700;
            color: #B68D40;
            margin-bottom: 4px;
          ">
            Delvora Origins
          </div>

          <div style="
            color: #444;
            margin-bottom: 10px;
          ">
            Indonesian Spice Sourcing & Exports
          </div>

          <div style="
            color: #777;
            margin-bottom: 14px;
          ">
            Cinnamon • Vanilla • Agricultural Products
          </div>

          <div style="
            font-size: 14px;
            color: #555;
          ">
            Email: info@delvoraorigins.com<br/>
            Website: www.delvoraorigins.com
          </div>

        </div>
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
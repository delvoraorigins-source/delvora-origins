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
        <div style="
          background:#f5f3ee;
          padding:40px 20px;
          font-family:Arial,sans-serif;
        ">

          <div style="
            max-width:700px;
            margin:0 auto;
            background:#ffffff;
            border-radius:16px;
            overflow:hidden;
            box-shadow:0 4px 20px rgba(0,0,0,0.08);
          ">

            <img
              src="https://delvoraorigins.com/why_indonesia.jpeg"
              alt="Indonesia"
              style="
                width:100%;
                display:block;
              "
            />

            <div style="padding:35px;">

              <div style="
                text-align:center;
                margin-bottom:30px;
              ">
                <img
                  src="https://delvoraorigins.com/Logo_Delvora2.png"
                  alt="Delvora Origins"
                  style="
                    width:220px;
                    max-width:100%;
                  "
                />
              </div>

              <div style="
                color:#333;
                font-size:15px;
                line-height:1.9;
              ">
                ${message.replace(/\n/g, "<br />")}
              </div>

              <div style="
                margin-top:40px;
                border-top:2px solid #B68D40;
                padding-top:24px;
              ">

                <div style="
                  font-size:22px;
                  font-weight:700;
                  color:#B68D40;
                  margin-bottom:6px;
                ">
                  Delvora Origins
                </div>

                <div style="
                  color:#444;
                  margin-bottom:12px;
                ">
                  Indonesian Spice & Agricultural Export Supplier
                </div>

                <div style="
                  color:#777;
                  margin-bottom:18px;
                ">
                  Cinnamon • Vanilla • Coconut Sugar
                </div>

                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    font-size:14px;
                    color:#555;
                  "
                >
                  <tr>
                    <td>📧</td>
                    <td style="padding-left:8px;">
                      info@delvoraorigins.com
                    </td>
                  </tr>

                  <tr>
                    <td>🌐</td>
                    <td style="padding-left:8px;">
                      <a
                        href="https://delvoraorigins.com"
                        style="
                          color:#B68D40;
                          text-decoration:none;
                        "
                      >
                        www.delvoraorigins.com
                      </a>
                    </td>
                  </tr>
                </table>

              </div>

            </div>

          </div>

        </div>
      `,

      attachments,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

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
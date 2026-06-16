"use client";

import { useState, useRef} from "react";

export default function SendEmailPage() {
    const fileRef = useRef<HTMLInputElement>(null);

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const formData = new FormData();

      formData.append("to", to);
      formData.append("subject", subject);
      formData.append("message", message);

      if (files) {
        Array.from(files).forEach((file) => {
          formData.append("attachments", file);
        });
      }

      const response = await fetch("/api/send-promotion", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setStatus("✅ Email sent successfully");

      setTo("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send email");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('/why_indonesia.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl rounded-3xl bg-white/95 backdrop-blur-md p-10 shadow-2xl">

          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.35em] text-[#B68D40] text-sm">
              Delvora Origins
            </p>

            <h1 className="text-5xl font-light mt-4">
              Export Communication Center
            </h1>

            <p className="text-gray-500 mt-4">
              Send quotations, company profiles,
              specifications and buyer follow-ups.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="email"
              required
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Recipient Email"
              className="w-full rounded-xl border px-4 py-3"
            />

            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email Subject"
              className="w-full rounded-xl border px-4 py-3"
            />

            <textarea
              rows={12}
              required
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Write your email..."
              className="w-full rounded-xl border px-4 py-3"
            />

            <div>
              <label className="block mb-2 text-sm font-medium">
                Attach Files
              </label>

              <input
                type="file"
                multiple
                onChange={(e) =>
                  setFiles(e.target.files)
                }
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#B68D40] text-white py-4 font-medium"
            >
              {loading
                ? "Sending..."
                : "Send Email"}
            </button>

            {status && (
              <div className="text-center">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
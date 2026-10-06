import { NextResponse } from "next/server";

type Payload = {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot
};

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden honeypot field — pretend success, do nothing.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const data = {
    fullName: clean(body.fullName, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 200),
    phone: clean(body.phone, 30),
    service: clean(body.service, 120),
    budget: clean(body.budget, 60),
    message: clean(body.message, 5000),
  };

  // Server-side validation (never trust the client)
  if (data.fullName.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email) || !data.service || data.message.length < 20) {
    return NextResponse.json({ ok: false, error: "Validation failed" }, { status: 422 });
  }

  /* -----------------------------------------------------------------
   * TODO: connect email / CRM delivery here.
   *
   * Option A — Resend (npm i resend):
   *   const resend = new Resend(process.env.RESEND_API_KEY);
   *   await resend.emails.send({
   *     from: "Techscalify Website <noreply@yourdomain.com>",
   *     to: process.env.CONTACT_TO_EMAIL ?? "techscalify@gmail.com",
   *     replyTo: data.email,
   *     subject: `New inquiry: ${data.service} — ${data.fullName}`,
   *     text: Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n"),
   *   });
   *
   * Option B — Nodemailer with Gmail SMTP (use an App Password).
   * Option C — POST to your CRM / Google Sheet / Zapier webhook.
   *
   * Consider adding rate limiting (e.g. Upstash) before going live.
   * ----------------------------------------------------------------- */
  console.info("[contact] new inquiry", { ...data, message: `${data.message.slice(0, 80)}…` });

  return NextResponse.json({ ok: true });
}

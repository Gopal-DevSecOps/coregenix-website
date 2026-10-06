import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill all required fields." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "sales@cgcein.com";

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { ok: false, error: "SMTP is not configured on the server." },
      { status: 500 }
    );
  }

  const buildTransporter = (port: number) =>
    nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

  const text = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const ports = SMTP_PORT === 465 ? [465, 587] : [587, 465];

  for (const port of ports) {
    try {
      await buildTransporter(port).sendMail({
        from: `"CoreGenix Website" <${SMTP_USER}>`,
        to: CONTACT_EMAIL,
        replyTo: email,
        subject: `${subject || "New Enquiry"} — Enquiry from ${name}`,
        text,
      });
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error(`Email send failed on port ${port}:`, err);
    }
  }

  return NextResponse.json({ ok: false, error: "Email could not be sent." }, { status: 500 });
}
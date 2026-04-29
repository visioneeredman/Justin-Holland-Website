import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const TO = "justin@iamjustinholland.com";
const FROM = "Justin Holland <noreply@site.iamjustinholland.com>";

function formatFields(fields: Record<string, string>): string {
  const labelMap: Record<string, string> = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    consent_marketing: "Consented to Marketing SMS",
    consent_transactional: "Consented to Transactional SMS",
  };
  return Object.entries(fields)
    .filter(([key]) => key !== "formType")
    .map(([key, value]) => {
      const label = labelMap[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
      return `${label}:\n${value}`;
    })
    .join("\n\n");
}

function getSubject(formType: string, fields: Record<string, string>): string {
  const firstName = fields.firstName ?? "";
  const lastName = fields.lastName ?? "";
  const name =
    fields.name ||
    (firstName ? `${firstName} ${lastName}`.trim() : "Unknown");
  if (formType === "speaking") return `Speaking Inquiry — ${name}`;
  if (formType === "coaching") return `Coaching Application — ${name}`;
  const subject = fields.subject || "Message";
  return `${subject} — ${name}`;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { formType, ...fields } = body as { formType: string } & Record<
      string,
      string
    >;

    const replyTo = fields.email;
    const subject = getSubject(formType, fields);
    const text = formatFields(fields);

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo,
      subject,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

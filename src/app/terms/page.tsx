import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Justin Holland",
  description:
    "Terms of service for iamjustinholland.com, including SMS messaging program terms.",
};

const lastUpdated = "April 28, 2026";

export default function Terms() {
  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "7rem 0 4rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span
            style={{
              display: "block",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C4813A",
              marginBottom: "1.5rem",
            }}
          >
            Legal
          </span>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Terms of Service
          </h1>
          <p style={{ color: "#9a9080", fontSize: "0.9375rem" }}>Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "5rem 0 7rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ fontSize: "1rem", lineHeight: 1.75, color: "#2a2018" }}>
            <p style={{ marginBottom: "2rem" }}>
              By using iamjustinholland.com or providing your contact information through any form
              on this site, you agree to these Terms of Service. Please read them carefully.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                marginBottom: "0.75rem",
                marginTop: "2.5rem",
                color: "#1A1A1A",
              }}
            >
              1. Use of This Site
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              This website is operated by Justin Holland, a sole proprietor offering personal
              coaching and speaking services. You agree to use this site only for lawful purposes
              and in a way that does not infringe the rights of others.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                marginBottom: "0.75rem",
                marginTop: "2.5rem",
                color: "#1A1A1A",
              }}
            >
              2. SMS Messaging Program
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Program Name:</strong> Justin Holland SMS
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Program Description:</strong> This program sends two types of messages to
              contacts who have opted in:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Marketing messages</strong> &mdash; occasional updates, insights, offers,
                and announcements related to Justin Holland&apos;s coaching and speaking services.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Transactional messages</strong> &mdash; appointment reminders, booking
                confirmations, session notifications, and other non-marketing communications.
              </li>
            </ul>

            <p style={{ marginBottom: "1rem" }}>
              <strong>Opt-Out:</strong> You can cancel SMS messages at any time. Simply text
              &quot;STOP&quot; to the number messaging you. Upon sending STOP, you will receive a
              confirmation SMS. After that, you will no longer receive SMS messages from this
              program. To rejoin, sign up again at iamjustinholland.com/contact or text
              &quot;START&quot; to the same number.
            </p>

            <p style={{ marginBottom: "1rem" }}>
              <strong>Help:</strong> If you experience issues with the messaging program, reply
              with the keyword HELP for more assistance, or contact{" "}
              <a
                href="mailto:justin@iamjustinholland.com"
                style={{ color: "#C4813A", textDecoration: "none" }}
              >
                justin@iamjustinholland.com
              </a>
              .
            </p>

            <p style={{ marginBottom: "1rem" }}>
              <strong>Carriers:</strong> Carriers are not liable for delayed or undelivered
              messages.
            </p>

            <p style={{ marginBottom: "1rem" }}>
              <strong>Rates:</strong> Message and data rates may apply for messages sent to you
              from this program and messages you send to this program. Message frequency varies.
              For questions about your text plan or data plan, contact your wireless provider.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong>Privacy:</strong> For privacy-related inquiries, please refer to the{" "}
              <Link href="/privacy-policy" style={{ color: "#C4813A", textDecoration: "none" }}>
                Privacy Policy
              </Link>
              .
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                marginBottom: "0.75rem",
                marginTop: "2.5rem",
                color: "#1A1A1A",
              }}
            >
              3. Intellectual Property
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              All content on this site &mdash; including writing, design, images, and
              frameworks &mdash; is the property of Justin Holland. You may not reproduce,
              distribute, or use it without written permission.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                marginBottom: "0.75rem",
                marginTop: "2.5rem",
                color: "#1A1A1A",
              }}
            >
              4. Disclaimer
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              The content on this site is for informational and educational purposes. It does not
              constitute professional psychological, medical, legal, or financial advice. Results
              from coaching vary and are not guaranteed.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                marginBottom: "0.75rem",
                marginTop: "2.5rem",
                color: "#1A1A1A",
              }}
            >
              5. Limitation of Liability
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              To the fullest extent permitted by law, Justin Holland shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of this site or
              its services.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                marginBottom: "0.75rem",
                marginTop: "2.5rem",
                color: "#1A1A1A",
              }}
            >
              6. Compliance
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              This SMS program complies with applicable carrier requirements, CTIA Messaging
              Principles and Best Practices, and all applicable federal and state laws governing
              text message communications.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                marginBottom: "0.75rem",
                marginTop: "2.5rem",
                color: "#1A1A1A",
              }}
            >
              7. Changes to These Terms
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              I may update these Terms from time to time. The date at the top reflects the most
              recent revision. Continued use of this site after changes constitutes acceptance.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.375rem",
                fontWeight: 400,
                marginBottom: "0.75rem",
                marginTop: "2.5rem",
                color: "#1A1A1A",
              }}
            >
              8. Contact
            </h2>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Justin Holland</strong>
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              Email:{" "}
              <a
                href="mailto:justin@iamjustinholland.com"
                style={{ color: "#C4813A", textDecoration: "none" }}
              >
                justin@iamjustinholland.com
              </a>
            </p>
            <p style={{ marginBottom: "2.5rem" }}>Website: iamjustinholland.com</p>

            <div
              style={{
                borderTop: "1px solid #d4ccc0",
                paddingTop: "1.5rem",
                display: "flex",
                gap: "1.5rem",
                fontSize: "0.875rem",
              }}
            >
              <Link href="/privacy-policy" style={{ color: "#C4813A", textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="/contact" style={{ color: "#C4813A", textDecoration: "none" }}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

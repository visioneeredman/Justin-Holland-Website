import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Justin Holland",
  description:
    "Privacy policy for iamjustinholland.com. Learn how Justin Holland collects, uses, and protects your personal information.",
};

const lastUpdated = "April 28, 2026";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p style={{ color: "#9a9080", fontSize: "0.9375rem" }}>Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "5rem 0 7rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "#2a2018",
            }}
          >
            <p style={{ marginBottom: "2rem" }}>
              Justin Holland (&quot;I,&quot; &quot;me,&quot; or &quot;my&quot;) operates the website
              iamjustinholland.com. This Privacy Policy describes how I collect, use, and protect
              information you provide when you visit this site or contact me through any form on it.
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
              1. Information I Collect
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              When you fill out a contact, speaking inquiry, or coaching application form, I may
              collect:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>First and last name</li>
              <li style={{ marginBottom: "0.5rem" }}>Email address</li>
              <li style={{ marginBottom: "0.5rem" }}>Phone number (if provided)</li>
              <li style={{ marginBottom: "0.5rem" }}>Your message or inquiry content</li>
              <li style={{ marginBottom: "0.5rem" }}>SMS consent preferences (if selected)</li>
            </ul>
            <p style={{ marginBottom: "1.5rem" }}>
              I also collect standard website analytics data (pages visited, browser type, general
              location) through service providers. This data does not personally identify you.
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
              2. How I Use Your Information
            </h2>
            <p style={{ marginBottom: "1rem" }}>I use the information you provide to:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Respond to your inquiries and messages</li>
              <li style={{ marginBottom: "0.5rem" }}>Send email or SMS communications you have consented to receive</li>
              <li style={{ marginBottom: "0.5rem" }}>Schedule and confirm coaching or speaking engagements</li>
              <li style={{ marginBottom: "0.5rem" }}>Improve the content and functionality of this website</li>
            </ul>

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
              3. SMS and Text Messaging
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              If you provide your phone number and opt in to receive SMS messages, the following
              applies:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>No mobile information will be shared with third parties or affiliates for
                marketing or promotional purposes.</strong> Information sharing to subcontractors
                in support services, such as customer service, is permitted. All other use case
                categories exclude text messaging originator opt-in data and consent; this
                information will not be shared with any third parties.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Text messaging originator opt-in data and consent will not be shared with any
                third parties, except for aggregators and providers of the text message services
                used to deliver messages.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                You may opt out of SMS messages at any time by replying STOP to any message. You
                may reply HELP for assistance.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>Message and data rates may apply.</li>
            </ul>

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
              4. How I Share Your Information
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              I do not sell, rent, or trade your personal information. I may share information
              only in the following limited circumstances:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                With service providers who help me operate this website and deliver communications
                (such as email and SMS delivery services). These providers are contractually
                required to protect your information.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                When required by law or to protect the rights and safety of myself or others.
              </li>
            </ul>
            <p
              style={{
                marginBottom: "1.5rem",
                padding: "1rem 1.25rem",
                borderLeft: "3px solid #C4813A",
                background: "#fff",
                fontSize: "0.9375rem",
              }}
            >
              All of the above categories exclude text messaging originator opt-in data and
              consent; this information will not be shared with any third parties, excluding
              aggregators and providers of the text message services.
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
              5. Data Security
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              I use reasonable technical and organizational measures to protect your information.
              No method of transmission over the internet is 100% secure. If you believe your
              information has been compromised, contact me immediately.
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
              6. Your Rights
            </h2>
            <p style={{ marginBottom: "1rem" }}>You have the right to:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Request access to the personal information I hold about you</li>
              <li style={{ marginBottom: "0.5rem" }}>Request correction or deletion of your information</li>
              <li style={{ marginBottom: "0.5rem" }}>Withdraw consent for SMS communications at any time by replying STOP</li>
              <li style={{ marginBottom: "0.5rem" }}>Opt out of email communications by replying to any email with &quot;unsubscribe&quot;</li>
            </ul>

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
              7. Cookies and Analytics
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              This website may use cookies and third-party analytics tools (such as Vercel
              Analytics) to understand how visitors use the site. These tools collect aggregate,
              anonymized data. You can disable cookies in your browser settings.
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
              8. Children&apos;s Privacy
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              This website is not directed at children under 13. I do not knowingly collect
              personal information from children.
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
              9. Changes to This Policy
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              I may update this Privacy Policy from time to time. The date at the top of this page
              reflects the most recent revision. Continued use of this site after changes
              constitutes acceptance of the updated policy.
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
              10. Contact
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              For questions about this Privacy Policy or to exercise your rights, contact me at:
            </p>
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
              <Link href="/terms" style={{ color: "#C4813A", textDecoration: "none" }}>
                Terms of Service
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

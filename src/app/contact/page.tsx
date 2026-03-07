import type { Metadata } from "next";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Contact Justin Holland",
  description:
    "Get in touch with Justin Holland for speaking inquiries, coaching interest, media, or anything else. Justin reads every message personally.",
};

const contactFormFields = [
  { name: "name", label: "Your Name", type: "text" as const, placeholder: "Full name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  {
    name: "subject",
    label: "Subject",
    type: "select" as const,
    options: [
      "Speaking Inquiry",
      "Coaching Interest",
      "Media or Press",
      "Podcast or Interview",
      "Other",
    ],
    required: true,
  },
  { name: "message", label: "Message", type: "textarea" as const, placeholder: "Tell Justin what you have in mind.", required: true },
];

export default function Contact() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: "#0E0E0E",
          color: "#F5F0E8",
          padding: "7rem 0 5rem",
        }}
      >
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
            Get in Touch
          </span>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              marginBottom: "1.25rem",
            }}
          >
            I read every message personally.
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.7,
              color: "#c8bfb0",
              maxWidth: "30rem",
            }}
          >
            For speaking inquiries, coaching interest, media, or anything else — use the form
            below or find me on Instagram and TikTok.
          </p>
        </div>
      </section>

      {/* ── FORM + DETAILS ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "5rem",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Form */}
            <div>
              <PlaceholderForm
                fields={contactFormFields}
                submitLabel="Send Message"
                successMessage="Message received. Justin reads every one personally and will be in touch soon."
              />
            </div>

            {/* Details */}
            <div>
              <div style={{ marginBottom: "3rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C4813A",
                    marginBottom: "1rem",
                  }}
                >
                  Speaking
                </span>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "#4a4035" }}>
                  For keynote and speaking inquiries, please include your event date, expected
                  audience size, and event type. Justin will follow up directly if there is a fit.
                </p>
              </div>

              <div style={{ marginBottom: "3rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C4813A",
                    marginBottom: "1rem",
                  }}
                >
                  Coaching
                </span>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "#4a4035" }}>
                  For coaching inquiries, the{" "}
                  <a href="/work-with-me" style={{ color: "#C4813A", textDecoration: "none" }}>
                    Work With Me
                  </a>{" "}
                  page has a more detailed application that helps Justin understand what you are
                  facing before responding.
                </p>
              </div>

              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C4813A",
                    marginBottom: "1rem",
                  }}
                >
                  Follow
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a
                    href="https://www.instagram.com/iamjustinholland"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#4a4035", textDecoration: "none", fontSize: "0.9375rem" }}
                  >
                    Instagram — @iamjustinholland
                  </a>
                  <a
                    href="https://www.tiktok.com/@iamjustinholland"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#4a4035", textDecoration: "none", fontSize: "0.9375rem" }}
                  >
                    TikTok — @iamjustinholland
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <style>{`
        .contact-grid { grid-template-columns: 2fr 1fr !important; }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
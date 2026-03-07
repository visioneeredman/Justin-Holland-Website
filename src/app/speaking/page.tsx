import type { Metadata } from "next";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Speaking — Justin Holland",
  description:
    "Justin Holland is a speaker on blind spots, human potential, and the subconscious programming that keeps people stuck. He leaves audiences with something they cannot undo.",
};

const speakingFormFields = [
  { name: "name", label: "Your Name", type: "text" as const, placeholder: "Full name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "organization", label: "Organization or Event", type: "text" as const, placeholder: "Company, conference, or event name", required: true },
  { name: "message", label: "Tell me about your event", type: "textarea" as const, placeholder: "Share your event date, expected audience size, and what you are hoping people leave with.", required: true },
];

export default function Speaking() {
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
        <div className="max-w-4xl mx-auto px-6">
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
            Speaking
          </span>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            Once you see it,
            <br />
            you can&apos;t unsee it.
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
              lineHeight: 1.7,
              color: "#c8bfb0",
              maxWidth: "38rem",
            }}
          >
            What Justin leaves in a room is not inspiration that fades on the drive home.
            It is a shift the audience cannot undo.
          </p>
        </div>
      </section>

      {/* ── THE DIFFERENTIATOR ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="speak-two-col">
            <div>
              <span className="line-accent" />
              <h2
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  marginBottom: "1.25rem",
                }}
              >
                He is legally blind.
                <br />
                He speaks about blind spots.
              </h2>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "1rem" }}>
                That is not a metaphor. It is the origin of the work — and it is what makes
                Justin impossible to place in the same category as anyone else on a speaker roster.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035" }}>
                Most speakers bring a message. Justin brings something the audience did not know
                was missing — a clear view of the subconscious programming that has been quietly
                creating the outcomes they say they do not want. In their business. Their
                relationships. Their sense of what is possible.
              </p>
            </div>

            <div
              style={{
                background: "#F5F0E8",
                padding: "2.5rem",
                borderLeft: "3px solid #C4813A",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  fontStyle: "italic",
                  lineHeight: 1.55,
                  color: "#1A1A1A",
                  margin: 0,
                }}
              >
                &ldquo;Your audience will not leave with a framework to implement.
                They will leave having seen something about themselves they could not see before.
                That is a different kind of result.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HE SPEAKS ABOUT ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
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
            What Justin Speaks About
          </span>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "2rem",
            }}
          >
            One territory. Every audience.
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Justin speaks about blind spots — the subconscious programming that creates the
            patterns people cannot break no matter what they try. He speaks about what it means
            to align with your True Self and true purpose. He speaks about the White Cane
            Principle: why most people are navigating their lives from the past or the future,
            and what changes when they stop.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            The specific topic is shaped around your audience. The core of the talk is always
            the same: the blind spot is the thing every other approach has been working around.
            Once an audience sees that, they cannot unsee it.
          </p>
        </div>
      </section>

      {/* ── WHO BOOKS JUSTIN ── */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "3rem",
            }}
          >
            Events where this lands
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2px",
              background: "#1e1e1e",
            }}
            className="who-grid"
          >
            {[
              {
                title: "Personal Development Events",
                desc: "Audiences already invested in growth and ready for something that goes deeper than motivation.",
              },
              {
                title: "Consciousness & Spirituality Gatherings",
                desc: "Communities exploring human potential, non-duality, and what is possible when the blind spot is cleared.",
              },
              {
                title: "Corporate Leadership Offsites",
                desc: "Leadership teams and executives who want a non-standard perspective on performance, culture, and what is actually in the way.",
              },
              {
                title: "Podcasts & Media",
                desc: "Conversations about blind spots, subconscious programming, human potential, and why most people are still stuck after doing everything right.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0E0E0E", padding: "2rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    marginBottom: "0.75rem",
                    color: "#F5F0E8",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#9a9080", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="line-accent" style={{ margin: "0 auto 1.5rem" }} />
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                marginBottom: "0.75rem",
              }}
            >
              Submit a Speaking Inquiry
            </h2>
            <p style={{ fontSize: "1rem", color: "#6b6055" }}>
              Justin reads every inquiry personally. If there is a fit, he will be in touch directly.
            </p>
          </div>

          <PlaceholderForm
            fields={speakingFormFields}
            submitLabel="Send Inquiry"
            successMessage="Inquiry received. Justin reads every one personally and will follow up directly."
          />
        </div>
      </section>

      <style>{`
        .speak-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .who-grid { grid-template-columns: repeat(2, 1fr) !important; }
        @media (max-width: 768px) {
          .speak-two-col { grid-template-columns: 1fr !important; }
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

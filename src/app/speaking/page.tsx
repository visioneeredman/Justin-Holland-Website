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
            If you are looking for a speaker your audience will still be thinking about weeks later —
            not because it was entertaining, but because something genuinely shifted — this is
            the page for that.
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM WITH MOST SPEAKERS ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
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
            Your audience has heard the motivation speech.
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "1rem" }}>
            They have clapped, taken notes, and gone home feeling inspired. And by Wednesday,
            nothing changed. The same patterns. The same frustrations. The same ceiling.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "1rem" }}>
            The reason is not the speaker. It is that motivation works above the blind spot.
            Affirmations, mindset tools, peak experience events — all of it operates at the
            conscious level while the subconscious programming underneath keeps running the
            same pattern it always has.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035" }}>
            What Justin brings to a room is different. He does not motivate. He asks the
            questions that reveal the blind spot — the thing the audience could not see about
            what they have been creating. Once they see it, they cannot unsee it. That is a
            different kind of result.
          </p>
        </div>
      </section>

      {/* ── WHAT YOUR AUDIENCE LEAVES WITH ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
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
                What your audience leaves with
              </h2>
              {[
                "A genuine shift in how they understand what has been keeping them stuck — not a new strategy to try, but a blind spot they can finally see",
                "A framework for understanding why the same pattern keeps showing up across their business, relationships, and life — and what is actually at the root",
                "Something they will still be thinking about weeks later — because once you see it, you cannot unsee it",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <span
                    style={{ display: "block", width: "1.5rem", height: "1px", background: "#C4813A", flexShrink: 0, marginTop: "0.75rem" }}
                    aria-hidden="true"
                  />
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#4a4035", margin: 0 }}>{point}</p>
                </div>
              ))}
            </div>

            <div style={{ background: "#0E0E0E", padding: "2.5rem", borderLeft: "3px solid #C4813A" }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  fontStyle: "italic",
                  lineHeight: 1.55,
                  color: "#F5F0E8",
                  margin: 0,
                }}
              >
                &ldquo;Your audience will not leave with a framework to implement on the flight home.
                They will leave having seen something about themselves they could not see before.
                That is a different kind of result.&rdquo;
              </p>
            </div>
          </div>
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
                desc: "Audiences already invested in growth who are ready for something that goes deeper than motivation and actually addresses the root.",
              },
              {
                title: "Consciousness & Spirituality Gatherings",
                desc: "Communities exploring human potential, non-duality, and True Self — who want something grounded, not performative.",
              },
              {
                title: "Corporate Leadership Offsites",
                desc: "Leadership teams who have tried the strategy and culture work and are ready to address what is actually underneath the patterns.",
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
            formType="speaking"
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

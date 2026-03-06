import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Speaking — Justin Holland | Book a Keynote",
  description:
    "Justin Holland delivers paradigm-shifting keynotes for conferences, corporate events, and personal development gatherings. Book Justin to speak at your next event.",
};

const keynotes = [
  {
    title: "Blind Spots in Leadership",
    audience: "Corporate, Leadership Teams, Executives",
    description:
      "The patterns organizations cannot see are the ones driving the outcomes they do not want. This keynote reveals the invisible dynamics underneath team friction, leadership plateaus, and culture misfires — and what shifts when they are finally seen.",
  },
  {
    title: "The Zero State",
    audience: "Performance Culture, Athletes, High Achievers",
    description:
      "Peak performance is not about doing more. It is about removing what is blocking the state that is already available. This keynote reframes the entire performance conversation — from effort to alignment, from striving to accessing what athletes call flow.",
  },
  {
    title: "Consciousness and Human Potential",
    audience: "Personal Development Events, Wellness Organizations, Consciousness Communities",
    description:
      "A grounded, non-woo-woo framework for understanding why people stay stuck despite doing everything right — and what actually changes when the blind spot is removed. Not theory. Built from lived experience.",
  },
  {
    title: "The Middle Path",
    audience: "Spiritually-Curious, Mission-Driven Organizations, Personal Development",
    description:
      "Most people are caught between two extremes: the over-spiritualized path that bypasses real life, and the purely material path that dismisses what cannot be measured. This keynote maps the integration — and why it is the only place sustainable change lives.",
  },
];

const speakingFormFields = [
  { name: "name", label: "Your Name", type: "text" as const, placeholder: "Full name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "organization", label: "Organization or Event", type: "text" as const, placeholder: "Company, conference, or event name", required: true },
  { name: "message", label: "Tell me about your event", type: "textarea" as const, placeholder: "Share your event date, expected audience, and what you're hoping people leave with.", required: true },
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
            Your audience will leave with something
            <br />
            <em>they cannot un-see.</em>
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
              lineHeight: 1.7,
              color: "#c8bfb0",
              maxWidth: "36rem",
            }}
          >
            Justin Holland delivers keynotes that don&apos;t motivate people — they shift them.
            There is a difference. A motivated person goes home inspired. A shifted person goes
            home different.
          </p>
        </div>
      </section>

      {/* ── WHAT HE BRINGS ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <span className="line-accent" />
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "2.5rem",
            }}
          >
            What Justin brings to the stage
          </h2>
          <div className="speaking-bullets">
            {[
              "A genuinely unusual origin story that serves as both context and metaphor — not a manufactured narrative, but one earned through experience",
              "The ability to hold a room at the edge of an insight — not through hype or performance, but through the weight of truth said clearly",
              "Practical philosophy that applies to business performance, leadership, relationships, and personal development simultaneously",
              "The clear mirror dynamic — audiences consistently report that the keynote felt like it was speaking directly to them, not at them",
            ].map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "1.5rem",
                    height: "1px",
                    background: "#C4813A",
                    flexShrink: 0,
                    marginTop: "0.75rem",
                  }}
                  aria-hidden="true"
                />
                <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", margin: 0 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEYNOTE THEMES ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C4813A",
                marginBottom: "1rem",
              }}
            >
              Keynote Themes
            </span>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              What Justin speaks about
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px", background: "#e8e2d8" }}>
            {keynotes.map((keynote, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  padding: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "3rem",
                  alignItems: "start",
                }}
                className="keynote-row"
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {keynote.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "#C4813A",
                    }}
                  >
                    {keynote.audience}
                  </p>
                </div>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#4a4035", margin: 0 }}>
                  {keynote.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO HIRES JUSTIN ── */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "6rem 0" }}>
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
            Who Books Justin
          </span>
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
            Events where the work lands
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
              { title: "Conferences &amp; Summits", desc: "Personal development, consciousness, human potential, leadership, and performance-focused events." },
              { title: "Corporate Offsites &amp; Retreats", desc: "Organizations seeking a non-standard perspective on team performance, culture, and leadership." },
              { title: "Personal Development Events", desc: "Gatherings where the audience is already invested in growth and ready to go deeper than motivation." },
              { title: "Podcast &amp; Media Appearances", desc: "Conversations about consciousness, human potential, blind spots, and what most coaches are missing." },
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
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
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
        .keynote-row { grid-template-columns: 1fr 2fr !important; }
        .who-grid { grid-template-columns: repeat(2, 1fr) !important; }
        @media (max-width: 768px) {
          .keynote-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

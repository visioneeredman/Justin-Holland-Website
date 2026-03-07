import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "How to Book a Keynote Speaker: A Step-by-Step Guide",
  description:
    "Learn how to book a keynote speaker for your event with this complete guide. Find tips on budgeting, outreach, contracts, and choosing the right speaker.",
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

      {/* ── HOW TO BOOK A KEYNOTE SPEAKER GUIDE ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
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
            Booking Guide
          </span>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            What Does It Mean to Book a Keynote Speaker?
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            Booking a keynote speaker means finding, contacting, and securing a professional speaker for your event. This process involves research, negotiation, and signing a formal agreement to confirm their appearance.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Step 1: Define Your Event Goals
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            Before reaching out to any speaker, clarify what you want your audience to take away from the event. Your goals will shape the type of speaker you need, the tone of the presentation, and the topics you want covered.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Step 2: Set a Realistic Budget
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            Speaker fees vary widely depending on experience, fame, and demand. Entry-level speakers may charge a few hundred dollars, while celebrity speakers can cost tens of thousands. Factor in travel, accommodation, and any technical requirements when setting your budget.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Step 3: Research and Shortlist Speakers
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            Use speaker bureaus, LinkedIn, industry associations, and referrals to find candidates. Watch demo videos, read reviews, and check past speaking engagements to evaluate whether a speaker is a good fit for your audience.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Step 4: Reach Out and Request Availability
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            Contact speakers or their representatives directly. Provide details about your event including the date, location, audience size, and topic. Ask about their availability and request a quote or speaker kit for review.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Step 5: Negotiate Terms
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            Once you find a speaker who fits your needs and budget, discuss the terms of their appearance. This includes the fee, length of the presentation, travel arrangements, audio and visual requirements, and any exclusivity clauses.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Step 6: Review and Sign a Contract
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            Always formalize the agreement with a written contract. The contract should outline payment terms, cancellation policies, deliverables, and any special requests. Have a legal professional review it if needed before signing.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Step 7: Confirm Logistics Before the Event
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            In the weeks leading up to your event, stay in contact with the speaker to confirm travel plans, presentation slides, technical needs, and the event schedule. A pre-event call can help align expectations and reduce last-minute surprises.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Tips for Working with a Speaker Bureau
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            Speaker bureaus act as agents who represent multiple speakers. They can help you find the right fit quickly and handle negotiations on your behalf. Bureaus typically earn a commission from the speaker fee, so their services are often free to event planners.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Common Mistakes to Avoid When Booking a Keynote Speaker
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            Avoid booking a speaker without watching them present live or on video. Do not skip the contract stage, even for smaller events. Failing to communicate event details clearly can lead to a presentation that misses the mark for your audience.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            How Far in Advance Should You Book a Keynote Speaker?
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "3rem" }}>
            For high-profile speakers, booking six to twelve months in advance is recommended. Less well-known speakers may be available with shorter notice, but earlier is always better to avoid scheduling conflicts.
          </p>

          {/* ── FAQ ── */}
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
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  marginBottom: "0.5rem",
                  color: "#1a1a1a",
                }}
              >
                How much does it cost to book a keynote speaker?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", margin: 0 }}>
                Fees range from a few hundred to over one hundred thousand dollars depending on the speaker.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  marginBottom: "0.5rem",
                  color: "#1a1a1a",
                }}
              >
                Can I book a keynote speaker directly without a bureau?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", margin: 0 }}>
                Yes, many speakers accept direct bookings through their personal websites or management teams.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  marginBottom: "0.5rem",
                  color: "#1a1a1a",
                }}
              >
                What should a keynote speaker contract include?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", margin: 0 }}>
                It should cover the fee, event date, location, presentation length, cancellation terms, and any technical or travel requirements.
              </p>
            </div>
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
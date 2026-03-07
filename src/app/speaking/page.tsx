import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "How to Book a Keynote Speaker: A Step-by-Step Guide",
  description:
    "Learn how to book a keynote speaker with our simple guide. Find, vet, and hire the right speaker for your event on time and on budget.",
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
            How to Book a Keynote Speaker
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
              lineHeight: 1.7,
              color: "#c8bfb0",
              maxWidth: "36rem",
            }}
          >
            Choosing the right keynote speaker can define the success of your entire event. This guide walks you through every step of the speaker booking process so you can find, vet, and hire the right person on time and on budget.
          </p>
        </div>
      </section>

      {/* ── HOW TO BOOK GUIDE ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-4xl mx-auto px-6">

          {/* Step 1 */}
          <div style={{ marginBottom: "4rem" }}>
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
              Define Your Event Goals and Audience
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "1rem" }}>
              Before you search for keynote speaker candidates, get clear on what you need the talk to accomplish. Ask yourself what outcome you want the audience to leave with. Is this event meant to inspire action, shift culture, teach a skill, or open a new conversation?
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "1rem" }}>
              Know your audience demographics. A room of senior executives has different expectations than a gathering of early-career professionals or a personal development community. The more specific you are about audience expectations, the easier it becomes to evaluate whether a speaker is the right fit.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035" }}>
              Write down your event purpose in one sentence. That sentence becomes your filter for every speaker you consider.
            </p>
          </div>

          {/* Step 2 */}
          <div style={{ marginBottom: "4rem" }}>
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
              Set Your Speaker Budget
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "1rem" }}>
              Keynote speaker fees vary widely depending on the speaker's profile, topic, and experience. Emerging speakers may charge between $2,500 and $10,000. Mid-tier speakers with strong track records often range from $10,000 to $40,000. Celebrity and top-tier speakers can command $50,000 or more per engagement.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "1rem" }}>
              Budget for more than just the speaking fee. Travel, hotel, ground transportation, and audio-visual requirements are common additional costs. Some speakers charge a flat all-in rate; others bill expenses separately. Clarify this upfront.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035" }}>
              If a speaker is slightly above your budget, it is worth asking. Many speakers will negotiate based on the cause, audience size, or the opportunity to reach a new market.
            </p>
          </div>

          {/* Step 3 */}
          <div style={{ marginBottom: "4rem" }}>
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
              Search for Keynote Speaker Candidates
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "1rem" }}>
              Finding a keynote speaker starts with knowing where to look. Here are the most reliable sources for discovering candidates:
            </p>
            <div className="speaking-bullets">
              {[
                "Speaker bureaus such as CAA Speakers, Washington Speakers Bureau, and National Speakers Association maintain curated rosters and can match you to speakers within your budget and topic area.",
                "LinkedIn is useful for searching by topic, industry, and audience type. Many speakers list their speaking services directly on their profiles.",
                "Referrals from colleagues and event planners who have booked speakers recently are often the most reliable source of honest, firsthand feedback.",
                "Conference directories and past event programs show you who has already spoken to audiences similar to yours.",
                "YouTube and podcast appearances let you hear the speaker in their own voice before any formal contact.",
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

          {/* Step 4 */}
          <div style={{ marginBottom: "4rem" }}>
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
              Evaluate and Shortlist Speakers
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "1rem" }}>
              Once you have a list of candidates, narrow it down using these criteria:
            </p>
            <div className="speaking-bullets">
              {[
                "Watch demo videos. A good demo reel is edited to highlight the speaker's best moments, but also look for full-length talk recordings to see how they hold a room over time.",
                "Read testimonials and case studies. Look for feedback from event organizers at similar events, not just audience members.",
                "Assess topic relevance. A speaker who is strong in general might not be the right fit if their content does not connect directly to your event theme.",
                "Consider audience fit. The best speaker for a tech startup audience may not be the best speaker for a healthcare leadership retreat.",
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
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035" }}>
              Aim to shortlist two or three speakers before making first contact. This gives you options if your first choice is unavailable or over budget.
            </p>
          </div>

          {/* Step 5 */}
          <div style={{ marginBottom: "4rem" }}>
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
              Reach Out and Request Availability
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "1rem" }}>
              Contact the speaker or their representative with a concise, professional inquiry. Include:
            </p>
            <div className="speaking-bullets">
              {[
                "Event name, date, and location",
                "Expected audience size and audience description",
                "Talk format and length (keynote, panel, workshop)",
                "Your budget range",
                "A brief description of the event and why this speaker is a good fit",
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
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035" }}>
              Speakers receive many inquiries. A clear, specific message that demonstrates you have done your research will get a faster and more favorable response.
            </p>
          </div>

          {/* Step 6 */}
          <div style={{ marginBottom: "4rem" }}>
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
              Review the Speaker Contract
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "1rem" }}>
              Every professional speaker engagement should be governed by a written contract. Review these key clauses carefully before signing:
            </p>
            <div className="speaking-bullets">
              {[
                "Cancellation policy: Understand what happens if either party cancels, and what refund or kill fee applies.",
                "Exclusivity: Some speakers will not appear at competing events within a certain time window. Confirm this does not conflict with your event calendar.",
                "Deliverables: The contract should specify the length of the talk, whether the speaker will attend a pre-event dinner or Q&A, and any other commitments.",
                "Payment terms: Know when the deposit is due, when the balance is due, and what payment methods are accepted.",
                "Recording rights: If you plan to record or livestream the keynote, confirm this is permitted and under what conditions.",
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

          {/* Step 7 */}
          <div style={{ marginBottom: "4rem" }}>
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
              Confirm Logistics and Prepare for the Event
            </h2>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035", marginBottom: "1rem" }}>
              Once the contract is signed, shift your focus to logistics. A well-prepared speaker delivers a better keynote. Help them do their best work by providing the following:
            </p>
            <div className="speaking-bullets">
              {[
                "A detailed run-of-show document with precise timing for their slot",
                "Audio-visual specifications including microphone type, clicker availability, screen dimensions, and internet requirements",
                "A pre-event call at least two to four weeks before the event to align on content, audience, and expectations",
                "Day-of coordination details such as arrival time, green room location, point of contact, and parking",
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
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035" }}>
              Speakers who feel informed and supported consistently deliver stronger performances. The logistics work you do in advance pays off on stage.
            </p>
          </div>

          {/* Conclusion / CTA */}
          <div
            style={{
              background: "#0E0E0E",
              color: "#F5F0E8",
              padding: "2.5rem",
              borderRadius: "2px",
            }}
          >
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "1rem" }}>
              Booking a keynote speaker is a process that rewards preparation. The earlier you start, the more options you have and the less pressure you face on budget and availability. Work through these steps in order, stay organized, and your event will be in good hands.
            </p>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#c8bfb0" }}>
              Ready to book your keynote speaker? Start by defining your event goals and setting a clear budget before reaching out to candidates.
            </p>
          </div>

        </div>
      </section>

      {/* ── WHAT HE BRINGS ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 0" }}>
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
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
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
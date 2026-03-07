import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Work With Justin Holland — One-on-One Coaching",
  description:
    "Justin Holland works with people who have done the therapy, the coaching, the retreats — and are still hitting the same ceiling. The work is in the seeing.",
};

const coachingFormFields = [
  { name: "name", label: "Your Name", type: "text" as const, placeholder: "Full name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  { name: "situation", label: "What are you facing?", type: "textarea" as const, placeholder: "Describe what you're experiencing — what feels stuck, what pattern keeps repeating, what the invisible wall looks like for you.", required: true },
  { name: "tried", label: "What have you already tried?", type: "textarea" as const, placeholder: "Therapy, coaching, courses, retreats — what have you invested in, and where has it fallen short?" },
  { name: "ready", label: "What shift are you most ready for?", type: "textarea" as const, placeholder: "If something genuinely changed, what would be different?" },
];

export default function WorkWithMe() {
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
            One-on-One Coaching
          </span>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
            }}
          >
            You don&apos;t need more work.
            <br />
            <em>You need to see the thing.</em>
          </h1>
        </div>
      </section>


      {/* ── THE PROBLEM ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="line-accent" />
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "2rem",
            }}
          >
            You know this feeling.
          </h2>

          <div
            style={{
              borderLeft: "3px solid #e8e2d8",
              paddingLeft: "2rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              "&ldquo;I&rsquo;ve done everything right. Why doesn&rsquo;t it feel right?&rdquo;",
              "&ldquo;I keep hitting the same ceiling. It&rsquo;s like there&rsquo;s something I can&rsquo;t see.&rdquo;",
              "&ldquo;I&rsquo;ve spent so much time and money on this. Why am I still in the same place?&rdquo;",
              "&ldquo;My life looks fine on paper. But I feel like I&rsquo;m performing it, not living it.&rdquo;",
            ].map((quote, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                  color: "#6b6055",
                  marginBottom: i < 3 ? "1rem" : 0,
                }}
                dangerouslySetInnerHTML={{ __html: quote }}
              />
            ))}
          </div>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            You are not stuck because you haven&apos;t worked hard enough. You are not stuck because
            you haven&apos;t found the right strategy. You are stuck because there is something you
            cannot see — a pattern running underneath everything that is quietly creating the outcomes
            you do not want.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            The pattern has nothing to do with intelligence or effort. It is invisible by definition.
            And it stays invisible until the right mirror appears.
          </p>
        </div>
      </section>

      {/* ── THE TRANSFORMATION ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="transform-grid"
          >
            <div>
              <span className="line-accent" />
              <h2
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  marginBottom: "1.25rem",
                }}
              >
                The breakthrough is in the seeing.
              </h2>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "1rem" }}>
                When a blind spot is genuinely seen — not intellectualized, not processed through
                more analysis, but actually seen — the hold it has changes. Often immediately.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#4a4035" }}>
                This is not a promise that life becomes painless. Challenge remains part of living.
                What changes is the unconscious loop — the pattern you have been running without
                knowing, that has been creating the outcomes you do not want.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { before: "Hitting the same ceiling", after: "The ceiling reveals itself as a pattern — not a wall" },
                { before: "Trying harder and getting less", after: "Aligned effort, fewer internal contradictions" },
                { before: "Performing your life from the outside", after: "Living from who you actually are" },
                { before: "Repeating the same pattern in new situations", after: "The pattern is seen — and cannot be un-seen" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    gap: "0.75rem",
                    alignItems: "center",
                    fontSize: "0.9375rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "#9a9080" }}>{item.before}</span>
                  <span style={{ color: "#C4813A", fontSize: "1.25rem" }}>&rarr;</span>
                  <span style={{ color: "#1A1A1A", fontWeight: 500 }}>{item.after}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IS THIS FOR YOU ── */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
            }}
            className="for-you-grid"
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  marginBottom: "1.5rem",
                }}
              >
                This work is for you if&hellip;
              </h2>
              {[
                "You have done the therapy, the coaching, the reading — and something is still missing",
                "You keep hitting the same wall in different situations",
                "You are ready to look honestly at what you have been blind to — not looking for validation, looking for truth",
                "You are done adding more things to do and ready to see the thing that is in the way",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ color: "#C4813A", fontSize: "1.25rem", lineHeight: 1, flexShrink: 0, marginTop: "0.15rem" }}>+</span>
                  <p style={{ color: "#c8bfb0", fontSize: "1rem", lineHeight: 1.65, margin: 0 }}>{point}</p>
                </div>
              ))}
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  marginBottom: "1.5rem",
                  color: "#9a9080",
                }}
              >
                This is not for you if&hellip;
              </h2>
              {[
                "You are looking for someone to validate the story you already have about why you are stuck",
                "You want a step-by-step system or accountability coaching",
                "You are not ready to look at yourself honestly",
                "You are seeking a dependency — someone to outsource your inner guidance to",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ color: "#4a4035", fontSize: "1.25rem", lineHeight: 1, flexShrink: 0, marginTop: "0.15rem" }}>—</span>
                  <p style={{ color: "#6b6055", fontSize: "1rem", lineHeight: 1.65, margin: 0 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 0" }}>
        <div className="max-w-4xl mx-auto px-6">
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
              The Process
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
              Not a curriculum. A path.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px", background: "#e8e2d8" }}>
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "An honest conversation about what is present — what has been tried, where the pattern shows up, what has remained invisible despite years of work.",
              },
              {
                step: "02",
                title: "The Clear Mirror",
                desc: "The work itself. Justin asks questions — the right questions, directed at the right place. The insight is yours. It arrives in you. He does not deliver it. He creates the conditions for you to see it.",
              },
              {
                step: "03",
                title: "Integration",
                desc: "How to live from the new awareness — not just understand it intellectually, but embody it. The shift is the beginning, not the end. What follows is living from it.",
              },
            ].map((step) => (
              <div
                key={step.step}
                style={{
                  background: "#ffffff",
                  padding: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "2rem",
                  alignItems: "start",
                }}
                className="process-row"
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontSize: "3rem",
                    color: "#e8e2d8",
                    lineHeight: 1,
                    fontWeight: 400,
                  }}
                >
                  {step.step}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      fontSize: "1.375rem",
                      fontWeight: 400,
                      marginBottom: "0.625rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#4a4035", margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "2rem 2.5rem",
              background: "#F5F0E8",
              borderLeft: "3px solid #C4813A",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.125rem",
                fontStyle: "italic",
                color: "#4a4035",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              One important note: Justin&apos;s explicit belief is that you should not need him
              indefinitely. The goal is for you to trust your own awareness — not to outsource it.
              The work ends when you can see clearly on your own.
            </p>
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
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
              Begin Here
            </h2>
            <p style={{ fontSize: "1rem", color: "#6b6055" }}>
              Tell Justin what you are facing. He reads every application personally and responds
              directly.
            </p>
          </div>
          <PlaceholderForm
            fields={coachingFormFields}
            submitLabel="Begin Here"
            successMessage="Application received. Justin reads every one personally and will be in touch."
          />
        </div>
      </section>

      <style>{`
        .transform-grid, .for-you-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 768px) {
          .transform-grid, .for-you-grid { grid-template-columns: 1fr !important; }
          .process-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
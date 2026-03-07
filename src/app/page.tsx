import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Justin Holland — Speaker & Coach | Blind Spots. Consciousness. Seeing Clearly.",
  description:
    "Justin Holland works with people who have done the work and are still hitting the same ceiling. The pattern is not the problem. The blind spot underneath it is.",
};

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: "#0E0E0E",
          color: "#F5F0E8",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Amber top line accent */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #C4813A 30%, #C4813A 70%, transparent)",
          }}
        />

        <div
          className="max-w-6xl mx-auto px-6 w-full"
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div className="hero-grid">
            {/* Text */}
            <div>
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
                Speaker &amp; Coach
              </span>

              <h1
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  marginBottom: "1.5rem",
                  fontWeight: 400,
                }}
              >
                What you cannot see
                <br />
                is running everything.
              </h1>

              <p
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
                  lineHeight: 1.7,
                  color: "#c8bfb0",
                  maxWidth: "38rem",
                  marginBottom: "2.5rem",
                }}
              >
                Justin Holland works with people who have done the work and are still hitting the
                same ceiling. The pattern is not the problem. The blind spot underneath it is.
                Once you see it, you can&apos;t unsee it.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/speaking" className="btn-primary">
                  Book Me to Speak
                </Link>
                <Link href="/work-with-me" className="btn-secondary">
                  Work With Me
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="hero-photo-wrapper">
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "-1.5rem",
                  bottom: "-1.5rem",
                  left: "1.5rem",
                  border: "1px solid #2e2e2e",
                  zIndex: 0,
                }}
              />
              <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
                <Image
                  src="/images/justin-hero.png"
                  alt="Justin Holland with mountain landscape in background"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                  sizes="(max-width: 768px) 0vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── CORE INSIGHT ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="two-col-wide">
            <div>
              <span className="line-accent" />
              <h2
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.25rem",
                  fontWeight: 400,
                }}
              >
                Core Benefits of Working with a Consciousness Coach
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "#4a4035",
                  marginBottom: "1rem",
                }}
              >
                People who work with a consciousness coach commonly report a shift in the
                relationship they have with recurring stress, conflict, and self-doubt. The benefits
                are not cosmetic. They tend to appear across multiple areas of life at the same time
                because the source of the change is awareness itself.
              </p>
              <ul
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.9,
                  color: "#4a4035",
                  paddingLeft: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                <li>Breaking patterns that have persisted despite years of self-work</li>
                <li>Greater clarity in decisions that once felt paralyzing</li>
                <li>Improved relationships through seeing your own reactive triggers</li>
                <li>Access to sustained motivation that does not depend on willpower</li>
                <li>Reduced anxiety as unconscious assumptions become visible and testable</li>
              </ul>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035" }}>
                The breakthrough most people are missing is not more effort. It is sufficient sight.
                When a blind spot is genuinely seen, the hold it has changes immediately. That is
                the moment most coaching points toward but rarely reaches.
              </p>
            </div>

            <div
              style={{
                background: "#0E0E0E",
                padding: "3rem 2.5rem",
                position: "relative",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: 0,
                  bottom: "2rem",
                  width: "3px",
                  background: "#C4813A",
                }}
              />
              <blockquote
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                  lineHeight: 1.4,
                  fontStyle: "italic",
                  color: "#F5F0E8",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;Once you see it, you can&apos;t unsee it. That&apos;s not a metaphor.
                That&apos;s how awareness works.&rdquo;
              </blockquote>
              <cite
                style={{
                  display: "block",
                  marginTop: "1.5rem",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#C4813A",
                  fontStyle: "normal",
                }}
              >
                Justin Holland
              </cite>
            </div>
          </div>
        </div>
      </section>


      {/* ── STORY HOOK ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
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
            The Origin
          </span>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.75rem",
              fontWeight: 400,
            }}
          >
            He went blind. A decade later, he finally saw.
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#4a4035",
              marginBottom: "1.25rem",
            }}
          >
            A beer bottle during a fight. Weeks later, legally blind. A genetic condition the
            trauma had likely triggered. Justin moved back home, learned to edit videos without
            sight, competed in bodybuilding, and kept running — through sales careers, through
            money made and spent, through everything that numbing offers.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#4a4035",
              marginBottom: "2.5rem",
            }}
          >
            Then in 2023, after a session inside a men&apos;s brotherhood, something happened that
            years of effort had not produced. He asked two questions most people never stop long
            enough to ask. The answer arrived — not from outside, but from the inside of the
            inside. That framework is what he brings to the stage and to one-on-one work.
          </p>
          <Link href="/about" className="btn-secondary-dark">
            Read the Full Story
          </Link>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              fontWeight: 400,
              color: "#F5F0E8",
            }}
          >
            What the work actually is
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#c8bfb0",
              marginBottom: "1rem",
            }}
          >
            Sessions are conversational and inquiry-driven. There are no worksheets to complete
            beforehand and no assignments to track between sessions, though awareness naturally
            begins to shift in the spaces between conversations.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#c8bfb0",
              marginBottom: "1rem",
            }}
          >
            A session typically begins with whatever is most alive for you right now. A challenge,
            a decision, a recurring frustration, or a felt sense that something is off. From there,
            the conversation moves toward the assumptions and perceptions underneath the surface
            issue, not to analyze them but to see them directly.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#c8bfb0",
            }}
          >
            Most people describe leaving a session with a sense of clarity that is difficult to
            explain but easy to feel. Things that felt heavy often feel lighter. Decisions that
            seemed complicated often become obvious. That shift is not manufactured. It is what
            happens when something unseen becomes visible.
          </p>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-6xl mx-auto px-6">
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
              How I Work
            </span>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                color: "#0E0E0E",
              }}
            >
              Two ways to work together
            </h2>
          </div>

          <div className="two-col-equal" style={{ gap: "2px", background: "#1e1e1e" }}>
            {/* Speaking */}
            <div style={{ background: "#0E0E0E", padding: "3rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "1px solid #C4813A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C4813A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  fontWeight: 400,
                  color: "#F5F0E8",
                }}
              >
                Speaking
              </h3>
              <p
                style={{
                  color: "#9a9080",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  fontSize: "1rem",
                }}
              >
                Keynotes that leave audiences with something they cannot un-see. Built for
                conferences, corporate events, and personal development gatherings where the usual
                speaker isn&apos;t enough.
              </p>
              <Link
                href="/speaking"
                style={{
                  color: "#C4813A",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Explore Speaking &rarr;
              </Link>
            </div>

            {/* Coaching */}
            <div style={{ background: "#0E0E0E", padding: "3rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "1px solid #C4813A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C4813A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  fontWeight: 400,
                  color: "#F5F0E8",
                }}
              >
                One-on-One Consciousness Coaching
              </h3>
              <p
                style={{
                  color: "#9a9080",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  fontSize: "1rem",
                }}
              >
                Private work for people who have done the therapy, the programs, and the self-work
                and are still hitting the same ceiling. The work is in the seeing, not in adding
                more to do.
              </p>
              <Link
                href="/work-with-me"
                style={{
                  color: "#C4813A",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Work With Justin &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── BEEPBALL CREDIBILITY ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="two-col-wide">
            {/* Photo */}
            <div style={{ position: "relative", minHeight: "380px" }}>
              <Image
                src="/images/justin-beepball-action.jpeg"
                alt="Justin Holland hitting at the 2025 Beepball World Series"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(14,14,14,0.8))",
                  padding: "1.5rem 1.25rem 1rem",
                }}
              >
                <p
                  style={{
                    color: "#F5F0E8",
                    fontSize: "0.8125rem",
                    letterSpacing: "0.04em",
                    margin: 0,
                  }}
                >
                  2025 Beepball World Series — Offense MVP
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="line-accent" />
              <h2
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.25rem",
                  fontWeight: 400,
                }}
              >
                He didn&apos;t just develop these ideas. He used them.
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "#4a4035",
                  marginBottom: "1rem",
                }}
              >
                Justin is legally blind and competes in Beepball, an adaptation of baseball designed
                for blind and visually impaired athletes. He has hit home runs and received Offense
                MVP honors at the 2025 Thunder Tournament.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "#4a4035",
                  marginBottom: "2rem",
                }}
              >
                The same alignment. The same clearing of what blocks you. The same access to what
                athletes call flow state, applied to a sport where you cannot see the ball.
                This is not metaphor. This is the philosophy in action.
              </p>
              <Link href="/about" className="btn-secondary-dark">
                Read His Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
              fontWeight: 400,
              color: "#F5F0E8",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "#F5F0E8",
                  marginBottom: "0.75rem",
                }}
              >
                What does a consciousness coach actually do?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#c8bfb0" }}>
                A consciousness coach works with you to identify and illuminate the unseen
                perceptions, assumptions, and patterns that shape your behavior and results. The
                work is not about adding new strategies. It is about seeing what was already there
                but invisible. When a blind spot becomes visible, the pattern it was sustaining
                begins to lose its grip.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "#F5F0E8",
                  marginBottom: "0.75rem",
                }}
              >
                Is consciousness coaching the same as mindfulness coaching?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#c8bfb0" }}>
                They are related but not identical. Mindfulness coaching often focuses on
                cultivating present-moment awareness through practices like meditation and breathwork.
                Consciousness coaching is concerned with the structure of awareness itself: how you
                see, what you filter out, and what that means for the life you are creating. Mindfulness
                practices can support consciousness work, but the coaching itself is primarily
                conversational and inquiry-based.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "#F5F0E8",
                  marginBottom: "0.75rem",
                }}
              >
                How long does it take to see results from consciousness coaching?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#c8bfb0" }}>
                Many people notice a meaningful shift within the first one or two sessions. That
                said, the depth and durability of the change depends on the nature of the patterns
                being explored and the readiness of the individual to look honestly at what is
                there. Consciousness coaching is not a quick fix. It is a fundamental reorientation
                in how you perceive yourself and your circumstances.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "#F5F0E8",
                  marginBottom: "0.75rem",
                }}
              >
                Do I need to have a specific problem to work on?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#c8bfb0" }}>
                No. Some people come with a specific recurring problem they want to resolve. Others
                come with a general sense that something is off or that they are operating below
                their potential. Both are valid starting points. The coaching begins wherever you
                are, and the conversation reveals what is most relevant from there.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "#F5F0E8",
                  marginBottom: "0.75rem",
                }}
              >
                How is this different from therapy?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#c8bfb0" }}>
                Therapy is a licensed clinical practice designed to treat mental health conditions
                and process psychological wounds. Consciousness coaching is not therapy and does not
                diagnose or treat any condition. It is most effective for people who are
                psychologically stable and want to work on the quality of their perception and the
                patterns it creates. If you are in crisis or dealing with a clinical condition,
                please seek a qualified mental health professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
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
            Get Started
          </span>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              fontWeight: 400,
              color: "#0E0E0E",
            }}
          >
            The work is in the seeing.
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#4a4035",
              marginBottom: "2.5rem",
            }}
          >
            If you have done the therapy, the coaching, the courses — and something is still
            missing — the pattern you keep hitting is not about effort. It is about a blind spot
            that has not been seen yet. That is the work.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/work-with-me" className="btn-primary">
              Work With Justin
            </Link>
            <Link href="/speaking" className="btn-secondary-dark">
              Book Justin to Speak
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does a consciousness coach actually do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A consciousness coach works with you to identify and illuminate the unseen perceptions, assumptions, and patterns that shape your behavior and results. The work is not about adding new strategies. It is about seeing what was already there but invisible. When a blind spot becomes visible, the pattern it was sustaining begins to lose its grip."
                }
              },
              {
                "@type": "Question",
                "name": "Is consciousness coaching the same as mindfulness coaching?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "They are related but not identical. Mindfulness coaching often focuses on cultivating present-moment awareness through practices like meditation and breathwork. Consciousness coaching is concerned with the structure of awareness itself: how you see, what you filter out, and what that means for the life you are creating. Mindfulness practices can support consciousness work, but the coaching itself is primarily conversational and inquiry-based."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to see results from consciousness coaching?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many people notice a meaningful shift within the first one or two sessions. That said, the depth and durability of the change depends on the nature of the patterns being explored and the readiness of the individual to look honestly at what is there. Consciousness coaching is not a quick fix. It is a fundamental reorientation in how you perceive yourself and your circumstances."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to have a specific problem to work on?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Some people come with a specific recurring problem they want to resolve. Others come with a general sense that something is off or that they are operating below their potential. Both are valid starting points. The coaching begins wherever you are, and the conversation reveals what is most relevant from there."
                }
              },
              {
                "@type": "Question",
                "name": "How is this different from therapy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Therapy is a licensed clinical practice designed to treat mental health conditions and process psychological wounds. Consciousness coaching is not therapy and does not diagnose or treat any condition. It is most effective for people who are psychologically stable and want to work on the quality of their perception and the patterns it creates. If you are in crisis or dealing with a clinical condition, please seek a qualified mental health professional."
                }
              }
            ]
          })
        }}
      />

      {/* Responsive grid helpers */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-photo-wrapper {
          position: relative;
          aspect-ratio: 4/5;
          max-height: 600px;
        }
        .two-col-wide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .two-col-equal {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-photo-wrapper { display: none; }
          .two-col-wide { grid-template-columns: 1fr; gap: 2.5rem; }
          .two-col-equal { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
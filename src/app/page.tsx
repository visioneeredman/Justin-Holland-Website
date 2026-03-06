import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Justin Holland — Human Potential Speaker & Coach",
  description:
    "Justin Holland helps people recognize the blind spots quietly creating the life they don't want. Speaker. Coach. Once you see it, you can't unsee it.",
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
                You&apos;re not broken.
                <br />
                <em>You&apos;re blind.</em>
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
                Justin Holland helps people recognize the blind spots that have been quietly
                creating the life they don&apos;t want. Once you see it, you can&apos;t unsee it.
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
                The breakthrough most people are missing isn&apos;t more work away.
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "#4a4035",
                  marginBottom: "1rem",
                }}
              >
                Most people believe the pattern will shift if they try harder, dig deeper, or find
                the right program. Justin&apos;s position is different. The pattern persists not
                because of insufficient effort — but because of insufficient sight.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035" }}>
                When a blind spot is genuinely seen — not processed, not analyzed, but truly seen —
                the hold it has changes immediately. That is the moment most coaching points toward
                but rarely reaches.
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
                — Justin Holland
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY HOOK ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 0" }}>
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
            He lost his sight. And for the first time, he saw clearly.
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#4a4035",
              marginBottom: "1.25rem",
            }}
          >
            A beer bottle shattered across Justin Holland&apos;s face at twenty. The doctors told
            him he might never see again. In the stillness that followed — stripped of every
            distraction — he asked two questions he had never had the quiet to ask before.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#4a4035",
              marginBottom: "2.5rem",
            }}
          >
            What he found in that moment became the framework he has spent years testing, living,
            and refining. In sport. In relationships. In the work he does with others.
          </p>
          <Link href="/about" className="btn-secondary-dark">
            Read the Full Story
          </Link>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section style={{ backgroundColor: "#0E0E0E", color: "#F5F0E8", padding: "6rem 0" }}>
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
                }}
              >
                One-on-One Coaching
              </h3>
              <p
                style={{
                  color: "#9a9080",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  fontSize: "1rem",
                }}
              >
                Private work for people who have done the therapy, the programs, and the self-work —
                and are still hitting the same ceiling. The work is in the seeing, not in adding more
                to do.
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
                Justin is legally blind and competes in Beepball — an adaptation of baseball designed
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
                athletes call flow state — applied to a sport where you cannot see the ball.
                This is not metaphor. This is the philosophy in action.
              </p>
              <Link href="/about" className="btn-secondary-dark">
                Read His Story
              </Link>
            </div>
          </div>
        </div>
      </section>

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

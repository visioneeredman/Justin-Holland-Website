import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Justin Holland — Blind Spot Coach & Speaker",
  description:
    "You have done the work. The therapy. The coaching. The manifestation. And the pattern is still there. Justin Holland helps people see the blind spot that every other approach has been working around.",
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
                  src="/images/justin-hero.jpg"
                  alt="Justin Holland smiling outdoors with autumn mountains in the background"
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
                Why nothing has worked long-term.
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "#4a4035",
                  marginBottom: "1rem",
                }}
              >
                You have done the work. The therapy, the coaching, the programs. And the pattern
                is still there. That is not a failure of effort. The therapy was not wrong. The
                coach was not bad. Every approach that has not held has one thing in common.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "#4a4035",
                  marginBottom: "1rem",
                }}
              >
                It worked above the blind spot. Affirmations, visualization, mindset shifts,
                goal-setting — all of it operates at the conscious level while the subconscious
                programming underneath keeps running the same pattern it always has.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#4a4035" }}>
                You cannot affirm your way past a blind spot you cannot see. You cannot create
                differently from a pattern you are unconsciously committed to. And every year it
                runs unaddressed is another year of the same outcomes — in relationships, in
                business, in the life you are trying to build. The work has to happen at the level
                of the blind spot itself. That is what is different here.
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
            A beer bottle during a fight. Weeks later, blind. A genetic condition the
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
            Then in 2023, inside a men&apos;s brotherhood, he sat with two questions he had never
            stopped long enough to actually face. Through his own honest reckoning — not someone
            else&apos;s answer, his own — he saw it. The pattern. The subconscious programming.
            The thing that had been running everything. Once he saw it, he could not unsee it.
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
            This is not coaching in the traditional sense. There is no curriculum, no homework,
            no accountability system. It is a conversation — specifically, the kind of conversation
            that points directly at what you cannot see about what you are creating.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#c8bfb0",
              marginBottom: "1rem",
            }}
          >
            Justin asks the questions that reveal the blind spot. Not to analyze it. Not to
            process it. To see it. The insight that arrives is yours — he does not deliver it.
            He does not give you the answer. He asks the question that makes your own answer
            impossible to ignore.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#c8bfb0",
            }}
          >
            When a blind spot is genuinely seen — not intellectually understood, not talked about,
            but actually seen — its hold on behavior changes. Often immediately. That is the shift
            most personal development points toward but rarely reaches. Once you see it,
            you cannot unsee it.
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
              How Justin Works
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
                Justin is blind and competes in Beepball, an adaptation of baseball designed
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
                He cannot see the ball. He hears a beep, tracks the sound, and swings. He hit
                home runs and won Offense MVP at the 2025 Thunder Tournament. The same principle:
                clear the subconscious counterintention — the inner program running against what
                you want — and what you are actually capable of shows up. He does not just talk
                about this. He competes with it.
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
                I&apos;ve done the therapy, the coaching, the manifestation work. Why hasn&apos;t anything held?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#c8bfb0" }}>
                Because every approach you have tried has been working above the blind spot. Affirmations,
                visualization, mindset tools, goal-setting — all of it operates at the conscious
                level while the subconscious programming underneath keeps running the same pattern.
                You are not doing it wrong. The root has not been addressed yet. That is not a
                failure. It is a blind spot. And blind spots do not respond to effort. They respond
                to sight.
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
                What exactly is a blind spot?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#c8bfb0" }}>
                A blind spot is a subconscious program running in direct opposition to what you
                consciously want. You say you want deep connection but somewhere underneath believe
                that being truly known is dangerous. You say you want financial freedom but
                somewhere underneath believe success will cost you something you value more. The
                program is invisible — which is exactly why it keeps producing outcomes you say
                you do not want. You are creating from it without knowing it. When it is seen, the
                hold it has changes.
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
                How quickly do people notice a shift?
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "#c8bfb0" }}>
                Many people describe something moving in the first conversation. The insight itself
                — when it arrives — is not gradual. Seeing is not a process. It happens in a
                moment. What follows is integration. The depth of that integration depends on the
                nature of the pattern and the honesty with which you are willing to look. But the
                shift most people have been trying to create for years often arrives faster than
                they expected, because they were never missing effort. They were missing sight.
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
                No. Some people come with a specific recurring pattern they want to understand.
                Others come with a general sense that something is off — that the life they are
                living and the life they know is possible are not the same. Both are valid starting
                points. The work begins wherever you are, and the conversation reveals what is most
                relevant from there.
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
                and process psychological wounds. Justin&apos;s work is not therapy and is not a
                substitute for it. The distinction in approach: therapy often asks why you feel the
                way you feel. This work asks what you cannot currently see about what you are
                creating. Both have real value. They address different layers. If you are in crisis
                or dealing with a clinical condition, please seek a qualified mental health
                professional first.
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
            that has not been seen yet. The question is not whether that pattern will keep running.
            Without the sight, it will. The question is how long.
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
                "name": "I've done therapy, coaching, and manifestation work. Why hasn't anything held long-term?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Because every approach you have tried has been working above the blind spot. Affirmations, visualization, mindset tools, goal-setting — all of it operates at the conscious level while the subconscious programming underneath keeps running the same pattern. You are not doing it wrong. The root has not been addressed yet. Blind spots do not respond to effort. They respond to sight."
                }
              },
              {
                "@type": "Question",
                "name": "What exactly is a blind spot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A blind spot is a subconscious program running in direct opposition to what you consciously want. You say you want connection but somewhere underneath believe being truly known is dangerous. You say you want freedom but somewhere underneath believe success will cost you something more important. The program is invisible — which is exactly why it keeps producing outcomes you say you do not want. When it is seen, the hold it has changes."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly do people notice a shift?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many people describe something moving in the first conversation. The insight itself — when it arrives — is not gradual. Seeing is not a process. It happens in a moment. The shift most people have been trying to create for years often arrives faster than expected, because they were never missing effort. They were missing sight."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to have a specific problem to work on?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Some people come with a specific recurring pattern. Others come with a general sense that something is off — that the life they are living and the life they know is possible are not the same. Both are valid. The work begins wherever you are, and the conversation reveals what is most relevant from there."
                }
              },
              {
                "@type": "Question",
                "name": "How is this different from therapy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Therapy is a licensed clinical practice designed to treat mental health conditions and process psychological wounds. Justin's work is not therapy and is not a substitute for it. Therapy often asks why you feel the way you feel. This work asks what you cannot currently see about what you are creating. Both have real value. They address different layers."
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

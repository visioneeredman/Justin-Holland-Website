import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Justin Holland — Blind Spots, Consciousness, and Seeing Clearly",
  description:
    "Justin Holland went blind at twenty. A decade later, a genuine awakening changed everything he understood about why people stay stuck. This is the story behind the work.",
};

export default function About() {
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
            The Story
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
            He lost his sight.
            <br />
            <em>And for the first time, he saw clearly.</em>
          </h1>
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div
            style={{
              borderLeft: "3px solid #C4813A",
              paddingLeft: "2rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                lineHeight: 1.45,
                fontStyle: "italic",
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              &ldquo;I wasn&apos;t my body. I wasn&apos;t my thoughts. I wasn&apos;t my emotions.
              I was the awareness behind it all. I was the one watching. And in that moment, I saw
              for the first time.&rdquo;
            </p>
          </div>

          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
              marginBottom: "1.5rem",
            }}
          >
            Justin Holland was twenty years old when a beer bottle was smashed across his face
            during a fight outside a girlfriend&apos;s apartment. He moved back home. Weeks
            later he was blind. Months after that came the diagnosis: a genetic condition
            the head trauma had likely triggered.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
              marginBottom: "1.5rem",
            }}
          >
            He did not have the awakening then. He was still running.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
              marginBottom: "1.5rem",
            }}
          >
            What followed was years of outrunning everything he had not dealt with. A YouTube
            channel as a blind bodybuilder. Bodybuilding competitions. Sales careers. Businesses
            started and closed. Money made and spent. A marriage that had become two people
            sharing the same space and nothing deeper. Alcohol as a way to manage the gap between
            the life he was living and the one he could feel himself capable of.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
              marginBottom: "1.5rem",
            }}
          >
            The turning point was not going blind. It was July 4th, 2022 — blackout drunk, raging,
            coming home and frightening his wife. The next morning she told him she could not keep
            doing this. That night he found a livestream from a man who had been sober for three
            years and described a drinking pattern that sounded exactly like his. Justin quit that
            day.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
              marginBottom: "1.5rem",
            }}
          >
            What followed was an obsession — with how the mind actually works, with patterns,
            beliefs, and subconscious programming. He dove into it with a seriousness he had not
            brought to anything before.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
              marginBottom: "1.5rem",
            }}
          >
            Then in 2023, inside a men&apos;s brotherhood, he sat with two questions he had
            been moving past his entire adult life.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
              marginBottom: "1.5rem",
            }}
          >
            <em>Who am I? What am I?</em>
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
            }}
          >
            He stopped moving long enough to actually answer them. Not to think about them —
            to answer them. Through his own honest reckoning, he saw it: the pattern he had been
            running, what he had been creating, and exactly why. Not as an idea. Not as something
            he understood. He saw it. And once he saw it, he could not unsee it.
          </p>
        </div>
      </section>

      {/* ── WHAT HE BEGAN TO SEE ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="line-accent" />
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            The pattern most people are blind to
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            What emerged from that awakening was not a philosophy Justin read about. It was one he
            lived into — and one he could not stop seeing once he saw it.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Most people are walking through their lives creating outcomes they do not want — and
            they are blind to the reason why. Not because they are broken. Not because they have
            not worked hard enough. Because they cannot see the pattern. The subconscious
            programming running underneath. The belief they carry that contradicts everything
            they say they want.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            We are all creators of our reality. Not in the positive-thinking sense, not in the
            ask-the-universe sense. In the sense that our subconscious programming shapes every
            decision, every pattern, every result. Until you can see it, you create
            unconsciously. When you can see it, you can create deliberately.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            That is what a blind spot actually is. Not a character flaw. Not a trauma label.
            A program running underneath the conscious level — invisible by nature, consequential
            by design. You say you want one thing and keep creating the opposite, and you cannot
            understand why. Not because something is wrong with you. Because you cannot see
            what you cannot see.
          </p>
          <div
            style={{
              borderLeft: "3px solid #C4813A",
              paddingLeft: "2rem",
              margin: "2.5rem 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Once you see it, you can&apos;t unsee it. That is not a tagline.
              That is the mechanism.
            </p>
          </div>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            When a blind spot is genuinely seen — not intellectually processed, not analyzed
            further, but actually seen — the hold it has changes. Often immediately. The pattern
            that persisted for years reveals itself, and it cannot go back to being invisible.
            That is not magic. That is how awareness works.
          </p>
        </div>
      </section>

      {/* ── THREE LEVELS FRAMEWORK ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "6rem 0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="line-accent" style={{ margin: "0 auto 1.5rem" }} />
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                marginBottom: "1rem",
              }}
            >
              Three levels of blindness
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#6b6055", maxWidth: "32rem", margin: "0 auto" }}>
              Most approaches to personal development work at one level. Justin&apos;s framework
              maps all three — and where most people get stuck between them.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              background: "#d4ccc0",
            }}
            className="three-col"
          >
            {[
              {
                number: "01",
                title: "Physical",
                description:
                  "Identifying as only the body. Seeking external solutions for internal problems. Believing that more — money, status, achievement — will finally create the feeling of enoughness. The person working on the outside because they cannot see the inside.",
              },
              {
                number: "02",
                title: "Internal",
                description:
                  "Understanding that the inner world matters but still identifying with thoughts and emotions as if they are you. Working at the level of affirmations without addressing the deeper subconscious programming generating the thoughts. The most common place people stall.",
              },
              {
                number: "03",
                title: "Spiritual",
                description:
                  "Understanding consciousness intellectually but using that understanding to bypass actual human experience. Transcending emotion rather than integrating it. The goal is not an enlightened master on a mountain who never gets angry. That is a different kind of blindness.",
              },
            ].map((level) => (
              <div
                key={level.number}
                style={{ background: "#ffffff", padding: "2.5rem 2rem" }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontSize: "2.5rem",
                    color: "#d4ccc0",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                    fontWeight: 400,
                  }}
                >
                  {level.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                    fontWeight: 400,
                  }}
                >
                  {level.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "#6b6055" }}>
                  {level.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              background: "#0E0E0E",
              padding: "2.5rem",
              borderLeft: "3px solid #C4813A",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                fontStyle: "italic",
                color: "#F5F0E8",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Justin is not outside this himself. He still gets angry. He still makes mistakes.
              He still has blind spots. The work is not about rising above the human experience —
              it is about not being unconsciously run by it. There is a specific difference between
              reacting from a program you cannot see and making a choice you actually made. That
              difference is what this work is about.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT CHANGES ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="line-accent" />
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            What changes when the blind spot is cleared
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            When a specific blind spot clears, specific things stop happening. The relationship
            that has ended the same way three times in a row starts going differently. The
            financial ceiling you keep hitting regardless of how much you earn starts moving. The
            decision you have been circling for six months becomes obvious. These are the
            fingerprints of a subconscious program — running your behavior beneath your awareness,
            producing the results you kept saying you did not want.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            This is what reaching your full potential actually means. Not working harder. When
            your conscious goal and your subconscious belief about whether you deserve it — whether
            you can handle it, whether you are allowed to have it — stop fighting each other, the
            energy you have been burning on that internal war becomes available for something else.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            This is not a promise that life becomes painless. Challenge is part of being alive.
            What changes is the unconscious loop — creating the same outcomes repeatedly without
            being able to see the pattern underneath.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            Justin still encounters his own blind spots. Still has his own breakthroughs. He is
            not claiming to have arrived somewhere others have not. This is ongoing. That is the
            point — we are continuously evolving, and it is nearly impossible to see our own
            blind spots alone. As Justin puts it: it is like trying to see the label when you
            are inside the bottle.
          </p>
        </div>
      </section>

      {/* ── BEEPBALL ── */}
      <section style={{ backgroundColor: "#0E0E0E", padding: "6rem 0", color: "#F5F0E8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="about-beep-grid">
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C4813A",
                  marginBottom: "1.25rem",
                }}
              >
                Proof of Concept
              </span>
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
                He didn&apos;t theorize his way into these ideas.
              </h2>
              <p style={{ color: "#c8bfb0", lineHeight: 1.75, marginBottom: "1rem", fontSize: "1.0625rem" }}>
                Justin is blind and competes in Beepball — an adaptation of baseball for
                blind and visually impaired athletes. The ball beeps. He cannot see it. He tracks
                the sound and swings. He has hit home runs and won Offense MVP at the 2025 Thunder
                Tournament and competed at the Beepball World Series.
              </p>
              <p style={{ color: "#c8bfb0", lineHeight: 1.75, fontSize: "1.0625rem" }}>
                He does not just teach this principle. He competes with it. Clear the subconscious
                counterintention — the inner program running against what you want — and what you
                are actually capable of shows up. He did it in bodybuilding. He does it on a
                baseball field without sight. It is the same work.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "3/4" }}>
                <Image
                  src="/images/justin-beepball-action.jpeg"
                  alt="Justin Holland batting at the 2025 Beepball World Series"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div style={{ position: "relative", aspectRatio: "3/4" }}>
                <Image
                  src="/images/justin-beepball-mvp.jpeg"
                  alt="Justin Holland receiving Offense MVP award at the Thunder 2025 Tournament"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
              marginBottom: "2.5rem",
            }}
          >
            Questions worth asking
          </h2>

          {[
            {
              question: "What exactly is a blind spot?",
              answer:
                "A blind spot is a piece of subconscious programming that contradicts your stated conscious intention. You say you want one thing — financial success, a connected relationship, a life that feels real — and keep creating the opposite. Not because you are weak, but because the program running underneath is invisible to you. By definition, you cannot see it from where you are standing. That is what makes it a blind spot.",
            },
            {
              question: "How is this different from therapy or conventional coaching?",
              answer:
                "Therapy often helps you understand your past. Coaching often helps you build new strategies or habits. Justin's work is neither of those. It is about seeing — identifying the specific subconscious pattern that is creating the outcome you do not want, and seeing it clearly enough that it cannot go back to being invisible. That is different from analyzing it, processing it, or building new behaviors on top of it.",
            },
            {
              question: "What does 'once you see it, you can't unsee it' actually mean?",
              answer:
                "It means the breakthrough is in the seeing, not the analysis. You can understand for years that you have a fear of success and still be running the pattern. The understanding is not the sight. When the sight happens — when you genuinely see the thing rather than think about it — the shift is often immediate. That is how awareness works. You cannot go back to not seeing something you have actually seen.",
            },
            {
              question: "Is Justin saying that all suffering is self-created?",
              answer:
                "No. There are real forces outside our control. There are things that happened to us that we did not choose. Justin is not saying your trauma was your fault, or that positive thinking creates outcomes. He is addressing the slice of our experience that we do have creative influence over — which is larger than most people realize — and specifically the part where we are running the same painful patterns unconsciously and cannot understand why.",
            },
            {
              question: "Who is Justin's work for?",
              answer:
                "People who have done the work — therapy, coaching, books, retreats — and are still hitting the same ceiling. People who have a quiet, persistent sense that something is off and cannot name what it is. People who are ready to look honestly at what they have been blind to rather than add another technique, framework, or strategy on top of the pattern that keeps producing the same result.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #e8e2d9",
                paddingBottom: "1.75rem",
                marginBottom: "1.75rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.1875rem",
                  lineHeight: 1.35,
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                  color: "#1A1A1A",
                }}
              >
                {faq.question}
              </h3>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#3a3028", margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1.25rem",
            }}
          >
            The work is in the seeing.
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#6b6055",
              marginBottom: "2.5rem",
              maxWidth: "30rem",
              margin: "0 auto 2.5rem",
            }}
          >
            Whether Justin brings this to your stage or works with you directly, the result is
            the same — you leave with something you cannot un-see.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/speaking" className="btn-primary">
              Book Justin to Speak
            </Link>
            <Link href="/work-with-me" className="btn-secondary-dark">
              Work With Justin
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .about-beep-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .three-col {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        @media (max-width: 768px) {
          .about-beep-grid { grid-template-columns: 1fr; }
          .three-col { grid-template-columns: 1fr !important; }
        }
        .line-accent { display: block; }
      `}</style>
    </>
  );
}

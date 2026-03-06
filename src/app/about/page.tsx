import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Justin Holland — The Story Behind the Framework",
  description:
    "Justin Holland went blind at twenty. What he discovered in that stillness became a framework he has spent years testing, living, and refining. Read the full story.",
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
            Justin Holland was twenty years old when a beer bottle shattered across his face. The
            doctors told him he might not see again. What followed was not the story most people
            expect.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
              marginBottom: "1.5rem",
            }}
          >
            There was no rage. No collapse. In the stillness of the hospital — stripped of every
            distraction, every performance, every familiar shape of his life — something became
            quiet. And into that quiet, he asked two questions he had never had the silence to ask
            before. Simple ones. The ones most people are too busy to reach.
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
              marginBottom: "1.5rem",
            }}
          >
            The answer did not arrive as a thought. It arrived as a recognition. He was not the
            body in the bed. He was not the fear the room held. He was the one aware of all of it
            — the steady presence behind every experience, the part that could not be shattered by
            a bottle or dimmed by a diagnosis.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
              marginBottom: "1.5rem",
            }}
          >
            He calls going blind his radioactive spider bite. The thing that looked like destruction
            and turned out to be the beginning of something else entirely.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#3a3028",
            }}
          >
            What he found in that room became the framework he has spent years testing — in sport,
            in relationships, in the quiet work of sitting with someone and helping them see the thing
            they have been blind to. The same principle every time. The same result.
          </p>
        </div>
      </section>

      {/* ── THREE LEVELS FRAMEWORK ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
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
              The Three Levels of Blindness
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#6b6055", maxWidth: "32rem", margin: "0 auto" }}>
              Most approaches to personal development work at one level. Justin&apos;s work
              addresses all three — and the integration between them.
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
                  "Identifying as only the body. Seeking external solutions for internal problems. Believing that more — money, status, achievement — will finally create the feeling of enoughness.",
              },
              {
                number: "02",
                title: "Internal",
                description:
                  "Working at the level of thoughts and affirmations without addressing the subconscious structure generating them. Changing the symptom without finding the source.",
              },
              {
                number: "03",
                title: "Spiritual",
                description:
                  "Understanding consciousness intellectually while bypassing actual human experience. Transcending emotion rather than integrating it. Wisdom without the ground under it.",
              },
            ].map((level) => (
              <div
                key={level.number}
                style={{ background: "#F5F0E8", padding: "2.5rem 2rem" }}
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
              Justin works in the integration between all three — grounded enough to live in the
              human experience, aware enough not to be unconsciously run by it. His position is not
              transcendence. It is presence.
            </p>
          </div>
        </div>
      </section>

      {/* ── ZERO STATE ── */}
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
              marginBottom: "1.5rem",
            }}
          >
            The Zero State
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Athletes call it flow state. Musicians call it being in the pocket. Justin calls it zero.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Zero is not emptiness. It is alignment — when intention, belief, emotion, and action are
            no longer fighting each other. At zero, what needs to happen moves through you. You are
            not pushing. You are not forcing. There is nothing in the way.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            Zero is not achieved by trying harder. It is accessed by releasing what is in the way —
            specifically, the blind spots, the counterintentions, the old programs running underneath
            every conscious effort. The clearing is the work. The zero state is what is already
            present when the clearing happens.
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
                Justin is legally blind and competes in Beepball — an adaptation of baseball for
                blind and visually impaired athletes. He has hit home runs and received Offense MVP
                honors at the 2025 Thunder Tournament and competed at the Beepball World Series.
              </p>
              <p style={{ color: "#c8bfb0", lineHeight: 1.75, fontSize: "1.0625rem" }}>
                The same alignment. The same clearing of counterintention. The same access to zero —
                applied to a sport played without sight. Not as a metaphor for his philosophy. As
                a direct expression of it.
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
            The question is what you do with what you now see.
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
            Whether you bring Justin to your stage or work with him directly, the result is
            the same — you leave with something you cannot un-see.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/speaking" className="btn-primary">
              Book Me to Speak
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

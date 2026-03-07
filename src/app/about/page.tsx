import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mindset Coach: Transform Your Thinking and Unlock Your Potential",
  description:
    "Work with a mindset coach to break through limiting beliefs, build confidence, and achieve your goals. Discover how mindset coaching can change your life.",
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

      {/* ── WHAT IS A MINDSET COACH ── */}
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
            What Is a Mindset Coach?
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            A mindset coach is a trained guide who helps you identify the thoughts, beliefs, and
            patterns that quietly limit your potential. Unlike traditional advice-giving, mindset
            coaching focuses on shifting the way you think so that real, lasting change becomes
            possible in every area of your life.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Whether you are a professional chasing a promotion, an entrepreneur building something
            from nothing, an athlete pushing past performance plateaus, or someone navigating a
            personal setback, a mindset coach works with you to clear what is in the way and build
            something stronger in its place.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "2rem" }}>
            Mindset coaching is one of the most practical investments you can make. The skills you
            build carry forward into every decision, relationship, and challenge you face.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            The Difference Between a Mindset Coach and a Therapist
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Therapy and mindset coaching are complementary but different. Therapists diagnose and
            treat mental health conditions, often working through past trauma. A mindset coach
            focuses on your current thinking and the goals you want to reach going forward. Coaches
            work alongside therapists when needed, but the role is distinct.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            If you are mentally healthy and ready to move forward with greater clarity and
            confidence, a mindset coach is likely the right fit for where you are right now.
          </p>
        </div>
      </section>

      {/* ── HOW MINDSET COACHING WORKS ── */}
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
            How Mindset Coaching Works
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Mindset coaching sessions are structured conversations with purpose. Your coach listens
            carefully, asks precise questions, and guides you to see patterns you could not notice
            on your own. The process is collaborative and focused on action.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Core Techniques Used in Mindset Coaching
          </h3>
          <ul
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "#3a3028",
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Belief mapping:</strong> Uncovering the subconscious assumptions that shape
              your behavior without your awareness.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Reframing:</strong> Replacing unhelpful interpretations with ones that open
              up possibility instead of closing it down.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Visualization and anchoring:</strong> Building a clear mental picture of
              your goals and connecting it to feelings of certainty and readiness.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Accountability structures:</strong> Creating systems between sessions so
              that insights translate into consistent action.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Pattern interruption:</strong> Breaking habitual responses so that new,
              more effective behaviors can take root.
            </li>
          </ul>

          <h3
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Setting Goals With Your Mindset Coach
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Goal setting in mindset coaching goes deeper than writing down what you want. Your coach
            helps you connect your goals to your core values, examine whether your current beliefs
            support those goals, and identify what might be silently working against your progress.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            When your intentions and your inner world are aligned, momentum builds naturally. You
            stop pushing uphill and start moving forward with clarity.
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
              Benefits of Working With a Mindset Coach
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#6b6055", maxWidth: "32rem", margin: "0 auto" }}>
              Most approaches to personal development work at one level. Justin&apos;s mindset
              coaching addresses all three — and the integration between them.
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

      {/* ── WHO CAN BENEFIT ── */}
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
            Who Can Benefit From Mindset Coaching?
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Mindset coaching serves a wide range of people. You do not need to be in crisis to
            benefit. In fact, many of the most impactful results come when high achievers decide
            to remove the hidden friction between where they are and where they want to be.
          </p>
          <ul
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "#3a3028",
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Professionals seeking career growth</strong> who feel stuck despite strong
              skills and a solid track record.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Entrepreneurs building their businesses</strong> who wrestle with fear of
              failure, imposter syndrome, or inconsistent confidence.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Athletes looking to improve performance</strong> who know their mental game
              is the last untrained edge.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Individuals overcoming personal setbacks</strong> who are ready to stop
              replaying the past and start building something new.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Students preparing for major life transitions</strong> who want to enter the
              next chapter with clarity and self-belief.
            </li>
          </ul>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            If you recognize yourself in any of these, a mindset coach can help you close the gap
            between your potential and your results.
          </p>
        </div>
      </section>

      {/* ── ZERO STATE ── */}
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
            What to Expect in Your First Session
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Your first mindset coaching session is a discovery call and an orientation. You will
            share what is not working, what you want instead, and what you have already tried. Your
            coach will listen without judgment and begin mapping the thinking patterns underneath
            your challenge.
          </p>
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

      {/* ── HOW TO CHOOSE ── */}
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
            How to Choose the Right Mindset Coach
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Not every coach is the right fit for every person. Here are a few things to look for
            when choosing a mindset coach.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Building a Growth Mindset Step by Step
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            A great mindset coach does not just hand you a new set of affirmations. They work with
            you step by step to identify where your current thinking breaks down, introduce new
            frameworks that fit your life, and build consistent habits that reinforce a growth
            mindset over time. Look for a coach who has a clear process rather than just a
            collection of motivational phrases.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Online vs. In-Person Mindset Coaching
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.25rem" }}>
            Online mindset coaching has become just as effective as in-person work for most clients.
            Video sessions offer flexibility, remove commute barriers, and allow you to work with
            the best coach for your needs regardless of location. If you have been searching for a
            mindset coach near you and not finding the right match, expanding your search to online
            coaching opens up far more options.
          </p>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            The most important factor is the quality of the relationship and the coach&apos;s
            ability to challenge and support you in equal measure.
          </p>
        </div>
      </section>

      {/* ── COMMON MINDSET BLOCKS ── */}
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
            Common Mindset Blocks We Help You Overcome
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.5rem" }}>
            Every client arrives with a unique story. But underneath the surface, the blocks tend
            to fall into recognizable patterns. Here are three of the most common ones and how
            mindset coaching addresses them.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Overcoming Imposter Syndrome
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.5rem" }}>
            Imposter syndrome is the persistent feeling that you do not deserve your success and
            that others will eventually figure that out. It is one of the most common blocks for
            high achievers. A mindset coach helps you trace this belief to its origin, challenge
            the evidence supporting it, and replace it with a more accurate and empowering
            self-assessment.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Breaking Free From Self-Doubt
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028", marginBottom: "1.5rem" }}>
            Self-doubt is not a character flaw. It is a learned response. Somewhere along the way,
            a message got repeated often enough that it became a belief. Mindset coaching interrupts
            that pattern and builds a new one rooted in evidence, action, and genuine self-trust.
          </p>

          <h3
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Creating Lasting Behavioral Change
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#3a3028" }}>
            Most people know what they should do. The gap between knowing and doing is where
            mindset coaching lives. By working at the level of belief and identity rather than
            just behavior, your coach helps you become the kind of person who naturally takes the
            actions that lead to your goals.
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
            Frequently Asked Questions About Mindset Coaching
          </h2>

          {[
            {
              question: "What does a mindset coach do?",
              answer:
                "A mindset coach helps you identify limiting beliefs and negative thought patterns that hold you back. They guide you through practical strategies to build a stronger, more resilient way of thinking.",
            },
            {
              question: "How long does mindset coaching take?",
              answer:
                "Most clients see meaningful progress within 8 to 12 sessions. The timeline depends on your goals and how consistently you apply the work between sessions.",
            },
            {
              question: "Is mindset coaching the same as therapy?",
              answer:
                "No. Mindset coaching focuses on your present thinking and future goals rather than diagnosing or treating mental health conditions. Coaches work alongside therapists but serve a different purpose.",
            },
            {
              question: "How much does a mindset coach cost?",
              answer:
                "Pricing varies based on experience, session length, and format. Rates typically range from $100 to $500 per session. Many coaches offer package deals for ongoing work.",
            },
            {
              question: "Can mindset coaching be done online?",
              answer:
                "Yes. Online mindset coaching is just as effective as in-person sessions and gives you the flexibility to work with a coach from anywhere in the world.",
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
            Book Your Free Mindset Coaching Consultation Today
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
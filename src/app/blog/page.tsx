import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing — Justin Holland",
  description:
    "Justin Holland writes about consciousness, human potential, blind spots, and the things most people are afraid to say plainly. Dispatches from inside the work.",
};

// Placeholder articles — will be replaced by ContentBatchAgent post-launch
const articles = [
  {
    slug: "coming-soon",
    title: "What Is a Blind Spot — And Why You Cannot See Your Own",
    tag: "Awareness",
    date: "Coming Soon",
    excerpt:
      "The reason blind spots are so persistent is not that they are deep or complex. It is that they are, by definition, the one thing you cannot see from where you are standing.",
  },
  {
    slug: "coming-soon",
    title: "The Zero State: What Flow Actually Is and How to Live There",
    tag: "Performance",
    date: "Coming Soon",
    excerpt:
      "Athletes call it flow. Musicians call it the pocket. I call it zero. It is not a peak state you achieve. It is what is already present when you stop blocking it.",
  },
  {
    slug: "coming-soon",
    title: "Why \"Once You See It, You Can't Unsee It\" Is the Most Powerful Truth in Personal Development",
    tag: "Consciousness",
    date: "Coming Soon",
    excerpt:
      "The self-help industry is built on the premise that change is gradual. I want to challenge that premise — not because I disagree with growth, but because the crucial shift is not gradual at all.",
  },
];

const tags = ["All", "Awareness", "Performance", "Consciousness", "Philosophy", "Relationships"];

export default function Blog() {
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
            Writing
          </span>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              marginBottom: "1.25rem",
            }}
          >
            The things most people
            <br />
            are afraid to say plainly.
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.7,
              color: "#c8bfb0",
              maxWidth: "34rem",
            }}
          >
            Dispatches on consciousness, blind spots, human potential, and the work of living aligned.
            Written in Justin&apos;s own voice, from inside the work.
          </p>
        </div>
      </section>

      {/* ── TAG FILTER (static for now) ── */}
      <section style={{ backgroundColor: "#F5F0E8", borderBottom: "1px solid #d4ccc0", padding: "1.5rem 0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-block",
                  padding: "0.375rem 1rem",
                  border: `1px solid ${tag === "All" ? "#C4813A" : "#d4ccc0"}`,
                  fontSize: "0.8125rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: tag === "All" ? "#C4813A" : "#9a9080",
                  cursor: "default",
                  background: tag === "All" ? "transparent" : "transparent",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "5rem 0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              background: "#d4ccc0",
            }}
            className="article-grid"
          >
            {articles.map((article, i) => (
              <article
                key={i}
                style={{
                  background: "#FAF7F2",
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#C4813A",
                    }}
                  >
                    {article.tag}
                  </span>
                  <span style={{ fontSize: "0.8125rem", color: "#9a9080" }}>{article.date}</span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontSize: "1.25rem",
                    lineHeight: 1.35,
                    fontWeight: 400,
                    marginBottom: "1rem",
                    flex: "1",
                  }}
                >
                  {article.title}
                </h2>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "#6b6055", marginBottom: "1.5rem" }}>
                  {article.excerpt}
                </p>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#9a9080",
                  }}
                >
                  Coming Soon
                </span>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem", padding: "3rem", background: "#ffffff", border: "1px solid #d4ccc0" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.25rem",
                marginBottom: "0.75rem",
                fontWeight: 400,
              }}
            >
              More writing coming soon.
            </p>
            <p style={{ fontSize: "1rem", color: "#6b6055", marginBottom: "1.5rem" }}>
              Stay connected to receive dispatches when new pieces are published.
            </p>
            <Link href="/#stay-connected" className="btn-secondary-dark">
              Stay Connected
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW TO IDENTIFY YOUR BLIND SPOTS GUIDE ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "5rem 0", borderTop: "1px solid #d4ccc0" }}>
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
            Featured Guide
          </span>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1.5rem",
              color: "#1a1a1a",
            }}
          >
            How to Identify Your Blind Spots: A Step-by-Step Guide
          </h2>

          {/* Introduction */}
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "#3a3530",
              marginBottom: "1.25rem",
            }}
          >
            Most people never realize what they cannot see about themselves, and that gap between perception and reality can silently limit their success.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "#3a3530",
              marginBottom: "1.25rem",
            }}
          >
            Blind spots are unconscious patterns, biases, or behaviors that others notice but we consistently miss in ourselves. Identifying them is one of the most powerful steps toward self-improvement.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: "#3a3530",
              marginBottom: "3rem",
            }}
          >
            This guide walks you through practical, research-backed methods to uncover your blind spots and turn them into opportunities for growth.
          </p>

          {/* Section: What Are Blind Spots */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              What Are Blind Spots and Why Do They Matter
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              Blind spots are areas where your self-perception does not match how others experience you. They develop through habits, assumptions, and emotional defenses built over time. Understanding why they form is the first step to finding them.
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "#3a3530", lineHeight: 1.9, fontSize: "1rem" }}>
              <li>Blind spots exist in every person regardless of intelligence or experience</li>
              <li>They affect decision-making, relationships, and career advancement</li>
              <li>Recognizing their existence is the foundation of emotional intelligence</li>
            </ul>
          </div>

          {/* Section: Step 1 */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              Step 1: Practice Honest Self-Reflection
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              Regular self-reflection is the starting point for identifying blind spots. Set aside dedicated time to examine your reactions, decisions, and patterns without judgment.
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "#3a3530", lineHeight: 1.9, fontSize: "1rem" }}>
              <li>Journal daily about situations that triggered strong emotional responses</li>
              <li>Ask yourself why you reacted a certain way before accepting your first answer</li>
              <li>Look for recurring themes in your frustrations or conflicts with others</li>
            </ul>
          </div>

          {/* Section: Step 2 */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              Step 2: Seek Honest Feedback From Others
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              Other people can see what you cannot. Actively requesting specific, honest feedback from trusted colleagues, friends, and mentors reveals blind spots that self-reflection alone cannot uncover.
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "#3a3530", lineHeight: 1.9, fontSize: "1rem" }}>
              <li>Ask open-ended questions such as what do you wish I did differently</li>
              <li>Create a safe environment where people feel comfortable being truthful</li>
              <li>Listen without becoming defensive or dismissive of what you hear</li>
              <li>Consider using anonymous surveys or 360-degree feedback tools at work</li>
            </ul>
          </div>

          {/* Section: Step 3 */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              Step 3: Notice Patterns in Criticism
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              When multiple people or situations point to the same issue, that pattern is a strong signal of a blind spot. Pay attention to feedback you have received repeatedly over the years.
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "#3a3530", lineHeight: 1.9, fontSize: "1rem" }}>
              <li>Track feedback themes in a notebook or digital document</li>
              <li>Look for comments you tend to dismiss or find unfair</li>
              <li>Repeated criticism from different sources often points to a genuine gap</li>
            </ul>
          </div>

          {/* Section: Step 4 */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              Step 4: Use Personality and Assessment Tools
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              Validated assessment tools provide structured insight into your behavioral tendencies and potential blind spots. They offer an outside perspective grounded in data rather than opinion.
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "#3a3530", lineHeight: 1.9, fontSize: "1rem" }}>
              <li>The Johari Window model helps map what you know versus what others see</li>
              <li>Tools like the DISC assessment or Enneagram reveal behavioral patterns</li>
              <li>Myers-Briggs and StrengthsFinder highlight both strengths and overlooked weaknesses</li>
              <li>Use results as conversation starters rather than definitive labels</li>
            </ul>
          </div>

          {/* Section: Step 5 */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              Step 5: Observe Your Emotional Triggers
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              Strong emotional reactions, especially defensiveness or anger, often signal that a blind spot has been touched. Learning to pause and examine those reactions reveals hidden patterns.
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "#3a3530", lineHeight: 1.9, fontSize: "1rem" }}>
              <li>Notice when you feel an outsized reaction to a minor event</li>
              <li>Ask what belief or fear is driving this response</li>
              <li>Emotions that feel disproportionate often point to unexamined assumptions</li>
            </ul>
          </div>

          {/* Section: Step 6 */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              Step 6: Work With a Coach or Therapist
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              A professional coach or therapist provides a structured, objective space to explore your blind spots. Their training helps them notice patterns you might overlook on your own.
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "#3a3530", lineHeight: 1.9, fontSize: "1rem" }}>
              <li>Executive coaches specialize in uncovering professional blind spots</li>
              <li>Therapists help address blind spots rooted in past experiences</li>
              <li>Regular sessions create accountability for change over time</li>
            </ul>
          </div>

          {/* Section: How to Act */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              How to Act on What You Discover
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              Identifying a blind spot is only the beginning. Taking deliberate action to address it transforms awareness into real change.
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "#3a3530", lineHeight: 1.9, fontSize: "1rem" }}>
              <li>Choose one blind spot at a time to avoid feeling overwhelmed</li>
              <li>Set specific behavioral goals tied to the gap you identified</li>
              <li>Ask a trusted person to give you ongoing feedback as you work on it</li>
              <li>Celebrate progress rather than demanding instant perfection</li>
            </ul>
          </div>

          {/* Section: Common Blind Spots */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              Common Blind Spots to Watch For
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              While blind spots vary from person to person, certain patterns appear frequently across different people and settings.
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "#3a3530", lineHeight: 1.9, fontSize: "1rem" }}>
              <li>Overestimating your listening skills while dominating conversations</li>
              <li>Believing you are easygoing while others experience you as controlling</li>
              <li>Assuming your communication is clear when others feel confused</li>
              <li>Thinking you handle stress well while visibly affecting those around you</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div
            style={{
              background: "#FAF7F2",
              border: "1px solid #d4ccc0",
              padding: "2rem 2.5rem",
              marginBottom: "3rem",
            }}
          >
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", marginBottom: "1rem" }}>
              Identifying your blind spots requires a combination of honest self-reflection, openness to feedback, pattern recognition, and willingness to act on what you find.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", margin: 0 }}>
              Start today by asking one trusted person for honest feedback on an area where you want to grow. That single conversation could reveal more than months of solo reflection.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.75rem",
                fontWeight: 400,
                marginBottom: "2rem",
                color: "#1a1a1a",
              }}
            >
              Frequently Asked Questions
            </h3>

            <div style={{ marginBottom: "2rem", borderBottom: "1px solid #d4ccc0", paddingBottom: "2rem" }}>
              <h4
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                  color: "#1a1a1a",
                }}
              >
                How long does it take to identify your blind spots?
              </h4>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", margin: 0 }}>
                The initial awareness can come quickly through feedback or reflection, but fully understanding and changing a blind spot typically takes weeks to months of consistent effort.
              </p>
            </div>

            <div style={{ marginBottom: "2rem", borderBottom: "1px solid #d4ccc0", paddingBottom: "2rem" }}>
              <h4
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                  color: "#1a1a1a",
                }}
              >
                Can you identify blind spots on your own?
              </h4>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", margin: 0 }}>
                Self-reflection tools and journaling help, but blind spots are most reliably identified with input from other people who can observe your behavior objectively.
              </p>
            </div>

            <div style={{ marginBottom: "2rem", borderBottom: "1px solid #d4ccc0", paddingBottom: "2rem" }}>
              <h4
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                  color: "#1a1a1a",
                }}
              >
                Why is it so hard to see your own blind spots?
              </h4>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", margin: 0 }}>
                The brain filters information through existing beliefs and defenses, making it natural to overlook patterns that contradict your self-image. This is a universal human tendency, not a personal failure.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h4
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                  color: "#1a1a1a",
                }}
              >
                What is the Johari Window and how does it help?
              </h4>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#3a3530", margin: 0 }}>
                The Johari Window is a model that maps your self-awareness across four quadrants: what both you and others know, what others know but you do not, what you know but others do not, and what neither party knows. It is a useful framework for conversations about blind spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .article-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 900px) { .article-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .article-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
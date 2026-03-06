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

      <style>{`
        .article-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 900px) { .article-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .article-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}

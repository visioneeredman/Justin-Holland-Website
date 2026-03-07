import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { getPostBySlug, getAllPosts } from "../../../../lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Justin Holland`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = marked(post.content) as string;
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      {/* ── HEADER ── */}
      <section
        style={{
          backgroundColor: "#0E0E0E",
          color: "#F5F0E8",
          padding: "7rem 0 4rem",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <Link
              href="/blog"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9a9080",
                textDecoration: "none",
              }}
            >
              Writing
            </Link>
            <span style={{ color: "#9a9080", fontSize: "0.75rem" }}>—</span>
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C4813A",
              }}
            >
              {post.tag}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            {post.title}
          </h1>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.875rem", color: "#9a9080" }}>
              {post.author ?? "Justin Holland"}
            </span>
            {formattedDate && (
              <>
                <span style={{ color: "#4a4035", fontSize: "0.875rem" }}>·</span>
                <time style={{ fontSize: "0.875rem", color: "#9a9080" }}>{formattedDate}</time>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section style={{ backgroundColor: "#FAF7F2", padding: "4rem 0 6rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose-jh"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* ── CTA ── */}
          <div
            style={{
              marginTop: "4rem",
              padding: "2.5rem",
              background: "#0E0E0E",
              color: "#F5F0E8",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "1.375rem",
                lineHeight: 1.3,
                marginBottom: "1rem",
                fontWeight: 400,
              }}
            >
              If something in this landed differently than you expected, that is worth
              paying attention to.
            </p>
            <p style={{ fontSize: "0.9375rem", color: "#9a9080", marginBottom: "1.5rem" }}>
              Justin works with people who are ready to stop managing the pattern and
              start seeing what is underneath it.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/work-with-me" className="btn-primary">
                Work With Justin
              </Link>
              <Link href="/blog" style={{ color: "#9a9080", fontSize: "0.875rem", alignSelf: "center", textDecoration: "none" }}>
                More Writing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .prose-jh { color: #2a2520; line-height: 1.8; }
        .prose-jh h2 { font-family: var(--font-dm-serif), Georgia, serif; font-size: clamp(1.375rem, 2.5vw, 1.75rem); font-weight: 400; margin: 3rem 0 1rem; letter-spacing: -0.015em; color: #1a1a1a; }
        .prose-jh h3 { font-family: var(--font-dm-serif), Georgia, serif; font-size: 1.25rem; font-weight: 400; margin: 2.5rem 0 0.75rem; color: #1a1a1a; }
        .prose-jh p { font-size: 1.0625rem; margin-bottom: 1.5rem; }
        .prose-jh ul, .prose-jh ol { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .prose-jh li { font-size: 1.0625rem; margin-bottom: 0.5rem; }
        .prose-jh strong { font-weight: 600; color: #1a1a1a; }
        .prose-jh em { font-style: italic; }
        .prose-jh hr { border: none; border-top: 1px solid #d4ccc0; margin: 2.5rem 0; }
        .prose-jh blockquote { border-left: 3px solid #C4813A; padding-left: 1.5rem; margin: 2rem 0; color: #4a4035; font-style: italic; }
        .prose-jh a { color: #C4813A; text-decoration: none; }
        .prose-jh a:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}

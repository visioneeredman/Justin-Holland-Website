"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0E0E0E", color: "#9a9080" }}>
      {/* Email Capture */}
      <div
        style={{
          borderBottom: "1px solid #1e1e1e",
          padding: "4rem 0",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            <span className="line-accent" />
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                color: "#F5F0E8",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                marginBottom: "0.75rem",
                fontWeight: 400,
              }}
            >
              Insight when it matters. No noise.
            </h2>
            <p style={{ color: "#9a9080", marginBottom: "1.5rem", fontSize: "1rem" }}>
              Occasional dispatches on seeing clearly, living aligned, and the things most people
              are afraid to say plainly.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            >
              <input
                type="text"
                placeholder="First name"
                className="form-input"
                style={{ flex: "1", minWidth: "140px" }}
                aria-label="First name"
              />
              <input
                type="email"
                placeholder="Email address"
                className="form-input"
                style={{ flex: "2", minWidth: "200px" }}
                aria-label="Email address"
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
                Stay Connected
              </button>
            </form>
            <p style={{ fontSize: "0.8125rem", color: "#6b6055", marginTop: "0.75rem" }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div style={{ padding: "3rem 0 2rem" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {/* Brand */}
            <div>
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  color: "#F5F0E8",
                  fontSize: "1.125rem",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Justin Holland
              </Link>
              <p style={{ fontSize: "0.875rem", maxWidth: "20rem", lineHeight: 1.6 }}>
                Thought leader in consciousness, human potential, and personal development.
              </p>
            </div>

            {/* Navigation */}
            <nav
              aria-label="Footer navigation"
              style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link
                  href="/about"
                  style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}
                >
                  About
                </Link>
                <Link
                  href="/speaking"
                  style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}
                >
                  Speaking
                </Link>
                <Link
                  href="/work-with-me"
                  style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}
                >
                  Work With Me
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link
                  href="/blog"
                  style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}
                >
                  Contact
                </Link>
              </div>
            </nav>

            {/* Social */}
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  color: "#6b6055",
                }}
              >
                Follow
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href="https://www.instagram.com/iamjustinholland"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}
                  aria-label="Justin Holland on Instagram"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@iamjustinholland"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#9a9080", textDecoration: "none", fontSize: "0.875rem" }}
                  aria-label="Justin Holland on TikTok"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div
            style={{
              borderTop: "1px solid #1e1e1e",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <p style={{ fontSize: "0.8125rem" }}>
              &copy; {new Date().getFullYear()} Justin Holland. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link
                href="/privacy-policy"
                style={{ color: "#6b6055", textDecoration: "none", fontSize: "0.8125rem" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                style={{ color: "#6b6055", textDecoration: "none", fontSize: "0.8125rem" }}
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                style={{ color: "#6b6055", textDecoration: "none", fontSize: "0.8125rem" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

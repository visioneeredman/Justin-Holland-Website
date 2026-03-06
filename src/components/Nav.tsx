"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#0E0E0E", borderBottom: "1px solid #1e1e1e" }}
      className="sticky top-0 z-50"
    >
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: "4.5rem" }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-dm-serif), Georgia, serif",
            color: "#F5F0E8",
            fontSize: "1.25rem",
            letterSpacing: "-0.01em",
            textDecoration: "none",
          }}
        >
          Justin Holland
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#9a9080",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.875rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#F5F0E8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#9a9080")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link href="/work-with-me" className="btn-primary" style={{ fontSize: "0.8125rem", padding: "0.625rem 1.25rem" }}>
            Begin Here
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            style={{
              display: "block",
              width: "1.5rem",
              height: "1px",
              background: "#F5F0E8",
              transition: "transform 0.2s ease",
              transform: open ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "1.5rem",
              height: "1px",
              background: "#F5F0E8",
              opacity: open ? 0 : 1,
              transition: "opacity 0.2s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: "1.5rem",
              height: "1px",
              background: "#F5F0E8",
              transition: "transform 0.2s ease",
              transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          style={{ backgroundColor: "#0E0E0E", borderTop: "1px solid #1e1e1e" }}
          className="md:hidden"
        >
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  color: "#F5F0E8",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/work-with-me"
              className="btn-primary"
              onClick={() => setOpen(false)}
              style={{ textAlign: "center", marginTop: "0.5rem" }}
            >
              Begin Here
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

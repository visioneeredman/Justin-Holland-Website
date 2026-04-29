"use client";

import { useState } from "react";
import Link from "next/link";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select" | "tel";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface PlaceholderFormProps {
  fields: FormField[];
  submitLabel?: string;
  successMessage?: string;
  dark?: boolean;
  formType?: string;
  showConsentCheckboxes?: boolean;
}

export default function PlaceholderForm({
  fields,
  submitLabel = "Send",
  successMessage = "Thank you. Your message has been received. Justin reads every one personally.",
  dark = false,
  formType = "contact",
  showConsentCheckboxes = false,
}: PlaceholderFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = { formType };
    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Send failed");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please try again or email justin@iamjustinholland.com directly."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    border: dark ? "1px solid #2e2e2e" : "1px solid #d4ccc0",
    background: dark ? "#1a1a1a" : "#ffffff",
    color: dark ? "#F5F0E8" : "#1A1A1A",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: "1rem",
    borderRadius: "2px",
    outline: "none",
    marginBottom: "1rem",
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "2rem",
          border: "1px solid #C4813A",
          textAlign: "center",
          color: dark ? "#F5F0E8" : "#1A1A1A",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-serif), Georgia, serif",
            fontSize: "1.25rem",
            marginBottom: "0.5rem",
          }}
        >
          Message received.
        </p>
        <p style={{ fontSize: "0.9375rem", opacity: 0.8 }}>{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: "0.25rem" }}>
          <label
            htmlFor={field.name}
            style={{
              display: "block",
              fontSize: "0.8125rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
              color: dark ? "#9a9080" : "#6b6055",
            }}
          >
            {field.label}
            {field.required && (
              <span style={{ color: "#C4813A", marginLeft: "0.25rem" }}>*</span>
            )}
          </label>

          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="">Select one</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              style={inputStyle}
            />
          )}
        </div>
      ))}

      {showConsentCheckboxes && (
        <fieldset
          style={{
            border: dark ? "1px solid #2e2e2e" : "1px solid #d4ccc0",
            padding: "1.25rem",
            marginTop: "1.25rem",
            marginBottom: "0.5rem",
          }}
        >
          <legend
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: dark ? "#6b6055" : "#9a9080",
              padding: "0 0.5rem",
            }}
          >
            SMS Consent &mdash; Optional
          </legend>

          {/* Marketing checkbox */}
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              marginBottom: "1rem",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              name="consent_marketing"
              value="yes"
              aria-label="Consent to receive marketing SMS messages"
              style={{ marginTop: "0.2rem", flexShrink: 0, accentColor: "#C4813A" }}
            />
            <span
              style={{
                fontSize: "0.8125rem",
                lineHeight: 1.6,
                color: dark ? "#9a9080" : "#6b6055",
              }}
            >
              I consent to receive marketing text messages about special offers, updates, and
              insights from Justin Holland at the phone number provided. Message frequency may
              vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to
              opt out.
            </span>
          </label>

          {/* Transactional checkbox */}
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              name="consent_transactional"
              value="yes"
              aria-label="Consent to receive transactional SMS messages"
              style={{ marginTop: "0.2rem", flexShrink: 0, accentColor: "#C4813A" }}
            />
            <span
              style={{
                fontSize: "0.8125rem",
                lineHeight: 1.6,
                color: dark ? "#9a9080" : "#6b6055",
              }}
            >
              I consent to receive non-marketing text messages from Justin Holland about
              appointment reminders, booking confirmations, and session notifications. Message
              frequency may vary. Message &amp; data rates may apply. Text HELP for assistance,
              reply STOP to opt out.
            </span>
          </label>

          {/* PP + Terms links at bottom of fieldset per GHL spec */}
          <p
            style={{
              fontSize: "0.75rem",
              color: dark ? "#6b6055" : "#9a9080",
              marginTop: "0.875rem",
              lineHeight: 1.5,
            }}
          >
            By checking either box above you agree to our{" "}
            <Link
              href="/privacy-policy"
              style={{ color: "#C4813A", textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" style={{ color: "#C4813A", textDecoration: "underline" }}>
              Terms of Service
            </Link>
            .
          </p>
        </fieldset>
      )}

      {error && (
        <p style={{ fontSize: "0.875rem", color: "#c0392b", marginTop: "0.5rem" }}>{error}</p>
      )}

      <button
        type="submit"
        className="btn-primary"
        style={{ marginTop: "1rem", width: "100%", opacity: loading ? 0.7 : 1 }}
        disabled={loading}
      >
        {loading ? "Sending..." : submitLabel}
      </button>

      <p
        style={{
          fontSize: "0.8125rem",
          color: dark ? "#6b6055" : "#9a9080",
          marginTop: "0.75rem",
          textAlign: "center",
        }}
      >
        Your information is never shared or sold.
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface PlaceholderFormProps {
  fields: FormField[];
  submitLabel?: string;
  successMessage?: string;
  dark?: boolean;
}

export default function PlaceholderForm({
  fields,
  submitLabel = "Send",
  successMessage = "Thank you. Your message has been received. Justin reads every one personally.",
  dark = false,
}: PlaceholderFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — backend will be wired in a later session
    setSubmitted(true);
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
        <p style={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
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
            {field.required && <span style={{ color: "#C4813A", marginLeft: "0.25rem" }}>*</span>}
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

      <button
        type="submit"
        className="btn-primary"
        style={{ marginTop: "0.75rem", width: "100%" }}
      >
        {submitLabel}
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

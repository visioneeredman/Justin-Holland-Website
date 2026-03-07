import type { Metadata } from "next";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Contact Justin Holland",
  description:
    "Get in touch with Justin Holland for speaking inquiries, coaching interest, media, or anything else. Justin reads every message personally.",
};

const contactFormFields = [
  { name: "name", label: "Your Name", type: "text" as const, placeholder: "Full name", required: true },
  { name: "email", label: "Email", type: "email" as const, placeholder: "your@email.com", required: true },
  {
    name: "subject",
    label: "Subject",
    type: "select" as const,
    options: [
      "Speaking Inquiry",
      "Coaching Interest",
      "Media or Press",
      "Podcast or Interview",
      "Other",
    ],
    required: true,
  },
  { name: "message", label: "Message", type: "textarea" as const, placeholder: "Tell Justin what you have in mind.", required: true },
];

export default function Contact() {
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
            Get in Touch
          </span>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              marginBottom: "1.25rem",
            }}
          >
            I read every message personally.
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.7,
              color: "#c8bfb0",
              maxWidth: "30rem",
            }}
          >
            For speaking inquiries, coaching interest, media, or anything else — use the form
            below or find me on Instagram and TikTok.
          </p>
        </div>
      </section>

      {/* ── FORM + DETAILS ── */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "6rem 0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "5rem",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Form */}
            <div>
              <PlaceholderForm
                fields={contactFormFields}
                submitLabel="Send Message"
                successMessage="Message received. Justin reads every one personally and will be in touch soon."
              />
            </div>

            {/* Details */}
            <div>
              <div style={{ marginBottom: "3rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C4813A",
                    marginBottom: "1rem",
                  }}
                >
                  Speaking
                </span>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "#4a4035" }}>
                  For keynote and speaking inquiries, please include your event date, expected
                  audience size, and event type. Justin will follow up directly if there is a fit.
                </p>
              </div>

              <div style={{ marginBottom: "3rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C4813A",
                    marginBottom: "1rem",
                  }}
                >
                  Coaching
                </span>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "#4a4035" }}>
                  For coaching inquiries, the{" "}
                  <a href="/work-with-me" style={{ color: "#C4813A", textDecoration: "none" }}>
                    Work With Me
                  </a>{" "}
                  page has a more detailed application that helps Justin understand what you are
                  facing before responding.
                </p>
              </div>

              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C4813A",
                    marginBottom: "1rem",
                  }}
                >
                  Follow
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a
                    href="https://www.instagram.com/iamjustinholland"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#4a4035", textDecoration: "none", fontSize: "0.9375rem" }}
                  >
                    Instagram — @iamjustinholland
                  </a>
                  <a
                    href="https://www.tiktok.com/@iamjustinholland"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#4a4035", textDecoration: "none", fontSize: "0.9375rem" }}
                  >
                    TikTok — @iamjustinholland
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIRE A MOTIVATIONAL SPEAKER GUIDE ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#0E0E0E",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Why Hire a Motivational Speaker?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "3rem" }}>
            A motivational speaker can energize your audience, reinforce your event theme, and leave a lasting impression on attendees. Whether you are planning a corporate conference, a sales kickoff, or a graduation ceremony, the right speaker adds real value to your event.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#0E0E0E",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Types of Motivational Speakers
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "3rem" }}>
            Motivational speakers come in many categories: business leaders, athletes, authors, and life coaches. Choosing the right type depends on your audience and the message you want to deliver.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#0E0E0E",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            How Much Does It Cost to Hire a Motivational Speaker?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "3rem" }}>
            Speaker fees vary widely based on experience and fame. Budget speakers may charge a few hundred dollars, mid-tier speakers typically range from $5,000 to $20,000, and celebrity speakers can command $50,000 or more per appearance.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#0E0E0E",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Steps to Hire a Motivational Speaker
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "3rem" }}>
            Follow these steps to find the best speaker for your event. First, define your goals and audience. Second, set a realistic budget. Third, research speakers through bureaus, referrals, or online platforms. Fourth, review demo videos and testimonials. Fifth, confirm availability and negotiate terms. Sixth, sign a contract that covers fees, travel, and cancellation policies.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#0E0E0E",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Where to Find Motivational Speakers
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "3rem" }}>
            You can find speakers through speaker bureaus, LinkedIn, professional associations, and referrals from colleagues. Speaker bureaus offer a curated roster and handle logistics, making them a popular choice for event planners.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#0E0E0E",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Questions to Ask Before You Hire
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "3rem" }}>
            Ask potential speakers about their experience with similar audiences, their ability to customize content, and their technical requirements. Request references from past clients and review video clips of previous presentations before making a final decision.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#0E0E0E",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Red Flags to Watch For
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "3rem" }}>
            Avoid speakers who refuse to provide references, lack demo videos, or cannot tailor their message to your audience. A one-size-fits-all presentation rarely delivers the impact your event deserves.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#0E0E0E",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Tips for a Successful Speaker Engagement
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035", marginBottom: "3rem" }}>
            Communicate your event goals clearly, provide background on your audience, and schedule a pre-event call with the speaker. Good preparation helps the speaker deliver a focused and relevant presentation that resonates with your attendees.
          </p>

          {/* ── FAQ ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#0E0E0E",
              marginBottom: "2rem",
              lineHeight: 1.2,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  color: "#0E0E0E",
                  marginBottom: "0.5rem",
                }}
              >
                How far in advance should I hire a motivational speaker?
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035" }}>
                Book your speaker at least three to six months in advance, especially for large events or well-known speakers who fill their calendars quickly.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  color: "#0E0E0E",
                  marginBottom: "0.5rem",
                }}
              >
                What is a speaker bureau?
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035" }}>
                A speaker bureau is an agency that represents a roster of professional speakers. They help match speakers to events and manage booking logistics on your behalf.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  color: "#0E0E0E",
                  marginBottom: "0.5rem",
                }}
              >
                Can I negotiate a speaker's fee?
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035" }}>
                Yes, many speakers are open to negotiation, particularly for non-profit events, multi-day engagements, or last-minute bookings where their schedule has an opening.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  color: "#0E0E0E",
                  marginBottom: "0.5rem",
                }}
              >
                What should a speaker contract include?
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4a4035" }}>
                A contract should cover the speaking fee, travel and accommodation costs, event date and duration, content expectations, cancellation terms, and any exclusivity clauses.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "#4a4035",
              padding: "1.5rem",
              backgroundColor: "#F5F0E8",
              borderLeft: "3px solid #C4813A",
            }}
          >
            Browse our roster of top motivational speakers and request a free quote today.
          </p>
        </div>
      </section>

      <style>{`
        .contact-grid { grid-template-columns: 2fr 1fr !important; }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
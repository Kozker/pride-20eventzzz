import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const CONTACT_CHANNELS = [
  { label: "Call", value: "+91 98956 90349", href: "tel:+919895690349" },
  {
    label: "Email",
    value: "info@prideeventz.in",
    href: "mailto:info@prideeventz.in",
  },
  {
    label: "Instagram",
    value: "@prideeventz",
    href: "https://www.instagram.com/prideeventz?igsh=NWgwbWU5NTViOGdl",
  },
];

const MEETING_OPTIONS = [
  "Corporate conference or summit",
  "Brand activation or launch",
  "Wedding or social celebration",
  "Incentive travel or hospitality program",
  "Other bespoke experience",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,255,152,0.35),transparent_60%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-foreground/10 bg-background px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70">
              Let's collaborate
            </span>
            <h1 className="text-[96px] font-medium leading-[88px] tracking-[-3px]">
              Share your vision. We will blueprint a Pride Eventz experience
              around it.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
              Tell us about your upcoming event, audience size, and desired
              destination. Our team will respond within one business day with
              availability, ideas, and next steps.
            </p>
            <div className="grid gap-4 text-sm uppercase tracking-[0.32em] text-foreground/70">
              {CONTACT_CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="inline-flex items-center gap-3 text-foreground transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="rounded-full bg-foreground/10 px-4 py-2 text-xs text-foreground/80">
                    {channel.label}
                  </span>
                  <span>{channel.value}</span>
                  <span className="text-lg">↗</span>
                </a>
              ))}
            </div>
            <div className="rounded-[28px] border border-foreground/10 bg-background/70 p-8 text-sm leading-relaxed text-foreground/70 shadow-[0_16px_40px_rgba(30,30,30,0.08)]">
              Mattekkattu Building, NX Joseph Road, Kundannur, Ernakulam-682304,
              Kochi, Kerala
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-border/60 bg-background p-10 shadow-[0_24px_50px_rgba(30,30,30,0.08)]"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.32em] text-foreground/60"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Priya Sharma"
                  className="mt-2 w-full rounded-md border border-border/70 bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.32em] text-foreground/60"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="hello@company.com"
                    className="mt-2 w-full rounded-md border border-border/70 bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-xs uppercase tracking-[0.32em] text-foreground/60"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Include country code"
                    className="mt-2 w-full rounded-md border border-border/70 bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="occasion"
                  className="text-xs uppercase tracking-[0.32em] text-foreground/60"
                >
                  Occasion
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  className="mt-2 w-full rounded-md border border-border/70 bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Corporate conference or summit"
                >
                  {MEETING_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="text-xs uppercase tracking-[0.32em] text-foreground/60"
                >
                  Event month
                </label>
                <input
                  id="date"
                  name="date"
                  type="month"
                  className="mt-2 w-full rounded-md border border-border/70 bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="text-xs uppercase tracking-[0.32em] text-foreground/60"
                >
                  Brief us
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Share audience size, location, and the tone you want to set."
                  className="mt-2 w-full rounded-md border border-border/70 bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-background transition-transform duration-500 hover:-translate-y-1"
              >
                Send enquiry
              </button>

              {submitted && (
                <div className="rounded-md border border-primary/40 bg-primary/15 px-4 py-3 text-sm text-foreground/80">
                  Thank you for reaching out. A Pride Eventz producer will
                  contact you shortly to schedule a discovery call.
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-[72px] font-medium leading-[66px] tracking-[-2px]">
              Prefer a direct consultation?
            </h2>
            <p className="text-lg leading-relaxed text-foreground/70">
              We regularly host virtual walk-throughs of recent projects and
              in-person site visits across Kochi, Mumbai, Bengaluru, Hyderabad,
              and Goa.
            </p>
            <div className="rounded-[28px] border border-border/60 bg-secondary p-8 text-sm leading-relaxed text-foreground/70">
              <p>
                <strong className="text-foreground">Studio Hours:</strong>{" "}
                Monday to Saturday — 10:00 AM to 7:00 PM IST
              </p>
              <p className="mt-3">
                <strong className="text-foreground">
                  Virtual Consultations:
                </strong>{" "}
                Available globally via Google Meet or Zoom.
              </p>
            </div>
            <Link
              to="/service/events"
              className="inline-flex items-center gap-3 rounded-md border border-foreground/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-foreground transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              Review our services
              <span className="text-lg">→</span>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] border border-border/60 bg-secondary p-8 shadow-[0_18px_40px_rgba(30,30,30,0.08)]">
              <h3 className="text-2xl font-semibold tracking-[-0.08em]">
                Production Offices
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                Kochi · Bengaluru · Mumbai · Hyderabad
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                On-ground partners in Delhi NCR, Chennai, Goa, and Abu Dhabi.
              </p>
            </div>
            <div className="rounded-[32px] border border-border/60 bg-secondary p-8 shadow-[0_18px_40px_rgba(30,30,30,0.08)]">
              <h3 className="text-2xl font-semibold tracking-[-0.08em]">
                What to prepare
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                <li>• Approximate guest count and profile</li>
                <li>• Desired city or destination</li>
                <li>• Preferred dates and duration</li>
                <li>• Brand guidelines or inspiration mood board</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

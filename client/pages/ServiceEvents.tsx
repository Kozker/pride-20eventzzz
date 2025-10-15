import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "End-to-End Planning",
    description:
      "Roadmapping, budgeting, vendor orchestration, and stakeholder alignment anchored around your strategic objectives.",
  },
  {
    title: "Experience Design",
    description:
      "Immersive stagecraft, scenography, décor palettes, and tactile touchpoints that express your brand voice with clarity.",
  },
  {
    title: "Talent & Entertainment",
    description:
      "Curated artist lineups, emcees, and performances with technical direction that keeps every moment on tempo.",
  },
  {
    title: "Guest Journey",
    description:
      "Registration flows, hospitality, gifting, and concierge services engineered to make every guest feel celebrated.",
  },
  {
    title: "Hybrid & Broadcast",
    description:
      "Stage-to-screen storytelling, live streaming, and content capture to expand reach and extend event impact.",
  },
  {
    title: "Measurement & Post Event",
    description:
      "Analytics, feedback loops, and highlight reels to sustain momentum and deliver measurable ROI to stakeholders.",
  },
];

const processPhases = [
  {
    label: "01",
    title: "Discover",
    copy: "Immersive workshops to translate your ambitions into a shared creative brief. We analyse audience personas, brand tonality, and business outcomes before sketching the experience arc.",
  },
  {
    label: "02",
    title: "Design",
    copy: "Mood boards, schematics, production schedules, and narrative beats are refined collaboratively. Every sensory element is prototyped to ensure cohesion across décor, content, and talent.",
  },
  {
    label: "03",
    title: "Deliver",
    copy: "On-site direction, run-of-show management, and vendor leadership ensure flawless execution. Our team manages contingencies so you can stay immersed in the celebration.",
  },
  {
    label: "04",
    title: "Amplify",
    copy: "Post-event storytelling, analytics, and stakeholder debriefs transform the experience into enduring value for your community and brand.",
  },
];

const featuredExperiences = [
  {
    category: "Leadership Summits",
    title: "Adevinta Ignite 2024",
    description:
      "Three days of immersive programming in Barcelona unifying leadership teams through interactive workshops, cinematic plenaries, and after-dark cultural journeys.",
    image: "https://prideeventz.in/assets/Slider/slider4-home.webp",
  },
  {
    category: "Sports Hospitality",
    title: "Euroleague Final Four",
    description:
      "Premium guest suites, bespoke gifting, and high-energy fan zones for Turkish Airlines guests in Abu Dhabi—all delivered with Pride Eventz precision.",
    image: "https://prideeventz.in/assets/Slider/slider3-home.webp",
  },
  {
    category: "Celebrations",
    title: "Signature Weddings",
    description:
      "Destination ceremonies in Goa and Jaipur combining couture décor, entertainment, and white-glove guest services that feel deeply personal and effortless.",
    image: "https://prideeventz.in/assets/home/wedding-home.webp",
  },
];

export default function ServiceEvents() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,255,152,0.4),transparent_65%)]" />
        <div className="absolute inset-y-10 right-0 hidden w-1/3 rounded-l-[48px] bg-[url('https://prideeventz.in/assets/home/corporate-events.webp')] bg-cover bg-center opacity-20 lg:block" />
        <div className="container relative grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-foreground/10 bg-background px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70">
              Events Service Studio
            </span>
            <h1 className="text-[96px] font-medium leading-[88px] tracking-[-3px]">
              We engineer gatherings that audiences feel, remember, and
              champion.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
              Pride Eventz blends strategy, storytelling, and flawless
              production to elevate corporate summits, luxury weddings, brand
              activations, and hospitality programs across India and beyond.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects/filter"
                className="group inline-flex items-center gap-3 rounded-md bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-background transition-all duration-500 hover:-translate-y-1"
              >
                <span className="relative z-10">View highlight work</span>
                <span className="relative z-10 text-lg">→</span>
                <span className="absolute inset-0 rounded-md border border-background/10" />
                <span className="absolute inset-0 rounded-md bg-primary/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-foreground/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-foreground transition-colors duration-500 hover:bg-foreground hover:text-background"
              >
                Plan an experience
              </Link>
            </div>
          </div>
          <div className="grid gap-6 text-sm leading-relaxed text-foreground/75">
            <div className="rounded-[28px] border border-foreground/10 bg-background/80 p-8 shadow-[0_16px_40px_rgba(30,30,30,0.08)]">
              <h2 className="text-2xl font-semibold tracking-[-0.08em]">
                Why Pride Eventz?
              </h2>
              <p className="mt-4">
                Our core team brings together producers, designers,
                technologists, and hospitality stylists who have delivered more
                than 500 events across corporate, lifestyle, and entertainment
                verticals.
              </p>
              <p className="mt-4">
                Every engagement is tailored around your KPIs—be it alignment,
                celebration, or amplification—so that the experience lingers
                long after the final spotlight fades.
              </p>
            </div>
            <div className="rounded-[28px] border border-foreground/10 bg-background/60 p-8 text-xs uppercase tracking-[0.32em] text-foreground/60">
              <p>
                Trusted by enterprise brands, high-profile founders, and
                families who expect thoughtful detail in every moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-foreground/10 bg-secondary px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70">
              Capabilities
            </span>
            <h2 className="mt-6 text-[80px] font-medium leading-[72px] tracking-[-2.4px]">
              Every detail, orchestrated with intention
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Modular service stacks let us tailor the perfect mix for summits,
              incentives, celebrations, and launches—without compromising craft.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-border/60 bg-secondary p-10 shadow-[0_20px_40px_rgba(30,30,30,0.1)]"
              >
                <h3 className="text-3xl font-semibold tracking-[-0.08em]">
                  {capability.title}
                </h3>
                <p className="mt-6 flex-1 text-base leading-relaxed text-foreground/70">
                  {capability.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-foreground/60 transition-transform duration-500 group-hover:translate-x-1">
                  Included in bespoke proposals
                  <span className="text-lg">→</span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FFDC] py-24">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-foreground/10 bg-background px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70">
                Signature process
              </span>
              <h2 className="text-[72px] font-medium leading-[66px] tracking-[-2px]">
                A collaborative arc from discovery to amplification
              </h2>
              <p className="text-lg leading-relaxed text-foreground/70">
                We integrate seamlessly with your internal teams, working as an
                extension of your brand to keep the planning journey energised,
                transparent, and on schedule.
              </p>
            </div>
            <div className="space-y-8">
              {processPhases.map((phase) => (
                <div
                  key={phase.label}
                  className="rounded-[28px] border border-foreground/10 bg-background/80 p-8 shadow-[0_18px_40px_rgba(30,30,30,0.08)]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-4xl font-semibold tracking-[-0.12em] text-foreground/40">
                      {phase.label}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-[-0.08em]">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-foreground/70">
                    {phase.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container space-y-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full border border-foreground/10 bg-secondary px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70">
                Featured experiences
              </span>
              <h2 className="mt-4 text-[72px] font-medium leading-[66px] tracking-[-2px]">
                Moments that define our craft
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
              Whether you are rallying a global workforce or celebrating a
              milestone, Pride Eventz brings together storytellers, producers,
              and hospitality experts to make every detail resonate.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {featuredExperiences.map((experience) => (
              <article
                key={experience.title}
                className="flex h-full flex-col overflow-hidden rounded-[32px] border border-border/60 bg-secondary shadow-[0_20px_40px_rgba(30,30,30,0.08)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.76,0,0.24,1)] hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-6 top-6 rounded-full bg-background/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/80">
                    {experience.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <h3 className="text-3xl font-semibold tracking-[-0.1em]">
                    {experience.title}
                  </h3>
                  <p className="flex-1 text-base leading-relaxed text-foreground/70">
                    {experience.description}
                  </p>
                  <Link
                    to="/projects/filter"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-foreground/60 transition-transform duration-500 hover:translate-x-1"
                  >
                    Explore the story
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-24 text-background">
        <div className="container grid gap-16 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-[72px] font-medium leading-[66px] tracking-[-2px]">
              Ready to design your next signature event?
            </h2>
            <p className="text-lg leading-relaxed text-background/80">
              Share your objectives and we will craft a bespoke blueprint that
              covers creative, production, and hospitality streams—complete with
              budget guidance and timelines.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.28em] text-background/70">
              <a
                href="mailto:info@prideeventz.in"
                className="inline-flex items-center gap-3"
              >
                info@prideeventz.in
                <span className="text-lg">↗</span>
              </a>
              <a
                href="tel:+919895690349"
                className="inline-flex items-center gap-3"
              >
                +91 98956 90349
                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>
          <div className="rounded-[32px] border border-background/20 bg-background/10 p-10">
            <h3 className="text-2xl font-semibold tracking-[-0.08em] text-background">
              Fast-track inquiry
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              Tell us about your upcoming event, audience size, and desired
              location. Our team will reply within one business day with
              availability and next steps.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-background/70">
              <li>• Corporate conferences, dealer meets, IPO launches</li>
              <li>• Destination weddings, milestone celebrations</li>
              <li>• Brand activations, exhibitions, roadshows</li>
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-foreground transition-transform duration-500 hover:-translate-y-1"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const FILTERS = [
  "All",
  "Corporate",
  "Weddings",
  "Sports",
  "Brand",
  "Hospitality",
] as const;

type FilterCategory = (typeof FILTERS)[number];

const PROJECTS = [
  {
    title: "Adevinta Ignite: Global Summit",
    category: "Corporate" as FilterCategory,
    location: "Barcelona",
    description:
      "A choreography of plenary sessions, immersive breakouts, and gala experiences aligning global leadership under one united vision.",
    image: "https://prideeventz.in/assets/Slider/slider4-home.webp",
  },
  {
    title: "Turkish Airlines Euroleague Final Four",
    category: "Sports" as FilterCategory,
    location: "Abu Dhabi",
    description:
      "VIP hospitality suites, curated entertainment, and bespoke gifting for premium guests across a four-day sporting spectacle.",
    image: "https://prideeventz.in/assets/Slider/slider3-home.webp",
  },
  {
    title: "Menzies Congress Leadership Retreat",
    category: "Corporate" as FilterCategory,
    location: "Costa Brava",
    description:
      "Leadership summit for 120 executives featuring strategic sessions, thought leadership keynotes, and signature culinary journeys.",
    image: "https://prideeventz.in/assets/home/brand-home.webp",
  },
  {
    title: "Seaside Couture Wedding",
    category: "Weddings" as FilterCategory,
    location: "Goa",
    description:
      "Three-day celebration with couture décor, curated artist line-up, and hospitality suites designed for every generation of the family.",
    image: "https://prideeventz.in/assets/home/wedding-home.webp",
  },
  {
    title: "Experiential Brand Pop-Up",
    category: "Brand" as FilterCategory,
    location: "Mumbai",
    description:
      "Interactive product playground combining AR showcases, maker workshops, and influencer meet-ups to spark organic buzz.",
    image: "https://prideeventz.in/assets/home/brand-home.webp",
  },
  {
    title: "Destination Wellness Retreat",
    category: "Hospitality" as FilterCategory,
    location: "Kerala",
    description:
      "Luxury incentive getaway with sunrise yoga, locally inspired dining, and private performances for high-performing teams.",
    image: "https://prideeventz.in/assets/home/banner-home.webp",
  },
];

const IMPACT_BULLETS = [
  "500+ signature experiences delivered nationwide",
  "Multi-city production partners with global reach",
  "In-house creative, technical, and hospitality teams",
  "Data-backed reporting after every project",
];

export default function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS;
    }
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,255,152,0.35),transparent_60%)]" />
        <div className="container relative flex flex-col gap-12">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-foreground/10 bg-background px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70">
              Project Index
            </span>
            <h1 className="text-[96px] font-medium leading-[88px] tracking-[-3px]">
              Explore the Pride Eventz portfolio across formats, sectors, and
              cities.
            </h1>
            <p className="text-lg leading-relaxed text-foreground/70">
              Filter to uncover the experiences that match your ambition, or
              reach out for a curated showcase tailored to your brief.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.28em]">
            {FILTERS.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-5 py-2 transition-all duration-300 ${
                    isActive
                      ? "border-foreground bg-foreground text-background shadow-[0_12px_30px_rgba(30,30,30,0.12)]"
                      : "border-foreground/20 bg-background text-foreground/70 hover:border-foreground/40"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container space-y-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-[80px] font-medium leading-[72px] tracking-[-2.4px]">
                {activeFilter === "All"
                  ? "Signature showcases"
                  : `${activeFilter} highlights`}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/70">
                {visibleProjects.length}{" "}
                {visibleProjects.length === 1 ? "experience" : "experiences"}{" "}
                for {activeFilter.toLowerCase()} programs curated by Pride
                Eventz.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.32em] text-foreground/60">
              {IMPACT_BULLETS.map((bullet) => (
                <span key={bullet} className="inline-flex items-center gap-2">
                  <span className="h-1 w-6 rounded-full bg-primary" />
                  {bullet}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col overflow-hidden rounded-[32px] border border-border/60 bg-secondary shadow-[0_20px_40px_rgba(30,30,30,0.08)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.76,0,0.24,1)] hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                  <span className="absolute left-6 top-6 rounded-full bg-background/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/80">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-foreground/60">
                    <span>{project.location}</span>
                    <span>Delivered by Pride Eventz</span>
                  </div>
                  <h3 className="text-3xl font-semibold tracking-[-0.1em]">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-base leading-relaxed text-foreground/70">
                    {project.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-foreground/60 transition-transform duration-500 hover:translate-x-1"
                  >
                    Discuss a similar event
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FFDC] py-24">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-[72px] font-medium leading-[66px] tracking-[-2px]">
              Need a customised showcase?
            </h2>
            <p className="text-lg leading-relaxed text-foreground/70">
              Share your objectives, audience size, and desired destination. We
              will curate a tailored playlist of Pride Eventz case studies that
              mirror your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-background transition-transform duration-500 hover:-translate-y-1"
            >
              Plan with our team
              <span className="text-lg">→</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.slice(0, 4).map((project) => (
              <div
                key={`${project.title}-summary`}
                className="rounded-[28px] border border-foreground/10 bg-background/80 p-6 text-sm leading-relaxed text-foreground/70 shadow-[0_16px_30px_rgba(30,30,30,0.08)]"
              >
                <span className="text-xs uppercase tracking-[0.32em] text-foreground/60">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.06em] text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

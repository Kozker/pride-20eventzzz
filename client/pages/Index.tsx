import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const SHOWREEL_VIDEO =
  "https://cdn.coverr.co/videos/coverr-stage-light-show-2881/1080p.mp4";
const SHOWREEL_POSTER = "https://prideeventz.in/assets/home/banner-home.webp";

const HERO_MASK_LINES = [
  "Designed to be",
  "remembered.",
  "We build experiences",
  "that audiences feel,",
  "not just attend.",
];

const HERO_SLIDES = [
  {
    id: "prestigious-events",
    titleLines: ["Adevinta Ignite", "2024"],
    category: "Corporate Events",
    location: "Barcelona",
    descriptionLines: [
      "Uniting leadership teams into one community with immersive stagecraft and purpose-led storytelling.",
      "Every agenda beat choreographed to elevate Pride Eventz' global corporate expertise.",
    ],
    image: "https://prideeventz.in/assets/Slider/slider4-home.webp",
  },
  {
    id: "vibrant-parties",
    titleLines: ["Turkish Airlines", "Euroleague Final Four"],
    category: "Sports Hospitality",
    location: "Abu Dhabi",
    descriptionLines: [
      "Curated VIP hospitality suites and bold fan engagement touchpoints across an international weekend.",
      "A layered celebration that merged sport, culture, and signature Pride Eventz detail.",
    ],
    image: "https://prideeventz.in/assets/Slider/slider3-home.webp",
  },
  {
    id: "enchanting-weddings",
    titleLines: ["Menzies Congress", "2025"],
    category: "Leadership Summits",
    location: "Costa Brava",
    descriptionLines: [
      "120 senior leaders gathered for strategic inspiration surrounded by bespoke hospitality moments.",
      "Seamless programming designed to celebrate talent while sustaining momentum beyond the summit.",
    ],
    image: "https://prideeventz.in/assets/Slider/slider1-home.webp",
  },
];

const SERVICES = [
  {
    id: "weddings",
    title: "Weddings",
    description:
      "Your dream wedding deserves a perfect setting. We blend luxurious décor, meticulous coordination, and personalised storytelling.",
    image: "https://prideeventz.in/assets/home/wedding-home.webp",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "From conferences to product launches, we deliver polished corporate encounters that align with every brand identity.",
    image: "https://prideeventz.in/assets/home/corporate-events.webp",
  },
  {
    id: "decorations",
    title: "Decor & Styling",
    description:
      "Themed environments, floral artistry, and lighting palettes executed to transform venues into immersive journeys.",
    image: "https://prideeventz.in/assets/home/decoration-home.webp",
  },
  {
    id: "brand",
    title: "Brand Promotions",
    description:
      "Experiential activations that amplify visibility and drive unforgettable brand interactions with your audiences.",
    image: "https://prideeventz.in/assets/home/brand-home.webp",
  },
  {
    id: "post",
    title: "Post Event Amplification",
    description:
      "Measurement, media capture, and feedback loops ensuring every project keeps resonating after the lights dim.",
    image: "https://prideeventz.in/assets/home/banner-home.webp",
  },
  {
    id: "exhibitions",
    title: "Exhibitions",
    description:
      "Immersive stands and showcases engineered to spotlight innovation, spark dialogue, and deliver measurable ROI.",
    image: "https://prideeventz.in/assets/home/banner2.png",
  },
];

const IMPACT_STATS = [
  { value: "500+", label: "events produced with precision" },
  { value: "200+", label: "corporate partners across industries" },
  { value: "50+", label: "luxury weddings curated to perfection" },
  { value: "99%", label: "client satisfaction rate" },
];

const ABOUT_CONTENT = {
  mission:
    "We believe every celebration mirrors a powerful vision. Our role is to orchestrate meaningful encounters where creativity, precision, and passion converge.",
  vision:
    "To be the experiential partner brands and families trust when the stakes are highest and the memories must last forever.",
  cultureQuote: "We are a dynamic team turning innovative ideas into reality.",
  cultureTagline: "Bringing creative ideas to life",
};

const CAROUSEL_DURATION = 7000;

export default function Index() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <StickyShowreel />
      <EventsShowcase />
      <HeroCarousel />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}

function StickyShowreel() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = muted;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => undefined);
    }
  }, [muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration || Number.isNaN(video.duration)) {
        setProgress(0);
        return;
      }
      setProgress(video.currentTime / video.duration);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleTimeUpdate);
    };
  }, []);

  const toggleMute = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  return (
    <section
      id="hero"
      className="relative z-0 min-h-[85vh] w-full overflow-hidden bg-[#F3EFEB]"
      aria-labelledby="showreel-heading"
    >
      <div className="relative h-full w-full">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={SHOWREEL_VIDEO}
          poster={SHOWREEL_POSTER}
          autoPlay
          muted={muted}
          loop
          playsInline
          style={{
            backgroundImage: "url(https://www.pexels.com/download/video/2361938/)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-end gap-[20.8px] pb-14">
          <div className="grid w-full grid-cols-12 gap-[25.6px] px-[25.6px]">
            <div className="col-span-12 flex flex-col items-end md:col-start-10 md:col-end-13">
              <motion.span
                id="showreel-heading"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="overflow-hidden text-[28.8px] font-light uppercase tracking-[-1.152px] text-background"
              >
                Showreel
              </motion.span>
              <div className="pointer-events-auto mt-4 flex items-center gap-7">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[9.6px] font-semibold uppercase tracking-[0.32em] text-background"
                >
                  {muted ? "Muted" : "Unmuted"}
                </motion.span>
                <button
                  type="button"
                  className="group relative flex h-[38.4px] w-[38.4px] items-center justify-center rounded-full bg-background text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:rotate-6"
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute showreel" : "Mute showreel"}
                >
                  <motion.span
                    key={muted ? "muted" : "unmuted"}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                    className="text-foreground"
                  >
                    {muted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </motion.span>
                </button>
              </div>
            </div>
          </div>
          <div className="pointer-events-auto mx-[25.6px] h-[6.4px] w-[calc(100%-51.2px)] overflow-hidden rounded-full bg-background/40">
            <motion.div
              className="h-full rounded-full bg-[#E0FF98]"
              style={{ width: `${Math.min(progress, 1) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-25% 0px" });

  const focusLines = useMemo(
    () => ["Corporate Events", "Brand Promotions", "Experience Content"],
    [],
  );

  const descriptionLines = useMemo(
    () => [
      "From corporate summits to viral celebrations, we design experiences that align vision with impact.",
      "Pride Eventz weaves décor, entertainment, and logistics into effortless storytelling.",
      "Every moment is meticulously produced to forge connection and amplify your message.",
    ],
    [],
  );

  return (
    <section
      id="events"
      className="relative z-[5] h-[729.6px] w-full bg-[#F7FFDC]"
      aria-labelledby="events-heading"
    >
      <div
        ref={containerRef}
        className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-12 gap-[25.6px] px-[25.6px] py-16"
      >
        <div className="col-span-12 flex flex-col justify-between md:col-span-8">
          <motion.h2
            id="events-heading"
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="text-[128px] font-medium uppercase leading-[115.2px] tracking-[-3.84px]"
          >
            Events
          </motion.h2>
          <div className="grid grid-cols-1 gap-[25.6px] md:grid-cols-2">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-[128px] font-medium leading-[115.2px] tracking-[-3.84px]"
            >
              01
            </motion.div>
            <div className="space-y-4">
              {focusLines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ y: 60, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="overflow-hidden"
                >
                  <span className="block text-[38.4px] font-light leading-[46.08px] tracking-[-1.536px]">
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-8 space-y-3 text-[19.2px] font-light leading-[26.88px] text-foreground/80">
            {descriptionLines.map((line, index) => (
              <motion.p
                key={line}
                initial={{ y: 35, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  delay: 0.35 + index * 0.08,
                  duration: 0.7,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="mt-10"
          >
            <Link
              to="/service/events"
              className="group inline-flex items-center gap-6"
              style={{ perspective: "80px" }}
            >
              <span className="block text-[38.4px] font-medium tracking-[-0.768px]">
                See what we create
              </span>
              <span
                className="relative flex h-16 w-16 items-center justify-center rounded-[6.4px] bg-background text-foreground shadow-[0_14px_40px_rgba(30,30,30,0.18)] transition-transform duration-500 group-hover:-translate-y-1"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="text-2xl">→</span>
              </span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="col-span-12 hidden md:col-span-4 md:block"
        >
          <div className="h-full w-full overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(30,30,30,0.18)]">
            <img
              src="https://prideeventz.in/assets/home/corporate-events.webp"
              alt="Corporate event production by Pride Eventz"
              className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.76,0,0.24,1)] hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, CAROUSEL_DURATION);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    let start: number | null = null;

    const animateProgress = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const fraction = Math.min(elapsed / CAROUSEL_DURATION, 1);
      setProgress(fraction);
      if (fraction < 1) {
        animationFrame = window.requestAnimationFrame(animateProgress);
      }
    };

    animationFrame = window.requestAnimationFrame(animateProgress);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [activeIndex]);

  const goToSlide = (direction: "next" | "prev") => {
    setActiveIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % HERO_SLIDES.length;
      }
      return (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    });
  };

  const activeSlide = HERO_SLIDES[activeIndex];

  return (
    <section id="projects" className="relative h-[945px] bg-[#F3EFEB]">
      <div className="sticky top-0 h-full w-full overflow-hidden">
        <TextMaskOverlay />
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {HERO_SLIDES.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className={cn(
                  "absolute inset-0 h-full w-full",
                  index === activeIndex ? "z-10" : "z-0",
                )}
              >
                <div className="absolute inset-0 bg-black/30" />
                <img
                  src={slide.image}
                  alt={`${slide.titleLines[0]} visual`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-end pb-12">
          <div className="grid h-[50%] w-full grid-rows-[1fr_auto]">
            <div className="relative flex items-end">
              <div className="grid w-full grid-cols-12 gap-8 px-8 lg:px-16">
                <div className="col-span-12 lg:col-start-5 lg:col-end-13">
                  <div className="space-y-4">
                    {activeSlide.titleLines.map((line, index) => (
                      <motion.div
                        key={line}
                        initial={{ y: 120, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.1 + index * 0.12,
                          duration: 0.7,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <motion.h3 className="text-[80px] font-medium leading-[72px] text-white">
                          {line}
                        </motion.h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid w-full grid-cols-12 gap-8 px-8 lg:px-16">
              <div className="col-span-12 flex flex-col gap-6 lg:col-span-3 lg:col-start-5">
                <motion.span
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="inline-flex text-[36px] font-medium uppercase tracking-[-1.44px] text-white"
                >
                  {activeSlide.category}
                </motion.span>
                <motion.span
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.25,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="inline-flex text-[36px] font-medium uppercase tracking-[-1.44px] text-white/70"
                >
                  {activeSlide.location}
                </motion.span>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <div className="space-y-3 text-xl font-light leading-[33.6px] text-white/90">
                  {activeSlide.descriptionLines.map((line, index) => (
                    <motion.p
                      key={line}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.3 + index * 0.08,
                        duration: 0.6,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </div>
              <div className="col-span-12 flex items-center gap-4 lg:col-span-2 lg:col-start-3">
                <button
                  type="button"
                  onClick={() => goToSlide("prev")}
                  className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/80 text-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 lg:flex"
                  aria-label="Previous project"
                >
                  <span className="text-lg">←</span>
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide("next")}
                  className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/80 text-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 lg:flex"
                  aria-label="Next project"
                >
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative mt-12 px-8 lg:px-16">
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">
              <div className="space-y-2">
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="block text-[36px] font-medium uppercase tracking-[-1.44px]"
                >
                  Highlight
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.28,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="block text-[36px] font-medium uppercase tracking-[-1.44px]"
                >
                  projects
                </motion.span>
              </div>
            </div>
            <div className="ml-[200px] flex flex-wrap items-center gap-6">
              <Link
                to="/projects/filter"
                className="group relative inline-flex items-center gap-3 rounded-md bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-foreground"
                style={{ perspective: "180px" }}
              >
                <span className="relative z-10">View our work</span>
                <span className="relative z-10 text-lg">→</span>
                <span className="absolute inset-0 rounded-md border border-foreground/10" />
                <span className="absolute inset-0 rounded-md bg-primary/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            </div>
            <div className="mt-6 h-px w-full bg-white/40">
              <div
                className="h-full origin-left bg-[#E0FF98]"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextMaskOverlay() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1920 945"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="hero-text-mask">
          <rect width="100%" height="100%" fill="white" />
          <text
            x="50%"
            fontSize="160"
            fontWeight="500"
            letterSpacing="-4.8"
            textAnchor="middle"
            fill="black"
            fontFamily="ABCArizonaMix, Inter, sans-serif"
          >
            {HERO_MASK_LINES.map((line, index) => (
              <tspan key={line} x="50%" y={190 + index * 144}>
                {line}
              </tspan>
            ))}
          </text>
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="#E0FF98"
        mask="url(#hero-text-mask)"
      />
    </svg>
  );
}

function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-[3] bg-background py-28"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="inline-flex items-center justify-center rounded-full border border-foreground/10 bg-secondary px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70"
          >
            Our Service Suite
          </motion.span>
          <motion.h2
            id="services-heading"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="mt-6 text-[80px] font-medium leading-[72px] tracking-[-2.4px]"
          >
            Experiences crafted to resonate
          </motion.h2>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="mt-6 text-lg leading-relaxed text-foreground/70"
          >
            Pride Eventz delivers end-to-end event orchestration, blending
            precise logistics with creative storytelling to leave lasting
            impressions.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: 0.1 + index * 0.07,
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="group relative overflow-hidden rounded-[24px] border border-border/60 bg-secondary shadow-[0_20px_40px_rgba(30,30,30,0.08)]"
            >
              <div className="flex h-full flex-col">
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <span className="absolute left-6 top-6 text-sm uppercase tracking-[0.32em] text-background/80">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-6 p-8">
                  <h3 className="text-[36px] font-medium tracking-[-1.08px]">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/70">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-foreground/60">
                    <span>Discover more</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, margin: "-20% 0px" });

  return (
    <section id="about" className="relative z-[2] bg-[#F3EFEB] py-32">
      <div
        ref={containerRef}
        className="container grid gap-16 lg:grid-cols-[1.2fr_1fr]"
      >
        <div className="space-y-10">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="inline-flex items-center rounded-full border border-foreground/10 bg-background px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70"
          >
            About Pride Eventz
          </motion.span>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="text-[80px] font-medium leading-[72px] tracking-[-2.4px]"
          >
            Crafting unforgettable moments that echo beyond the event day.
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: 0.25,
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="grid gap-10 text-lg leading-relaxed text-foreground/75"
          >
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.08em]">
                Our Mission
              </h3>
              <p className="mt-3">{ABOUT_CONTENT.mission}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.08em]">
                Our Vision
              </h3>
              <p className="mt-3">{ABOUT_CONTENT.vision}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: 0.35,
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="rounded-[24px] border border-border/60 bg-background/70 p-10 shadow-[0_20px_40px_rgba(30,30,30,0.1)]"
          >
            <p className="text-xl font-light italic leading-relaxed text-foreground/80">
              “{ABOUT_CONTENT.cultureQuote}”
            </p>
            <span className="mt-4 block text-sm uppercase tracking-[0.32em] text-foreground/60">
              {ABOUT_CONTENT.cultureTagline}
            </span>
          </motion.div>
        </div>
        <div className="flex flex-col justify-between gap-12">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden rounded-[32px] shadow-[0_25px_60px_rgba(30,30,30,0.15)]"
          >
            <img
              src="https://prideeventz.in/assets/home/about-home.jpg"
              alt="Pride Eventz team orchestrating a celebration"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="grid grid-cols-2 gap-6"
          >
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] border border-border/60 bg-secondary p-8 text-center shadow-[0_16px_40px_rgba(30,30,30,0.1)]"
              >
                <span className="text-4xl font-semibold tracking-[-0.1em] text-foreground">
                  {stat.value}
                </span>
                <p className="mt-3 text-xs uppercase tracking-[0.32em] text-foreground/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

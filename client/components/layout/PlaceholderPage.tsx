import { Link } from "react-router-dom";

interface CTA {
  label: string;
  href: string;
}

interface PlaceholderPageProps {
  title: string;
  description: string;
  ctas?: CTA[];
}

const isExternalLink = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export function PlaceholderPage({ title, description, ctas = [] }: PlaceholderPageProps) {
  return (
    <section className="relative isolate overflow-hidden bg-secondary py-32" aria-labelledby="placeholder-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,255,152,0.45),transparent_55%)]" />
      <div className="container relative mx-auto grid gap-16 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex items-center justify-center rounded-full border border-foreground/10 bg-background px-4 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70">
            Coming Soon
          </span>
          <h1 id="placeholder-heading" className="text-5xl font-semibold tracking-[-0.08em] text-foreground">
            {title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/75">{description}</p>
        </div>
        <div className="flex flex-col justify-end gap-6 text-sm uppercase tracking-[0.28em] text-foreground/70">
          <p>
            We're curating this experience next. In the meantime, explore our hero showcase or connect with us for bespoke event concepts tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-4">
            {ctas.map((cta) => {
              const external = isExternalLink(cta.href);

              const sharedClasses =
                "group relative inline-flex items-center gap-3 rounded-md border border-foreground/20 bg-background px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-foreground transition-all duration-500 hover:-translate-y-1";

              if (external) {
                return (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target={cta.href.startsWith("http") ? "_blank" : undefined}
                    rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
                    className={sharedClasses}
                  >
                    <span className="relative z-10">{cta.label}</span>
                    <span className="relative z-10 text-lg">→</span>
                    <span className="absolute inset-0 rounded-md bg-primary/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </a>
                );
              }

              return (
                <Link key={cta.label} to={cta.href} className={sharedClasses}>
                  <span className="relative z-10">{cta.label}</span>
                  <span className="relative z-10 text-lg">→</span>
                  <span className="absolute inset-0 rounded-md bg-primary/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

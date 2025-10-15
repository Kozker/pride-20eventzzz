import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

type FooterLink =
  | { label: string; type: "section"; section: string }
  | { label: string; type: "route"; href: string };

const quickLinks: FooterLink[] = [
  { label: "Services", type: "section", section: "services" },
  { label: "Projects", type: "section", section: "projects" },
  { label: "About", type: "section", section: "about" },
  { label: "Contact", type: "route", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/prideeventz?igsh=NWgwbWU5NTViOGdl", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/share/18ACafCxTa/", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@mukeshvm09", icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/70 bg-foreground text-background">
      <div className="container grid gap-16 py-16 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary shadow-[0_10px_30px_rgba(224,255,152,0.4)]" />
            <div className="leading-tight">
              <span className="block text-sm uppercase tracking-[0.32em] text-background/80">Pride</span>
              <span className="block text-3xl font-semibold uppercase tracking-[-0.12em]">Eventz</span>
            </div>
          </div>
          <p className="mt-6 text-base leading-relaxed text-background/80">
            From corporate summits to destination weddings, Pride Eventz crafts immersive experiences that blend
            precision planning with unforgettable storytelling.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.32em] text-background/70">
            <span>Call</span>
            <a href="tel:+919895690349" className="text-background">
              +91 98956 90349
            </a>
            <span>Mail</span>
            <a href="mailto:info@prideeventz.in" className="text-background">
              info@prideeventz.in
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.36em]">Navigate</h3>
          <ul className="mt-6 space-y-4 text-sm uppercase tracking-[0.28em] text-background/70">
            {quickLinks.map((link) => {
              if (link.type === "route") {
                return (
                  <li key={link.label}>
                    <Link to={link.href} className="transition-colors duration-500 hover:text-background">
                      {link.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <Link
                    to="/"
                    state={{ scrollTo: link.section, timestamp: Date.now() }}
                    className="transition-colors duration-500 hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.36em]">Visit</h3>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-background/70">
            Mattekkattu Building, NX Joseph Road, Kundannur, Ernakulam-682304, Kochi, Kerala
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 bg-background/10 text-background transition-all duration-500 hover:-translate-y-1 hover:bg-background hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 bg-foreground/90 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.28em] text-background/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Pride Eventz. All rights reserved.</span>
          <span className="flex items-center gap-2">Crafted for experiences that last.</span>
        </div>
      </div>
    </footer>
  );
}

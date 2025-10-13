import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3 text-xl font-semibold tracking-[-0.08em]">
          <div className="relative h-10 w-10 rounded-full bg-primary shadow-[0_10px_30px_rgba(224,255,152,0.45)]" />
          <div className="leading-tight">
            <span className="block text-base uppercase tracking-[0.32em] text-foreground/80">
              Pride
            </span>
            <span className="block text-2xl font-semibold text-foreground">Eventz</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.28em] text-foreground/80">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `relative transition-colors duration-300 ${
                  isActive ? "text-foreground" : "hover:text-foreground"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <span className="flex flex-col items-center gap-1 text-xs">
                  <span>{link.label}</span>
                  <span
                    className={`h-1 w-6 rounded-full bg-primary transition-all duration-500 ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col text-right text-[0.65rem] uppercase tracking-[0.32em] text-foreground/70">
            <span>Call us</span>
            <a href="tel:+919895690349" className="text-sm font-medium tracking-[0.2em] text-foreground">
              +91 98956 90349
            </a>
          </div>
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 rounded-md bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-background transition-all duration-500"
          >
            <span className="relative z-10">Plan an event</span>
            <span className="relative z-10 text-lg leading-none">→</span>
            <span className="absolute inset-0 rounded-md border border-foreground/20" />
            <span className="absolute inset-0 rounded-md bg-primary/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/80 text-foreground lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 ease-smooth ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-border/70 bg-white/95 backdrop-blur-md`}
      >
        <div className="container flex flex-col gap-4 py-6 text-sm uppercase tracking-[0.28em] text-foreground/80">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-foreground" : "hover:text-foreground"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="tel:+919895690349"
            className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground/70"
          >
            +91 98956 90349
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-background"
            onClick={() => setIsOpen(false)}
          >
            Plan an event
          </Link>
        </div>
      </div>
    </header>
  );
}

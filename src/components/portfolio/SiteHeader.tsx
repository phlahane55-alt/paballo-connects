import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-3 text-left"
          aria-label="Paballo Hlahane — home"
        >
          <span className={cn(
            "flex size-9 items-center justify-center rounded-md text-sm font-semibold",
            scrolled ? "bg-navy text-navy-foreground" : "bg-navy-foreground/15 text-navy-foreground",
          )}>
            PH
          </span>
          <span className="hidden leading-tight sm:block">
            <span className={cn("block text-sm font-semibold", scrolled ? "text-navy" : "text-navy-foreground")}>
              Paballo Hlahane
            </span>
            <span className={cn("block text-[11px] uppercase tracking-[0.18em]", scrolled ? "text-muted-foreground" : "text-navy-foreground/70")}>
              Technology | Risk | Compliance
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    scrolled
                      ? "text-charcoal/80 hover:bg-secondary hover:text-navy"
                      : "text-navy-foreground/80 hover:bg-navy-foreground/10 hover:text-navy-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold transition-colors",
              scrolled
                ? "bg-navy text-navy-foreground hover:bg-navy-deep"
                : "border border-navy-foreground/35 text-navy-foreground hover:bg-navy-foreground/10",
            )}
          >
            Get In Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-md border transition-colors lg:hidden",
            scrolled
              ? "border-border text-navy hover:bg-secondary"
              : "border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-secondary hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

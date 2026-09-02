import { Linkedin, Github, Mail } from "lucide-react";
import { CONTACT, NAV_LINKS } from "./data";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-14 text-navy-foreground">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_auto]">
          <div>
            <p className="text-lg font-semibold">Paballo Innocentia Hlahane</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-accent">
              Technology | Risk | Compliance
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-foreground/75 underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-start gap-3">
            <li>
              <a
                href={CONTACT.linkedin}
                aria-label="LinkedIn profile (placeholder link)"
                className="flex size-10 items-center justify-center rounded-md border border-navy-foreground/20 transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin className="size-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={CONTACT.github}
                aria-label="GitHub profile (placeholder link)"
                className="flex size-10 items-center justify-center rounded-md border border-navy-foreground/20 transition-colors hover:border-accent hover:text-accent"
              >
                <Github className="size-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Email (placeholder address)"
                className="flex size-10 items-center justify-center rounded-md border border-navy-foreground/20 transition-colors hover:border-accent hover:text-accent"
              >
                <Mail className="size-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 border-t border-navy-foreground/12 pt-6 text-xs text-navy-foreground/60">
          © 2026 Paballo Innocentia Hlahane. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import { ArrowRight, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import { CONTACT, SKILL_STRIP } from "./data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-navy)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Aspiring Technology, Risk &amp; Compliance Professional
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
                Law. Technology. Risk. Compliance.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
                I am an LLB graduate in progress with a growing foundation in technology, data
                and cybersecurity. I am passionate about using technology, analytical thinking
                and regulatory knowledge to help organisations manage risk, improve processes
                and make informed decisions.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  View My Projects <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={CONTACT.cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/35 px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
                >
                  <Download className="size-4" aria-hidden="true" /> Download My CV
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-navy-foreground/85 underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  <Mail className="size-4" aria-hidden="true" /> Get In Touch
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-xl border border-navy-foreground/15 shadow-lift">
              <img
                src={heroImage}
                alt="Abstract network of connected nodes forming a shield, representing technology risk and cybersecurity"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-navy-foreground/12 bg-navy-deep/50">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-4 sm:px-8">
          {SKILL_STRIP.map((skill) => (
            <li
              key={skill}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/70"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { Scale, Database, Search } from "lucide-react";
import { ABOUT_PARAGRAPHS, WHAT_I_BRING } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS = [Scale, Database, Search];

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About Me" title="Where law meets technology" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <Reveal key={p} delay={i * 90}>
                <p className="text-base leading-relaxed text-charcoal/85">{p}</p>
              </Reveal>
            ))}
          </div>
          <div>
            <Reveal>
              <h3 className="text-lg font-semibold text-navy">What I Bring</h3>
            </Reveal>
            <ul className="mt-5 space-y-4">
              {WHAT_I_BRING.map((item, i) => {
                const Icon = ICONS[i] ?? Scale;
                return (
                  <Reveal as="li" key={item.title} delay={i * 90}>
                    <div className="rounded-lg border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift">
                      <div className="flex items-start gap-4">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-navy">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h4 className="text-base font-semibold text-navy">{item.title}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

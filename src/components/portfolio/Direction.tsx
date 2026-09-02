import { ShieldCheck, Scale, Lock, Cloud } from "lucide-react";
import { CAREER_STATEMENT, DIRECTION } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS = [ShieldCheck, Scale, Lock, Cloud];

export function Direction() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-navy)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Where I'm Heading" title="The direction of my career" inverted />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIRECTION.map((item, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <Reveal as="li" key={item.title} delay={i * 80} className="h-full">
                <div className="h-full rounded-lg border border-navy-foreground/15 bg-navy-foreground/5 p-6 transition-colors hover:border-accent/50">
                  <Icon className="size-6 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold text-navy-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={120}>
          <p className="mt-10 max-w-3xl border-l-2 border-accent pl-5 text-base leading-relaxed text-navy-foreground/85">
            {CAREER_STATEMENT}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

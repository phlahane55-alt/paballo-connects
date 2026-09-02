import { SKILL_CATEGORIES, SOFT_SKILLS, SOFT_SKILLS_STATEMENT, type Level } from "./data";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

const LEVEL_STYLES: Record<Level, string> = {
  Learning: "bg-secondary text-charcoal/70",
  Foundational: "bg-navy/10 text-navy",
  Developing: "bg-accent/20 text-accent-foreground",
};

export function Skills() {
  return (
    <section id="skills" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Skills I am building"
          intro="An honest view of where my technical knowledge currently sits, labelled by learning stage rather than claimed expertise."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <div className="h-full rounded-lg border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift">
                <h3 className="text-lg font-semibold text-navy">{cat.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-3 border-b border-border/70 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-charcoal/85">{s.name}</span>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
                          LEVEL_STYLES[s.level],
                        )}
                      >
                        {s.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="text-2xl font-semibold text-navy">Soft Skills</h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {SOFT_SKILLS_STATEMENT}
            </p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {SOFT_SKILLS.map((skill, i) => (
              <Reveal as="li" key={skill} delay={Math.min(i, 8) * 45}>
                <div className="flex h-full items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-soft transition-colors hover:border-navy/30">
                  <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-sm font-medium text-charcoal/85">{skill}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

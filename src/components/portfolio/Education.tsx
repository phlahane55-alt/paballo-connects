import { GraduationCap, BookOpen } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
  {
    icon: GraduationCap,
    title: "Bachelor of Laws (LLB)",
    org: "University of South Africa (UNISA)",
    status: "In Progress",
    body: "Highlights: legal research, regulatory analysis, critical thinking, legal writing and communication.",
  },
  {
    icon: BookOpen,
    title: "Continuous Professional Development",
    org: "Self-directed and structured online learning",
    status: "Ongoing",
    body: "Alongside my legal studies I am actively developing technical skills in cloud computing, SQL, Power BI, data analytics and cybersecurity through structured courses and independent learning.",
  },
];

export function Education() {
  return (
    <section id="education" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education & Learning" title="Academic and technical foundation" />

        <ol className="mt-12 relative border-l border-border pl-6 sm:pl-10">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 100} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[13px] flex size-6 items-center justify-center rounded-full border border-border bg-background"
                aria-hidden="true"
              >
                <span className="size-2 rounded-full bg-accent" />
              </span>
              <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
                <div className="flex flex-wrap items-center gap-3">
                  <item.icon className="size-5 text-navy" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <span className="rounded-full bg-navy/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy">
                    Status: {item.status}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-charcoal/80">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { useMemo, useState } from "react";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS, type ProjectCategory } from "./data";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.categories.includes(active as never)),
    [active],
  );

  return (
    <section id="projects" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Applied learning in practice"
          intro="Practical projects that show how I apply data, cloud and risk thinking. Project links and screenshots are placeholders and can be updated at any time."
        />

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === filter
                  ? "border-navy bg-navy text-navy-foreground"
                  : "border-border bg-card text-charcoal/80 hover:border-navy/40 hover:text-navy",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal as="li" key={project.title} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
                <div
                  className="flex aspect-video items-center justify-center border-b border-border bg-secondary text-muted-foreground"
                  role="img"
                  aria-label={`Screenshot placeholder for ${project.title}`}
                >
                  <span className="flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]">
                    <ImageIcon className="size-6" aria-hidden="true" />
                    Screenshot placeholder
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-navy/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-navy">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-charcoal/85">Goal: </span>
                    {project.goal}
                  </p>

                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Tools
                      </dt>
                      <dd className="mt-1.5 flex flex-wrap gap-1.5">
                        {project.tools.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-border px-2 py-0.5 text-xs text-charcoal/80"
                          >
                            {t}
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Skills
                      </dt>
                      <dd className="mt-1 text-sm text-charcoal/80">
                        {project.skills.join(" · ")}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    <a
                      href={project.projectUrl}
                      className="inline-flex items-center gap-2 rounded-md bg-navy px-3.5 py-2 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep"
                      aria-label={`View project: ${project.title} (link placeholder)`}
                    >
                      <ExternalLink className="size-4" aria-hidden="true" /> View Project
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm font-semibold text-charcoal/85 transition-colors hover:border-navy/40 hover:text-navy"
                      aria-label={`GitHub repository for ${project.title} (link placeholder)`}
                    >
                      <Github className="size-4" aria-hidden="true" /> GitHub
                    </a>
                  </div>
                  <p className="mt-3 text-[11px] text-muted-foreground">
                    Links are editable placeholders.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

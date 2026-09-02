import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certifications & Professional Development"
          title="Courses and learning pathways"
          intro="Certificates are available to view where a copy is on file."
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal as="li" key={cert.title} delay={Math.min(i, 6) * 70} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift">
                <div className="flex items-start justify-between gap-3">
                  <Award className="size-5 text-navy" aria-hidden="true" />
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-charcoal/75">
                    {cert.status}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{cert.title}</h3>
                <p className="mt-1 text-sm text-charcoal/75">{cert.issuer}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cert.note}
                </p>
                <dl className="mt-4 space-y-1 text-xs text-muted-foreground">
                  <div className="flex gap-2">
                    <dt className="font-semibold uppercase tracking-wide">Year:</dt>
                    <dd>{cert.year ?? "In progress"}</dd>
                  </div>
                </dl>
                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy underline-offset-4 hover:underline"
                    aria-label={`View certificate for ${cert.title} (opens PDF in a new tab)`}
                  >
                    <ExternalLink className="size-4" aria-hidden="true" /> View certificate
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

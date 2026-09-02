import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Github, MapPin, Download, FileText } from "lucide-react";
import { CONTACT } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          intro="I am always open to conversations about technology risk, compliance, data and cybersecurity. Please feel free to reach out about opportunities, collaboration or professional networking."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate={false}
              className="rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-navy"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-navy"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-navy"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-navy"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep"
              >
                <Mail className="size-4" aria-hidden="true" /> Send Message
              </button>

              <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
                {submitted
                  ? "Thank you. This form is a front-end demonstration only — no message has been sent yet. Please email directly using the address listed, or connect a form service to enable sending."
                  : "Note: this form is not connected to a mail service yet, so submissions are not delivered. It is ready to be connected later."}
              </p>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={90}>
              <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-navy">Contact details</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Editable placeholders
                </p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 text-navy" aria-hidden="true" />
                    <span>
                      <span className="block font-medium text-charcoal">Email</span>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-muted-foreground underline-offset-4 hover:text-navy hover:underline"
                      >
                        {CONTACT.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Linkedin className="mt-0.5 size-4 text-navy" aria-hidden="true" />
                    <span>
                      <span className="block font-medium text-charcoal">LinkedIn</span>
                      <a
                        href={CONTACT.linkedin}
                        className="text-muted-foreground underline-offset-4 hover:text-navy hover:underline"
                      >
                        {CONTACT.linkedin}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Github className="mt-0.5 size-4 text-navy" aria-hidden="true" />
                    <span>
                      <span className="block font-medium text-charcoal">GitHub</span>
                      <a
                        href={CONTACT.github}
                        className="text-muted-foreground underline-offset-4 hover:text-navy hover:underline"
                      >
                        {CONTACT.github}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 text-navy" aria-hidden="true" />
                    <span>
                      <span className="block font-medium text-charcoal">Location</span>
                      <span className="text-muted-foreground">{CONTACT.location}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-lg border border-border bg-navy p-6 text-navy-foreground shadow-soft">
                <FileText className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold">My CV</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/80">
                  My CV provides a fuller view of my studies, technical learning and the skills I
                  am developing in technology, risk and compliance. It can be downloaded below and
                  is updated as I complete further courses and projects.
                </p>
                <a
                  href={CONTACT.cvUrl}
                  download
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Download className="size-4" aria-hidden="true" /> Download CV
                </a>
                <p className="mt-3 text-xs text-navy-foreground/60">
                  Links to /cv.pdf — replace the file at public/cv.pdf to update it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

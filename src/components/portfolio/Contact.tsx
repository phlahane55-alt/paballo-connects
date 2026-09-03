import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Github, MapPin, Download, FileText } from "lucide-react";
import { CONTACT } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

type Field = "name" | "email" | "subject" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Please enter a valid email address, for example name@example.com.";
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  else if (values.message.trim().length < 10)
    errors.message = "Please provide at least 10 characters.";
  return errors;
}

const FIELD_CLASS =
  "mt-2 w-full rounded-md border bg-background px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-navy";

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ready" | "invalid">("idle");

  function update(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      const first = document.getElementById(Object.keys(nextErrors)[0]!);
      first?.focus();
      return;
    }
    setStatus("ready");
  }

  function errorProps(field: Field) {
    return errors[field]
      ? { "aria-invalid": true as const, "aria-describedby": `${field}-error` }
      : {};
  }

  const borderFor = (field: Field) => (errors[field] ? "border-destructive" : "border-input");

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
              noValidate
              className="rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={`${FIELD_CLASS} ${borderFor("name")}`}
                    {...errorProps("name")}
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={`${FIELD_CLASS} ${borderFor("email")}`}
                    {...errorProps("email")}
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal">
                    Subject <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={values.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={`${FIELD_CLASS} ${borderFor("subject")}`}
                    {...errorProps("subject")}
                  />
                  {errors.subject ? (
                    <p id="subject-error" className="mt-1.5 text-xs text-destructive">
                      {errors.subject}
                    </p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${FIELD_CLASS} ${borderFor("message")}`}
                    {...errorProps("message")}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 text-xs text-destructive">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep"
              >
                <Mail className="size-4" aria-hidden="true" /> Send Message
              </button>

              <div aria-live="polite" className="mt-4 text-sm">
                {status === "ready" ? (
                  <p className="rounded-md border border-border bg-secondary px-3 py-2.5 text-charcoal/85">
                    Your details are valid and ready to send. Email delivery is not configured on
                    this site yet, so nothing has been sent. Please email{" "}
                    <a
                      href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(values.subject)}`}
                      className="font-semibold text-navy underline underline-offset-4"
                    >
                      {CONTACT.email}
                    </a>{" "}
                    directly in the meantime.
                  </p>
                ) : null}
                {status === "invalid" ? (
                  <p className="rounded-md border border-destructive/40 px-3 py-2.5 text-destructive">
                    Please correct the highlighted fields and try again.
                  </p>
                ) : null}
                {status === "idle" ? (
                  <p className="text-muted-foreground">
                    All fields are required. Email delivery is not connected yet — the quickest
                    route is a direct email.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={90}>
              <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-navy">Contact details</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {CONTACT.title}
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-muted-foreground underline-offset-4 hover:text-navy hover:underline"
                      >
                        linkedin.com/in/paballo-innocentia-h-a252b127
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Github className="mt-0.5 size-4 text-navy" aria-hidden="true" />
                    <span>
                      <span className="block font-medium text-charcoal">GitHub</span>
                      <a
                        href={CONTACT.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-muted-foreground underline-offset-4 hover:text-navy hover:underline"
                      >
                        github.com/phlahane55-alt
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
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Paballo_Hlahane_CV.pdf"
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Download className="size-4" aria-hidden="true" /> Download CV (PDF)
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

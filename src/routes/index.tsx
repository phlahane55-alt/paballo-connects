import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Direction } from "@/components/portfolio/Direction";
import { Contact } from "@/components/portfolio/Contact";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

const TITLE = "Paballo Hlahane | LLB Candidate, Technology, Risk & Compliance";
const DESCRIPTION =
  "Portfolio of Paballo Hlahane, an early-career technology, risk and compliance professional with an LLB in progress and growing skills in cloud, data analytics, SQL, Power BI and cybersecurity.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Paballo Hlahane",
          jobTitle: "LLB Candidate | Technology, Risk & Compliance",
          email: "mailto:phlahane55@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Johannesburg", addressCountry: "ZA" },
          sameAs: [
            "https://github.com/phlahane55-alt",
            "https://www.linkedin.com/in/paballo-innocentia-h-a252b127",
          ],
          description: DESCRIPTION,
          knowsAbout: [
            "Technology Risk",
            "Compliance",
            "Cybersecurity",
            "Cloud Computing",
            "Data Analytics",
            "SQL",
            "Power BI",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-navy-foreground"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Direction />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

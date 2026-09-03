/**
 * EDITABLE CONTENT — update the placeholders below with real details.
 */
import cvAsset from "@/assets/Paballo_Hlahane_CV.pdf.asset.json";
import fnbCert from "@/assets/certificates/fnb-app-academy.asset.json";
import sancsCert from "@/assets/certificates/sancs.asset.json";
import powerBiCert from "@/assets/certificates/power-bi.asset.json";
import dataEngineeringCert from "@/assets/certificates/data-engineering.asset.json";

export const CONTACT = {
  name: "Paballo Hlahane",
  title: "LLB Candidate | Technology, Risk & Compliance",
  email: "phlahane55@gmail.com",
  linkedin: "https://www.linkedin.com/in/paballo-innocentia-h-a252b127",
  github: "https://github.com/phlahane55-alt",
  location: "Johannesburg, South Africa",
  cvUrl: cvAsset.url, // Paballo_Hlahane_CV.pdf
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_STRIP = [
  "Cloud",
  "Data Analytics",
  "SQL",
  "Power BI",
  "Cybersecurity",
  "Risk & Compliance",
];

export const ABOUT_PARAGRAPHS = [
  "I am interested in the intersection of law, technology and business risk. As organisations continue to digitise, the need for professionals who understand both regulatory requirements and technology has grown, and that is the space I am building my career in.",
  "Alongside my LLB studies, I am actively developing technical skills in cloud computing, SQL, Power BI, data analytics and cybersecurity through structured courses and self-directed learning. This combination allows me to look at a problem from both a legal and a technical perspective.",
  "My long-term goal is to work in technology risk, governance and compliance, helping organisations use technology responsibly, meet their regulatory obligations and make better informed decisions.",
];

export const WHAT_I_BRING = [
  {
    title: "Legal & Regulatory Thinking",
    body: "Legal principles, research, documentation and compliance.",
  },
  {
    title: "Technology & Data",
    body: "Cloud, SQL, Power BI, data analytics and cybersecurity.",
  },
  {
    title: "Analytical Problem Solving",
    body: "Research, analyse information, identify risks and communicate findings clearly.",
  },
];

export type Level = "Learning" | "Foundational" | "Developing";

export const SKILL_CATEGORIES: {
  title: string;
  skills: { name: string; level: Level }[];
}[] = [
  {
    title: "Cloud & Technology",
    skills: [
      { name: "Google Cloud Fundamentals", level: "Foundational" },
      { name: "Cloud Computing Concepts", level: "Foundational" },
      { name: "Cloud Infrastructure Fundamentals", level: "Learning" },
      { name: "Microsoft / Cloud Technology Concepts", level: "Learning" },
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "SQL", level: "Developing" },
      { name: "Microsoft Power BI", level: "Developing" },
      { name: "Data Analysis", level: "Developing" },
      { name: "Data Visualisation", level: "Foundational" },
      { name: "Excel", level: "Foundational" },
      { name: "DataCamp coursework", level: "Learning" },
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      { name: "Cybersecurity Fundamentals", level: "Foundational" },
      { name: "Information Security Concepts", level: "Learning" },
      { name: "Cyber Risk Awareness", level: "Developing" },
      { name: "Security & Privacy Concepts", level: "Learning" },
    ],
  },
  {
    title: "Governance, Risk & Compliance",
    skills: [
      { name: "Risk Assessment", level: "Developing" },
      { name: "Compliance Concepts", level: "Developing" },
      { name: "Regulatory Research", level: "Developing" },
      { name: "Governance", level: "Foundational" },
      { name: "Legal Research & Regulatory Analysis", level: "Developing" },
      { name: "Policy & Documentation", level: "Foundational" },
    ],
  },
];

export const SOFT_SKILLS = [
  "Analytical Thinking",
  "Problem Solving",
  "Research",
  "Attention to Detail",
  "Communication",
  "Adaptability",
  "Time Management",
  "Organisation",
  "Critical Thinking",
  "Continuous Learning",
  "Teamwork",
  "Professional Writing",
];

export const SOFT_SKILLS_STATEMENT =
  "I combine analytical thinking, legal reasoning and a willingness to continuously learn with a practical interest in technology.";

export const PROJECT_FILTERS = [
  "All",
  "Cloud",
  "Data",
  "Cybersecurity",
  "Risk & Compliance",
] as const;

export type ProjectCategory = (typeof PROJECT_FILTERS)[number];

export type Project = {
  title: string;
  categories: Exclude<ProjectCategory, "All">[];
  goal: string;
  tools: string[];
  skills: string[];
  projectUrl: string | null;
  githubUrl: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Risk & Compliance Dashboard",
    categories: ["Data", "Risk & Compliance"],
    goal: "A dashboard concept designed to present risk and compliance information in a clear, visual format so that decision makers can review key indicators, spot areas of concern and understand reporting at a glance.",
    tools: ["Power BI", "Excel", "Data Analysis"],
    skills: [
      "Data cleaning",
      "Visualisation",
      "Risk analysis",
      "Dashboard design",
      "Reporting",
    ],
    projectUrl: null,
    githubUrl: CONTACT.github,
  },
  {
    title: "SQL Data Analysis Project",
    categories: ["Data"],
    goal: "A data analysis exercise using SQL to query, filter and summarise information from relational tables in order to answer practical questions and draw structured conclusions from the underlying data.",
    tools: ["SQL", "Relational databases", "Data analysis"],
    skills: [
      "SQL queries",
      "Data manipulation",
      "Aggregations",
      "Exploration",
      "Analytical reasoning",
    ],
    projectUrl: null,
    githubUrl: CONTACT.github,
  },
  {
    title: "Cloud & Cybersecurity Fundamentals Project",
    categories: ["Cloud", "Cybersecurity"],
    goal: "A foundational project applying cloud and cybersecurity concepts to consider how services are structured, where risks may arise and which security controls and documentation support safer use of technology.",
    tools: ["Google Cloud", "Cloud concepts", "Cybersecurity concepts"],
    skills: [
      "Cloud fundamentals",
      "Cybersecurity awareness",
      "Risk identification",
      "Security controls",
      "Technical documentation",
    ],
    projectUrl: null,
    githubUrl: CONTACT.github,
  },
];

export type Certification = {
  title: string;
  issuer: string;
  note: string;
  status: string;
  year: string | null;
  certificateUrl: string | null;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Certificate in Full Stack Development — FNB App Academy",
    issuer: "FNB App Academy (issued by ITVarsity)",
    note: "Certificate completed, 32 credits.",
    status: "Completed",
    year: "2025",
    certificateUrl: fnbCert.url,
  },
  {
    title: "Introduction to Power BI",
    issuer: "DataCamp",
    note: "Completed on DataCamp (4-hour course).",
    status: "Completed",
    year: "2026",
    certificateUrl: powerBiCert.url,
  },
  {
    title: "Understanding Data Engineering",
    issuer: "DataCamp",
    note: "Completed on DataCamp (2-hour course), part of ongoing data analytics and technical learning.",
    status: "Completed",
    year: "2026",
    certificateUrl: dataEngineeringCert.url,
  },
  {
    title: "Southern Africa – Netherlands Cyber Security School (SANCS), 3rd Edition",
    issuer: "SANCS — Stellenbosch University & The Hague Centre for Strategic Studies",
    note: "Certificate of attendance for the cyber security programme; professional development in cybersecurity.",
    status: "Completed",
    year: "2026",
    certificateUrl: sancsCert.url,
  },
];

export const DIRECTION = [
  {
    title: "Technology Risk",
    body: "Identifying and managing technology risks within organisations.",
  },
  {
    title: "Compliance",
    body: "Supporting legal and regulatory compliance requirements.",
  },
  {
    title: "Cybersecurity",
    body: "Information security, security controls and cyber risk.",
  },
  {
    title: "Cloud & Technology",
    body: "Building technical knowledge of cloud and modern technology.",
  },
];

export const CAREER_STATEMENT =
  "I am open to opportunities, learnerships, internships and graduate roles in technology risk, compliance, governance, data analytics and cybersecurity where I can apply my legal knowledge and continue developing my technical skills.";

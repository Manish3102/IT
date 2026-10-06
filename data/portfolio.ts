/**
 * PLACEHOLDER PROJECTS
 * These are representative project concepts, NOT real client work.
 * Replace each entry with a real case study (client name only with permission)
 * and set `placeholder: false`.
 */
export type Project = {
  slug: string;
  title: string;
  industry: string;
  technologies: string[];
  summary: string;
  challenge: string;
  approach: string[];
  features: string[];
  /** visual style for the generated cover art */
  visual: "dashboard" | "kanban" | "store" | "marketing" | "saas";
  placeholder: boolean;
};

export const projects: Project[] = [
  {
    slug: "fintech-management-platform",
    title: "FinTech Management Platform",
    industry: "FinTech",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Kafka", "AWS"],
    summary: "A fund operations platform for pricing, reconciliation and reporting with full audit trails.",
    challenge: "Finance teams juggling spreadsheets for pricing, reconciliation and NAV reporting, with limited auditability and frequent manual errors.",
    approach: ["Event-driven architecture with Kafka for reliable data flows", "Role-based access with maker–checker approvals", "Automated reconciliation with exception queues"],
    features: ["Real-time portfolio dashboard", "Custodian vs books reconciliation", "Configurable reports and exports", "Complete audit history"],
    visual: "dashboard",
    placeholder: true,
  },
  {
    slug: "business-management-system",
    title: "Business Management System",
    industry: "Professional Services",
    technologies: ["React", ".NET", "SQL Server", "Azure AD"],
    summary: "An all-in-one internal system for projects, clients, invoicing and team utilisation.",
    challenge: "A growing services business running operations across disconnected tools, with no single view of projects, people and revenue.",
    approach: ["Process mapping workshops with each department", "Modular build so teams onboarded in phases", "SSO with existing company accounts"],
    features: ["Project and task boards", "Client and contract records", "Automated invoicing", "Utilisation analytics"],
    visual: "kanban",
    placeholder: true,
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    industry: "Retail",
    technologies: ["Next.js", "Laravel", "MySQL", "Razorpay"],
    summary: "A fast, mobile-first storefront with integrated payments, inventory and order management.",
    challenge: "A retail brand outgrowing a template store — slow pages, manual stock updates and a checkout that lost customers.",
    approach: ["Headless storefront for sub-second page loads", "Inventory sync across warehouse and marketplaces", "Simplified one-page checkout with UPI"],
    features: ["Product search and filters", "Razorpay & UPI checkout", "Order tracking", "Admin dashboard"],
    visual: "store",
    placeholder: true,
  },
  {
    slug: "digital-marketing-website",
    title: "Digital Marketing Website",
    industry: "Education",
    technologies: ["Next.js", "Tailwind CSS", "GA4", "Google Ads"],
    summary: "A conversion-focused website and campaign funnel built to generate qualified enquiries.",
    challenge: "Strong offline reputation, but a dated website that ranked poorly and converted little of its paid traffic.",
    approach: ["SEO-first information architecture", "Dedicated landing pages per campaign", "Full conversion tracking with GA4"],
    features: ["Programme landing pages", "Enquiry forms with CRM sync", "Blog and resources hub", "Campaign analytics"],
    visual: "marketing",
    placeholder: true,
  },
  {
    slug: "custom-saas-application",
    title: "Custom SaaS Application",
    industry: "Startups",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    summary: "A multi-tenant SaaS product with subscriptions, team workspaces and usage analytics.",
    challenge: "A founder with a validated idea needing a production-grade product quickly, without accumulating technical debt.",
    approach: ["Focused MVP scope agreed in discovery", "Multi-tenant architecture from day one", "Weekly demos and continuous deployment"],
    features: ["Team workspaces and roles", "Stripe subscriptions", "Usage analytics", "Onboarding flows"],
    visual: "saas",
    placeholder: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

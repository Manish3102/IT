import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Briefcase,
  Code,
  Compass,
  Cpu,
  Headphones,
  Layers,
  LineChart,
  MessagesSquare,
  PenTool,
  Plug,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Target,
  TestTube2,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";

export const whyChoose: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "Business-Focused Solutions", desc: "We build technology around real business requirements — every feature has to earn its place.", icon: Target },
  { title: "Modern Technology", desc: "We use modern development frameworks and cloud technologies that are proven in production.", icon: Cpu },
  { title: "Scalable Architecture", desc: "Our solutions are designed to grow with your users, data and team — without costly rewrites.", icon: Layers },
  { title: "Transparent Communication", desc: "Clear communication throughout the development lifecycle: weekly demos, shared boards, no surprises.", icon: MessagesSquare },
  { title: "Security & Performance", desc: "Secure coding practices, testing and performance budgets built into every release.", icon: ShieldCheck },
  { title: "Long-Term Support", desc: "We continue supporting and improving solutions after launch, as a partner rather than a vendor.", icon: Headphones },
];

export const processSteps: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  { step: "01", title: "Discovery", desc: "Understand your business, requirements and goals through focused workshops.", icon: Compass },
  { step: "02", title: "Strategy", desc: "Create the technical and product strategy, scope and delivery roadmap.", icon: Workflow },
  { step: "03", title: "UI/UX Design", desc: "Design intuitive and modern user experiences, validated with prototypes.", icon: PenTool },
  { step: "04", title: "Development", desc: "Build scalable and secure solutions in short, demo-able iterations.", icon: Code },
  { step: "05", title: "Testing", desc: "Perform functional, performance and security testing before every release.", icon: TestTube2 },
  { step: "06", title: "Deployment", desc: "Deploy the application to production with automated, zero-drama releases.", icon: Rocket },
  { step: "07", title: "Support", desc: "Provide continuous maintenance, monitoring and optimisation.", icon: Headphones },
];

export const solutions: { title: string; desc: string; icon: LucideIcon; href: string }[] = [
  { title: "Custom Business Software", desc: "Tailored platforms that digitise your core operations end to end.", icon: Briefcase, href: "/software-development" },
  { title: "CRM Solutions", desc: "Track leads, customers and pipeline in a CRM shaped around your sales process.", icon: Users, href: "/software-development" },
  { title: "ERP Solutions", desc: "Unify inventory, finance, HR and procurement in one connected system.", icon: Layers, href: "/software-development" },
  { title: "FinTech Applications", desc: "Secure payment, lending, investment and reconciliation applications.", icon: Wallet, href: "/industries" },
  { title: "E-Commerce Platforms", desc: "Fast, scalable stores with integrated payments and order management.", icon: ShoppingBag, href: "/ecommerce-development" },
  { title: "Business Automation", desc: "Automate approvals, notifications and repetitive work across teams.", icon: Bot, href: "/software-integration" },
  { title: "Reporting & Analytics", desc: "Dashboards and reports that turn raw data into business decisions.", icon: BarChart3, href: "/software-development" },
  { title: "API Integrations", desc: "Connect your tools, partners and payment systems reliably.", icon: Plug, href: "/software-integration" },
];

export const marketingServices: { title: string; icon: LucideIcon }[] = [
  { title: "SEO", icon: LineChart },
  { title: "Social Media Marketing", icon: Users },
  { title: "Google Ads", icon: Target },
  { title: "Meta Ads", icon: MessagesSquare },
  { title: "Content Marketing", icon: PenTool },
  { title: "Local SEO", icon: Compass },
  { title: "Brand Strategy", icon: Layers },
  { title: "Lead Generation", icon: Rocket },
  { title: "Analytics & Reporting", icon: BarChart3 },
];

export const generalFaqs: { q: string; a: string }[] = [
  {
    q: "What is Techscalify?",
    a: "Techscalify (also written TechScalify or Tech Scalify) is an IT services and software development company that helps businesses build custom software, websites, mobile apps, cloud solutions, and grow with digital marketing and SEO.",
  },
  {
    q: "What services does Techscalify offer?",
    a: "Techscalify offers software development, web and mobile app development, UI/UX design, cloud & DevOps, API and backend development, e-commerce, software integration, IT consulting, IT support & maintenance, digital marketing and SEO.",
  },
  {
    q: "Where is Techscalify based?",
    a: "Techscalify is based in India and serves clients worldwide. We collaborate remotely across time zones with regular video calls and shared project boards.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with businesses in India and internationally, collaborating remotely across time zones with regular video calls and shared project boards.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed-scope projects are priced after a discovery call so estimates are realistic. Ongoing work such as support, marketing or dedicated development is offered as a monthly engagement.",
  },
  {
    q: "How do we get started with Techscalify?",
    a: "Book a free consultation or send us an inquiry via the Contact page. We'll discuss your goals, then share a proposal with scope, timeline and cost.",
  },
  {
    q: "Will we own the code and designs?",
    a: "Yes. On completion and settlement, all source code, designs and project assets belong to you.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We're happy to sign a mutual NDA before you share sensitive details about your business or idea.",
  },
];

/**
 * Testimonials — intentionally empty.
 * Add REAL client testimonials (with permission) and the section appears automatically.
 * Example: { quote: "...", name: "Full Name", role: "Title, Company" }
 */
export const testimonials: { quote: string; name: string; role: string }[] = [];

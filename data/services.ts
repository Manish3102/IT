import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Cable,
  Cloud,
  Code,
  Globe,
  Lightbulb,
  LifeBuoy,
  Megaphone,
  Palette,
  Search,
  Server,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

export type ServiceCategory = "development" | "growth" | "technology";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  category: ServiceCategory;
  /** H1 on the service page */
  headline: string;
  intro: string;
  offerings: { id?: string; title: string; desc: string }[];
  outcomes: string[];
  tech: string[];
  faqs: { q: string; a: string }[];
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom software applications designed around your business processes.",
    icon: Boxes,
    category: "development",
    headline: "Custom Software Built Around the Way Your Business Works",
    intro:
      "Off-the-shelf tools force your team to adapt to someone else's workflow. We design and build custom software that fits your processes, removes manual work and scales as your operations grow — from internal tools to full enterprise platforms.",
    offerings: [
      { title: "Custom Enterprise Software", desc: "Purpose-built platforms for operations, finance, HR, inventory and other core business functions." },
      { title: "SaaS Product Development", desc: "Multi-tenant SaaS products with subscriptions, role-based access and analytics built in from day one." },
      { title: "Workflow & Process Automation", desc: "Replace spreadsheets and repetitive tasks with reliable, auditable automated workflows." },
      { title: "Dashboards & Reporting", desc: "Real-time dashboards that turn operational data into decisions your leadership can act on." },
      { title: "Legacy Modernisation", desc: "Re-architect ageing systems onto modern stacks without disrupting day-to-day operations." },
      { title: "MVP Development", desc: "Validate new product ideas quickly with a focused, production-quality minimum viable product." },
    ],
    outcomes: [
      "Software that mirrors your real business process",
      "Less manual work and fewer data-entry errors",
      "An architecture that grows with users and data",
      "Full ownership of your source code and IP",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", ".NET", "Laravel", "PostgreSQL", "SQL Server", "Docker", "AWS"],
    faqs: [
      { q: "How long does a custom software project take?", a: "A focused MVP typically takes 6–12 weeks. Larger enterprise platforms are delivered in phases so you start getting value early, with timelines agreed after discovery." },
      { q: "Will we own the source code?", a: "Yes. Once the engagement is complete and settled, the source code and intellectual property belong to you." },
      { q: "Can you work with our existing systems?", a: "Yes. We regularly integrate new software with existing ERPs, CRMs, databases, payment gateways and third-party APIs." },
    ],
    metaDescription: "Custom software development by Techscalify — enterprise platforms, SaaS products, automation and dashboards built around your business processes.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, scalable, SEO-friendly websites and web applications.",
    icon: Globe,
    category: "development",
    headline: "High-Performance Websites and Web Applications",
    intro:
      "Your website is often the first conversation a customer has with your business. We build fast, secure and search-friendly websites and web applications using modern frameworks — designed to convert visitors and easy for your team to manage.",
    offerings: [
      { title: "Corporate & Business Websites", desc: "Premium, conversion-focused websites that communicate credibility and generate enquiries." },
      { title: "Web Applications", desc: "Portals, dashboards and customer-facing apps with secure authentication and real-time data." },
      { title: "Landing Pages", desc: "Campaign-ready landing pages built for speed, A/B testing and lead capture." },
      { title: "CMS Integration", desc: "Headless or traditional CMS setups so your team can update content without a developer." },
      { title: "Progressive Web Apps", desc: "App-like experiences in the browser that work offline and load instantly." },
      { title: "Performance Optimisation", desc: "Core Web Vitals improvements, image optimisation and caching for faster load times." },
    ],
    outcomes: [
      "Fast load times and strong Core Web Vitals",
      "SEO-ready structure and metadata from launch",
      "Responsive layouts that work on every device",
      "Accessible, secure and easy to maintain",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PHP", "Laravel", "WordPress", "Vercel"],
    faqs: [
      { q: "Do you build websites with Next.js?", a: "Yes — Next.js is our preferred framework for high-performance, SEO-friendly websites and web apps. We also work with Laravel and WordPress when it suits the project." },
      { q: "Will my website be mobile-friendly?", a: "Every site we build is designed mobile-first and tested across phones, tablets, laptops and desktops." },
      { q: "Can I update the content myself?", a: "Yes. We can connect a CMS so your team can edit pages, blogs and media without touching code." },
    ],
    metaDescription: "Web development by Techscalify — fast, SEO-friendly business websites, web applications and PWAs built with Next.js, React and modern tooling.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Modern Android and iOS applications with intuitive experiences.",
    icon: Smartphone,
    category: "development",
    headline: "Mobile Apps Your Customers Will Actually Enjoy Using",
    intro:
      "We design and develop Android and iOS applications that feel fast, intuitive and reliable — backed by secure APIs and analytics so you can keep improving after launch.",
    offerings: [
      { title: "Cross-Platform Apps", desc: "One codebase for Android and iOS using Flutter or React Native — faster delivery, lower cost." },
      { title: "Native App Development", desc: "Kotlin and Swift apps when you need maximum performance or deep device integration." },
      { title: "App UI/UX Design", desc: "Platform-appropriate interfaces designed around real user journeys." },
      { title: "Backend & APIs for Apps", desc: "Secure, scalable backends, push notifications, authentication and admin panels." },
      { title: "App Store Launch", desc: "Store listings, compliance checks and release management for Google Play and the App Store." },
      { title: "App Maintenance", desc: "OS updates, crash monitoring, performance tuning and feature releases after launch." },
    ],
    outcomes: [
      "Smooth, intuitive experiences on Android and iOS",
      "Secure backend and data handling",
      "Analytics to understand how users engage",
      "Ongoing updates as platforms evolve",
    ],
    tech: ["Flutter", "React Native", "Kotlin", "Swift", "Node.js", "Firebase", "REST APIs", "PostgreSQL"],
    faqs: [
      { q: "Should I build native or cross-platform?", a: "For most business apps, cross-platform (Flutter or React Native) gives you both platforms faster. Native is the better choice for graphics-heavy apps or deep hardware integration — we'll advise during discovery." },
      { q: "Do you help publish the app?", a: "Yes. We handle store listings, builds, review submissions and release management." },
      { q: "Can you take over an existing app?", a: "Yes. We start with a code and architecture review, then stabilise and continue development." },
    ],
    metaDescription: "Mobile app development by Techscalify — Android, iOS and cross-platform apps with secure backends, intuitive UX and post-launch support.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Data-driven digital marketing strategies designed to generate growth.",
    icon: Megaphone,
    category: "growth",
    headline: "Digital Marketing That Turns Attention Into Revenue",
    intro:
      "Great technology needs an audience. Our digital marketing team plans and runs campaigns across search, social and content — measured against the numbers that matter to your business: qualified leads, sales and return on spend.",
    offerings: [
      { id: "social-media-marketing", title: "Social Media Marketing", desc: "Strategy, content calendars and community management across LinkedIn, Instagram and Facebook." },
      { id: "performance-marketing", title: "Performance Marketing", desc: "Google Ads and Meta Ads campaigns optimised for leads, conversions and ROAS." },
      { id: "content-marketing", title: "Content Marketing", desc: "Blogs, guides and thought-leadership content that builds authority and organic traffic." },
      { id: "lead-generation", title: "Lead Generation", desc: "Funnels, landing pages and nurture flows that turn traffic into qualified enquiries." },
      { id: "brand-strategy", title: "Brand Strategy", desc: "Positioning, messaging and visual consistency so your brand is recognisable everywhere." },
      { id: "analytics", title: "Analytics & Reporting", desc: "Conversion tracking, GA4 dashboards and clear monthly reports — no vanity metrics." },
    ],
    outcomes: [
      "A clear, channel-by-channel growth plan",
      "Campaigns measured on leads and revenue",
      "Consistent brand presence across platforms",
      "Transparent monthly reporting",
    ],
    tech: ["Google Ads", "Meta Ads", "Google Analytics 4", "Google Tag Manager", "Search Console", "HubSpot", "Semrush"],
    faqs: [
      { q: "How soon will I see results?", a: "Paid campaigns can generate leads within weeks of launch. SEO and content compound over 3–6 months. We set realistic expectations upfront for each channel." },
      { q: "Do you manage ad budgets?", a: "Yes. We plan, launch and optimise campaigns; ad spend is paid directly by you to the platform for full transparency." },
      { q: "What do your reports include?", a: "Spend, leads, cost per lead, conversions and next-month actions — explained in plain language." },
    ],
    metaDescription: "Digital marketing by Techscalify — social media, Google & Meta Ads, content marketing, lead generation and analytics focused on measurable growth.",
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Search engine optimization focused on visibility, traffic, and long-term growth.",
    icon: Search,
    category: "growth",
    headline: "SEO That Builds Visibility You Don't Have to Rent",
    intro:
      "Search engine optimisation brings in customers who are already looking for what you offer. We combine technical SEO, content strategy and local SEO to grow your organic visibility sustainably — without shortcuts that put your site at risk.",
    offerings: [
      { title: "Technical SEO Audit", desc: "Crawlability, indexing, Core Web Vitals, structured data and site architecture fixes." },
      { title: "On-Page Optimisation", desc: "Keyword-aligned titles, headings, internal linking and content improvements." },
      { title: "Local SEO", desc: "Google Business Profile optimisation and local signals to win searches near you." },
      { title: "Keyword & Content Strategy", desc: "Topic clusters and content plans mapped to what your buyers actually search." },
      { title: "Link Building", desc: "Ethical, relevance-first outreach to earn authority — no spammy link schemes." },
      { title: "SEO Reporting", desc: "Rankings, organic traffic and conversions tracked and explained every month." },
    ],
    outcomes: [
      "Higher visibility for high-intent searches",
      "A technically healthy, fast website",
      "Content that answers what buyers ask",
      "Compounding, long-term organic traffic",
    ],
    tech: ["Google Search Console", "Google Analytics 4", "Semrush", "Screaming Frog", "Schema.org", "PageSpeed Insights"],
    faqs: [
      { q: "Can you guarantee first-page rankings?", a: "No honest agency can guarantee rankings — search engines control them. We focus on proven practices and report transparently on progress." },
      { q: "How long does SEO take?", a: "Most sites see meaningful movement in 3–6 months, depending on competition, site health and content investment." },
      { q: "Do you do local SEO for Indian cities?", a: "Yes. We optimise Google Business Profiles and local landing pages for businesses targeting specific cities or regions." },
    ],
    metaDescription: "SEO services by Techscalify — technical SEO, on-page optimisation, local SEO, content strategy and ethical link building for long-term growth.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Modern, intuitive interfaces that improve usability and conversion.",
    icon: Palette,
    category: "technology",
    headline: "Interfaces That Feel Effortless — and Convert",
    intro:
      "Good design is how your product earns trust in the first few seconds. We research your users, map their journeys and design clean, accessible interfaces that make complex products feel simple.",
    offerings: [
      { title: "User Research", desc: "Interviews, competitor analysis and journey mapping to understand real user needs." },
      { title: "Wireframing & Prototyping", desc: "Clickable prototypes to validate flows before a single line of code is written." },
      { title: "UI Design", desc: "Modern, on-brand interfaces for web apps, mobile apps and websites." },
      { title: "Design Systems", desc: "Reusable components and tokens that keep every screen consistent as you scale." },
      { title: "Usability Testing", desc: "Test designs with real users and iterate on what actually causes friction." },
      { title: "UX Audits", desc: "Review existing products and prioritise fixes that improve conversion and retention." },
    ],
    outcomes: [
      "Fewer support tickets and confused users",
      "Higher conversion on key journeys",
      "Consistent, accessible design across the product",
      "Faster development with a ready design system",
    ],
    tech: ["Figma", "FigJam", "Design Tokens", "Prototyping", "WCAG 2.2", "Tailwind CSS"],
    faqs: [
      { q: "Do you only design, or also build?", a: "Both. Our designers work alongside our developers, so designs are built faithfully — or we can hand over production-ready Figma files to your team." },
      { q: "Can you redesign an existing product?", a: "Yes. We usually start with a UX audit so the redesign targets the real problems." },
      { q: "Is accessibility included?", a: "Yes. We design to WCAG guidelines — contrast, focus states, keyboard flows and readable typography." },
    ],
    metaDescription: "UI/UX design by Techscalify — user research, prototyping, interface design, design systems and usability testing for web and mobile products.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Cloud infrastructure, deployment automation, CI/CD and scalable architecture.",
    icon: Cloud,
    category: "technology",
    headline: "Cloud Infrastructure and DevOps That Keep You Shipping",
    intro:
      "We help teams move to the cloud, automate deployments and run reliable infrastructure — so releases are routine, outages are rare and cloud costs stay under control.",
    offerings: [
      { title: "Cloud Migration", desc: "Plan and execute moves from on-premise or legacy hosting to AWS and other clouds." },
      { title: "CI/CD Pipelines", desc: "Automated build, test and deployment pipelines with GitHub Actions and similar tools." },
      { title: "Containerisation", desc: "Docker-based environments that behave the same from laptop to production." },
      { title: "Infrastructure as Code", desc: "Reproducible, version-controlled infrastructure using Terraform and cloud-native tooling." },
      { title: "Monitoring & Alerting", desc: "Logs, metrics and alerts so issues are caught before your customers notice." },
      { title: "Cost Optimisation", desc: "Right-size resources and eliminate waste to reduce your monthly cloud bill." },
    ],
    outcomes: [
      "Faster, safer and repeatable releases",
      "Infrastructure that scales with demand",
      "Better uptime and observability",
      "Predictable, optimised cloud spend",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "Linux", "Vercel", "Cloudflare"],
    faqs: [
      { q: "Which cloud providers do you work with?", a: "Primarily AWS, plus Vercel, Google Cloud, DigitalOcean and Cloudflare depending on your needs and budget." },
      { q: "Can you set up CI/CD for our existing project?", a: "Yes. We review your repository and set up automated testing and deployments without disrupting your team." },
      { q: "Do you provide ongoing infrastructure management?", a: "Yes — through our support and maintenance plans, including monitoring, patching and incident response." },
    ],
    metaDescription: "Cloud & DevOps services by Techscalify — AWS cloud migration, CI/CD pipelines, Docker, infrastructure as code, monitoring and cost optimisation.",
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    short: "Technology strategy and consulting to help businesses make better technical decisions.",
    icon: Lightbulb,
    category: "technology",
    headline: "Technology Advice Grounded in Business Reality",
    intro:
      "Choosing the wrong stack, vendor or architecture is expensive. Our consultants help founders and leadership teams make confident technology decisions — with clear, practical recommendations rather than jargon.",
    offerings: [
      { title: "Technology Strategy", desc: "Roadmaps that align technology investments with business goals and budgets." },
      { title: "Architecture Review", desc: "Independent assessment of scalability, security and maintainability of your systems." },
      { title: "Digital Transformation", desc: "Identify manual processes and plan the move to modern, connected tools." },
      { title: "Vendor & Stack Selection", desc: "Unbiased evaluation of platforms, frameworks and service providers." },
      { title: "Product Discovery", desc: "Turn an idea into scoped requirements, user stories and a realistic delivery plan." },
      { title: "Fractional CTO Support", desc: "Senior technical leadership for startups and SMEs without a full-time CTO." },
    ],
    outcomes: [
      "Clear priorities and a realistic roadmap",
      "Lower risk on major technology decisions",
      "Better use of existing technology budget",
      "Leadership that understands the trade-offs",
    ],
    tech: ["Architecture Reviews", "Cloud Strategy", "Security Assessments", "Process Mapping", "Roadmapping"],
    faqs: [
      { q: "Who is IT consulting for?", a: "Founders, business owners and leadership teams planning a new product, modernising systems or unsure which technology direction to take." },
      { q: "What do we receive at the end?", a: "A written assessment with prioritised recommendations, estimated effort and a phased roadmap." },
      { q: "Is consulting tied to development with you?", a: "No. Our advice is independent — you're free to implement it with your own team or another partner." },
    ],
    metaDescription: "IT consulting by Techscalify — technology strategy, architecture reviews, digital transformation and fractional CTO support for growing businesses.",
  },
  {
    slug: "it-support",
    title: "IT Support & Maintenance",
    short: "Reliable application monitoring, maintenance, troubleshooting and technical support.",
    icon: LifeBuoy,
    category: "technology",
    headline: "Dependable Support That Keeps Your Systems Running",
    intro:
      "Launch is the beginning, not the end. Our support and maintenance plans keep your applications secure, up to date and performing well — with a responsive team you can reach when something goes wrong.",
    offerings: [
      { title: "Application Maintenance", desc: "Bug fixes, dependency updates and small enhancements on a predictable schedule." },
      { title: "Monitoring & Uptime", desc: "24/7 uptime checks and performance monitoring with proactive alerts." },
      { title: "Security Patching", desc: "Regular framework, server and dependency patches to close vulnerabilities." },
      { title: "Troubleshooting & Incident Response", desc: "Rapid diagnosis and fixes when issues affect your users." },
      { title: "Backup & Recovery", desc: "Automated backups and tested recovery procedures to protect your data." },
      { title: "Technical Helpdesk", desc: "Support for your team's day-to-day technical questions and access issues." },
    ],
    outcomes: [
      "Fewer outages and faster recovery",
      "Secure, up-to-date applications",
      "Predictable monthly support costs",
      "A team that already knows your system",
    ],
    tech: ["Uptime Monitoring", "Error Tracking", "Automated Backups", "Linux", "Docker", "AWS", "GitHub"],
    faqs: [
      { q: "Can you support software built by another team?", a: "Yes. We begin with a technical handover and code review, then take over maintenance." },
      { q: "What are your response times?", a: "Response times are defined in your support plan based on severity, and agreed in writing before we start." },
      { q: "Do you offer monthly plans?", a: "Yes. We offer monthly retainers sized to your system's complexity and support needs." },
    ],
    metaDescription: "IT support & maintenance by Techscalify — application maintenance, monitoring, security patching, backups and responsive technical support.",
  },
  {
    slug: "api-development",
    title: "API & Backend Development",
    short: "Secure and scalable APIs and backend systems.",
    icon: Server,
    category: "development",
    headline: "Secure, Scalable APIs and Backend Systems",
    intro:
      "Every great app runs on a reliable backend. We design and build APIs, services and data layers that are secure, well-documented and ready to handle growth — whether you need a single API or a microservices architecture.",
    offerings: [
      { title: "REST & GraphQL APIs", desc: "Well-structured, versioned APIs with clear documentation for internal and partner use." },
      { title: "Backend Development", desc: "Business logic, data processing and admin services built for reliability." },
      { title: "Microservices", desc: "Independently deployable services with event-driven communication using Kafka." },
      { title: "Authentication & Authorisation", desc: "Secure login, SSO, JWT/OAuth and role-based access control." },
      { title: "Database Design", desc: "Schemas, indexing and query optimisation for PostgreSQL, MySQL, SQL Server and MongoDB." },
      { title: "API Documentation & Testing", desc: "OpenAPI specs, Postman collections and automated API tests." },
    ],
    outcomes: [
      "APIs that are secure by design",
      "Systems that handle growing traffic",
      "Clear documentation for every endpoint",
      "Automated tests that prevent regressions",
    ],
    tech: ["Node.js", "Express.js", ".NET", "Laravel", "PostgreSQL", "MongoDB", "Redis", "Kafka", "GraphQL", "Docker"],
    faqs: [
      { q: "Can you build APIs for our mobile app?", a: "Yes. We build backends for web and mobile apps, including authentication, push notifications and admin APIs." },
      { q: "Do you write API documentation?", a: "Yes. Every API ships with OpenAPI documentation and example requests." },
      { q: "When do you recommend microservices?", a: "Only when scale or team structure demands it. Many products are better served by a well-structured modular monolith first." },
    ],
    metaDescription: "API & backend development by Techscalify — REST and GraphQL APIs, microservices, authentication and database design built for scale.",
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    short: "Scalable online stores and custom commerce solutions.",
    icon: ShoppingBag,
    category: "development",
    headline: "Online Stores Built to Sell — and Scale",
    intro:
      "From a first online store to a high-volume custom commerce platform, we build e-commerce experiences that load fast, convert well and connect to the payment, inventory and shipping systems you rely on.",
    offerings: [
      { title: "Custom E-Commerce Platforms", desc: "Headless or fully custom stores when templates can't meet your requirements." },
      { title: "Shopify & WooCommerce", desc: "Theme customisation, apps and store setup on proven platforms." },
      { title: "Payment Integration", desc: "Razorpay, Stripe, UPI and other gateways with secure checkout flows." },
      { title: "Inventory & Order Management", desc: "Sync stock, orders and fulfilment across channels and warehouses." },
      { title: "B2B Commerce", desc: "Custom pricing, bulk ordering and account-based purchasing for wholesale buyers." },
      { title: "Conversion Optimisation", desc: "Faster pages, simpler checkout and data-led improvements to lift sales." },
    ],
    outcomes: [
      "A fast, mobile-first shopping experience",
      "Secure, frictionless checkout",
      "Connected inventory, orders and shipping",
      "A store ready for marketing and SEO",
    ],
    tech: ["Next.js", "Shopify", "WooCommerce", "Razorpay", "Stripe", "Node.js", "PostgreSQL"],
    faqs: [
      { q: "Should I use Shopify or a custom store?", a: "Shopify is great for getting to market quickly. Custom or headless builds make sense for complex catalogues, B2B rules or unique experiences. We'll recommend the right fit." },
      { q: "Which payment gateways do you support?", a: "Razorpay, Stripe, PayU, Cashfree, PayPal and others, including UPI for Indian customers." },
      { q: "Can you migrate my existing store?", a: "Yes — products, customers and order history, with SEO redirects to protect your rankings." },
    ],
    metaDescription: "E-commerce development by Techscalify — custom online stores, Shopify & WooCommerce, payment gateway integration and conversion optimisation.",
  },
  {
    slug: "software-integration",
    title: "Software Integration",
    short: "Connect existing applications, APIs, payment systems and business platforms.",
    icon: Cable,
    category: "development",
    headline: "Connect Your Systems So Data Flows Automatically",
    intro:
      "Disconnected tools mean duplicate data entry, errors and delays. We integrate your applications, payment systems, CRMs and third-party platforms so information moves reliably between them — in real time.",
    offerings: [
      { title: "Third-Party API Integration", desc: "Connect your software with external services, platforms and partner systems." },
      { title: "Payment Gateway Integration", desc: "Secure payment, refund and reconciliation flows across gateways." },
      { title: "CRM & ERP Integration", desc: "Sync customers, orders and financial data between your core business systems." },
      { title: "Data Synchronisation", desc: "Scheduled and real-time sync with validation, retries and error reporting." },
      { title: "Webhooks & Event Pipelines", desc: "Event-driven integrations that react instantly to changes across systems." },
      { title: "Integration Monitoring", desc: "Dashboards and alerts that tell you when an integration needs attention." },
    ],
    outcomes: [
      "No more copy-pasting data between tools",
      "A single, reliable source of truth",
      "Faster processes across teams",
      "Visibility when something fails",
    ],
    tech: ["REST APIs", "Webhooks", "Kafka", "Node.js", "Razorpay", "Stripe", "Zapier", "PostgreSQL"],
    faqs: [
      { q: "Can you integrate with software that has no public API?", a: "Often, yes — through file-based exchange, database connectors or vendor-supported options. We assess feasibility first." },
      { q: "What happens if an integration fails?", a: "We build in retries, logging and alerts so failures are visible and recoverable, not silent." },
      { q: "Do you integrate Indian payment gateways?", a: "Yes — Razorpay, PayU, Cashfree and UPI flows, alongside international gateways like Stripe." },
    ],
    metaDescription: "Software integration by Techscalify — connect APIs, payment gateways, CRMs and ERPs with reliable, monitored data synchronisation.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const serviceCategories: Record<ServiceCategory, string> = {
  development: "Development",
  growth: "Digital Growth",
  technology: "Technology",
};

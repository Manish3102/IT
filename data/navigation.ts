export type NavLink = { label: string; href: string };

export const mainNav: (NavLink & { mega?: boolean })[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const megaMenu: { title: string; blurb: string; links: NavLink[] }[] = [
  {
    title: "Development",
    blurb: "Software, web and mobile products built to scale.",
    links: [
      { label: "Web Development", href: "/web-development" },
      { label: "Software Development", href: "/software-development" },
      { label: "Mobile App Development", href: "/mobile-app-development" },
      { label: "API Development", href: "/api-development" },
      { label: "Backend Development", href: "/api-development" },
      { label: "Custom Enterprise Software", href: "/software-development" },
    ],
  },
  {
    title: "Digital Growth",
    blurb: "Get found, get chosen, get measurable results.",
    links: [
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "SEO", href: "/seo" },
      { label: "Social Media Marketing", href: "/digital-marketing#social-media-marketing" },
      { label: "Performance Marketing", href: "/digital-marketing#performance-marketing" },
      { label: "Content Marketing", href: "/digital-marketing#content-marketing" },
    ],
  },
  {
    title: "Technology",
    blurb: "Infrastructure, strategy and support you can rely on.",
    links: [
      { label: "Cloud & DevOps", href: "/cloud-devops" },
      { label: "IT Consulting", href: "/it-consulting" },
      { label: "IT Support", href: "/it-support" },
      { label: "UI/UX Design", href: "/ui-ux-design" },
      { label: "Software Maintenance", href: "/it-support" },
    ],
  },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Software Development", href: "/software-development" },
    { label: "Web Development", href: "/web-development" },
    { label: "Mobile Apps", href: "/mobile-app-development" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "SEO", href: "/seo" },
    { label: "UI/UX", href: "/ui-ux-design" },
    { label: "Cloud & DevOps", href: "/cloud-devops" },
    { label: "IT Support", href: "/it-support" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "FAQs", href: "/faqs" },
  ],
} satisfies Record<string, NavLink[]>;

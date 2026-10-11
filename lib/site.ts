/**
 * Central company configuration.
 * Everything marked TODO is a placeholder — replace with real details before launch.
 */
export const siteConfig = {
  name: "Techscalify",
  /** Common spellings / stylings people search for */
  alternateNames: ["TechScalify", "Tech Scalify", "Techscalify IT Services"] as const,
  legalName: "Techscalify IT Services", // TODO: confirm registered legal name
  tagline: "IT Services, Software & Digital Solutions",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.techscalify.com").replace(/\/$/, ""), // TODO: set real domain
  /** Homepage & default meta — brand-first for Google brand queries */
  description:
    "Techscalify is an IT services and software development company in India. We build custom software, websites, mobile apps, cloud solutions, digital marketing and SEO that help businesses scale.",
  /** Shorter blurb for OG / social cards */
  ogDescription:
    "Techscalify — software development, web & mobile apps, cloud, digital marketing and SEO for modern businesses.",
  email: "techscalify@gmail.com",
  phone: "+91 00000 00000", // TODO: replace with real phone number
  phoneHref: "tel:+910000000000", // TODO
  location: "India · Serving clients worldwide", // TODO: add city / office address when available
  addressCountry: "IN",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM IST", // TODO: confirm business hours
  consultationUrl: "/contact#consultation", // TODO: swap for Calendly / Cal.com link if you use one
  socials: {
    linkedin: "https://www.linkedin.com/company/techscalify/",
    instagram: "https://www.instagram.com/techscalify/",
    facebook: "https://www.facebook.com/profile.php?id=61595448803907",
    youtube: "#", // TODO
  },
  keywords: [
    "Techscalify",
    "TechScalify",
    "Tech Scalify",
    "Techscalify IT services",
    "Techscalify software development",
    "IT services company India",
    "software development company India",
    "web development company",
    "mobile app development company",
    "digital marketing agency India",
    "SEO services India",
    "cloud and DevOps services",
    "IT consulting company",
    "custom software development",
    "Next.js development",
    "e-commerce development",
  ] as const,
} as const;

/**
 * Headline statistics — edit these values in one place.
 * `value` is animated from 0; `suffix` is appended.
 */
export const stats = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 20, suffix: "+", label: "Technologies in our stack" },
  { value: 100, suffix: "%", label: "Client focus" },
] as const;

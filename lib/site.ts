/**
 * Central company configuration.
 * Everything marked TODO is a placeholder — replace with real details before launch.
 */
export const siteConfig = {
  name: "Techscalify",
  legalName: "Techscalify IT Services", // TODO: confirm registered legal name
  tagline: "IT Services, Software & Digital Solutions",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.techscalify.com").replace(/\/$/, ""), // TODO: set real domain
  description:
    "Techscalify provides software development, web and mobile app development, digital marketing, SEO, cloud solutions, IT consulting and technology services for modern businesses.",
  email: "techscalify@gmail.com",
  phone: "+91 00000 00000", // TODO: replace with real phone number
  phoneHref: "tel:+910000000000", // TODO
  location: "India · Serving clients worldwide", // TODO: add city / office address when available
  hours: "Mon – Sat, 10:00 AM – 7:00 PM IST", // TODO: confirm business hours
  consultationUrl: "/contact#consultation", // TODO: swap for Calendly / Cal.com link if you use one
  socials: {
    linkedin: "https://www.linkedin.com/company/techscalify/",
    instagram: "https://www.instagram.com/techscalify/",
    facebook: "https://www.facebook.com/profile.php?id=61595448803907",
    youtube: "#", // TODO
  },
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

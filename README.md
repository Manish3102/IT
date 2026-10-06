# Techscalify — Company Website

Premium IT services website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** and **Lucide** icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Requires Node.js 20.9+ (Node 22 recommended). Deploys to Vercel with zero config.

## Before going live — update these

| What | Where |
| --- | --- |
| Domain (canonical URLs, sitemap, OG) | `.env` → `NEXT_PUBLIC_SITE_URL` (copy `.env.example`) |
| Phone, location, business hours, social links, booking link | `lib/site.ts` (all marked `TODO`) |
| Headline stats (3+, 50+, 20+, 100%) | `lib/site.ts` → `stats` |
| Contact form email delivery | `app/api/contact/route.ts` (Resend / Nodemailer example in comments) |
| Sample portfolio projects → real case studies | `data/portfolio.ts` (set `placeholder: false`) |
| Real testimonials (section appears automatically) | `data/content.ts` → `testimonials` |
| Blog posts, job openings | `app/blog/page.tsx`, `app/careers/page.tsx` |
| Privacy Policy / Terms | Get legal review — they are templates |

## Structure

```
app/
  page.tsx                 Home
  [service]/page.tsx       12 service pages (/web-development, /seo, /cloud-devops …) from data/services.ts
  about, services, solutions, industries, portfolio (+ /portfolio/[slug]),
  blog, careers, contact, faqs, privacy-policy, terms
  api/contact/route.ts     Form endpoint (validation + honeypot, TODO email)
  sitemap.ts, robots.ts, opengraph-image.tsx, icon.png, apple-icon.png
components/                Navbar (mega menu + mobile menu), Footer, Hero, HeroVisual, StatsSection,
                           ServiceGrid/ServiceCard, WhyChoose, TechnologyGrid, ProcessTimeline,
                           IndustryCard, SolutionsGrid, PortfolioCard, MarketingSection, TestimonialCard,
                           CTASection, ContactForm, FAQ, PageHero, ScrollToTop, ui/*
data/                      services, navigation, technologies, industries, portfolio, content (all editable)
lib/                       site.ts (company config), seo.ts (metadata + JSON-LD helpers)
public/                    logo.png, logo-mark.png
```

To add a service: add an entry to `data/services.ts` — the page, sitemap, cards, contact dropdown and JSON-LD update automatically.

## Brand system

Colours are extracted from the logo and defined once in `app/globals.css` (`@theme`):
primary violet `#3B1863`, secondary blue `#2A95E0`, dark ink `#0C0718`, surface `#F7F6FB`, text `#14111F`, muted `#5B5670`, border `#E7E4EF`.
Fonts: Sora (headings) + Manrope (body), self-hosted via `next/font/local`.

## Built in

- SEO: per-page metadata, canonical URLs, Open Graph/Twitter, generated OG image, sitemap, robots, JSON-LD (Organization, WebSite, Service, FAQPage, BreadcrumbList)
- Accessibility: skip link, semantic landmarks, keyboard-operable menus (Esc closes), visible focus, labelled form fields with inline errors, `prefers-reduced-motion` respected
- Performance: all pages statically generated, server components by default, CSS-only hero animation, no external font/image requests

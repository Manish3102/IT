import type { Metadata } from "next";
import { CalendarCheck, Clock, Mail, MapPin, Phone, Video } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { generalFaqs } from "@/data/content";
import { siteConfig } from "@/lib/site";
import { buildMetadata, contactPageJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Techscalify for software development, web and mobile apps, cloud, IT consulting, digital marketing and SEO. Book a free consultation — we usually reply within one business day.",
  path: "/contact",
  keywords: ["Contact Techscalify", "Techscalify email", "hire Techscalify", "IT consultation India"],
});

const info = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Clock, label: "Business hours", value: siteConfig.hours },
];

/** Abstract "global reach" visual: dotted grid with connection arcs */
function ReachVisual() {
  const dots = [];
  for (let y = 0; y < 9; y++) for (let x = 0; x < 22; x++) if ((x * 7 + y * 3) % 5 !== 0) dots.push([x * 14 + 8, y * 14 + 8]);
  return (
    <svg aria-hidden viewBox="0 0 320 136" className="h-auto w-full">
      {dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={1.6} fill="rgb(255 255 255 / 0.16)" />
      ))}
      <path d="M218 78 Q160 10 64 50" fill="none" stroke="#4fb0ee" strokeWidth={1.5} className="flow-line" />
      <path d="M218 78 Q260 20 290 36" fill="none" stroke="#8f6bd0" strokeWidth={1.5} className="flow-line" />
      <path d="M218 78 Q150 120 92 106" fill="none" stroke="#4fb0ee" strokeWidth={1.5} className="flow-line" />
      <circle cx={218} cy={78} r={10} fill="#2a95e0" className="pulse-ring" opacity={0.6} />
      <circle cx={218} cy={78} r={5} fill="#2a95e0" />
      {[
        [64, 50],
        [290, 36],
        [92, 106],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r={3.5} fill="#8f6bd0" />
      ))}
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[contactPageJsonLd(), faqJsonLd(generalFaqs)]} />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Build Something <span className="text-gradient">Great Together</span>
          </>
        }
        description="Have an idea, project, or business challenge? Let's discuss how technology can help."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section aria-label="Contact form" className="relative bg-surface pb-20 pt-12 sm:pb-28">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.55fr]">
          {/* Left column */}
          <div className="space-y-6 lg:-mt-24">
            <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-ink p-7 text-white shadow-[var(--shadow-lift)]">
              <div aria-hidden className="absolute -right-16 -top-16 size-52 rounded-full bg-brand-500/45 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signal-300">Get in touch</p>
                <h2 className="mt-2 text-xl font-semibold">We usually reply within one business day</h2>
                <ul className="mt-6 space-y-4">
                  {info.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <span className="glass inline-flex size-10 shrink-0 items-center justify-center rounded-xl">
                        <Icon aria-hidden className="size-4.5 text-signal-300" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-white/50">{label}</p>
                        {href ? (
                          <a href={href} className="break-all font-medium hover:text-signal-300">
                            {value}
                          </a>
                        ) : (
                          <p className="font-medium">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-white/10 pt-6">
                  <ReachVisual />
                  <p className="mt-3 text-center text-xs text-white/50">Working with clients across India and worldwide</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} id="consultation" className="scroll-mt-28 rounded-[1.75rem] border border-line bg-white p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <CalendarCheck aria-hidden className="size-5" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">Book a Free Consultation</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                A 30-minute call with our team to understand your goals, discuss options and outline next steps — no obligation.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-text/80">
                <li className="flex items-center gap-2">
                  <Video aria-hidden className="size-4 text-signal-600" /> Google Meet or Zoom
                </li>
                <li className="flex items-center gap-2">
                  <CalendarCheck aria-hidden className="size-4 text-signal-600" /> Pick a time that suits you
                </li>
              </ul>
              {/* TODO: replace with your Calendly / Cal.com booking link */}
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Free consultation request")}`}
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
              >
                Request a consultation slot
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.05} className="rounded-[1.75rem] border border-line bg-white p-6 shadow-[var(--shadow-lift)] sm:p-10 lg:-mt-24">
            <h2 className="text-2xl font-semibold">Tell us about your project</h2>
            <p className="mb-8 mt-2 text-muted">Fill in the form and we&apos;ll get back to you with next steps.</p>
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <section aria-label="Frequently asked questions" className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-center text-3xl font-semibold">Before You Reach Out</h2>
          <p className="mt-3 text-center text-muted">Quick answers to questions we hear often.</p>
          <div className="mt-10">
            <FAQ items={generalFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}

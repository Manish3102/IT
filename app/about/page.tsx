import type { Metadata } from "next";
import { Compass, Eye, Handshake, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsSection } from "@/components/StatsSection";
import { TechnologyGrid } from "@/components/TechnologyGrid";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { aboutPageJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "About Techscalify — an IT services and software development company helping businesses turn ideas into reliable, scalable digital products. Mission, values and approach.",
  path: "/about",
  keywords: ["About Techscalify", "Techscalify company", "TechScalify", "IT company India", "software development company"],
});

const values = [
  { icon: Target, title: "Outcomes over output", desc: "We measure success by the business results our work creates, not lines of code or hours billed." },
  { icon: ShieldCheck, title: "Integrity", desc: "Honest estimates, transparent progress and straight answers — even when they're not what you hoped to hear." },
  { icon: Sparkles, title: "Craft", desc: "Clean code, thoughtful design and attention to the details users feel but rarely notice." },
  { icon: Handshake, title: "Partnership", desc: "We work as an extension of your team and stay invested long after launch day." },
];

const approach = [
  { title: "Understand before we build", desc: "Every engagement begins with your business goals, users and constraints — not a technology pitch." },
  { title: "Deliver in small, visible steps", desc: "Short iterations and regular demos keep you in control and surface issues early." },
  { title: "Engineer for tomorrow", desc: "Scalable architecture, automated testing and documentation so your product can keep growing." },
  { title: "Measure and improve", desc: "After launch, we use data and feedback to keep improving performance and results." },
];

// TODO: replace with your real company milestones and dates
const story = [
  { label: "The beginning", title: "Founded with a simple belief", desc: "Businesses deserve technology partners who understand both engineering and business — and communicate clearly." },
  { label: "Building the foundation", title: "Web and software development", desc: "We started by building websites, web applications and custom software for growing businesses." },
  { label: "Expanding capabilities", title: "Mobile, cloud and integrations", desc: "We added mobile app development, cloud & DevOps and API integrations to deliver complete products." },
  { label: "Full-stack growth partner", title: "Digital marketing and SEO", desc: "With marketing and SEO under the same roof, we now help clients both build and grow their digital presence." },
  { label: "Today & ahead", title: "Scaling with our clients", desc: "Serving clients across India and internationally, with a focus on long-term partnerships." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd()} />
      <PageHero
        eyebrow="About Techscalify"
        title={
          <>
            Building Technology That Creates <span className="text-gradient">Real Business Impact</span>
          </>
        }
        description="Techscalify is an IT services and software development company focused on helping businesses transform ideas into reliable digital products — and grow them with modern digital marketing."
        crumbs={[{ name: "About", path: "/about" }]}
      />

      {/* Intro + mission/vision */}
      <section aria-label="Who we are" className="bg-white py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">Who we are</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              A technology partner that thinks like a <span className="text-gradient-dark">business owner</span>
            </h2>
            <div className="mt-6 space-y-4 text-[16.5px] leading-relaxed text-muted">
              <p>
                Most businesses don&apos;t need more technology — they need the <em>right</em> technology, built well and
                explained clearly. That&apos;s the gap Techscalify was created to fill.
              </p>
              <p>
                Our team brings together software engineers, designers, cloud specialists and digital marketers. Whether
                you&apos;re a startup validating an idea or an established company modernising its systems, we help you plan,
                build, launch and scale — with one accountable partner.
              </p>
              <p>
                We work with businesses across India and internationally, and we treat every project as if our own reputation
                depends on it. Because it does.
              </p>
            </div>
            <ButtonLink href="/contact" className="mt-8" arrow>
              Work with us
            </ButtonLink>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={0.06} className="relative overflow-hidden rounded-[var(--radius-card)] bg-ink p-8 text-white">
              <div aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-brand-500/40 blur-3xl" />
              <Compass aria-hidden className="relative size-7 text-signal-400" />
              <h3 className="relative mt-5 text-xl font-semibold">Our Mission</h3>
              <p className="relative mt-3 leading-relaxed text-white/70">
                To help businesses build, scale and grow through reliable software, thoughtful design and measurable digital
                marketing — delivered with honesty and care.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="relative overflow-hidden rounded-[var(--radius-card)] bg-brand-gradient p-8 text-white">
              <Eye aria-hidden className="size-7 text-white/90" />
              <h3 className="mt-5 text-xl font-semibold">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-white/85">
                To be the technology partner growing businesses trust first — known for the quality of our work and the
                long-term relationships we build.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section aria-label="Our values" className="bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title={
              <>
                The Principles Behind <span className="text-gradient-dark">Every Project</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.06} className="h-full rounded-[var(--radius-card)] border border-line bg-white p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Approach + client-first */}
      <section aria-label="Our approach" className="bg-white py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our approach"
              title={
                <>
                  How We Turn Ideas Into <span className="text-gradient-dark">Reliable Products</span>
                </>
              }
            />
            <ol className="mt-10 space-y-4">
              {approach.map((a, i) => (
                <Reveal
                  as="li"
                  key={a.title}
                  delay={i * 0.05}
                  className="flex gap-5 rounded-2xl border border-line p-5 transition-colors hover:border-brand-200"
                >
                  <span className="font-display text-2xl font-semibold text-brand-400">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold">{a.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{a.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.08} className="relative self-start overflow-hidden rounded-[2rem] border border-line bg-surface p-8 sm:p-10">
            <div aria-hidden className="bg-grid-light absolute inset-0 opacity-70" />
            <div className="relative">
              <HeartHandshake aria-hidden className="size-9 text-brand-600" />
              <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">A client-first philosophy</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Your success is the only metric that matters. That means listening before proposing, recommending the simplest
                solution that works, and being upfront about timelines, costs and trade-offs.
              </p>
              <ul className="mt-7 space-y-3 text-[15px]">
                {[
                  "A single point of contact who knows your project",
                  "Weekly progress updates and live demos",
                  "Transparent estimates and change management",
                  "Full ownership of your code, designs and data",
                  "Support that continues after launch",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Lightbulb aria-hidden className="mt-0.5 size-4 shrink-0 text-signal-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Story timeline */}
      <section aria-label="Our story" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="bg-grid-dark mask-radial absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            dark
            eyebrow="Our story"
            title={
              <>
                From First Project to <span className="text-gradient">Full-Service Partner</span>
              </>
            }
          />
          <div className="relative mt-16">
            <div aria-hidden className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-brand-500 via-signal-500 to-transparent md:block" />
            <ol className="relative grid gap-8 md:grid-cols-5 md:gap-6">
              {story.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.08} className="relative">
                  <span className="relative z-10 inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-ink font-display text-sm font-semibold text-signal-300">
                    {i + 1}
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">{s.label}</p>
                  <h3 className="mt-2 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <StatsSection />
      <TechnologyGrid />
      <CTASection />
    </>
  );
}

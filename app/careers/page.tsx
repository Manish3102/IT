import type { Metadata } from "next";
import { GraduationCap, Laptop, Rocket, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Build your career at Techscalify — work on real products across software, web, mobile, cloud and digital marketing.",
  path: "/careers",
});

const perks = [
  { icon: Rocket, title: "Real products, real impact", desc: "Work on live client products — not just tickets — and see your work shipped." },
  { icon: GraduationCap, title: "Continuous learning", desc: "Modern stacks, code reviews and mentorship to help you grow quickly." },
  { icon: Users, title: "Collaborative culture", desc: "Small, supportive teams where every voice and idea is heard." },
  { icon: Laptop, title: "Flexible ways of working", desc: "Outcome-focused work with flexibility where the role allows." },
];

// TODO: add open roles here, e.g. { title: "Frontend Developer (Next.js)", type: "Full-time", location: "Remote / India" }
const openings: { title: string; type: string; location: string }[] = [];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Grow With a Team That <span className="text-gradient">Builds and Scales</span>
          </>
        }
        description="We're always interested in talented developers, designers, cloud engineers and digital marketers who care about quality."
        crumbs={[{ name: "Careers", path: "/careers" }]}
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Why join us" title="Life at Techscalify" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.06} className="rounded-[var(--radius-card)] border border-line p-7">
                  <Icon aria-hidden className="size-6 text-brand-600" />
                  <h3 className="mt-5 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="bg-surface py-20 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold">Open positions</h2>
          {openings.length ? (
            <ul className="mt-8 divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white">
              {openings.map((o) => (
                <li key={o.title} className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-semibold">{o.title}</p>
                  <p className="text-sm text-muted">
                    {o.type} · {o.location}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 rounded-[var(--radius-card)] border border-dashed border-brand-200 bg-white p-8 text-center">
              <p className="font-semibold">No open roles right now — but we&apos;d still love to hear from you.</p>
              <p className="mt-2 text-muted">Send your CV and portfolio and we&apos;ll reach out when a matching role opens.</p>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Career application")}`}
                className="mt-6 inline-flex h-11 items-center rounded-full bg-brand-gradient px-6 text-sm font-semibold text-white"
              >
                Send your CV
              </a>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { BookOpen, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Insights",
  description: "Insights from Techscalify on software development, web and mobile apps, cloud, digital marketing and SEO.",
  path: "/blog",
});

/**
 * Upcoming articles — placeholders until the blog/CMS is connected.
 * TODO: replace with posts from MDX or a headless CMS and create app/blog/[slug]/page.tsx
 */
const upcoming = [
  { category: "Web Development", title: "Next.js vs WordPress: Choosing the Right Platform for Your Business Website", read: "8 min read" },
  { category: "Mobile Apps", title: "Native or Cross-Platform? A Practical Guide for Business Owners", read: "7 min read" },
  { category: "SEO", title: "Technical SEO Checklist: 20 Fixes That Move the Needle", read: "10 min read" },
  { category: "Cloud & DevOps", title: "How CI/CD Reduces Release Risk for Growing Teams", read: "6 min read" },
  { category: "Digital Marketing", title: "Google Ads vs Meta Ads: Where Should Your Budget Go?", read: "7 min read" },
  { category: "IT Consulting", title: "Build vs Buy: A Decision Framework for Business Software", read: "9 min read" },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Insights on Technology & <span className="text-gradient">Digital Growth</span>
          </>
        }
        description="Practical guides and perspectives for founders, business owners and technology leaders."
        crumbs={[{ name: "Blog", path: "/blog" }]}
      />
      <section aria-label="Articles" className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 text-sm text-muted">
            <BookOpen aria-hidden className="size-5 text-brand-600" />
            Our first articles are being written. Here&apos;s what&apos;s coming soon.
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <div aria-hidden className="relative h-40 overflow-hidden bg-ink">
                    <div className="bg-grid-dark absolute inset-0" />
                    <div className={`absolute -right-8 -top-8 size-40 rounded-full blur-3xl ${i % 2 ? "bg-signal-500/50" : "bg-brand-500/60"}`} />
                    <span className="glass absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white">{p.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold leading-snug">{p.title}</h2>
                    <div className="mt-auto flex items-center justify-between pt-6 text-sm text-muted">
                      <span className="flex items-center gap-1.5">
                        <Clock aria-hidden className="size-4" /> {p.read}
                      </span>
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">Coming soon</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

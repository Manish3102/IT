import type { Metadata } from "next";
import { generalFaqs } from "@/data/content";
import { services } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description: "Answers to common questions about working with Techscalify — services, pricing, timelines, ownership and support.",
  path: "/faqs",
});

export default function FaqsPage() {
  const groups = services.slice(0, 6);
  return (
    <>
      <JsonLd data={faqJsonLd(generalFaqs)} />
      <PageHero
        eyebrow="FAQs"
        title={
          <>
            Frequently Asked <span className="text-gradient">Questions</span>
          </>
        }
        description="Everything you need to know about working with Techscalify. Can't find your answer? Just ask us."
        crumbs={[{ name: "FAQs", path: "/faqs" }]}
      />
      <section className="bg-surface py-20">
        <Container className="max-w-3xl space-y-14">
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Working with us</h2>
            <FAQ items={generalFaqs} />
          </div>
          {groups.map((s) => (
            <div key={s.slug}>
              <h2 className="mb-6 text-2xl font-semibold">{s.title}</h2>
              <FAQ items={s.faqs} />
            </div>
          ))}
        </Container>
      </section>
      <CTASection />
    </>
  );
}

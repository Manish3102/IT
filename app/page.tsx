import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { ServiceGrid } from "@/components/ServiceGrid";
import { WhyChoose } from "@/components/WhyChoose";
import { TechnologyGrid } from "@/components/TechnologyGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { IndustriesSection } from "@/components/IndustriesSection";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { PortfolioSection } from "@/components/PortfolioSection";
import { MarketingSection } from "@/components/MarketingSection";
import { TestimonialsSection } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd, servicesItemListJsonLd } from "@/lib/seo";
import { generalFaqs } from "@/data/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Techscalify | IT Services, Software Development & Digital Solutions",
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Techscalify",
    "TechScalify",
    "Tech Scalify",
    "Techscalify IT services",
    "software development company India",
    "web development",
    "mobile app development",
    "digital marketing agency",
    "SEO company India",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[servicesItemListJsonLd(), faqJsonLd(generalFaqs)]} />
      <Hero />
      <StatsSection />
      <ServiceGrid />
      <WhyChoose />
      <TechnologyGrid />
      <ProcessTimeline />
      <IndustriesSection />
      <SolutionsGrid />
      <PortfolioSection />
      <MarketingSection />
      <TestimonialsSection />
      <section aria-label="Frequently asked questions about Techscalify" className="bg-surface py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQs"
            title={
              <>
                About <span className="text-gradient-dark">Techscalify</span>
              </>
            }
            description="Quick answers about who we are, what we do, and how to start a project with Techscalify."
          />
          <div className="mt-10">
            <FAQ items={generalFaqs} />
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

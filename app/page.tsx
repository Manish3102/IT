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
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Techscalify | IT Services, Software & Digital Solutions",
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
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
      <CTASection />
    </>
  );
}

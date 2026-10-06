import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { WhyChoose } from "@/components/WhyChoose";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Business Solutions",
  description:
    "Custom business software, CRM and ERP solutions, fintech applications, e-commerce platforms, business automation, reporting & analytics and API integrations by Techscalify.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Solutions Built for <span className="text-gradient">Modern Businesses</span>
          </>
        }
        description="Proven solution patterns — CRM, ERP, fintech, commerce, automation and analytics — tailored to how your business actually operates."
        crumbs={[{ name: "Solutions", path: "/solutions" }]}
      >
        <ButtonLink href="/contact" size="lg" arrow className="mt-9">
          Discuss Your Requirements
        </ButtonLink>
      </PageHero>
      <SolutionsGrid showHeading={false} />
      <WhyChoose />
      <CTASection />
    </>
  );
}

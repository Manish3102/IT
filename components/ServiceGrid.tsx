import { services } from "@/data/services";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" aria-label="Our services" className="relative bg-surface py-20 sm:py-28">
      <div aria-hidden className="bg-grid-light mask-fade-b absolute inset-x-0 top-0 h-96" />
      <Container className="relative">
        {showHeading && (
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Our Technology & <span className="text-gradient-dark">Digital Services</span>
              </>
            }
            description="From building powerful software to growing your digital presence, Techscalify provides end-to-end technology solutions designed around your business goals."
          />
        )}
        <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${showHeading ? "mt-14" : ""}`}>
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06} className="h-full">
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./SectionHeading";

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-soft)]">
      <Quote aria-hidden className="size-7 text-brand-200" />
      <blockquote className="mt-4 flex-1 text-[15.5px] leading-relaxed text-text">“{quote}”</blockquote>
      <figcaption className="mt-6 border-t border-line pt-4">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </figcaption>
    </figure>
  );
}

/** Renders only when real testimonials exist in data/content.ts */
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;
  return (
    <section aria-label="Client testimonials" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06} className="h-full">
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./SectionHeading";
import { HeroVisual } from "./HeroVisual";

const pills = ["Software", "Web", "Mobile Apps", "Cloud & DevOps", "Digital Marketing", "SEO"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-32 text-white sm:pt-36 lg:pb-28 lg:pt-44">
      {/* background */}
      <div aria-hidden className="bg-grid-dark mask-fade-b absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -left-40 -top-40 -z-10 size-[38rem] animate-drift rounded-full bg-brand-600/40 blur-[130px]" />
      <div aria-hidden className="absolute -right-32 top-32 -z-10 size-[32rem] animate-drift rounded-full bg-signal-500/25 blur-[130px] [animation-delay:-8s]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <Eyebrow dark>IT Services & Software Development</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.06] sm:text-6xl lg:text-[4.1rem]">
              Transforming Ideas Into <span className="text-gradient">Powerful Digital Solutions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Techscalify helps businesses build, scale, and grow with modern software development, web and mobile applications,
              cloud solutions, digital marketing, and technology consulting.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" arrow>
              Start Your Project
            </ButtonLink>
            <ButtonLink href="/services" size="lg" variant="ghost-dark">
              Explore Our Services
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.24}>
            <ul aria-label="Core capabilities" className="mt-10 flex flex-wrap gap-2">
              {pills.map((p) => (
                <li key={p} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/65">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={32}>
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}

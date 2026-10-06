import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-ink pt-24 text-white">
      <div aria-hidden className="bg-grid-dark mask-radial absolute inset-0 -z-10" />
      <div aria-hidden className="absolute left-1/2 top-1/3 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-brand-600/40 blur-[120px]" />
      <Container className="text-center">
        <p className="text-gradient font-display text-8xl font-bold sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">This page didn&apos;t scale with us</h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost-dark">
            Explore services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

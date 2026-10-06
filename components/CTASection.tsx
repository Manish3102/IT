import { CalendarCheck, MessagesSquare, ShieldCheck } from "lucide-react";
import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { siteConfig } from "@/lib/site";

export function CTASection({
  title = "Have a Project in Mind?",
  text = "Let's turn your idea into a scalable digital solution.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="relative bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20">
          <div aria-hidden className="bg-grid-dark mask-radial absolute inset-0 -z-10" />
          <div aria-hidden className="absolute -left-24 -top-24 -z-10 size-[26rem] animate-drift rounded-full bg-brand-500/45 blur-[100px]" />
          <div aria-hidden className="absolute -bottom-32 -right-16 -z-10 size-[26rem] animate-drift rounded-full bg-signal-500/40 blur-[100px] [animation-delay:-9s]" />
          {/* logo-inspired faceted shape */}
          <svg aria-hidden viewBox="0 0 200 200" className="absolute -right-6 top-6 -z-10 hidden w-56 opacity-25 md:block">
            <path d="M60 20 L140 60 L140 110 L100 90 L100 60 Z" fill="#2a95e0" />
            <path d="M100 90 L140 110 L140 180 L60 140 L60 90 L100 110 Z" fill="#6a3db0" />
          </svg>

          <h2 id="cta-title" className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            {title.split(" in ").length > 1 ? (
              <>
                {title.split(" in ")[0]} in <span className="text-gradient">{title.split(" in ").slice(1).join(" in ")}</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" arrow>
              Start a Project
            </ButtonLink>
            <ButtonLink href={siteConfig.consultationUrl} variant="ghost-dark" size="lg">
              Talk to an Expert
            </ButtonLink>
          </div>
          <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <CalendarCheck aria-hidden className="size-4 text-signal-400" /> Free consultation
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck aria-hidden className="size-4 text-signal-400" /> NDA on request
            </li>
            <li className="flex items-center gap-2">
              <MessagesSquare aria-hidden className="size-4 text-signal-400" /> Clear proposal, no obligation
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

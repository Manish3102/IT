import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./ui/Container";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from "./SocialIcons";

const socials = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: siteConfig.socials.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.socials.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: siteConfig.socials.youtube, Icon: YouTubeIcon },
];

function Col({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-[14.5px] text-white/60 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="bg-grid-dark mask-fade-b absolute inset-0 opacity-60" />
      <div aria-hidden className="absolute -left-40 top-0 size-[28rem] rounded-full bg-brand-600/25 blur-[120px]" />
      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.35fr_repeat(3,1fr)_1.2fr] lg:gap-10 lg:py-20">
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-6 text-[14.5px] leading-relaxed text-white/60">
              Techscalify is an IT services and software development company helping businesses build, scale and grow with
              modern technology and digital marketing.
            </p>
            <ul className="mt-7 flex gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`Techscalify on ${label}`}
                    className="glass inline-flex size-10 items-center justify-center rounded-full text-white/75 transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
                  >
                    <Icon className="size-[17px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Col title="Company" links={footerNav.company} />
          <Col title="Services" links={footerNav.services} />
          <Col title="Resources" links={footerNav.resources} />
          <div>
            <h2 className="font-display text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-5 space-y-4 text-[14.5px] text-white/60">
              <li className="font-semibold text-white/85">Techscalify</li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="group flex items-start gap-2.5 hover:text-white">
                  <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-signal-400" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-signal-400" />
                {siteConfig.location}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-signal-400" />
                {siteConfig.hours}
              </li>
              <li>
                <Link href="/contact" className="inline-flex items-center gap-1 font-semibold text-signal-300 hover:text-signal-400">
                  Send an inquiry <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Techscalify. All Rights Reserved.</p>
          <p className="flex items-center gap-3">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden className="text-white/25">|</span>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

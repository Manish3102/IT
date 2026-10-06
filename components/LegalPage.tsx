import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Container } from "./ui/Container";

export function LegalPage({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero title={title} description={`Last updated: ${updated}`} crumbs={[{ name: title, path }]} />
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            This is a general template. Please have it reviewed by a legal professional before publishing.
          </p>
          <div className="space-y-8 text-[16px] leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text [&_li]:mt-1.5 [&_ul]:list-disc [&_ul]:pl-6">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}

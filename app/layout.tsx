import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

// Self-hosted variable fonts (no external requests, no layout shift)
const sora = localFont({
  src: "../node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2",
  variable: "--font-sora",
  weight: "100 800",
  display: "swap",
});
const manrope = localFont({
  src: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Techscalify | IT Services, Software & Digital Solutions",
    template: "%s | Techscalify",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "IT services company",
    "software development company India",
    "web development",
    "mobile app development",
    "digital marketing agency",
    "SEO services",
    "cloud and DevOps",
    "IT consulting",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    url: siteConfig.url,
    title: "Techscalify | IT Services, Software & Digital Solutions",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Techscalify | IT Services, Software & Digital Solutions",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0c0718",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Providers>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

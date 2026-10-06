import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Techscalify website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" path="/terms" updated="October 2026">
      <div>
        <h2>1. Acceptance of terms</h2>
        <p>By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please do not use the website.</p>
      </div>
      <div>
        <h2>2. Use of the website</h2>
        <p>You agree to use this website lawfully and not to attempt to disrupt, damage or gain unauthorised access to it or its systems.</p>
      </div>
      <div>
        <h2>3. Services</h2>
        <p>
          Information on this website describes the services {siteConfig.name} offers. Specific deliverables, timelines, fees
          and responsibilities for any engagement are governed by a separate written proposal or agreement.
        </p>
      </div>
      <div>
        <h2>4. Intellectual property</h2>
        <p>
          The content, branding, logo and design of this website belong to {siteConfig.name} unless stated otherwise, and may
          not be reproduced without permission.
        </p>
      </div>
      <div>
        <h2>5. Third-party links</h2>
        <p>This website may link to third-party websites. We are not responsible for their content or practices.</p>
      </div>
      <div>
        <h2>6. Limitation of liability</h2>
        <p>
          The website is provided &quot;as is&quot;. To the extent permitted by law, {siteConfig.name} is not liable for any loss
          arising from the use of, or inability to use, this website.
        </p>
      </div>
      <div>
        <h2>7. Governing law</h2>
        <p>These terms are governed by the laws of India. {/* TODO: specify jurisdiction (city) */}</p>
      </div>
      <div>
        <h2>8. Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-700 hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}

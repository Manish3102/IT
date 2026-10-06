import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Techscalify collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" updated="October 2026">
      <div>
        <h2>1. Introduction</h2>
        <p>
          {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what
          information we collect when you visit our website or contact us, and how we use and protect it.
        </p>
      </div>
      <div>
        <h2>2. Information we collect</h2>
        <ul>
          <li>Details you provide through our contact form: name, company, email, phone number, service interest, budget and message.</li>
          <li>Basic technical data such as browser type, device and pages visited, collected through analytics tools.</li>
        </ul>
      </div>
      <div>
        <h2>3. How we use your information</h2>
        <ul>
          <li>To respond to your inquiries and provide proposals or services you request.</li>
          <li>To improve our website, content and services.</li>
          <li>To send updates only where you have agreed to receive them.</li>
        </ul>
      </div>
      <div>
        <h2>4. Sharing of information</h2>
        <p>
          We do not sell your personal information. We may share data with trusted service providers (for example, email or
          hosting providers) solely to operate our business, or where required by law.
        </p>
      </div>
      <div>
        <h2>5. Cookies and analytics</h2>
        <p>
          We may use cookies and analytics tools to understand how visitors use our website. You can control cookies through
          your browser settings.
        </p>
      </div>
      <div>
        <h2>6. Data security and retention</h2>
        <p>
          We use reasonable technical and organisational measures to protect your information, and retain it only as long as
          necessary for the purposes described above.
        </p>
      </div>
      <div>
        <h2>7. Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information, consistent with applicable law
          including India&apos;s Digital Personal Data Protection Act, 2023.
        </p>
      </div>
      <div>
        <h2>8. Contact</h2>
        <p>
          For privacy questions, email us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-700 hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}

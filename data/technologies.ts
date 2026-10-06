import {
  siApachekafka,
  siCss,
  siDocker,
  siDotnet,
  siExpress,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siLaravel,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siRazorpay,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";
import type { LucideIcon } from "lucide-react";
import { Cloud, Database, Network, Plug, Workflow } from "lucide-react";

export type Tech = {
  name: string;
  /** simple-icons brand glyph (24×24 path) */
  path?: string;
  hex?: string;
  /** fallback when no brand glyph is available */
  icon?: LucideIcon;
};

const b = (name: string, si: { path: string; hex: string }): Tech => ({ name, path: si.path, hex: `#${si.hex}` });

export const technologyGroups: { title: string; items: Tech[] }[] = [
  {
    title: "Frontend",
    items: [
      b("Next.js", siNextdotjs),
      b("React", siReact),
      b("JavaScript", siJavascript),
      b("TypeScript", siTypescript),
      b("HTML", siHtml5),
      b("CSS", siCss),
      b("Tailwind CSS", siTailwindcss),
    ],
  },
  {
    title: "Backend",
    items: [
      b("Node.js", siNodedotjs),
      b("Express.js", siExpress),
      b("PHP", siPhp),
      b("Laravel", siLaravel),
      b(".NET", siDotnet),
      { name: "REST APIs", icon: Network },
    ],
  },
  {
    title: "Databases",
    items: [
      b("PostgreSQL", siPostgresql),
      b("MySQL", siMysql),
      { name: "SQL Server", icon: Database },
      b("MongoDB", siMongodb),
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: Cloud },
      b("Docker", siDocker),
      b("CI/CD", siGithubactions),
      b("GitHub", siGithub),
      b("Vercel", siVercel),
    ],
  },
  {
    title: "Other",
    items: [
      b("Kafka", siApachekafka),
      { name: "Microservices", icon: Workflow },
      { name: "API Integration", icon: Plug },
      b("Authentication", siJsonwebtokens),
      b("Payment Integration", siRazorpay),
    ],
  },
];

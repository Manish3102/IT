import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Rocket,
  ShoppingCart,
  Store,
  Truck,
} from "lucide-react";

export type Industry = { name: string; icon: LucideIcon; desc: string; examples: string[] };

export const industries: Industry[] = [
  { name: "FinTech", icon: Landmark, desc: "Secure, compliant platforms for payments, lending, investments and fund operations.", examples: ["Payment flows", "Reconciliation tools", "Investor portals"] },
  { name: "Healthcare", icon: HeartPulse, desc: "Patient-friendly apps and systems that handle sensitive data with care.", examples: ["Appointment booking", "Clinic management", "Telehealth apps"] },
  { name: "E-Commerce", icon: ShoppingCart, desc: "Online stores and marketplaces built for speed, conversion and growth.", examples: ["Custom storefronts", "Order management", "Marketplace apps"] },
  { name: "Education", icon: GraduationCap, desc: "Learning platforms that engage students and simplify administration.", examples: ["LMS platforms", "Course websites", "Student portals"] },
  { name: "Real Estate", icon: Building2, desc: "Listing portals, CRMs and lead funnels for builders, brokers and agencies.", examples: ["Property portals", "Lead CRMs", "Virtual tours"] },
  { name: "Logistics", icon: Truck, desc: "Tracking, routing and fleet tools that bring visibility to every shipment.", examples: ["Shipment tracking", "Fleet dashboards", "Driver apps"] },
  { name: "Manufacturing", icon: Factory, desc: "Digitise production, inventory and quality workflows on the shop floor.", examples: ["Inventory systems", "Production tracking", "ERP integration"] },
  { name: "Retail", icon: Store, desc: "Omnichannel experiences connecting in-store, online and loyalty programmes.", examples: ["POS integration", "Loyalty apps", "Inventory sync"] },
  { name: "Startups", icon: Rocket, desc: "From idea to MVP to scale — technical partnership for early-stage founders.", examples: ["MVP development", "Product discovery", "Fractional CTO"] },
  { name: "Professional Services", icon: Briefcase, desc: "Client portals and automation for consultancies, agencies and firms.", examples: ["Client portals", "Billing automation", "Document workflows"] },
];

import { services } from "./services";

export interface LandingSection {
  heading: string;
  body: string[];
}

export interface LandingPage {
  landingSlug: string;
  serviceSlug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: LandingSection[];
  numbers: { value: string; label: string }[];
  industries: string[];
  testimonials: string[];
  faq: { q: string; a: string }[];
  cta: string;
}

const sharedNumbers = [
  { value: "18+", label: "Years of Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "55+", label: "Happy Clients" },
  { value: "24/7", label: "Support Availability" },
];

const sharedTestimonials = [
  "\u201CServices at CGCE are excellent... Highly recommend CGCE for all IT needs!\u201D — Yashwant, Head IT",
  "\u201CCGCE is a game-changer! Their proactive response to challenges proved their commitment to customer satisfaction.\u201D — Mahindra & Mahindra",
  "\u201CTheir service was truly outstanding... What impressed us most was their adherence to timelines.\u201D — Manish Mehta, Head IT (India)",
];

const industries = [
  "Banking & Finance",
  "Manufacturing",
  "Healthcare",
  "Technology / IT",
  "Fintech",
  "Government / PSU",
];

export const landingPages: LandingPage[] = services.map((s) => ({
  landingSlug: s.slug.replace(/-/g, "-"),
  serviceSlug: s.slug,
  title: s.title,
  description: s.description,
  h1: s.h1,
  intro: s.intro,
  sections: s.sections,
  numbers: sharedNumbers,
  industries,
  testimonials: sharedTestimonials,
  faq: s.faq,
  cta: s.cta,
}));

const landingSlugMap: Record<string, string> = {
  "network-operations-center": "noc",
  "annual-maintenance-contract": "amc",
  "staffing-fms-facility-management": "staffing-fms",
  "cloud-strategy": "cloud-strategy",
  "cloud-infrastructure-management": "cloud-infrastructure-management",
  "backup-and-recovery": "backup-recovery",
  "grc-and-dpo": "grc-dpo",
  "vapt": "vapt",
  "red-teaming": "red-teaming",
  "audit": "audit",
  "managed-security-operations-center-as-a-service": "soc-mss",
  "vulnerability-management-as-a-service": "vulnerability-management",
  "web-application-firewall-as-a-service": "waf-as-a-service",
  "data-loss-prevention-as-a-service": "dlp-as-a-service",
  "email-security": "email-security",
  "ot-security": "ot-security",
};

export function getLandingByUrlSlug(urlSlug: string): LandingPage | undefined {
  const serviceSlug = landingSlugMap[urlSlug];
  if (!serviceSlug) return undefined;
  const page = landingPages.find((p) => p.serviceSlug === serviceSlug);
  return page ? { ...page, landingSlug: urlSlug } : undefined;
}

export const allLandingUrlSlugs = Object.keys(landingSlugMap);

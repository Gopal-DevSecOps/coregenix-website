export interface RankingPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  problems: string[];
  proof: { label: string; value: string }[];
  services: string[];
  differentiators: string[];
  faq: { q: string; a: string }[];
  cta: string;
}

export const rankingPages: RankingPage[] = [
  {
    slug: "no-1-cyber-security-company-india",
    title: "No. 1 Cyber Security Company in India",
    description:
      "Looking for the no. 1 cyber security company in India? CoreGenix delivers VAPT, managed SOC, GRC and OT security with 18+ years of experience.",
    h1: "No. 1 Cyber Security Company in India",
    intro:
      "Every business claims to be the best. But when your data, your systems, and your reputation are on the line, claims aren't enough. You need proof — experience, expertise, and a track record you can verify.",
    problems: [
      "The wrong advice, missed vulnerabilities, or failed projects leave you exposed.",
      "Choosing the wrong cyber security partner is a risk in itself.",
      "The stakes are simply too high to guess.",
    ],
    proof: [
      { label: "Years of Experience", value: "18+" },
      { label: "Projects Delivered", value: "120+" },
      { label: "Happy Clients", value: "55+" },
      { label: "Support Availability", value: "24/7" },
    ],
    services: [
      "VAPT & penetration testing",
      "Red teaming",
      "Managed SOC (24x7)",
      "Vulnerability management as a service",
      "WAF, DLP & email security",
      "IAM, SSO, PAM & Zero Trust",
      "GRC, audits & compliance",
      "OT / industrial security",
    ],
    differentiators: [
      "18+ years of real experience since 2007",
      "Mumbai-based, Pan-India delivery",
      "IT + OT + Cloud + Security in one partner",
      "Practical, non-disruptive security",
      "Real testimonials from Yashwant, Mahindra & Mahindra, and Manish Mehta",
    ],
    faq: [
      {
        q: "Who is the no. 1 cyber security company in India?",
        a: "There's no single official ranking, but CoreGenix is a leading cyber security company in India with 18+ years of experience, 120+ projects and a full range of security services.",
      },
      {
        q: "How do I choose a cyber security company?",
        a: "Look for proven experience, a full service range, real client testimonials, certifications, and a partner who understands your industry.",
      },
      {
        q: "What services does CoreGenix offer?",
        a: "VAPT, red teaming, managed SOC, vulnerability management, WAF, DLP, email security, OT security, GRC, audits and more.",
      },
    ],
    cta: "Don't gamble on your security. Partner with a proven cyber security company.",
  },
  {
    slug: "top-cyber-security-company-india",
    title: "Top Cyber Security Company in India",
    description:
      "CoreGenix is a top cyber security company in India offering VAPT, managed SOC, GRC, OT security and more. 18+ years, 120+ projects.",
    h1: "Top Cyber Security Company in India",
    intro:
      "Search results are full of companies calling themselves leaders. But real leadership is measurable — years in the field, breadth of services, delivered projects, and clients who stayed.",
    problems: [
      "The cost of choosing the wrong security partner isn't just money.",
      "It's the vulnerabilities that get missed and incidents that go undetected.",
      "It's the compliance gaps that surface during audits.",
    ],
    proof: [
      { label: "Years of Experience", value: "18+" },
      { label: "Projects Delivered", value: "120+" },
      { label: "Happy Clients", value: "55+" },
      { label: "Support Availability", value: "24/7" },
    ],
    services: [
      "Offensive security — VAPT, red teaming, penetration testing",
      "Managed security — 24x7 SOC, vulnerability management as a service",
      "Application & data security — WAF, DLP, email security",
      "Identity & access — IAM, SSO, PAM, Zero Trust",
      "Governance & compliance — GRC, audits, ISO 27001, NIST CSF",
      "Industrial security — OT/ICS protection",
    ],
    differentiators: [
      "One accountable partner for security, IT and cloud",
      "Mumbai office with Pan-India reach",
      "Expert team led by security SMEs and technical directors",
      "Security that protects your business without stopping it",
      "Genuine testimonials from clients who experienced the difference",
    ],
    faq: [
      {
        q: "Which is the top cyber security company in India?",
        a: "CoreGenix is a leading cyber security company in India, ranked among the top for its 18+ years of experience, full-service portfolio and 120+ delivered projects.",
      },
      {
        q: "What services should a top cyber security company offer?",
        a: "A complete range — assessment, monitoring, incident response, compliance and ongoing management. CoreGenix offers all of these.",
      },
      {
        q: "Where does CoreGenix operate?",
        a: "Headquartered in Mumbai, serving clients across India.",
      },
    ],
    cta: "Work with a cyber security partner that proves its top-tier status.",
  },
  {
    slug: "best-cyber-security-company-india",
    title: "Best Cyber Security Company in India",
    description:
      "Find the best cyber security company in India for VAPT, managed SOC, GRC, and OT security. CoreGenix — 18+ years of proven protection.",
    h1: "Best Cyber Security Company in India",
    intro:
      "Any company can claim to be the best. But the best partner for your business is one that combines deep experience, a complete service range, honest advice, and results you can measure. That's a higher bar — and it's the one we hold ourselves to.",
    problems: [
      "When your security is at stake, settling for anything less than a proven, comprehensive partner is a risk you don't want to take.",
      "Any company can claim to be the best.",
      "You need a partner that earns the title.",
    ],
    proof: [
      { label: "Years of Experience", value: "18+" },
      { label: "Projects Delivered", value: "120+" },
      { label: "Happy Clients", value: "55+" },
      { label: "Support Availability", value: "24/7" },
    ],
    services: [
      "Assess — VAPT, red teaming, audits",
      "Protect — WAF, DLP, email security, IAM, PAM, Zero Trust",
      "Monitor — 24x7 managed SOC, threat detection",
      "Manage — vulnerability management, incident response",
      "Comply — GRC, ISO 27001, NIST CSF",
    ],
    differentiators: [
      "Expert team — security SMEs and technical directors, including OT specialists",
      "Proven clients — real testimonials from Yashwant, Mahindra & Mahindra, and Manish Mehta",
      "One partner, end to end — no juggling vendors for security, IT, and cloud",
      "Security without disruption — we protect production, not hinder it",
      "Honest, practical advice — we recommend what you need, not what's easiest to sell",
    ],
    faq: [
      {
        q: "What is the best cyber security company in India?",
        a: "Best depends on your needs, but CoreGenix ranks among the best for its experience, full service range, and proven results across 120+ projects.",
      },
      {
        q: "How do I compare cyber security companies?",
        a: "Compare experience, service breadth, client testimonials, industry specialization, response times, and pricing transparency.",
      },
      {
        q: "What makes CoreGenix different?",
        a: "One partner covering security, IT, cloud and OT — with 18+ years of real experience and a client-focused approach.",
      },
    ],
    cta: "Choose a partner that earns the title.",
  },
  {
    slug: "top-5-cyber-security-companies-india",
    title: "Top 5 Cyber Security Companies in India — 2026 Guide",
    description:
      "A practical guide to the top 5 cyber security companies in India — how to compare them and why CoreGenix belongs on the list.",
    h1: "Top 5 Cyber Security Companies in India — A Guide for Businesses",
    intro:
      "The Indian cyber security market is crowded. Every company claims to be top-tier, and every brochure looks the same. But your choice has real consequences: missed vulnerabilities, undetected attacks, failed audits.",
    problems: [
      "You don't need another listicle.",
      "You need a practical framework to compare vendors — and a look at who actually delivers.",
      "The options overwhelm; choosing right matters.",
    ],
    proof: [
      { label: "Years of Experience", value: "18+" },
      { label: "Projects Delivered", value: "120+" },
      { label: "Happy Clients", value: "55+" },
      { label: "VAPT Scan Capabilities", value: "30+" },
    ],
    services: [
      "Assess — VAPT, red teaming, security audits, vulnerability management",
      "Protect — WAF, DLP, email security, IAM, SSO, PAM, Zero Trust, EDR/MDR/XDR",
      "Monitor — 24x7 managed SOC (SOC MSS) and threat operations",
      "Comply — GRC, ISO 27001, NIST CSF, policy and risk frameworks",
      "Industrial — dedicated OT/ICS security practice",
    ],
    differentiators: [
      "Full-spectrum portfolio — offensive, defensive, and compliance services",
      "Deep expertise, not just partnerships and reselling",
      "24x7 operations with real monitoring and response",
      "Proven enterprise experience across sectors",
      "Local presence with national delivery",
    ],
    faq: [
      {
        q: "Who are the top 5 cyber security companies in India?",
        a: "Top-tier companies share full-spectrum portfolios, deep expertise, 24x7 operations and proven results. CoreGenix matches all of these criteria with 18+ years of experience.",
      },
      {
        q: "How do I choose a security company?",
        a: "Score every vendor on experience, breadth of services, proven results, response capability, and industry fit.",
      },
      {
        q: "What should I look for in a cyber security vendor?",
        a: "Real monitoring and response, specialized expertise, delivered projects, retained clients, and honest testimonials.",
      },
    ],
    cta: "Rankings are helpful, but your security is unique. The best way to find the right partner is to test one — with a real assessment of your environment.",
  },
];

export function getRanking(slug: string) {
  return rankingPages.find((r) => r.slug === slug);
}

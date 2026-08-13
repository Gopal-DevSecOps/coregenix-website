import { services } from "@/data/services";
import { allLandingUrlSlugs } from "@/data/landing";
import { solutionPages } from "@/data/solutionPages";

export function GET() {
  const serviceList = services
    .map((s) => `- [${s.title}](https://coregenix.com/services/${s.slug})`)
    .join("\n");

  const landingList = allLandingUrlSlugs
    .map((s) => `- [Service Landing Page](https://coregenix.com/${s})`)
    .join("\n");

  const content = `# CoreGenix

> CoreGenix (CGCES Pvt Ltd) is an IT Infrastructure & Cyber Security company based in Mumbai, India. It provides managed services, cloud management, cyber security (VAPT, managed SOC, GRC, OT security) and compliance services to businesses across India.

CoreGenix has 18+ years of experience and has delivered 120+ projects for 55+ clients. Services are delivered 24x7 from its Mumbai office with Pan-India reach. Contact: +91 83559 58119, sales@cgcein.com.

## Company

- [About CoreGenix](https://coregenix.com/about): Company background, mission and team
- [Contact](https://coregenix.com/contact): Office address, phone, email and map
- [Career](https://coregenix.com/career): Open roles at CoreGenix

## Services

- [Services Overview](https://coregenix.com/services): All IT infrastructure, cloud and cyber security services
- [Solutions](https://coregenix.com/solutions): Cyber security and IT solutions in detail
- [IT Enterprise Solutions](https://coregenix.com/it-services): Infrastructure design and deployment

## Individual Services

${serviceList}

## Service Landing Pages

${landingList}

## Solutions

- [Solutions Overview](https://coregenix.com/solutions): Cyber security, cloud and IT infrastructure solutions in detail
- [IT Enterprise Solutions](https://coregenix.com/it-services): Infrastructure design and deployment

### IT Infrastructure Solutions

${solutionPages
    .filter((p) => p.category === "IT Infrastructure Solutions")
    .map((p) => `- [${p.title}](https://coregenix.com/solutions/${p.slug}): ${p.description}`)
    .join("\n")}

### Cloud Infrastructure Solutions

${solutionPages
    .filter((p) => p.category === "Cloud Infrastructure Solutions")
    .map((p) => `- [${p.title}](https://coregenix.com/solutions/${p.slug}): ${p.description}`)
    .join("\n")}

### Cyber Security Solutions

${solutionPages
    .filter((p) => p.category === "Cyber Security Solutions")
    .map((p) => `- [${p.title}](https://coregenix.com/solutions/${p.slug}): ${p.description}`)
    .join("\n")}

### Governance, Risk & Compliance & Data Protection Officer

${solutionPages
    .filter((p) => p.category === "Governance, Risk & Compliance & Data Protection Officer")
    .map((p) => `- [${p.title}](https://coregenix.com/solutions/${p.slug}): ${p.description}`)
    .join("\n")}

## Rankings

- [No. 1 Cyber Security Company in India](https://coregenix.com/no-1-cyber-security-company-india)
- [Top Cyber Security Company in India](https://coregenix.com/top-cyber-security-company-india)
- [Best Cyber Security Company in India](https://coregenix.com/best-cyber-security-company-india)
- [Top 5 Cyber Security Companies in India](https://coregenix.com/top-5-cyber-security-companies-india)

## Knowledge

- [Blog](https://coregenix.com/blog): Insights on cyber security, cloud, backup, managed services and compliance
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}

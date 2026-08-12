export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "it-ot-cyber-security-essential",
    tag: "Cyber Security",
    title: "IT & OT Cyber Security: Why It Is Essential for Your Business",
    excerpt:
      "Cyber threats are growing every day. With CoreGenix, keep your IT and OT environments fully protected.",
    image: "/images/coregenix/service-6.jpg",
    date: "Jul 28, 2026",
    author: "CoreGenix Team",
    content: [
      "Cyber threats are growing every day, and they no longer target only office IT systems. Industrial control systems, production networks and operational technology (OT) are now squarely in the crosshairs of attackers.",
      "IT security protects your data, applications and network. OT security protects the systems that run your factory, plant or critical infrastructure. A breach in either can cause financial loss, reputational damage and, in the case of OT, physical impact on production.",
      "A unified approach is essential. Many organizations secure their IT estate but leave OT environments exposed — often because legacy systems were never designed with security in mind, and because patching them risks production downtime.",
      "CoreGenix helps businesses secure both worlds. We deliver audits, hardening, managed SOC monitoring and incident response across IT and OT, using methods that protect production without stopping it.",
      "The result is a defense that covers your entire operation — not just the parts that sit behind a firewall. Talk to CoreGenix to assess your IT and OT security posture today.",
    ],
  },
  {
    slug: "cloud-infrastructure-scale-business",
    tag: "Cloud",
    title: "How Cloud Infrastructure Helps Scale Your Business",
    excerpt:
      "Secure cloud migration means lower cost, better performance, and a business that's always ready.",
    image: "/images/coregenix/service-7.jpg",
    date: "Jul 18, 2026",
    author: "CoreGenix Team",
    content: [
      "Cloud infrastructure has moved from a trend to a business necessity. Whether you are a growing company or an established enterprise, the cloud gives you flexibility, scale and cost control that on-premises systems struggle to match.",
      "The key is strategy. Moving workloads to the cloud without a plan leads to bill shock, security gaps and performance problems. A well-planned migration starts with understanding which workloads belong where — public, private or hybrid.",
      "Once you are in the cloud, management matters. Continuous monitoring, security controls, cost optimization and backup keep your environment healthy and predictable.",
      "CoreGenix helps businesses at every step — from cloud strategy and readiness assessment, to migration and ongoing management of Azure and AWS environments.",
      "With the right partner, the cloud becomes a growth engine rather than a cost center. Contact CoreGenix for a free cloud readiness assessment.",
    ],
  },
  {
    slug: "data-backup-dr-bcp-guide",
    tag: "Data Backup",
    title: "Data Backup, DR & BCP: A Complete Guide to Business Continuity",
    excerpt:
      "Learn how essential backup, disaster recovery, and business continuity planning are to protect against data loss.",
    image: "/images/coregenix/service-1.jpg",
    date: "Jul 06, 2026",
    author: "CoreGenix Team",
    content: [
      "Data is the lifeblood of modern business. Losing it — to ransomware, hardware failure or human error — can be catastrophic. That is why backup, disaster recovery (DR) and business continuity planning (BCP) are non-negotiable.",
      "Backup protects your data by copying it to a safe location. But backup alone is not enough. DR restores whole systems and operations at scale, while BCP ensures your business can keep running through disruption.",
      "The critical question every business must answer: if your systems went down today, how quickly could you recover, and how much would you lose per hour? The answers define your RPO and RTO.",
      "CoreGenix builds automated backup solutions, defines recovery objectives, and verifies restores with regular testing — because a backup that was never tested is not a backup.",
      "Protect what you have built. Contact CoreGenix for a free backup and business continuity assessment.",
    ],
  },
  {
    slug: "why-managed-it-support-247",
    tag: "Managed Services",
    title: "Why Managed IT Support Keeps Your Business Running 24/7",
    excerpt:
      "Proactive helpdesk and monitoring mean fewer surprises and more uptime.",
    image: "/images/coregenix/service-2.jpg",
    date: "Jun 22, 2026",
    author: "CoreGenix Team",
    content: [
      "Unplanned downtime is one of the most expensive problems a business can face. When systems fail, work stops, customers wait and revenue is lost. Managed IT support exists to prevent exactly that.",
      "With 24x7 monitoring, issues are caught early — often before users notice. A dedicated NOC watches servers, networks and applications around the clock, so problems are resolved fast.",
      "Managed support also gives you predictable costs. Instead of surprise repair bills and emergency call-outs, you pay a fixed fee for continuous protection and maintenance.",
      "CoreGenix delivers managed support through its 24x7 Network Operations Center, with SLAs that define response times and a team that knows your environment.",
      "Keep your business running smoothly. Contact CoreGenix for managed IT support that works around the clock.",
    ],
  },
  {
    slug: "future-ready-it-infrastructure",
    tag: "Infrastructure",
    title: "Building a Future-Ready IT Infrastructure for Growth",
    excerpt:
      "Servers, networks and data centers that scale with you. A practical blueprint for modern enterprise infrastructure.",
    image: "/images/coregenix/service-4.jpg",
    date: "Jun 09, 2026",
    author: "CoreGenix Team",
    content: [
      "Your IT infrastructure is the foundation of your business. If it is unreliable, slow or outdated, everything built on top of it suffers. A future-ready infrastructure scales with you and keeps your operations resilient.",
      "Key building blocks include a well-designed network, resilient servers and storage, secure data centers, and backup and disaster recovery that protect your critical systems.",
      "Modern infrastructure also increasingly spans on-premises and cloud. Hybrid environments let you keep what makes sense locally while leveraging cloud scale and flexibility where it helps.",
      "CoreGenix designs, deploys and manages infrastructure tailored to your business — from network design to data center build and 24x7 managed support.",
      "Build the foundation your growth deserves. Contact CoreGenix for an infrastructure consultation.",
    ],
  },
  {
    slug: "infosec-grc-iso-27001",
    tag: "Compliance",
    title: "InfoSec GRC: Meeting ISO 27001 Standards with Confidence",
    excerpt:
      "Governance, risk and compliance don't have to be painful. Learn how GRC frameworks keep you audit-ready.",
    image: "/images/coregenix/service-5.jpg",
    date: "May 27, 2026",
    author: "CoreGenix Team",
    content: [
      "For many businesses, compliance feels like a burden — endless documentation, audits and frameworks. But approached correctly, governance, risk and compliance (GRC) becomes a competitive advantage.",
      "Standards like ISO 27001 give you a structured way to manage information security. They show clients and partners that you take security seriously, which opens doors to enterprise and regulated markets.",
      "The path to compliance is practical: define policies, identify risks, implement controls and document evidence. It is demanding work, but it is achievable with the right guidance.",
      "CoreGenix helps businesses build GRC programs that are practical and audit-ready — covering risk management, policy documentation, ISO 27001 readiness and ongoing compliance support.",
      "Make compliance an asset. Contact CoreGenix for a GRC readiness assessment.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

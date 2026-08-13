import type { ServicePage } from "./services";

export interface SolutionPage extends ServicePage {
  category: string;
}

export const solutionPages: SolutionPage[] = [
  {
    slug: "network",
    category: "IT Infrastructure Solutions",
    title: "Network Infrastructure Solutions Mumbai | Network Design, Setup & Security",
    description:
      "Enterprise network infrastructure solutions in Mumbai & India — network design, deployment, security, Wi-Fi and managed monitoring. Reliable, scalable and secure.",
    h1: "Network Infrastructure Solutions in Mumbai",
    intro:
      "CoreGenix designs, builds and manages network infrastructure that is reliable, scalable and secure — so your business stays connected, fast and protected.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "An outdated or poorly designed network slows every application, frustrates every employee and exposes the whole business to risk. But most businesses don't have the in-house expertise to plan and run enterprise-grade networks.",
          "Downtime, slow performance and security gaps all trace back to network design. The right network is invisible — it just works. Getting there takes specialists.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Network design & architecture — LAN, WAN, SD-WAN and data center networking",
          "Structured cabling — copper and fiber, office and data center",
          "Wired & wireless — enterprise Wi-Fi with secure access",
          "Network security — firewalls, segmentation, access control",
          "Network monitoring — 24x7 visibility backed by our NOC",
          "Optimization — bandwidth planning and performance tuning",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A network engineered for your business, not off-the-shelf",
          "Fast, reliable connectivity for every user and device",
          "Security built into the design — not bolted on later",
          "Ongoing monitoring and support that keeps it running",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Enterprise network design — LAN, WAN, SD-WAN and data centre",
          "Structured cabling with copper and fibre done right",
          "Secure Wi-Fi, segmentation and access control built in",
          "24x7 NOC monitoring after deployment",
          "18+ years designing and running enterprise networks",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What are network infrastructure services?",
        a: "Network infrastructure services cover the design, deployment, security and management of the networks your business runs on — switching, routing, Wi-Fi, cabling and connectivity.",
      },
      {
        q: "How much does network infrastructure setup cost in India?",
        a: "It depends on site size, users and requirements. CoreGenix provides a free site assessment and a transparent quote.",
      },
      {
        q: "Why does my business need structured cabling?",
        a: "Structured cabling provides a clean, organized, high-performance foundation for your network — making it faster, more reliable and far easier to maintain.",
      },
    ],
    cta: "Build a network that never holds your business back. Get a free network assessment today.",
  },
  {
    slug: "data-center",
    category: "IT Infrastructure Solutions",
    title: "Data Center Solutions Mumbai | Design, Build & Management",
    description:
      "Data center design, build and management in Mumbai & India — server rooms, virtualization, storage, cooling and power. Reliable enterprise infrastructure.",
    h1: "Data Center Solutions in Mumbai",
    intro:
      "CoreGenix plans, builds and manages data centers and server rooms — from a single rack to a full enterprise facility.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Business-critical applications need an environment that stays up — power, cooling, redundancy and physical security. Most server rooms are pieced together over years: messy cabling, uneven cooling, no capacity planning.",
          "When the infrastructure under your applications is fragile, every small failure becomes an outage. And outage means lost business.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Data center design & planning — capacity, cooling, power, layout",
          "Server room build-out — racks, cabling, UPS, cooling, fire safety",
          "Server & virtualization — physical and virtual compute platforms",
          "Storage solutions — SAN, NAS and software-defined storage",
          "Power & cooling — UPS, battery backup, precision cooling",
          "DC monitoring & management — 24x7 operations support",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A data center engineered for uptime and growth",
          "Clean power and cooling that protect your hardware",
          "Virtualization that lowers cost and improves agility",
          "One partner for design, build and ongoing management",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Data centre design and build — racks, cabling, UPS, cooling",
          "Virtualization and storage engineered for uptime",
          "Power and cooling redundancy planned, not patched",
          "One partner for design, build and 24x7 operations",
          "18+ years building and running data centre environments",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What are data center solutions?",
        a: "Data center solutions cover the design, construction and management of the facilities that host your servers and critical applications — including power, cooling, racks and virtualization.",
      },
      {
        q: "Should we build our own data center or use colocation?",
        a: "It depends on your needs. CoreGenix advises objectively on in-house vs colocation vs cloud, then delivers whichever fits best.",
      },
      {
        q: "How much does a data center setup cost in India?",
        a: "Costs vary widely with size and redundancy level. Contact CoreGenix for a free data center assessment.",
      },
    ],
    cta: "Give your critical applications a foundation they can rely on. Get a free data center assessment today.",
  },
  {
    slug: "data-backup",
    category: "IT Infrastructure Solutions",
    title: "Data Backup Solutions Mumbai | Automated Backup & Restore",
    description:
      "Automated data backup solutions in Mumbai & India — on-premise and cloud backup for servers, databases and applications. Restore when you need it.",
    h1: "Data Backup Solutions in Mumbai",
    intro:
      "CoreGenix builds automated backup solutions that protect your data and restore it quickly when disaster strikes.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Most businesses discover their backup was never working — the day they need it. Failed jobs, untested restores, and data spread across systems with no single plan.",
          "Data loss isn't an 'if'. It's a 'when'. Ransomware, hardware failure or human error — your data will be tested. Backups that actually restore are the only answer.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Automated backup — servers, databases, applications, endpoints",
          "On-premise backup — local, fast restore",
          "Cloud backup — offsite protection, always available",
          "3-2-1 strategy — multiple copies, multiple locations",
          "Restore testing — we verify your backups actually work",
          "Monitoring & alerting — backup health you can see",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Confidence that your data is always recoverable",
          "Fast, tested restore — not a promise, a process",
          "Protection against ransomware and physical loss",
          "Reports that prove your backups are healthy",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Backups that restore — we test them, not just schedule them",
          "On-premise and cloud backup built to your RPO and RTO",
          "Ransomware-resistant 3-2-1 strategy",
          "Backup health reports you can prove to auditors",
          "18+ years protecting business-critical data",
          "Mumbai office, Pan-India support",
        ],
      },
    ],
    faq: [
      {
        q: "What is the best backup strategy?",
        a: "A 3-2-1 strategy is the industry standard — at least three copies of your data, on two different media, with one copy offsite. CoreGenix implements this for you.",
      },
      {
        q: "How often should data be backed up?",
        a: "As often as your business can afford to lose changes. CoreGenix helps you define frequency based on your data and risk.",
      },
      {
        q: "How much does a backup solution cost in India?",
        a: "Costs depend on data volume and retention. Contact CoreGenix for a free backup assessment.",
      },
    ],
    cta: "Test your backups before disaster tests you. Get a free backup assessment today.",
  },
  {
    slug: "disaster-recovery-bcp",
    category: "IT Infrastructure Solutions",
    title: "Disaster Recovery & Business Continuity Planning India",
    description:
      "Disaster recovery (DR) and business continuity planning (BCP) in India — recover systems fast and keep operations running through any disruption.",
    h1: "Disaster Recovery & Business Continuity Planning in India",
    intro:
      "CoreGenix builds disaster recovery and business continuity plans that keep your business running — through outages, disasters and ransomware.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "When disaster hits — fire, flood, cyber attack, power failure — most businesses are caught unprepared. Systems go down, data is at risk, and nobody has a tested plan to recover.",
          "Every hour of downtime costs money and reputation. The businesses that survive disruption are the ones that planned for it before it happened.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "DR strategy design — RPO and RTO defined for your business",
          "Recovery architecture — replicated systems, ready to fail over",
          "Business continuity planning — keep operations running",
          "Backup integration — DR layered on reliable backups",
          "Tested failover — regular DR drills, not just documentation",
          "Incident playbooks — clear steps when disaster strikes",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A defined recovery time — you know when you'll be back",
          "Systems ready to fail over, not just plans on paper",
          "A tested process that works under pressure",
          "Board-ready continuity documentation",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "RPO and RTO defined for your business, then delivered",
          "Tested failover — regular DR drills, not just documents",
          "Recovery architecture layered on reliable backups",
          "Board-ready continuity documentation",
          "18+ years of infrastructure and recovery experience",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is the difference between DR and BCP?",
        a: "Disaster recovery restores IT systems after disruption. Business continuity keeps the wider business operating. Most businesses need both.",
      },
      {
        q: "What are RPO and RTO?",
        a: "RPO is how much data you can afford to lose; RTO is how fast you need systems back. CoreGenix helps you define both.",
      },
      {
        q: "How often should we test our DR plan?",
        a: "At least annually, and after major changes. Regular testing is the only way to know your DR actually works.",
      },
    ],
    cta: "Don't plan for disaster during a disaster. Get a free DR & BCP assessment today.",
  },
  {
    slug: "private-cloud",
    category: "Cloud Infrastructure Solutions",
    title: "Private Cloud Solutions Mumbai | Dedicated Cloud Infrastructure",
    description:
      "Private cloud solutions in Mumbai & India — dedicated, secure cloud infrastructure for compliance, control and performance.",
    h1: "Private Cloud Solutions in Mumbai",
    intro:
      "CoreGenix builds and manages private cloud environments that give you dedicated, secure and compliant cloud infrastructure.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Public cloud isn't always the right answer. Compliance, data sovereignty and performance requirements can demand dedicated infrastructure that nobody else shares.",
          "But building a private cloud requires serious expertise in virtualization, storage, networking and security — and running it well takes even more.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Private cloud architecture — design matched to your workloads",
          "On-premise & hosted private cloud — the choice that fits",
          "Virtualization platform — enterprise-grade compute",
          "Storage & networking — built for performance and isolation",
          "Security & compliance — dedicated, auditable environments",
          "Ongoing management — 24x7 operations and support",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Dedicated infrastructure — no noisy neighbors",
          "Full control over security and compliance",
          "Predictable performance for critical workloads",
          "A private cloud that's actually managed",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Dedicated infrastructure — no noisy neighbours",
          "Compliance and data sovereignty by design",
          "Enterprise virtualization with predictable performance",
          "Private cloud that's actually managed, not just built",
          "18+ years across data centres, virtualization and cloud",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is a private cloud?",
        a: "A private cloud is cloud infrastructure dedicated to a single organization — with the self-service, scalability and management of cloud, but full isolation and control.",
      },
      {
        q: "When should a business choose private cloud?",
        a: "When compliance, data sovereignty, performance or security demand dedicated infrastructure that isn't shared with other tenants.",
      },
      {
        q: "How much does a private cloud cost in India?",
        a: "It depends on compute, storage and isolation requirements. Contact CoreGenix for a free private cloud assessment.",
      },
    ],
    cta: "Get dedicated cloud infrastructure that meets your compliance and performance needs. Get a free assessment today.",
  },
  {
    slug: "public-cloud",
    category: "Cloud Infrastructure Solutions",
    title: "Public Cloud Solutions India | Azure & AWS Migration & Management",
    description:
      "Public cloud solutions in India — Azure and AWS migration, architecture, security and cost optimization. Scale on the cloud that fits.",
    h1: "Public Cloud Solutions in India",
    intro:
      "CoreGenix helps you adopt Azure and AWS public cloud — the right architecture, migration and ongoing management.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Public cloud offers scale and flexibility — but only if it's designed right. Poorly planned cloud estates lead to bill shock, security gaps and workloads that perform worse than on-premise.",
          "Moving to cloud isn't a destination. It's an ongoing operation. Without the right partner, you get the worst of both worlds.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Cloud architecture — Azure and AWS designed for your workloads",
          "Migration — phased, low-risk moves with minimal disruption",
          "Security — identity, network, encryption and compliance controls",
          "Cost optimization — right-sizing and savings on every bill",
          "Landing zones — governed, secure foundations from day one",
          "Ongoing management — 24x7 operations and optimization",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Cloud that scales with your business",
          "Predictable costs — no bill-shock surprises",
          "Security built in, from day one",
          "A partner who manages it so you don't have to",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Azure and AWS expertise without vendor bias",
          "Phased migrations that protect production uptime",
          "Cost optimization — no bill-shock surprises",
          "Security and landing zones from day one",
          "18+ years across infrastructure and cloud",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "Should we choose Azure or AWS?",
        a: "Both are excellent platforms, but the right choice depends on your workloads, integrations and team skills. CoreGenix advises objectively on both.",
      },
      {
        q: "How long does a public cloud migration take?",
        a: "Simple workloads can move in weeks; complex estates take longer. Your migration roadmap defines realistic, phased timelines.",
      },
      {
        q: "How much does public cloud cost in India?",
        a: "Cloud costs depend on usage. CoreGenix optimizes your architecture to keep costs controlled and predictable.",
      },
    ],
    cta: "Adopt public cloud the right way. Get a free cloud assessment today.",
  },
  {
    slug: "hybrid-cloud",
    category: "Cloud Infrastructure Solutions",
    title: "Hybrid Cloud Solutions India | Unified On-Premise & Cloud",
    description:
      "Hybrid cloud solutions in India — unify your on-premise and cloud environments with a consistent, secure operating model.",
    h1: "Hybrid Cloud Solutions in India",
    intro:
      "CoreGenix builds hybrid cloud environments that combine the control of on-premise with the scale of cloud — managed as one.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Most businesses already run a hybrid environment — by accident. Some workloads on-premise, some in cloud, different teams, different tools, no single strategy. That's not hybrid cloud, that's chaos.",
          "The result is security blind spots, duplicated effort and workloads in the wrong place. Hybrid cloud done right is deliberate and managed.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Hybrid architecture — decide what runs where, and why",
          "Connectivity — secure links between on-premise and cloud",
          "Unified management — one operating model across both",
          "Consistent security — same policies, everywhere",
          "Workload placement — data stays where compliance requires",
          "Cost & performance balance — the best of both worlds",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Workloads in the right place for cost, control and performance",
          "One team, one strategy, no finger-pointing",
          "Consistent security across your whole estate",
          "Flexibility to evolve as your business changes",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Workloads placed where they belong — cost, control, compliance",
          "Secure links between on-premise and cloud",
          "One operating model across your whole estate",
          "Consistent security policies everywhere",
          "18+ years across on-premise and cloud environments",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is a hybrid cloud?",
        a: "A hybrid cloud combines on-premise infrastructure with public or private cloud, connected and managed as a single environment.",
      },
      {
        q: "Why choose hybrid over pure public cloud?",
        a: "Hybrid gives you control and compliance for sensitive workloads, plus the scale and flexibility of cloud for others.",
      },
      {
        q: "How much does a hybrid cloud setup cost in India?",
        a: "It depends on existing infrastructure and cloud usage. Contact CoreGenix for a free hybrid cloud assessment.",
      },
    ],
    cta: "Stop running your infrastructure by accident. Get a free hybrid cloud assessment today.",
  },
  {
    slug: "infrastructure-security",
    category: "Cyber Security Solutions",
    title: "Infrastructure Security Services Mumbai | Network & Server Security",
    description:
      "Infrastructure security services in Mumbai & India — harden networks, servers and endpoints against cyber attacks. Proactive defense for business.",
    h1: "Infrastructure Security Services in Mumbai",
    intro:
      "CoreGenix hardens your IT infrastructure — networks, servers, endpoints and cloud — against the attacks that target businesses every day.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Attackers look for weak infrastructure — unpatched servers, open ports, misconfigured firewalls, default passwords. One weakness is all they need to enter and move laterally through your business.",
          "Most businesses have no clear picture of how exposed their infrastructure is. You can't defend what you can't see.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Infrastructure hardening — servers, network devices, endpoints",
          "Security architecture — firewalls, segmentation, access control",
          "Vulnerability management — find and fix weaknesses",
          "Patch management — close known attack paths",
          "Security monitoring — 24x7 visibility backed by our SOC",
          "Zero-trust readiness — strong, verified access everywhere",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A hardened infrastructure that resists attacks",
          "Visible, closed attack surface",
          "Less risk of breach and ransomware",
          "Security that's continuously managed",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Hardening that closes the paths attackers actually use",
          "Patch and vulnerability management that stays on top of CVE",
          "Segmentation and access control built for zero-trust readiness",
          "24x7 visibility backed by our SOC",
          "18+ years of security and infrastructure expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is infrastructure security?",
        a: "Infrastructure security protects the systems your business runs on — networks, servers, endpoints and cloud — from cyber attacks and misuse.",
      },
      {
        q: "How do I know if my infrastructure is secure?",
        a: "An infrastructure security assessment reveals misconfigurations, unpatched systems and other weaknesses. CoreGenix provides one for free.",
      },
      {
        q: "How much does infrastructure security cost in India?",
        a: "It depends on environment size and scope. Contact CoreGenix for a free assessment.",
      },
    ],
    cta: "Find the weaknesses before attackers do. Get a free infrastructure security assessment today.",
  },
  {
    slug: "identity-access-management",
    category: "Cyber Security Solutions",
    title: "Identity & Access Management (IAM) Solutions India",
    description:
      "Identity & Access Management (IAM) solutions in India — control who accesses what. Authentication, authorization, lifecycle and governance.",
    h1: "Identity & Access Management (IAM) Solutions in India",
    intro:
      "CoreGenix implements Identity & Access Management that puts the right people in front of the right resources — nothing more, nothing less.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Most breaches start with a stolen or misused credential. Ex-employees with active access, shared passwords, over-privileged accounts — identity sprawl makes your business easy to enter and hard to control.",
          "Without proper identity management, you can't answer the simplest security question: who can access what, right now?",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "IAM strategy & architecture — a model for secure access",
          "Centralized identity — one source of truth for users",
          "Authentication — MFA and strong sign-in everywhere",
          "Authorization — least-privilege access, by design",
          "Identity lifecycle — joiners, movers, leavers managed",
          "Access governance — reviews, certifications and controls",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Control over who can access what",
          "Fewer credential-based breaches",
          "Clean, defensible access for audits",
          "Automated user lifecycle — no orphan accounts",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "One source of truth for every user in your business",
          "Least-privilege access by design, not afterthought",
          "Joiners, movers and leavers managed automatically",
          "Access governance that survives audits",
          "18+ years of IT and security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is Identity & Access Management (IAM)?",
        a: "IAM is the framework of policies and technologies that ensures the right people access the right resources, for the right reasons, at the right time.",
      },
      {
        q: "Why is IAM important for security?",
        a: "Stolen or misused credentials cause most breaches. IAM controls and verifies access, dramatically reducing that risk.",
      },
      {
        q: "How much does IAM implementation cost in India?",
        a: "It depends on user count and existing systems. Contact CoreGenix for a free IAM assessment.",
      },
    ],
    cta: "Take control of who accesses your systems. Get a free IAM assessment today.",
  },
  {
    slug: "single-sign-on",
    category: "Cyber Security Solutions",
    title: "Single Sign-On (SSO) Solutions India",
    description:
      "Single Sign-On (SSO) solutions in India — one secure login for every application. Reduce password fatigue and improve security.",
    h1: "Single Sign-On (SSO) Solutions in India",
    intro:
      "CoreGenix implements Single Sign-On so your users log in once and securely access every application they need.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Your employees juggle dozens of passwords — and they don't love it. Shared passwords, weak passwords, password resets and 'just this once' workarounds create security holes across your business.",
          "Password fatigue isn't a user problem. It's a security problem. The more passwords people juggle, the more they reuse and share.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "SSO architecture — connect every app to one identity",
          "Federation — SAML, OIDC across cloud and on-premise apps",
          "MFA integration — strong authentication at every login",
          "App onboarding — secure access to SaaS and internal apps",
          "Password reduction — fewer passwords, less risk",
          "Governance — consistent access control across apps",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "One login for everything your team needs",
          "Fewer passwords — and fewer password-related breaches",
          "MFA enforced consistently",
          "Happier users and fewer helpdesk resets",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "One login for every cloud and on-premise application",
          "SAML and OIDC federation done right",
          "MFA enforced consistently at every sign-in",
          "Fewer passwords, fewer resets, happier users",
          "18+ years of IT and security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is Single Sign-On (SSO)?",
        a: "SSO lets users authenticate once and access multiple applications without logging in again — improving both security and user experience.",
      },
      {
        q: "Is SSO more secure than separate passwords?",
        a: "Yes. SSO reduces password reuse and fatigue, and makes it practical to enforce strong MFA on every login.",
      },
      {
        q: "How much does SSO cost in India?",
        a: "It depends on application count and identity platform. Contact CoreGenix for a free SSO assessment.",
      },
    ],
    cta: "End password chaos for your team. Get a free SSO assessment today.",
  },
  {
    slug: "privileged-access-management",
    category: "Cyber Security Solutions",
    title: "Privileged Access Management (PAM) Solutions India",
    description:
      "Privileged Access Management (PAM) solutions in India — secure, monitor and control admin and privileged accounts. Stop the #1 breach vector.",
    h1: "Privileged Access Management (PAM) Solutions in India",
    intro:
      "CoreGenix implements Privileged Access Management that secures your most dangerous accounts — the ones attackers target first.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Privileged accounts — administrators, domain admins, service accounts — hold the keys to your entire business. Attackers don't break in through normal users; they hunt for privileged credentials. One compromised admin account can take down everything.",
          "Yet most businesses share admin passwords, leave service accounts unmanaged, and have no visibility into what privileged users actually do.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "PAM strategy — identify and classify all privileged accounts",
          "Credential vaulting — secrets stored, never shared",
          "Session management — monitored, recorded admin sessions",
          "Least privilege — rights granted only when needed",
          "Service account management — automated, rotated secrets",
          "Audit & reporting — evidence of every privileged action",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Your most dangerous accounts secured",
          "No more shared admin passwords",
          "Full visibility into privileged activity",
          "Defensible evidence for auditors",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Admin and service account credentials vaulted, never shared",
          "Sessions monitored and recorded for accountability",
          "Least privilege granted only when needed",
          "Audit evidence for every privileged action",
          "18+ years of security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is Privileged Access Management?",
        a: "PAM protects accounts with elevated rights — like administrators — by vaulting credentials, enforcing least privilege and monitoring privileged activity.",
      },
      {
        q: "Why is PAM so important?",
        a: "Compromised privileged accounts are the #1 path to serious breaches. PAM secures those accounts and makes abuse visible.",
      },
      {
        q: "How much does PAM cost in India?",
        a: "It depends on account count and scope. Contact CoreGenix for a free PAM assessment.",
      },
    ],
    cta: "Secure the accounts attackers want most. Get a free PAM assessment today.",
  },
  {
    slug: "zero-trust",
    category: "Cyber Security Solutions",
    title: "Zero Trust Security Solutions India | Never Trust, Always Verify",
    description:
      "Zero Trust security solutions in India — never trust, always verify. Continuous verification of every user, device and request.",
    h1: "Zero Trust Security Solutions in India",
    intro:
      "CoreGenix implements Zero Trust architecture — continuous verification for every user, device and request, everywhere.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "The old security model — trust everything inside the network — is broken. Once attackers get inside, they move freely. VPN credentials, phishing and lateral movement make perimeter security obsolete.",
          "Modern businesses need a model that verifies every request, regardless of where it comes from. That's Zero Trust.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Zero Trust architecture — a roadmap, not a buzzword",
          "Identity verification — strong authentication for every user",
          "Device trust — only healthy devices get access",
          "Micro-segmentation — contain attacks, stop lateral movement",
          "Continuous monitoring — every request, all the time",
          "Least-privilege access — minimal rights, always",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "No implicit trust — every request is verified",
          "Contained breaches that can't spread",
          "Secure work from anywhere",
          "A modern architecture ready for the future",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Every request verified — no implicit trust, anywhere",
          "Device trust before access is granted",
          "Micro-segmentation that contains breaches",
          "A practical, phased roadmap, not a buzzword",
          "18+ years across network and security architecture",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is Zero Trust?",
        a: "Zero Trust is a security model that verifies every user, device and request — never trusting anyone or anything by default, regardless of location.",
      },
      {
        q: "How do I start implementing Zero Trust?",
        a: "Start with identity, then device trust, then network segmentation. CoreGenix provides a practical, phased Zero Trust roadmap.",
      },
      {
        q: "How much does Zero Trust cost in India?",
        a: "It depends on your current environment and the pace of adoption. Contact CoreGenix for a free Zero Trust assessment.",
      },
    ],
    cta: "Move beyond perimeter security. Get a free Zero Trust assessment today.",
  },
  {
    slug: "data-loss-prevention",
    category: "Cyber Security Solutions",
    title: "Data Loss Prevention (DLP) Solutions India",
    description:
      "Data Loss Prevention (DLP) solutions in India — stop sensitive data leaving through email, USB, cloud or endpoints. Protect what matters.",
    h1: "Data Loss Prevention (DLP) Solutions in India",
    intro:
      "CoreGenix implements Data Loss Prevention that watches your sensitive data and stops it from leaking — accidentally or intentionally.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Customer lists, financial records, intellectual property, design files — your most valuable data is constantly moving. Through email, USB drives, cloud uploads and endpoints. One careless action can expose it.",
          "Once data leaves your control, you can't get it back. A leak means lawsuits, lost clients and damaged reputation.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "DLP strategy — know your sensitive data and its risks",
          "Endpoint DLP — USB, printing, clipboard, screenshots",
          "Network DLP — data leaving through web, email, FTP",
          "Cloud DLP — unauthorized uploads and sharing",
          "Policy enforcement — block risky activity automatically",
          "Monitoring & reporting — visibility plus compliance evidence",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Sensitive data protected everywhere it moves",
          "Automatic blocking of risky activity",
          "Visibility into how data flows",
          "Evidence for compliance and audits",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Sensitive data discovered across endpoints, network and cloud",
          "Risky transfers blocked automatically, not after the fact",
          "Visibility into how your data actually flows",
          "Evidence for compliance and audits",
          "18+ years of security and data protection expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is Data Loss Prevention (DLP)?",
        a: "DLP detects and prevents the unauthorized transfer of sensitive data — through email, endpoints, networks and cloud — whether accidental or intentional.",
      },
      {
        q: "Why is DLP important?",
        a: "Data leaks cause financial, legal and reputational damage. DLP stops them at the source, before data leaves your control.",
      },
      {
        q: "How much does DLP cost in India?",
        a: "It depends on endpoints, users and data types. Contact CoreGenix for a free DLP assessment.",
      },
    ],
    cta: "Keep your sensitive data where it belongs. Get a free DLP assessment today.",
  },
  {
    slug: "edr-mdr-xdr",
    category: "Cyber Security Solutions",
    title: "EDR / MDR / XDR Security Services India",
    description:
      "Endpoint Detection & Response (EDR), Managed Detection & Response (MDR) and XDR services in India — detect and stop attacks on endpoints.",
    h1: "EDR / MDR / XDR Security Services in India",
    intro:
      "CoreGenix delivers Endpoint Detection & Response (EDR), Managed Detection & Response (MDR) and XDR — real-time protection for your endpoints.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Traditional antivirus can't stop modern attacks. Ransomware, fileless malware and zero-days slip past signatures — and once an endpoint is compromised, attackers move laterally through the business.",
          "Endpoints are the front line of every attack. You need detection and response, not just prevention — and most businesses can't staff that 24x7.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "EDR — real-time detection and response on every endpoint",
          "MDR — a managed team watching and responding for you",
          "XDR — extended visibility across endpoints, network and cloud",
          "Threat hunting — proactive search for hidden attackers",
          "Incident response — containment and recovery when it matters",
          "24x7 monitoring — backed by our SOC",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Attacks detected at the endpoint — fast",
          "Response within minutes, not days",
          "Visibility across your whole environment",
          "A security team watching around the clock",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Detection and response on every endpoint, not just antivirus",
          "A managed team watching and responding for you",
          "Threat hunting that finds attackers before they spread",
          "Response within minutes, backed by our SOC",
          "18+ years of security operations experience",
          "Mumbai base, Pan-India coverage",
        ],
      },
    ],
    faq: [
      {
        q: "What is the difference between EDR, MDR and XDR?",
        a: "EDR protects endpoints, MDR adds a managed team that monitors and responds, and XDR extends detection across endpoints, network and cloud.",
      },
      {
        q: "Is antivirus enough anymore?",
        a: "No. Modern attacks bypass traditional antivirus. EDR and XDR provide detection and response that antivirus can't.",
      },
      {
        q: "How much do EDR / MDR / XDR services cost in India?",
        a: "Pricing depends on endpoint count and service level. Contact CoreGenix for a free assessment.",
      },
    ],
    cta: "Detect and stop attacks at the endpoint. Get a free EDR / MDR assessment today.",
  },
  {
    slug: "grc-cyber-audits",
    category: "Governance, Risk & Compliance & Data Protection Officer",
    title: "GRC & Cyber Audits India | Governance, Risk & Compliance",
    description:
      "GRC & cyber audits in India — governance, risk management and compliance audits. ISO 27001, NIST CSF, DPDP Act readiness.",
    h1: "GRC & Cyber Audits in India",
    intro:
      "CoreGenix conducts GRC and cyber audits that give you a clear, defensible picture of your governance, risk and compliance posture.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Regulators, clients and partners increasingly require proof of governance and compliance. But most businesses have no clear view of their gaps — until an audit fails or a deal slips away.",
          "GRC isn't a compliance box to tick. It's a structured way to run your security that reduces risk and builds trust.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "GRC framework assessment — governance, risk and compliance posture",
          "Cyber audit — policies, controls and evidence reviewed",
          "Compliance readiness — ISO 27001, NIST CSF, DPDP Act, GDPR",
          "Gap analysis — what's missing, prioritized",
          "Remediation roadmap — practical steps to close gaps",
          "Audit support — prepare for external and client audits",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "An honest assessment of your GRC posture",
          "Prioritized gaps and a clear fix roadmap",
          "Audit-ready evidence and documentation",
          "Credibility that wins enterprise and government deals",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Independent GRC assessments you can take to your board",
          "Gap analysis prioritized by real business risk",
          "Remediation roadmaps your team can execute",
          "Audit-ready evidence and documentation",
          "18+ years of IT and security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is a GRC audit?",
        a: "A GRC audit reviews your governance, risk management and compliance programs — policies, controls and evidence — against your obligations and best practice.",
      },
      {
        q: "What is the difference between GRC and a cyber audit?",
        a: "GRC covers governance and risk broadly; a cyber audit focuses on technical security controls. CoreGenix provides both.",
      },
      {
        q: "How much does a GRC audit cost in India?",
        a: "It depends on organization size and scope. Contact CoreGenix for a free GRC scoping call.",
      },
    ],
    cta: "Turn compliance into a business asset. Get a free GRC assessment today.",
  },
  {
    slug: "risk-management",
    category: "Governance, Risk & Compliance & Data Protection Officer",
    title: "IT Risk Management Services India | Identify, Assess & Treat Risk",
    description:
      "IT risk management services in India — identify, assess and treat business and cyber risk. Structured risk frameworks and registers.",
    h1: "IT Risk Management Services in India",
    intro:
      "CoreGenix helps you identify, assess and treat IT and cyber risk with a structured, documented and defensible process.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Risks don't announce themselves. They grow quietly — unpatched systems, single points of failure, missing backups, concentration on one vendor — until one becomes an incident.",
          "Without a structured risk process, you're managing by hope. Decisions about security spending are guesses, and auditors see right through it.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Risk identification — assets, threats and vulnerabilities mapped",
          "Risk assessment — likelihood and impact, scored and ranked",
          "Risk treatment — accept, mitigate, transfer or avoid",
          "Risk register — a living, owned document",
          "Framework alignment — ISO 27001, NIST CSF, OCTAVE",
          "Reporting — risk trends management can act on",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A clear picture of your real risks",
          "Prioritized treatment — spend where it matters",
          "A living risk register, not shelfware",
          "Evidence auditors and boards accept",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Risks scored by likelihood and impact — not gut feel",
          "A living risk register your teams actually own",
          "Treatment plans aligned to ISO 27001 and NIST CSF",
          "Board-ready reporting management can act on",
          "18+ years of IT and security experience",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is IT risk management?",
        a: "IT risk management is the process of identifying, assessing and treating risks to your information systems — so decisions are informed and risks are controlled.",
      },
      {
        q: "What is a risk register?",
        a: "A risk register is a living document listing your risks, their scores, owners and treatment plans. It's the backbone of good risk management.",
      },
      {
        q: "How much does IT risk management cost in India?",
        a: "It depends on scope. Contact CoreGenix for a free risk assessment.",
      },
    ],
    cta: "Stop managing risk by hope. Get a free risk assessment today.",
  },
  {
    slug: "compliance",
    category: "Governance, Risk & Compliance & Data Protection Officer",
    title: "IT Compliance Services India | ISO 27001, NIST CSF & More",
    description:
      "IT compliance services in India — ISO 27001, NIST CSF, GDPR, DPDP Act and industry frameworks. Achieve and maintain compliance.",
    h1: "IT Compliance Services in India",
    intro:
      "CoreGenix guides you to and through compliance — ISO 27001, NIST CSF, DPDP Act and industry-specific frameworks.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Compliance requirements are growing — ISO 27001, DPDP Act, GDPR, industry regulations — and so is the consequence of non-compliance: fines, audit failures and lost deals.",
          "Most businesses don't know where they stand against a framework, let alone how to close the gaps. Compliance feels like a maze.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Compliance assessment — where you stand, clearly",
          "ISO 27001 — ISMS design, implementation and readiness",
          "NIST CSF — a practical, widely accepted framework",
          "DPDP Act & GDPR — data protection and privacy compliance",
          "Policy development — the documentation auditors need",
          "Audit support — prepare for, and survive, certification",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A clear path to compliance",
          "Documentation and evidence that pass audits",
          "Reduced risk of fines and audit failures",
          "Credentials that win enterprise and government clients",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Clear assessment of where you stand against each framework",
          "ISO 27001, NIST CSF, DPDP and GDPR programs",
          "Policies and evidence that pass certification audits",
          "Compliance that wins enterprise and government clients",
          "18+ years of IT and security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What compliance frameworks should my business follow?",
        a: "ISO 27001 and NIST CSF are the most widely accepted. Your industry or clients may add others. CoreGenix recommends based on your business.",
      },
      {
        q: "How long does ISO 27001 certification take?",
        a: "Typically 6-12 months depending on maturity. CoreGenix provides a phased roadmap.",
      },
      {
        q: "How much does compliance consulting cost in India?",
        a: "It depends on framework and scope. Contact CoreGenix for a free compliance assessment.",
      },
    ],
    cta: "Turn compliance from a burden into a credential. Get a free compliance assessment today.",
  },
  {
    slug: "risk-compliance-assessment",
    category: "Governance, Risk & Compliance & Data Protection Officer",
    title: "Risk & Compliance Assessment India | Comprehensive Gap Analysis",
    description:
      "Risk & compliance assessments in India — evaluate security posture, identify gaps and prioritize fixes against leading frameworks.",
    h1: "Risk & Compliance Assessment in India",
    intro:
      "CoreGenix performs risk and compliance assessments that tell you exactly where you stand — and what to fix first.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "You can't improve what you can't measure. Most businesses have no objective picture of their security and compliance posture — just assumptions and past incidents.",
          "Assumptions are expensive. An assessment gives you facts: where you're strong, where you're exposed, and what to prioritize.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Security posture assessment — controls and configurations reviewed",
          "Compliance gap analysis — against your target framework",
          "Risk assessment — scored, prioritized findings",
          "Policy & process review — what's documented vs enforced",
          "Technical review — infrastructure, applications, cloud",
          "Prioritized roadmap — fixes in the order that matters",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Facts about your posture, not guesses",
          "Clear priorities — fix what matters most first",
          "Evidence for audits and stakeholders",
          "A roadmap you can actually execute",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Facts about your posture, not assumptions",
          "Priorities backed by data, not gut feel",
          "Technical and process review in one engagement",
          "A roadmap you can actually execute",
          "18+ years of IT and security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is a risk and compliance assessment?",
        a: "It's an evaluation of your security controls, risks and compliance posture against a framework — producing prioritized findings and a fix roadmap.",
      },
      {
        q: "How often should we do an assessment?",
        a: "Annually is standard, plus after major changes. Assessments feed directly into your compliance and audit programs.",
      },
      {
        q: "How much does an assessment cost in India?",
        a: "It depends on environment size and framework. Contact CoreGenix for a free scoping call.",
      },
    ],
    cta: "Know where you stand. Get a free risk & compliance assessment today.",
  },
  {
    slug: "nist-cybersecurity-framework",
    category: "Governance, Risk & Compliance & Data Protection Officer",
    title: "NIST Cybersecurity Framework Services India",
    description:
      "NIST Cybersecurity Framework (CSF) services in India — assess, implement and manage against the NIST CSF. Identify, Protect, Detect, Respond, Recover.",
    h1: "NIST Cybersecurity Framework Services in India",
    intro:
      "CoreGenix implements the NIST Cybersecurity Framework — a practical, widely accepted standard for managing cyber risk.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Cyber risk is hard to talk about in business terms — until you use a framework that everyone understands. Without one, security is scattered, unmeasurable and hard to justify.",
          "The NIST CSF gives you a common language: Identify, Protect, Detect, Respond, Recover. But implementing it takes expertise most businesses don't have.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "NIST CSF assessment — your maturity across all five functions",
          "Implementation roadmap — practical, phased improvements",
          "Control mapping — align your existing controls to NIST",
          "Policy alignment — documentation that supports the CSF",
          "Gap remediation — close the highest-risk gaps first",
          "Continuous improvement — measure progress over time",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A clear, measurable security program",
          "A framework clients and auditors recognize",
          "Prioritized improvements backed by data",
          "A language for security at the board level",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Maturity measured across all five NIST functions",
          "Practical, phased improvement roadmap",
          "A framework clients and auditors recognize",
          "Security language the board understands",
          "18+ years of security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is the NIST Cybersecurity Framework?",
        a: "The NIST CSF is a framework of best practices for managing cyber risk, organized into five functions: Identify, Protect, Detect, Respond and Recover.",
      },
      {
        q: "Is NIST CSF a certification?",
        a: "No, NIST CSF isn't a certification — it's a framework for improving security posture. Many organizations use it alongside ISO 27001.",
      },
      {
        q: "How much does NIST CSF implementation cost in India?",
        a: "It depends on your maturity and scope. Contact CoreGenix for a free NIST assessment.",
      },
    ],
    cta: "Give your security program a framework that works. Get a free NIST CSF assessment today.",
  },
  {
    slug: "it-risk-assessment",
    category: "Governance, Risk & Compliance & Data Protection Officer",
    title: "IT Risk Assessment Services Mumbai | Security Risk Evaluation",
    description:
      "IT risk assessment services in Mumbai & India — identify threats, vulnerabilities and impacts across your IT environment. Prioritized findings.",
    h1: "IT Risk Assessment Services in Mumbai",
    intro:
      "CoreGenix assesses the risks in your IT environment — and tells you exactly which ones to fix first.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Every business has IT risks it doesn't fully understand — unpatched systems, exposed services, weak access controls, single points of failure. Left unexamined, they compound until one becomes an incident.",
          "You can't prioritize what you haven't assessed. And without priorities, security spending is a gamble.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Asset discovery — know what you have and its value",
          "Threat & vulnerability identification — what could hurt you",
          "Impact analysis — what a loss would actually cost",
          "Risk scoring — likelihood and impact, ranked",
          "Treatment recommendations — prioritized, practical fixes",
          "Risk register — a living document you can act on",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A clear picture of your IT risks",
          "Priorities backed by data, not gut feel",
          "Practical fixes your team can execute",
          "Evidence for management and auditors",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Asset discovery — you can't protect what you can't see",
          "Threats and impacts scored for your business",
          "Prioritized fixes your team can execute",
          "Evidence for management and auditors",
          "18+ years of IT and security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is an IT risk assessment?",
        a: "An IT risk assessment identifies threats and vulnerabilities in your environment, evaluates their likelihood and impact, and prioritizes treatment.",
      },
      {
        q: "How is an IT risk assessment different from VAPT?",
        a: "VAPT actively tests systems for exploitable weaknesses. A risk assessment evaluates broader threats, impacts and business priorities. They complement each other.",
      },
      {
        q: "How much does an IT risk assessment cost in India?",
        a: "It depends on environment size. Contact CoreGenix for a free scoping call.",
      },
    ],
    cta: "See your IT risks clearly — and fix the right ones. Get a free risk assessment today.",
  },
  {
    slug: "it-policy-security-policy",
    category: "Governance, Risk & Compliance & Data Protection Officer",
    title: "IT Policy & Security Policy Services India",
    description:
      "IT policy and security policy services in India — write, implement and maintain the policies your compliance and audits demand.",
    h1: "IT Policy & Security Policy Services in India",
    intro:
      "CoreGenix writes and implements the IT and security policies that protect your business and satisfy your audits.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Policies are the foundation of security and compliance — yet most businesses have outdated, copied or missing ones. Auditors ask for them, and you can't produce them.",
          "A policy isn't a document to file away. It's a working control that tells everyone what to do — and protects you when things go wrong.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Policy framework — a complete, structured policy set",
          "IT policies — acceptable use, access, change, backup, incident",
          "Security policies — password, network, remote access, BYOD",
          "Data protection policies — classification, retention, privacy",
          "Policy implementation — train, communicate, enforce",
          "Policy maintenance — keep them current and compliant",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Policies auditors and clients actually accept",
          "Clear rules your employees can follow",
          "A foundation for ISO 27001 and other frameworks",
          "Protection when incidents or disputes arise",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Policies auditors and clients actually accept",
          "Tailored to your industry, not generic templates",
          "A working control, not a document to file away",
          "Foundation for ISO 27001 and other frameworks",
          "18+ years of IT and security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "Why does my business need IT security policies?",
        a: "Policies define acceptable behavior, protect you in disputes and are required by compliance frameworks like ISO 27001. Without them, audits fail.",
      },
      {
        q: "Can you write policies for our industry specifically?",
        a: "Yes. CoreGenix tailors policies to your industry, size and obligations — not generic templates.",
      },
      {
        q: "How much do IT policy services cost in India?",
        a: "It depends on the scope of the policy set. Contact CoreGenix for a free assessment.",
      },
    ],
    cta: "Build the policy foundation your audits demand. Get a free policy assessment today.",
  },
  {
    slug: "isms-cyber-security",
    category: "Governance, Risk & Compliance & Data Protection Officer",
    title: "ISMS & Cyber Security Services India | ISO 27001 Information Security",
    description:
      "Information Security Management System (ISMS) services in India — design, implement and maintain an ISO 27001-aligned ISMS.",
    h1: "ISMS & Cyber Security Services in India",
    intro:
      "CoreGenix designs and implements Information Security Management Systems (ISMS) that meet ISO 27001 and protect your business.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "ISO 27001 isn't a project you finish — it's a management system that has to work every day. Most businesses struggle to define scope, implement controls and produce evidence that stands up to certification audits.",
          "Without a proper ISMS, security is ad-hoc: some controls here, some there, nothing integrated, nothing auditable.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "ISMS design — scope, policy and framework defined",
          "Risk management — the core of ISO 27001",
          "Control implementation — Annex A controls, prioritized",
          "Documentation — policies, procedures and records",
          "Certification readiness — prepare for the certification audit",
          "Ongoing maintenance — keep the ISMS alive after certification",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "An ISMS that's real, not shelfware",
          "A clear path to ISO 27001 certification",
          "Documentation that survives audits",
          "Security that's integrated with how you run the business",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "An ISMS that's real, not shelfware",
          "Annex A controls prioritized and implemented",
          "Documentation that survives certification audits",
          "Security integrated with how you run the business",
          "18+ years of IT and security expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is an ISMS?",
        a: "An Information Security Management System (ISMS) is a systematic framework for managing sensitive information — policies, processes and controls working together.",
      },
      {
        q: "How long does ISO 27001 certification take?",
        a: "Typically 6-12 months depending on your starting point. CoreGenix provides a phased roadmap to certification.",
      },
      {
        q: "How much does ISMS implementation cost in India?",
        a: "It depends on organization size and scope. Contact CoreGenix for a free ISMS assessment.",
      },
    ],
    cta: "Build a security management system that works. Get a free ISMS assessment today.",
  },
  {
    slug: "bcp-dr",
    category: "Governance, Risk & Compliance & Data Protection Officer",
    title: "Business Continuity Planning & Disaster Recovery Services India",
    description:
      "Business continuity planning (BCP) and disaster recovery (DR) services in India — plan, test and recover. Keep business running through disruption.",
    h1: "Business Continuity Planning & Disaster Recovery in India",
    intro:
      "CoreGenix builds business continuity and disaster recovery programs that keep you running through any disruption.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Most businesses discover they can't survive a major disruption — fire, cyber attack, power failure — after it happens. Processes are undocumented, backups untested, and no one owns recovery.",
          "Disruptions are inevitable. Survival is a choice. The businesses that recover are the ones that planned and tested before the event.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Business impact analysis — what matters most, and why",
          "BCP development — processes to keep operations running",
          "DR strategy — how systems are recovered and restored",
          "Testing & drills — real rehearsals, not documentation",
          "Incident management — clear roles and playbooks",
          "Review & maintenance — keep the plan current",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A tested plan that works under pressure",
          "Clear recovery priorities and timeframes",
          "Documentation for auditors and stakeholders",
          "Confidence that your business can survive disruption",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "Business impact analysis that defines real priorities",
          "Plans rehearsed through actual drills, not documents",
          "Clear recovery timeframes your team can hit",
          "One partner for BCP, DR, backup and cloud",
          "18+ years of infrastructure and recovery experience",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is a business continuity plan?",
        a: "A BCP documents how your business keeps operating during a disruption — covering people, processes and the systems that support them.",
      },
      {
        q: "What's the difference between BCP and DR?",
        a: "Business continuity keeps operations running; disaster recovery restores IT systems. They work together — BCP defines what keeps running, DR makes it happen.",
      },
      {
        q: "How much does BCP/DR cost in India?",
        a: "It depends on business size and scope. Contact CoreGenix for a free BCP/DR assessment.",
      },
    ],
    cta: "Plan now so you never have to improvise during a disaster. Get a free BCP/DR assessment today.",
  },
];

export const solutionSlugMap: Record<string, string> = Object.fromEntries(
  solutionPages.map((p) => [p.slug, p.category])
);

export function getSolutionPage(slug: string): SolutionPage | undefined {
  return solutionPages.find((p) => p.slug === slug);
}
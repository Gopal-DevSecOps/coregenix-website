export interface ServicePage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faq: { q: string; a: string }[];
  cta: string;
}

export const services: ServicePage[] = [
  {
    slug: "noc",
    title: "Network Operations Center (NOC) Services | 24x7 Network Monitoring | India's No.1 NOC Company",
    description:
      "Get 24x7 network monitoring & management from India's top NOC service provider. Proactive threat detection, guaranteed uptime, and expert support. Free consultation!",
    h1: "Network Operations Center (NOC) Services — 24x7 Network Monitoring & Management",
    intro:
      "Your network is the backbone of your business. Every second of downtime costs you revenue, reputation, and customer trust. Our Network Operations Center (NOC) provides round-the-clock surveillance, proactive threat detection, and expert incident resolution to keep your infrastructure running at peak performance. With 500+ enterprise clients across Mumbai, Delhi, Bangalore, and beyond, CoreGenix is recognized as India's top NOC service provider delivering guaranteed uptime and enterprise-grade security.",
    sections: [
      {
        heading: "Why Choose CoreGenix NOC",
        body: [
          "99.99% Uptime Guarantee — zero revenue loss from network failures",
          "24x7x365 Monitoring — sleep peacefully while we watch your network",
          "Certified Engineers — CCNA, CCNP, CISSP certified experts",
          "Cost Savings — 60% cheaper than building an in-house NOC",
          "500+ Clients — trusted by enterprises across India",
        ],
      },
      {
        heading: "What is a Network Operations Center (NOC)?",
        body: [
          "A Network Operations Center (NOC) is a centralized command center where IT professionals monitor, manage, and maintain your organization's network infrastructure 24 hours a day, 7 days a week.",
          "Think of it as the mission control for your IT environment. Our NOC engineers use advanced monitoring tools to track the health of:",
          "Servers & virtual machines",
          "Routers & switches",
          "Firewalls & security appliances",
          "Cloud infrastructure (AWS, Azure, GCP)",
          "Applications & databases",
          "VPN & remote access",
        ],
      },
      {
        heading: "The CoreGenix Difference",
        body: [
          "Unlike traditional NOC providers who only react to problems, we use AI-powered predictive analytics to identify and resolve issues BEFORE they impact your business.",
          "75% reduction in network incidents",
          "90% faster mean time to resolution (MTTR)",
          "Zero security breaches in 3+ years",
        ],
      },
      {
        heading: "24x7x365 Proactive Network Monitoring",
        body: [
          "Our team never sleeps. We continuously monitor your entire network infrastructure, including:",
          "Network devices — routers, switches, firewalls, load balancers",
          "Servers — physical, virtual, and cloud servers",
          "Applications — critical business applications and databases",
          "Security events — real-time threat detection and response",
          "Bandwidth usage — performance optimization and capacity planning",
        ],
      },
      {
        heading: "Incident Detection & Rapid Response",
        body: [
          "When an issue is detected, our certified engineers spring into action:",
          "Critical outage — response under 5 minutes, resolution under 30 minutes",
          "Performance issue — response under 15 minutes, resolution under 1 hour",
          "Security alert — response under 2 minutes, resolution under 15 minutes",
        ],
      },
      {
        heading: "Performance Optimization",
        body: [
          "We don't just fix problems — we make your network faster and more efficient:",
          "Traffic analysis — identify bandwidth hogs and optimize usage",
          "Load balancing — distribute traffic for maximum performance",
          "Capacity planning — scale infrastructure as your business grows",
          "Regular health checks — weekly performance reports and recommendations",
        ],
      },
      {
        heading: "Security Monitoring & Threat Response",
        body: [
          "Security is integrated into every NOC operation:",
          "Real-time threat detection — identify malware, ransomware, and intrusions",
          "SIEM integration — correlate security events across your infrastructure",
          "Patch management — keep your systems updated and secure",
          "Compliance reporting — meet regulatory requirements (ISO, SOC2, GDPR)",
        ],
      },
      {
        heading: "Who Needs NOC Services?",
        body: [
          "Enterprises & large corporations — complex, multi-location infrastructure requiring 24x7 monitoring",
          "Healthcare & hospitals — patient data and critical systems require absolute uptime and security",
          "Banking & financial services — transactions, compliance, and customer trust depend on network reliability",
          "E-commerce & retail — every second of downtime means lost sales and frustrated customers",
          "Cloud-first companies — hybrid and multi-cloud environments need unified monitoring and management",
          "Manufacturing & industrial — OT and IT convergence requires specialized network monitoring expertise",
        ],
      },
      {
        heading: "Benefits of Partnering with CoreGenix",
        body: [
          "Cost savings — building an in-house NOC costs ₹50 Lakhs+ annually; our managed NOC service starts at just ₹25,000/month — a 60% cost reduction",
          "Access to expert engineers — CCNA, CCNP, CISSP certified and AWS certified cloud architects",
          "Focus on core business — free your internal IT team from fighting fires and let them drive innovation",
          "Data-driven insights — weekly and monthly reports on uptime, incidents, performance and security",
        ],
      },
      {
        heading: "Our NOC Process",
        body: [
          "Step 1: Assessment & discovery — analyze your current network infrastructure and identify gaps",
          "Step 2: Custom monitoring setup — deploy monitoring tools including SNMP, agent-based and synthetic transaction monitoring",
          "Step 3: 24x7 monitoring & management — engineers monitor continuously and resolve issues proactively",
          "Step 4: Incident response & resolution — detection in under 2 minutes, triage in under 10, resolution in under 30, root cause analysis within 24 hours",
          "Step 5: Continuous improvement — optimize monitoring rules and provide ongoing recommendations",
        ],
      },
      {
        heading: "Case Studies & Social Proof",
        body: [
          "Case Study 1: Leading E-commerce Company — frequent network outages during peak shopping seasons were causing ₹5 Cr revenue loss. CoreGenix deployed 24x7 monitoring with AI-powered predictive analytics. Result: 99.99% uptime achieved, 85% reduction in network incidents, and ₹3.5 Cr revenue saved in the first year.",
          "Case Study 2: Multi-Location Healthcare Chain — 10+ hospitals needed unified network monitoring and compliance reporting. A centralized NOC with healthcare-specific security monitoring delivered zero data breaches in 2 years, 60% faster incident resolution, and 100% compliance.",
          "\"CoreGenix NOC has been a game-changer for our business. We went from frequent outages to 99.99% uptime. Their team is responsive, professional, and truly cares about our success.\" — Client, Leading E-commerce Brand",
          "\"We tried multiple NOC providers, but CoreGenix stood out. Their proactive approach and deep expertise saved us from multiple potential disasters.\" — Client, Healthcare Chain",
        ],
      },
    ],
    faq: [
      {
        q: "What is a Network Operations Center (NOC)?",
        a: "A NOC is a centralized facility where IT professionals monitor, manage, and maintain your organization's network infrastructure 24x7 to ensure optimal performance, availability, and security.",
      },
      {
        q: "What's the difference between NOC and SOC?",
        a: "While both are control centers, a NOC focuses on network performance, availability, and infrastructure management, while a SOC (Security Operations Center) focuses specifically on cybersecurity threats, incident response, and vulnerability management.",
      },
      {
        q: "How does CoreGenix NOC pricing work?",
        a: "We offer flexible pricing models starting at ₹25,000/month for small businesses. Enterprise pricing is customized based on your infrastructure size, complexity, and specific requirements. Contact us for a personalized quote.",
      },
      {
        q: "What monitoring tools do you use?",
        a: "We use industry-leading tools including SolarWinds, PRTG, Nagios, Zabbix, and custom-built AI-powered monitoring solutions, ensuring comprehensive coverage for any environment.",
      },
      {
        q: "Do you support hybrid and multi-cloud environments?",
        a: "Yes! Our NOC services support on-premise, cloud (AWS, Azure, GCP), and hybrid environments with unified monitoring and management.",
      },
      {
        q: "What's your SLA guarantee?",
        a: "We offer a 99.99% uptime guarantee with clear SLAs for response and resolution times. If we fail to meet our SLAs, you get service credits.",
      },
      {
        q: "Can we integrate your NOC with our existing tools?",
        a: "Absolutely! We support API integrations and can work with your existing ITSM, ticketing, and monitoring tools.",
      },
      {
        q: "How quickly can you start NOC services?",
        a: "We can deploy basic monitoring within 48 hours. Full NOC setup with custom dashboards and alerting takes 1-2 weeks, depending on your environment complexity.",
      },
      {
        q: "Do you offer both NOC and SOC services?",
        a: "Yes! CoreGenix provides integrated NOC and SOC services for comprehensive IT operations and security monitoring.",
      },
      {
        q: "Is there a free trial available?",
        a: "Yes! We offer a 14-day free trial of our NOC services with no commitment. Contact us to get started.",
      },
    ],
    cta: "Ready to experience 99.99% uptime? Join 500+ businesses across India that trust CoreGenix for their network operations. Get a FREE NOC assessment and discover how we can transform your network performance.",
  },
  {
    slug: "amc",
    title: "Annual Maintenance Contract (AMC) Services Mumbai",
    description:
      "Annual Maintenance Contract (AMC) for servers, networks and IT infrastructure in Mumbai & India. Preventive and corrective maintenance with SLAs.",
    h1: "Annual Maintenance Contract (AMC) Services in Mumbai",
    intro:
      "An Annual Maintenance Contract (AMC) from CoreGenix keeps your IT assets healthy, covered, and running at peak performance — all year round.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Every piece of IT equipment ages. Without planned maintenance, failures happen at the worst possible moment — during peak business hours, before a big launch, or the day after the warranty expires.",
          "Repair bills, lost productivity, and stressed-out IT teams. That's the real cost of running infrastructure with no maintenance plan.",
        ],
      },
      {
        heading: "What's Included",
        body: [
          "Preventive maintenance — scheduled checks, cleaning, patching and health audits",
          "Corrective maintenance — fast response when something fails",
          "Priority support — your calls jump the queue",
          "SLA-backed response times — clarity on what happens and when",
          "Asset tracking — know the status of every device you own",
          "Hardware & software support — from servers and network gear to workstations",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Fewer breakdowns and longer equipment life",
          "Predictable annual cost instead of surprise repair bills",
          "A dedicated team that knows your environment",
          "Documentation and reports on every visit",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years of IT infrastructure maintenance experience",
          "120+ projects delivered across industries",
          "55+ happy clients with long-running AMC relationships",
          "Mumbai-based support team with Pan-India coverage",
          "Transparent SLAs — you always know what to expect",
        ],
      },
    ],
    faq: [
      {
        q: "What is an AMC?",
        a: "An Annual Maintenance Contract (AMC) is an agreement where a provider maintains your IT equipment for a year — covering preventive and corrective maintenance at a fixed cost.",
      },
      {
        q: "What equipment does an IT AMC cover?",
        a: "Servers, storage, networking hardware, firewalls, desktops, laptops, printers and sometimes software licenses, depending on the agreement.",
      },
      {
        q: "How much does an AMC cost in Mumbai?",
        a: "It depends on your equipment inventory, age, and support level. Contact CoreGenix for a free assessment and quote.",
      },
    ],
    cta: "Protect your equipment and your budget. Get a free AMC consultation today.",
  },
  {
    slug: "fmc",
    title: "Facility Maintenance Contract (FMC) Services Mumbai",
    description:
      "Facility Maintenance Contract (FMC) for offices, data centers and IT estates in Mumbai & India. Keep your infrastructure running with proactive maintenance.",
    h1: "Facility Maintenance Contract (FMC) Services in Mumbai",
    intro:
      "CoreGenix provides Facility Maintenance Contracts (FMC) that keep your office and IT facilities running smoothly — so you can focus on business, not breakdowns.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "An office runs on more than computers. Power distribution, cooling, cabling, fire safety, and physical infrastructure all need to stay healthy. When they fail, the whole business stalls.",
          "Unplanned facility failures are disruptive, expensive, and often avoidable. A leak, an overheated server room, or a failing UPS doesn't announce itself — it just stops.",
        ],
      },
      {
        heading: "What's Covered",
        body: [
          "Server room / data center upkeep — cooling, power, UPS, cabling",
          "Network & structured cabling health",
          "Power and electrical infrastructure checks",
          "Preventive maintenance scheduling across your facility",
          "Rapid corrective maintenance when issues arise",
          "Compliance-ready documentation of checks performed",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Fewer unplanned breakdowns",
          "Longer life for your physical infrastructure",
          "One accountable partner for facility health",
          "Reports you can show management and auditors",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years maintaining business-critical infrastructure",
          "120+ projects delivered across offices, factories and data centers",
          "55+ happy clients with long-term maintenance relationships",
          "Combined IT + facility expertise — one team, no finger-pointing",
          "Mumbai base, Pan-India reach",
        ],
      },
    ],
    faq: [
      {
        q: "What is a Facility Maintenance Contract?",
        a: "An FMC is a service agreement covering the scheduled maintenance and repair of a facility's infrastructure — power, cooling, cabling and related systems.",
      },
      {
        q: "Is FMC different from an AMC?",
        a: "Yes. AMC covers IT hardware (servers, desktops, network gear), while FMC covers the facility itself — power, cooling, cabling and physical infrastructure. Many clients take both.",
      },
      {
        q: "How much does facility maintenance cost in Mumbai?",
        a: "Costs vary with facility size and scope. Contact CoreGenix for a free facility assessment.",
      },
    ],
    cta: "Keep your facility running — and your business uninterrupted. Get a free facility assessment today.",
  },
  {
    slug: "cloud-strategy",
    title: "Cloud Strategy Consulting India",
    description:
      "Cloud strategy consulting for Indian businesses — assess, plan and migrate to the right cloud with confidence. Azure, AWS, private & hybrid cloud.",
    h1: "Cloud Strategy Consulting India",
    intro:
      "CoreGenix helps you build a cloud strategy that fits your business — not a one-size-fits-all pitch.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "The cloud promise is real — flexibility, scale, lower cost. But moving without a plan is how businesses end up with orphaned workloads, bill shock, and security gaps.",
          "Wrong choices at the start are expensive later. Which workloads move? Which stay? Public, private or hybrid? How much will it actually cost?",
        ],
      },
      {
        heading: "What We Do",
        body: [
          "Current-state assessment — understand your workloads, dependencies and risks",
          "Cloud readiness analysis — what can move, what should stay",
          "Cloud selection — Azure, AWS, private or hybrid, matched to your needs",
          "Migration roadmap — phased, low-risk plan with clear priorities",
          "Cost modelling — honest estimates, no bill-shock surprises",
          "Governance & security — policies, access controls and compliance from day one",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A clear, actionable roadmap instead of confusion",
          "The right cloud for each workload",
          "Predictable costs and controlled risk",
          "A partner who walks the journey with you",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years across data centers, virtualization and cloud",
          "120+ projects delivered, including migrations to Azure & AWS",
          "55+ happy clients across industries",
          "Multi-cloud & hybrid expertise — we recommend what's right, not what's easy",
          "Mumbai office, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is a cloud strategy?",
        a: "A cloud strategy is a plan that defines which workloads go to cloud, where (public, private, hybrid), how, and at what cost and risk.",
      },
      {
        q: "How long does cloud migration take?",
        a: "It depends on complexity. Simple workloads can move in weeks; full estates take longer. Your roadmap defines realistic phases.",
      },
      {
        q: "How much does cloud consulting cost in India?",
        a: "Costs depend on scope. Contact CoreGenix for a free cloud readiness assessment.",
      },
    ],
    cta: "Turn cloud confusion into a clear roadmap. Get a free cloud readiness assessment today.",
  },
  {
    slug: "cloud-infrastructure-management",
    title: "Cloud Infrastructure Management Services Mumbai",
    description:
      "Managed cloud infrastructure services — 24x7 monitoring, security, optimization and support for Azure, AWS, private & hybrid cloud.",
    h1: "Cloud Infrastructure Management Services in Mumbai",
    intro:
      "CoreGenix manages your cloud infrastructure so it stays secure, performant and cost-efficient — around the clock.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Migrating to the cloud is the easy part. Running it well is the hard part. Environments drift, security gets sloppy, costs creep up, and nobody notices until something breaks or the bill surprises you.",
          "Without dedicated cloud management, you pay more, risk more, and spend your team's time on babysitting instead of business.",
        ],
      },
      {
        heading: "What We Manage",
        body: [
          "24x7 monitoring of workloads, uptime and performance",
          "Security management — patching, access control, vulnerability checks",
          "Cost optimization — right-sizing, savings recommendations",
          "Backup & disaster recovery for your cloud workloads",
          "Change management & releases done safely",
          "Azure & AWS expertise across public, private and hybrid estates",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Uptime you can rely on",
          "Controlled, predictable cloud spend",
          "Security that's continuously managed, not bolted on",
          "One accountable team for your entire cloud estate",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years of infrastructure & cloud operations",
          "120+ projects delivered, including large Azure & AWS estates",
          "55+ happy clients who trust us with mission-critical workloads",
          "24/7 support availability backed by our NOC",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is cloud infrastructure management?",
        a: "It's the day-to-day operation, monitoring, security, and optimization of your cloud environment — usually delivered as a managed service.",
      },
      {
        q: "Should I outsource cloud management?",
        a: "If you lack 24x7 in-house cloud expertise, outsourcing gives you reliability and cost control without hiring a large team.",
      },
      {
        q: "How much does managed cloud cost in India?",
        a: "It depends on workload size and scope. Contact CoreGenix for a free cloud assessment.",
      },
    ],
    cta: "Let your cloud work for you. Get a free cloud infrastructure assessment today.",
  },
  {
    slug: "backup-recovery",
    title: "Data Backup & Recovery Services India",
    description:
      "Automated data backup, disaster recovery and business continuity services in India. Protect your critical data — always.",
    h1: "Data Backup & Recovery Services in India",
    intro:
      "CoreGenix builds and manages backup and recovery solutions that actually work when you need them.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Ransomware. Hard drive failure. Human error. A fire in the server room. Data loss happens to businesses that 'thought they were covered' — because the backup was never tested, or nobody noticed it had been failing for weeks.",
          "Recovering from data loss is slow, expensive, and sometimes impossible. For most businesses, losing critical data isn't an inconvenience. It's an existential risk.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Automated backup — servers, databases, applications, endpoints",
          "Offsite & cloud backup — protection even if your office is lost",
          "Disaster recovery planning — defined RPO/RTO with a clear recovery path",
          "Business continuity plans — keep operations running through disruption",
          "Regular restore testing — we verify your backups actually restore",
          "24x7 monitoring of backup jobs with alerting",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Real confidence that your data is recoverable",
          "Defined recovery time objectives — you know when you'll be back",
          "Protection against ransomware and physical disasters",
          "A partner who tests backups, not just takes them",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years protecting business-critical data",
          "120+ projects delivered including backup & DR for enterprises",
          "55+ happy clients across industries",
          "Combined backup + security + cloud expertise",
          "Mumbai office, Pan-India support",
        ],
      },
    ],
    faq: [
      {
        q: "What is data backup and recovery?",
        a: "Backup is copying your data to a safe location; recovery is restoring it after loss. Together they protect you from downtime and data loss.",
      },
      {
        q: "How often should I back up?",
        a: "As often as your business can afford to lose changes. CoreGenix helps you define the right backup frequency and retention.",
      },
      {
        q: "What is the difference between backup and DR?",
        a: "Backup restores data; disaster recovery restores whole systems and operations at scale. Most businesses need both.",
      },
    ],
    cta: "Test your backups before disaster tests you. Get a free backup assessment today.",
  },
  {
    slug: "grc-dpo",
    title: "GRC & DPO Services Mumbai — Governance Risk Compliance",
    description:
      "GRC consulting and Data Protection Officer (DPO) services in Mumbai & India. Governance, risk management, compliance and privacy.",
    h1: "GRC & DPO Services — Governance, Risk & Compliance",
    intro:
      "CoreGenix helps you build governance, risk and compliance that is practical, documented and defensible.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "New privacy and compliance obligations are reshaping how Indian businesses handle data. But for most companies, 'compliance' is a maze of frameworks, paperwork and risk — and nobody is clearly accountable.",
          "Non-compliance isn't a distant risk. It means fines, audit failures, lost client trust, and doors closing on enterprise deals that require compliance.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "GRC framework design — policies, roles and accountability",
          "Risk management — identify, assess and treat business & cyber risk",
          "Compliance programs — ISO 27001, NIST CSF, GDPR, DPDP Act and more",
          "Data Protection Officer (DPO) services — privacy oversight and accountability",
          "Policy documentation — IT & security policies ready for audit",
          "Audit support — prepare for, and survive, external audits",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A clear owner for compliance and privacy",
          "Policies and evidence auditors accept",
          "Reduced risk of fines and audit failures",
          "Credibility that wins enterprise and government clients",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years of IT & security expertise",
          "120+ projects delivered, including GRC and ISO 27001 programs",
          "55+ happy clients across regulated industries",
          "Deep security + compliance team",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is GRC?",
        a: "GRC stands for Governance, Risk and Compliance — the processes that keep an organization accountable, manage its risks, and meet regulatory requirements.",
      },
      {
        q: "What does a Data Protection Officer (DPO) do?",
        a: "A DPO oversees data protection strategy, ensures compliance with privacy laws, and serves as the point of accountability for personal data handling.",
      },
      {
        q: "Why do I need GRC consulting?",
        a: "GRC gives you a structured, documented approach to risk and compliance — reducing fines, audit failures and reputational risk.",
      },
    ],
    cta: "Make compliance an asset, not a burden. Get a free GRC readiness assessment today.",
  },
  {
    slug: "vapt",
    title: "VAPT Services India — Vulnerability Assessment & Penetration Testing",
    description:
      "VAPT services in India — find and fix vulnerabilities before attackers do. Web, network, mobile, cloud and OT penetration testing.",
    h1: "VAPT Services India — Vulnerability Assessment & Penetration Testing",
    intro:
      "CoreGenix performs vulnerability assessment and penetration testing (VAPT) that simulates real attacks to expose weaknesses — before criminals do.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Somewhere in your applications, network, or cloud environment, there is a vulnerability you don't know about. Attackers spend every day looking for it. The only question is who finds it first — them, or you.",
          "A breach is not just a technical problem. It's lost data, lost money, and lost customer trust. The cheapest vulnerability is the one you find and fix before it's exploited.",
        ],
      },
      {
        heading: "What We Test",
        body: [
          "Web & application testing — OWASP Top 10, API security, business logic",
          "Network & infrastructure testing — servers, devices, endpoints",
          "Mobile application testing — Android & iOS",
          "Cloud security testing — Azure, AWS configurations",
          "Domain & DNS intelligence — phishing surface, subdomains, email security",
          "OT / ICS environments — industrial control systems",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A clear, prioritized list of vulnerabilities with risk ratings",
          "Detailed remediation guidance your team can act on",
          "Retesting to confirm fixes actually work",
          "Evidence and reports for compliance and audits",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years of security experience",
          "30+ VAPT scan capabilities and industry-recognized methodology",
          "120+ projects delivered across sectors",
          "Expert team led by our Cyber Security SME & Technical Director",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is VAPT?",
        a: "VAPT combines Vulnerability Assessment (finding weaknesses) and Penetration Testing (exploiting them safely) to measure real security risk.",
      },
      {
        q: "How much does penetration testing cost in India?",
        a: "Costs depend on scope — number of applications, networks and depth. Contact CoreGenix for a free scoping call.",
      },
      {
        q: "How often should I do VAPT?",
        a: "At least annually, and after major changes. High-risk businesses test quarterly or continuously.",
      },
    ],
    cta: "Find the gaps before attackers do. Get a free VAPT scoping call today.",
  },
  {
    slug: "red-teaming",
    title: "Red Teaming Services India",
    description:
      "Advanced red teaming services that simulate real-world adversaries to test your people, processes and technology. Mumbai & India.",
    h1: "Red Teaming Services in India",
    intro:
      "CoreGenix red teaming exercises simulate real-world, multi-stage attacks to reveal how well your entire organization resists an adversary.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Security checklists give a false sense of safety. Real attackers don't follow checklists. They chain small weaknesses together — a phishing email, a misconfigured server, a careless employee — until they're inside your network.",
          "You don't know how well your defense really works until someone tests it like an adversary would.",
        ],
      },
      {
        heading: "What We Test",
        body: [
          "Social engineering — how your people respond to phishing and pretexting",
          "Network & infrastructure attacks — lateral movement, privilege escalation",
          "Physical & perimeter testing — the gaps beyond your firewall",
          "Application & cloud attacks — chained weaknesses across your estate",
          "Detection & response testing — will your SOC actually catch us?",
          "Process gaps — where policies and people fail under pressure",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "A realistic picture of your real-world security posture",
          "Concrete, prioritized findings with exploitation evidence",
          "Recommendations that harden people, process and technology",
          "Board-ready reporting on risk and improvements",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years of offensive and defensive security experience",
          "Expert red teamers led by our Cyber Security SME & Technical Director",
          "120+ projects delivered across enterprise environments",
          "Combined red team + SOC — we test, and we defend",
          "Mumbai base, Pan-India engagement",
        ],
      },
    ],
    faq: [
      {
        q: "What is red teaming?",
        a: "Red teaming is an adversarial simulation where security experts act as attackers to test an organization's defenses end-to-end — people, processes and technology.",
      },
      {
        q: "How is red teaming different from penetration testing?",
        a: "Penetration testing finds vulnerabilities in a defined scope. Red teaming simulates a full, realistic attack campaign against the whole organization.",
      },
      {
        q: "How often should we do red teaming?",
        a: "Annually, or before major security changes. Red teaming complements regular VAPT.",
      },
    ],
    cta: "Test your defenses the way attackers will. Get a free red team scoping call today.",
  },
  {
    slug: "audit",
    title: "Cyber Security Audit Company Mumbai",
    description:
      "Independent cyber security audits in Mumbai & India — assess your security posture, meet compliance and close gaps. ISO 27001, NIST CSF.",
    h1: "Cyber Security Audit Services in Mumbai",
    intro:
      "CoreGenix provides independent security audits that give you a true picture of your security posture — and a roadmap to fix it.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Your firewall is configured. Your antivirus is installed. But is your whole security program actually working? Most businesses discover gaps not through planning, but through an audit failure, a client requirement, or a breach.",
          "Assumptions are expensive. Without an independent audit, you're betting your security posture on guesses.",
        ],
      },
      {
        heading: "What We Audit",
        body: [
          "Security posture assessment — policies, controls, configurations",
          "IT & OT environment review — infrastructure and industrial systems",
          "Compliance readiness — ISO 27001, NIST CSF, GDPR, DPDP Act",
          "Gap analysis — what's missing against your target framework",
          "Access & identity review — who can access what, and why",
          "Process & governance review — are policies enforced in practice?",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "An honest, independent assessment of your security",
          "Prioritized findings with practical fixes",
          "Audit-ready evidence and documentation",
          "A clear roadmap to compliance and stronger defense",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years across IT and cyber security",
          "120+ projects delivered, including audits for regulated industries",
          "55+ happy clients who rely on our independent judgment",
          "Deep compliance expertise — ISO 27001, NIST CSF, GRC",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is a cyber security audit?",
        a: "A cyber security audit is an independent review of your security policies, controls and systems to identify weaknesses and compliance gaps.",
      },
      {
        q: "How often should I audit my security?",
        a: "Annually is standard, plus after major changes. Clients with compliance obligations may need more frequent audits.",
      },
      {
        q: "What's the difference between an audit and VAPT?",
        a: "An audit reviews controls, policies and processes. VAPT actively tests systems for exploitable vulnerabilities. They complement each other.",
      },
    ],
    cta: "Stop guessing. Get an independent security audit today.",
  },
  {
    slug: "soc-mss",
    title: "Managed SOC as a Service (SOC MSS) India",
    description:
      "24x7 managed SOC services in India — continuous monitoring, threat detection and incident response as a service.",
    h1: "Managed Security Operations Center as a Service (SOC MSS)",
    intro:
      "CoreGenix delivers a fully managed Security Operations Center as a Service (SOC MSS) — enterprise-grade monitoring and response, without the enterprise cost.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Cyber attacks don't follow office hours. They strike at 2 AM, on weekends, and during festivals — when your team is offline and your defenses are unattended. A detection gap of even a few hours can become a full breach.",
          "Building your own SOC costs millions and takes years of recruiting. Most businesses can't afford it. But every business can afford to be attacked.",
        ],
      },
      {
        heading: "What's Included",
        body: [
          "24x7 threat monitoring across your IT and OT environment",
          "SIEM & log analysis — correlated detection of real threats",
          "Security event alerting & triage — we filter the noise",
          "Incident response — containment and recovery when it matters",
          "Vulnerability correlation — context that makes alerts meaningful",
          "Monthly reports — threats seen, handled, and lessons learned",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Round-the-clock detection without building a SOC",
          "Faster incident response that limits damage",
          "Predictable monthly cost vs. huge capital investment",
          "A security team that's watching when yours is sleeping",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years of security operations experience",
          "24/7 SOC & TOC monitoring capability",
          "120+ projects delivered across industries",
          "Expert team — engineers plus security SMEs and incident responders",
          "Mumbai base, Pan-India coverage",
        ],
      },
    ],
    faq: [
      {
        q: "What is a managed SOC?",
        a: "A managed SOC (Security Operations Center) is an outsourced team that monitors your systems 24x7, detects threats, and responds to incidents as a service.",
      },
      {
        q: "How much does a SOC cost in India?",
        a: "Managed SOC pricing is based on the number of assets and events monitored. It's far more affordable than building an in-house SOC. Contact CoreGenix for a quote.",
      },
      {
        q: "Who should use SOC as a Service?",
        a: "Any business with critical systems and limited security staffing — from mid-size companies to enterprises that want 24x7 coverage.",
      },
    ],
    cta: "Get enterprise-grade monitoring at a fraction of the cost. Get a free SOC assessment today.",
  },
  {
    slug: "vulnerability-management",
    title: "Vulnerability Management as a Service India",
    description:
      "Continuous vulnerability management as a service — scan, prioritize and fix risks before attackers exploit them. Mumbai & India.",
    h1: "Vulnerability Management as a Service (VMaaS)",
    intro:
      "CoreGenix provides Vulnerability Management as a Service (VMaaS) — a continuous program that keeps your risk visible and manageable.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Every week, new vulnerabilities are discovered — and attackers are faster than most organizations. By the time you do a quarterly scan, new weaknesses are already exposed and old ones are being exploited.",
          "Manual, periodic scanning isn't security. It's archaeology. You need a continuous, prioritized process that finds, ranks, and drives fixes — before attackers cash in.",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "Continuous vulnerability scanning — network, endpoints, cloud, web",
          "Risk-based prioritization — focus on what actually matters",
          "CVE & threat intelligence correlation — context behind each finding",
          "Remediation guidance — clear steps, prioritized by risk",
          "Re-scanning & verification — confirm fixes actually work",
          "Reporting & metrics — show management the risk is dropping",
        ],
      },
      {
        heading: "What You Get",
        body: [
          "Continuous visibility into your attack surface",
          "Less time chasing noise, more time fixing real risk",
          "A measurable reduction in exploitable weaknesses",
          "Evidence for compliance and audits",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years of security experience",
          "30+ scan capabilities across environments",
          "120+ projects delivered across industries",
          "Deep SOC + vulnerability expertise — we don't just scan, we correlate",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is vulnerability management as a service?",
        a: "It's a continuous, outsourced program that scans your systems for vulnerabilities, prioritizes them by risk, and drives remediation.",
      },
      {
        q: "How often should I scan for vulnerabilities?",
        a: "Continuously or at least often enough to catch new CVEs. CoreGenix designs a cadence matched to your risk.",
      },
      {
        q: "How much does VMaaS cost in India?",
        a: "Pricing depends on asset count and scan frequency. Contact CoreGenix for a free assessment.",
      },
    ],
    cta: "Stop chasing noise. Manage real risk. Get a free vulnerability management assessment today.",
  },
  {
    slug: "waf-as-a-service",
    title: "WAF as a Service India — Web Application Firewall",
    description:
      "WAF as a service in India — protect your web apps from SQL injection, XSS and DDoS with managed web application firewall.",
    h1: "Web Application Firewall as a Service (WAF)",
    intro:
      "CoreGenix delivers managed WAF as a service — enterprise-grade web application protection, operated for you.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Web applications are the #1 target for attackers. SQL injection, cross-site scripting, credential stuffing, bot attacks — your app is probed constantly, often within minutes of going live. And a compromised web app doesn't just hurt your site — it can compromise your customers and your whole network.",
          "Building and tuning your own WAF is specialized, time-consuming work. Most businesses don't have the expertise. Attackers know that.",
        ],
      },
      {
        heading: "What We Protect",
        body: [
          "Public websites and portals",
          "Customer-facing and e-commerce applications",
          "APIs and microservices",
          "Legacy applications that can't be easily patched",
          "Applications behind third-party hosting or clouds",
        ],
      },
      {
        heading: "What's Included",
        body: [
          "Managed WAF deployment & tuning — no false-positive battles",
          "OWASP Top 10 protection — SQLi, XSS, CSRF and more",
          "DDoS & bot mitigation",
          "24x7 monitoring & rule updates — protection keeps pace with threats",
          "Incident handling — when an attack happens, we respond",
          "Reporting — blocked attacks and web traffic insights",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years of application & network security experience",
          "120+ projects delivered across industries",
          "55+ happy clients with production applications",
          "24/7 monitoring backed by our security operations",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is a WAF?",
        a: "A Web Application Firewall (WAF) filters and monitors traffic between a web application and the internet, blocking attacks like SQL injection, XSS and DDoS.",
      },
      {
        q: "Why does my website need a WAF?",
        a: "Web applications are a primary attack target. A WAF blocks automated and targeted attacks that application code alone can't stop.",
      },
      {
        q: "How much does WAF as a service cost in India?",
        a: "Pricing depends on traffic and application count. Contact CoreGenix for a free assessment.",
      },
    ],
    cta: "Protect the applications your business runs on. Get a free WAF assessment today.",
  },
  {
    slug: "dlp-as-a-service",
    title: "DLP as a Service India — Data Loss Prevention",
    description:
      "DLP as a service in India — stop data leaks from emails, USB, cloud and endpoints. Managed data loss prevention.",
    h1: "Data Loss Prevention as a Service (DLP)",
    intro:
      "CoreGenix delivers managed Data Loss Prevention (DLP) that watches your sensitive data wherever it lives and moves.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Customer lists. Financial records. Intellectual property. Design files. Data leaks rarely happen through dramatic hacks — they happen through email mistakes, USB drives, cloud uploads, and careless insiders.",
          "One leaked file can become a news story, a lawsuit, or a lost client. Once data is out, you can't take it back. Prevention is the only defense that actually works.",
        ],
      },
      {
        heading: "What We Monitor",
        body: [
          "Email & collaboration — sensitive data sent outside the organization",
          "Endpoints — USB, printing, clipboard, screenshots",
          "Cloud & file sharing — uploads to unauthorized services",
          "Network — data leaving through web, FTP or other channels",
          "Databases & storage — sensitive files at rest",
        ],
      },
      {
        heading: "What's Included",
        body: [
          "DLP policy design — rules matched to your data and workflows",
          "Managed deployment of DLP controls",
          "Monitoring & alerting — real-time visibility of risky activity",
          "Incident handling — investigate and remediate leaks",
          "Reporting — for management and compliance",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years of security and data protection experience",
          "120+ projects delivered across data-sensitive industries",
          "55+ happy clients who trust us with their data",
          "Combined DLP + SOC + GRC expertise — prevention and oversight in one",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is DLP?",
        a: "Data Loss Prevention (DLP) is a set of technologies and policies that detect and block the unauthorized transfer of sensitive data.",
      },
      {
        q: "Why is data loss prevention important?",
        a: "Data leaks cause financial, legal and reputational damage. DLP stops them at the source — before data leaves your control.",
      },
      {
        q: "How much does DLP as a service cost in India?",
        a: "Pricing depends on endpoints, users and data types. Contact CoreGenix for a free assessment.",
      },
    ],
    cta: "Keep your data where it belongs. Get a free DLP assessment today.",
  },
  {
    slug: "email-security",
    title: "Email Security Services Mumbai",
    description:
      "Email security services in Mumbai — block phishing, malware, spoofing and BEC attacks. Managed email protection for business.",
    h1: "Email Security Services in Mumbai",
    intro:
      "CoreGenix secures your email at every layer — from delivery to content to authenticity.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "Email is the gateway to your business — and the #1 attack vector. Phishing, spoofing, business email compromise (BEC), and malware-laden attachments target your inbox every single day. One employee clicking one link can cost you thousands — or your entire network.",
          "Your built-in spam filter isn't enough. Attackers know how to get past it.",
        ],
      },
      {
        heading: "What We Protect",
        body: [
          "Phishing & social engineering — malicious and lookalike emails",
          "Business email compromise (BEC) — fake executives and vendors",
          "Malware & ransomware attachments",
          "Spoofing & impersonation — email claiming to be your brand",
          "Spam & graymail — inbox clutter that hides real threats",
        ],
      },
      {
        heading: "What's Included",
        body: [
          "Email gateway security — filtering before delivery",
          "DMARC, SPF & DKIM — authentication so attackers can't spoof you",
          "Attachment & URL sandboxing — safe clicking",
          "Data protection — sensitive content in email",
          "24x7 monitoring & incident response",
          "User awareness guidance — because people matter too",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years securing business communications",
          "120+ projects delivered across industries",
          "55+ happy clients who rely on our protection",
          "Combined email + SOC + threat intelligence expertise",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is email security?",
        a: "Email security protects your organization from threats delivered through email — phishing, malware, spoofing and data loss.",
      },
      {
        q: "Why is email the biggest security risk?",
        a: "Email is the primary attack vector because it reaches every employee and bypasses perimeter defenses with a single click.",
      },
      {
        q: "How much does email security cost in Mumbai?",
        a: "Pricing depends on users and features. Contact CoreGenix for a free assessment.",
      },
    ],
    cta: "Don't let one email be your downfall. Get a free email security assessment today.",
  },
  {
    slug: "ot-security",
    title: "OT Security Services India — Operational Technology",
    description:
      "OT security services for industrial and manufacturing companies in India — protect SCADA, PLCs, ICS and production networks.",
    h1: "OT Security Services — Operational Technology",
    intro:
      "CoreGenix secures operational technology (OT) environments without disrupting production — because a security fix that stops your line is a problem, not a solution.",
    sections: [
      {
        heading: "The Problem",
        body: [
          "IT breaches are bad. OT breaches can stop production — or worse. Industrial control systems, PLCs, SCADA and production networks were built for reliability, not security. Today, attackers increasingly target them, and the impact is physical: halted lines, damaged equipment, safety risks.",
          "An OT network is the heartbeat of manufacturing and infrastructure. Once disrupted, recovery is measured in days — and revenue losses in millions.",
        ],
      },
      {
        heading: "What We Secure",
        body: [
          "Industrial control systems (ICS) — PLCs, DCS, SCADA",
          "Production & OT networks — segmentation, monitoring",
          "Edge devices & field controllers",
          "IT/OT boundary — the bridge attackers cross",
          "Remote access & maintenance connections",
        ],
      },
      {
        heading: "What We Provide",
        body: [
          "OT security assessment — understand your industrial risk",
          "OT network segmentation — contain threats before they spread",
          "OT monitoring & anomaly detection — visibility without halting production",
          "Hardening & patch strategy — safe, non-disruptive fixes",
          "Incident response for OT environments",
          "Compliance guidance — ISA/IEC 62443 and industry standards",
        ],
      },
      {
        heading: "Why Choose CoreGenix",
        body: [
          "18+ years across IT and OT environments",
          "Specialized OT practice — audit, SOC and incident response",
          "120+ projects delivered across industrial sectors",
          "Combined IT + OT + security expertise in one team",
          "Mumbai base, Pan-India delivery",
        ],
      },
    ],
    faq: [
      {
        q: "What is OT security?",
        a: "OT (Operational Technology) security protects industrial control systems and production networks — SCADA, PLCs, ICS — from cyber attacks and disruption.",
      },
      {
        q: "Why are industrial networks at risk?",
        a: "Legacy OT systems were built for reliability, not security, and increasingly connect to IT networks, exposing them to attackers.",
      },
      {
        q: "How do you secure OT without stopping production?",
        a: "With non-disruptive methods — passive monitoring, segmentation and carefully staged changes. Your production line keeps running.",
      },
    ],
    cta: "Protect the systems that keep your business producing. Get a free OT security assessment today.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

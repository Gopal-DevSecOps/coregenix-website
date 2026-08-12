# CoreGenix — SEO / GEO / MEO Content Strategy

> Companion strategy to the content pack. Read this first, then use the page files in
> `services/` and `ranking/`. All content follows Google's official guidance (Search Central,
> AI Optimization Guide, Google Business Profile Help).

---

## 1. The Three Pillars

| Pillar | Purpose | Where it works |
|---|---|---|
| **SEO** | Google search ranking | Meta tags, headings, content, internal links, structured data |
| **GEO (Local)** | Local Google ranking | City names (Mumbai, Delhi, Bangalore, Pune), Google Business Profile, LocalBusiness schema |
| **MEO (Voice / AI)** | AI assistants, voice search, AI Overviews | Question-based content, direct answers, clear h2/h3 structure, llms.txt |

> **Note:** "GEO/MEO" terms outside Google ("generative engine optimization", "map engine
> optimization") are not Google ranking factors by themselves — Google's official position is
> that AI visibility comes from the same quality SEO fundamentals. We do both anyway because
> AI assistants (Claude, ChatGPT, Gemini, Perplexity) and browser agents read content directly.

---

## 2. Keyword Strategy

### 2.1 Target keyword map (national + local)

| Intent | Keyword | Page |
|---|---|---|
| Primary | cyber security company, best cyber security company in India | `ranking/03` |
| Primary | top cyber security company in India | `ranking/02` |
| Primary | no 1 cyber security company in India | `ranking/01` |
| Primary | top 5 cyber security companies in India | `ranking/04` |
| Local | cyber security company in Mumbai | Home, `ranking/*`, Contact |
| Local | IT security services Mumbai | Home, Services |
| Long-tail | managed security services India | `services/11-soc-mss` |
| Long-tail | VAPT services India / penetration testing Mumbai | `services/08-vapt` |
| Long-tail | network monitoring 24x7 Mumbai | `services/01-noc` |
| Service | annual maintenance contract (AMC) India | `services/02-amc` |
| Service | facility maintenance contract (FMC) | `services/03-fmc` |
| Service | cloud strategy consulting India | `services/04-cloud-strategy` |
| Service | cloud infrastructure management services | `services/05-cloud-infra-management` |
| Service | data backup and recovery services India | `services/06-backup-recovery` |
| Service | GRC consulting / data protection officer (DPO) services | `services/07-grc-dpo` |
| Service | red teaming services India | `services/09-red-teaming` |
| Service | cyber security audit company Mumbai | `services/10-audit` |
| Service | vulnerability management as a service | `services/12-vulnerability-management` |
| Service | WAF as a service India | `services/13-waf-as-a-service` |
| Service | DLP as a service India | `services/14-dlp-as-a-service` |
| Service | email security services Mumbai | `services/15-email-security` |
| Service | OT security services India | `services/16-ot-security` |

### 2.2 Keyword use rules
- **One primary keyword per page** in: meta title, H1, first 100 words, one H2, URL slug.
- **LSI keywords** (related terms): weave in naturally — do not stuff.
- **GEO (local) keywords**: Mumbai + Pan-India cities in "serving" section, meta, and body.
- **MEO (voice) keywords**: question format — "What is…", "How much does…", "Who provides…".
- Write for humans first; Google and AI both rank clarity, not repetition.

---

## 3. Content Formula (applied to every page)

```
1. Meta Data      → SEO title (≤60), meta description (≤155), keywords, URL slug, OG image alt
2. H1             → Curiosity + pain point + primary keyword (natural)
3. Problem        → Empathy + loss aversion (what happens if ignored)
4. Solution       → Services + benefits (80% engagement / 20% technical detail)
5. Why Choose Us  → Authority + social proof (18+ yrs, 120+ projects, 55+ clients, team)
6. FAQ            → Plain Q&A (helps users + AI quoting; FAQ rich result retired in 2026)
7. CTA            → Commitment (free consultation, phone +91 83559 58119, sales@cgcein.com)
8. JSON-LD hint   → Schema suggestion (Service / LocalBusiness / BreadcrumbList)
```

### Psychology triggers
| Trigger | Where | Why |
|---|---|---|
| Loss aversion | Problem section | "Downtime costs you ₹X/hr" style pain framing |
| Social proof | Why Choose Us, testimonials | Real client names & logos |
| Authority | Experience, team, certifications | 18+ years, expert team |
| Empathy | Problem section | Acknowledge the reader's pain |
| Curiosity | H1 / H2 | Make them want to read on |

### 80/20 balance
- **80%** engagement: headlines, benefits, stories, client outcomes.
- **20%** technical: features, technologies, compliance standards.

---

## 4. Facts we may use (no fabrication)

- Company: CoreGenix (CGCES Pvt Ltd), IT Infrastructure & Cyber Security services
- Office: C 1405 Kailash Business Park, Park Side, Vikhroli (W), Mumbai — 400059
- Phone: +91 83559 58119 · Email: sales@cgcein.com · Domain: https://coregenix.com
- Experience: 18+ years · Projects: 120+ · Clients: 55+ · Support: 24/7
- Team: Maj. S K Goyal (MD & CFO), Alka (Director), Monika (Director Sales),
  Yusuf (Cyber Security SME & Technical Director), Sheltan (Tech & Innovation Head)
- Real testimonials: Yashwant (Head IT), Mahindra & Mahindra (Verified Client), Manish Mehta (Head IT India)
- Services: NOC, AMC, FMC, Cloud Strategy, Cloud Infra Mgmt, Backup & Recovery, GRC & DPO,
  VAPT, Red Teaming, Audit, SOC MSS, Vuln Mgmt-as-a-Service, WAF-as-a-Service, DLP-as-a-Service,
  Email Security, OT Security, Network, DC, DR & BCP, Private/Public/Hybrid Cloud, IAM, SSO, PAM,
  Zero Trust, DLP, EDR/MDR/XDR, GRC & Cyber Audits, Risk Mgmt, Compliance, NIST CSF, IT Risk
  Assessment, IT Policy, ISMS, BCP/DR.

---

## 5. Voice search / question keywords (MEO)

Patterns to include once per page naturally:
- "What is <service>?"
- "Why does my business need <service>?"
- "How much does <service> cost in India / Mumbai?"
- "Who provides <service> in Mumbai?"
- "Is <service> worth it for a small business?"

---

## 6. Where everything goes (file map)

```
content/seo/
├── 00-strategy.md                          ← this file
├── services/
│   ├── 01-noc.md
│   ├── 02-amc.md
│   ├── 03-fmc.md
│   ├── 04-cloud-strategy.md
│   ├── 05-cloud-infra-management.md
│   ├── 06-backup-recovery.md
│   ├── 07-grc-dpo.md
│   ├── 08-vapt.md
│   ├── 09-red-teaming.md
│   ├── 10-audit.md
│   ├── 11-soc-mss.md
│   ├── 12-vulnerability-management.md
│   ├── 13-waf-as-a-service.md
│   ├── 14-dlp-as-a-service.md
│   ├── 15-email-security.md
│   └── 16-ot-security.md
├── ranking/
│   ├── 01-no1-cyber-security-company.md
│   ├── 02-top-cyber-security-company.md
│   ├── 03-best-cyber-security-company.md
│   └── 04-top-5-cyber-security-companies.md
└── 90-implementation.md
```

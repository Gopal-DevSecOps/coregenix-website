# Implementation Guide — Turning Content Into Code

> This document maps the content pack to real Next.js pages. It follows the SEO plan in
> `AGENTS.md` (§5–§6). No code is written yet — this is the roadmap.

---

## 1. Route map

| Content file | Proposed route | Metadata title source |
|---|---|---|
| `services/01-noc.md` | `/services/noc` | SEO Title in file |
| `services/02-amc.md` | `/services/amc` | SEO Title in file |
| `services/03-fmc.md` | `/services/fmc` | SEO Title in file |
| `services/04-cloud-strategy.md` | `/services/cloud-strategy` | SEO Title in file |
| `services/05-cloud-infra-management.md` | `/services/cloud-infrastructure-management` | SEO Title in file |
| `services/06-backup-recovery.md` | `/services/backup-recovery` | SEO Title in file |
| `services/07-grc-dpo.md` | `/services/grc-dpo` | SEO Title in file |
| `services/08-vapt.md` | `/services/vapt` | SEO Title in file |
| `services/09-red-teaming.md` | `/services/red-teaming` | SEO Title in file |
| `services/10-audit.md` | `/services/audit` | SEO Title in file |
| `services/11-soc-mss.md` | `/services/soc-mss` | SEO Title in file |
| `services/12-vulnerability-management.md` | `/services/vulnerability-management` | SEO Title in file |
| `services/13-waf-as-a-service.md` | `/services/waf-as-a-service` | SEO Title in file |
| `services/14-dlp-as-a-service.md` | `/services/dlp-as-a-service` | SEO Title in file |
| `services/15-email-security.md` | `/services/email-security` | SEO Title in file |
| `services/16-ot-security.md` | `/services/ot-security` | SEO Title in file |
| `ranking/01-no1-cyber-security-company.md` | `/no-1-cyber-security-company-india` | SEO Title in file |
| `ranking/02-top-cyber-security-company.md` | `/top-cyber-security-company-india` | SEO Title in file |
| `ranking/03-best-cyber-security-company.md` | `/best-cyber-security-company-india` | SEO Title in file |
| `ranking/04-top-5-cyber-security-companies.md` | `/top-5-cyber-security-companies-india` | SEO Title in file |

---

## 2. Architecture options

### Option A — Dynamic service pages (recommended)
```
src/app/services/[slug]/page.tsx   ← generateStaticParams from a data file
src/data/services.ts               ← content from the 16 service files
src/app/services/[slug]/services.css
```
- Clean URLs, one template, easy to add more services.
- `generateMetadata` per slug for title/description/keywords.

### Option B — Static pages
```
src/app/services/noc/page.tsx
src/app/services/amc/page.tsx
...
```
- More files, but simple and explicit. Fine for a fixed list.

### Ranking pages
```
src/app/no-1-cyber-security-company-india/page.tsx
src/app/top-cyber-security-company-india/page.tsx
src/app/best-cyber-security-company-india/page.tsx
src/app/top-5-cyber-security-companies-india/page.tsx
```

---

## 3. Metadata wiring (per page)

Follow `AGENTS.md` §5.2. Each page gets:
```ts
export const metadata: Metadata = {
  title: "<SEO Title from file>",
  description: "<Meta Description from file>",
  alternates: { canonical: "https://coregenix.com/<slug>" },
  openGraph: { title, description, url, type: "website" },
};
```

---

## 4. JSON-LD hints (from each file)

- **Service pages** → `Service` schema + `BreadcrumbList` (Home › Services › Service).
- **Ranking pages** → `ProfessionalService` + `Service` + `BreadcrumbList`.
- **Top-5 guide** → `Article` schema (blog-style).
- **Contact/Home** → `LocalBusiness` / `Organization` with full NAP (see AGENTS.md §5.2.6).

Reusable `<JsonLd data={...} />` component recommended (in `src/components/JsonLd.tsx`).

---

## 5. Internal linking plan

- Every service page links to `/services` and back to `/contact`.
- Service pages cross-link to related services (e.g. VAPT ↔ Red Teaming ↔ SOC).
- Ranking pages link to the relevant service pages (authority flow to money pages).
- All pages link to Home via the header/footer automatically.

---

## 6. AI / NEO additions

- Add all new routes to `src/app/sitemap.ts`.
- Add AI-bot allow rules in `src/app/robots.ts` (AGENTS.md §6.2).
- Serve `/llms.txt` via `src/app/llms.txt/route.ts` listing all new pages.

---

## 7. Content review checklist (before building)

- [ ] No fabricated data (numbers/testimonials all from real repo content)
- [ ] Each page has one primary keyword in H1 + meta title
- [ ] City keywords (Mumbai + Pan-India) present where relevant
- [ ] One clear CTA with phone + email per page
- [ ] FAQ in plain content (FAQ rich result retired 2026)
- [ ] 80/20 balance — engaging first, technical second

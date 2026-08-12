<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# CoreGenix Website — Agent & Project Guide (AGENTS.md)

> Master reference for **every AI agent, developer, and reviewer** working in this repository.
> It explains the full project, how to work on it safely, the professional design standards,
> and the complete **SEO / MEO / NEO ranking strategy** for Google and AI search.

---

## 1. Project Overview

| Item | Detail |
|---|---|
| **Project** | CoreGenix corporate marketing website |
| **Company** | CoreGenix (CGCES Pvt Ltd) — IT Infrastructure & Cyber Security services |
| **Office** | C 1405 Kailash Business Park, Park Side, Vikhroli (W), Mumbai — 400059 |
| **Phone** | +91 83559 58119 |
| **Email** | sales@cgcein.com |
| **Domain** | `https://coregenix.com` |
| **Market** | Mumbai + Pan-India |
| **Stack** | Next.js 16.2.12 (App Router), React 19.2.4, TypeScript 5 |
| **Deploy** | Vercel / Node.js (npm) |

### Business segments (services menu structure)
1. **IT Managed Services** — NOC, AMC, FMC
2. **Cloud Managed Services** — Cloud Strategy, Cloud Infrastructure Management, Backup & Recovery
3. **Audit & Assessment** — GRC & DPO, VAPT, Red Teaming, Audit
4. **Managed Security Services** — Managed SOC MSS, Vuln Mgmt-as-a-Service, WAF-as-a-Service, DLP-as-a-Service, Email Security, OT Security
5. **IT Infrastructure Solutions** — Network, DC, Data Backup, DR & BCP
6. **Cloud Infrastructure Solutions** — Private/Public/Hybrid Cloud
7. **Cyber Security Solutions** — Infra Security, IAM, SSO, PAM, Zero Trust, DLP, EDR/MDR/XDR
8. **GRC & DPO** — GRC & Cyber Audits, Risk Management, Compliance, NIST CSF, ISMS, BCP/DR

---

## 2. How to Work in This Repo (AI Agent Rules)

> **The most important section. Follow these rules strictly.**

### 2.1 Mandatory AI usage rules
1. **Ask before acting.** Do NOT make changes, install packages, or run destructive commands without explicit user approval.
2. **Never commit / push / deploy** unless the user explicitly asks.
3. **Never fabricate data** — do not invent team members, client logos, reviews, ratings, certifications, or numbers. All content must come from the user or existing files.
4. **No comments in code** unless the user asks for them.
5. **Follow existing conventions** — match file style, import patterns, and CSS architecture already used in `src/`.
6. **Read the local Next.js docs first** — per the `nextjs-agent-rules` block above, this Next.js version differs from training data. Read guides in `node_modules/next/dist/docs/` before writing code.
7. **Verify before finishing** — run the checks in §7 (typecheck, lint, build).
8. **Keep secrets out** — never log or commit API keys, tokens, or credentials (e.g. anything found in `CLAUDE.md` or config).
9. **One task at a time** — confirm scope, do the work, show results, then wait.

### 2.2 Do / Don't cheat-sheet
| Do | Don't |
|---|---|
| Read files before editing | Guess at file paths |
| Use `@/` alias imports (tsconfig) | Add new dependencies without asking |
| Reuse existing `Icons.tsx`, `Reveal`, `Wow`, `SectionHeading` | Inline random UI patterns |
| Ask when ambiguous | Blindly change content text |
| Run typecheck/lint after changes | Edit `package-lock.json` by hand |

### 2.3 Workflow
1. Read the relevant page/component.
2. Confirm the exact change with the user.
3. Implement.
4. Run `npx tsc --noEmit` and `npm run lint`.
5. Build (`npm run build`) when required.
6. Report what changed.

---

## 3. Full Project Structure

```
CLAUDE/
├── AGENTS.md                  ← you are here
├── CLAUDE.md                  ← (contains sample data / drafts — NOT for the site)
├── next.config.ts
├── package.json
├── public/
│   ├── file.svg, globe.svg, next.svg, vercel.svg, window.svg  ← default, replace/extend
│   └── images/coregenix/      ← all site images (hero, team, services, clients, partners, certs)
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← root metadata (needs SEO upgrade, see §6)
│   │   ├── page.tsx           ← Home (Hero, Services, TrustBar, Defense, TextMarquee,
│   │   │                         WhatWeProvide, CyberExperts, VideoSection, CustomerSuccess,
│   │   │                         Partners, Testimonials, Leadership, BlogGrid, Cta)
│   │   ├── globals.css        ← all global styles (design tokens in :root)
│   │   ├── about/page.tsx     + about.css
│   │   ├── services/page.tsx  + services.css
│   │   ├── solutions/page.tsx + solutions.css
│   │   ├── it-services/page.tsx + it-services.css
│   │   ├── contact/page.tsx   + contact.css + ContactForm.tsx
│   │   ├── career/page.tsx
│   │   └── blog/page.tsx      + blog.css  (static posts; needs [slug] pages — §8)
│   └── components/
│       ├── Header.tsx         ← mega menu (all 8 service groups)
│       ├── Footer.tsx         ← company / solutions / contact columns
│       ├── Hero.tsx           ← 2-slide carousel
│       ├── Services.tsx, WhatWeProvide.tsx, CyberExperts.tsx, Defense.tsx,
│       ├── TrustBar.tsx, CustomerSuccess.tsx, Partners.tsx, Testimonials.tsx,
│       ├── Leadership.tsx     ← team grid (Maj. S K Goyal, Alka, Monika, Yusuf, Sheltan)
│       ├── BlogGrid.tsx       ← 3 post cards (hrefs are "#blog" — needs fixing, §8)
│       ├── TextMarquee.tsx, VideoSection.tsx, Cta.tsx
│       ├── Icons.tsx          ← all SVG icons
│       ├── Reveal.tsx, Wow.tsx, SectionHeading.tsx  ← scroll animations / headings
│       ├── Preloader.tsx, ScrollTop.tsx, HashLinkHandler.tsx
│       └── ...
```

### Key patterns to follow
- **Animations**: `Reveal` (scroll reveal) and `Wow` (eyebrow/heading) components; delay via `delay={n}`.
- **Section heading**: use `SectionHeading` with `<span className="grad">` accents.
- **Icons**: import from `@/components/Icons` — do not add new icon libraries.
- **Colors / fonts**: design tokens in `globals.css :root` (see §5).

---

## 4. Professional Design Standards (Pro-Level)

### 4.1 Design tokens (`:root` in `src/app/globals.css`)
- Use CSS variables for all colors, gradients, fonts, spacing. Never hardcode hex colors in components.
- Accent gradient `--accent-grad` and gold `--gold` are the brand identity.
- Fonts: Playfair Display (headings), Open Sans (body), Roboto (buttons) — loaded via `next/font` in `layout.tsx`.

### 4.2 Layout & spacing
- Standard section wrapper: `<section className="section ...">` inside `<div className="container">`.
- Consistent card patterns: `*-card`, `icon-box`, `btn btn-grad`, `link`.
- `section-dark` variant for dark bands.

### 4.3 Accessibility
- Semantic headings (single `h1` per page).
- `aria-label`, `aria-hidden` on decorative elements, `role` where needed (carousel/tabs).
- Alt text on all images via `next/image` `alt`.
- Focus-visible states on interactive elements.

### 4.4 Performance
- `next/image` for all raster images (width/height + `sizes`).
- `preload` critical hero image; `loading="lazy"` for below-fold media.
- No large JS in server components; `"use client"` only where interactivity is needed.

### 4.5 Responsiveness
- Mobile menu + mega menu are handled in `Header.tsx`.
- Grid layouts use `auto-fit / minmax` and breakpoints in CSS. Never break mobile layout.

---

## 5. SEO — Google Ranking Strategy (SEO)

> Target keywords: `cyber security company`, `best cyber security company in Mumbai`,
> `top cyber security company India`, `IT security services`, `managed security services`,
> `NOC/AMC/FMC services`, `VAPT services`, etc.
> Goal: rank for local (Mumbai) + national long-tail terms first, then aggressive
> "top/best/no.1" terms over 6–12 months. Never stuff keywords — write for humans.

### 5.1 Current SEO state (audit)
| Item | Status |
|---|---|
| `sitemap.xml` | ❌ Missing |
| `robots.txt` | ❌ Missing |
| JSON-LD structured data | ❌ None |
| Open Graph / Twitter cards | ❌ Missing |
| Favicon / app icon | ❌ Missing |
| Canonical URLs | ❌ Not set |
| Per-page metadata | ⚠️ Basic only |
| Blog article pages | ⚠️ Static, links are `#blog` |
| NAP (address/phone/email) | ✅ Contact + Footer |

### 5.2 Technical SEO — files to create (Phase 1)
1. **`src/app/sitemap.ts`** — list all routes under `https://coregenix.com` with `lastModified`, `changeFrequency`, `priority`. Home = priority 1.
2. **`src/app/robots.ts`** — allow all crawlers + AI bots; point to sitemap (`MetadataRoute.Robots`).
3. **`src/app/layout.tsx`** — full metadata:
   - `metadataBase: new URL("https://coregenix.com")`
   - `title.template` + `title.default` (e.g. `%s — CoreGenix`)
   - `description`, `keywords`, `robots` (index/follow)
   - `openGraph` (type=website, locale en_IN, images) + `twitter` card
   - `canonical` via `alternates.canonical`
   - `icons` / favicon
   - `viewport` (width=device-width, initial-scale=1, themeColor)
4. **`src/app/icon.tsx`** — generated favicon from `/images/coregenix/logo.png` (≥48×48, 1:1).
5. **`src/app/opengraph-image.tsx`** — generated OG image (brand + page title) for rich link previews.
6. **JSON-LD structured data** (`<script type="application/ld+json">`):
   - **Home** → `ProfessionalService` / `Organization` (name, url, logo, address, geo, phone, sameAs, openingHours)
   - **About** → `Organization` + `BreadcrumbList`
   - **Services / Solutions / IT Services** → `Service` array + `BreadcrumbList`
   - **Contact** → `LocalBusiness` (full NAP + geo + hours)
   - **Blog posts** → `Article` + `BreadcrumbList`
   - Reusable `<JsonLd data={...} />` component recommended.
7. **Per-page metadata** — every page gets unique title/description with city + keyword context
   (e.g. "Cyber Security Services in Mumbai — CoreGenix").

### 5.3 On-page SEO rules
- One `h1` per page containing the primary keyword naturally.
- `h2`/`h3` structure that answers the user's question.
- Internal links between related pages (Home ↔ Services ↔ Solutions ↔ Blog).
- Alt text on images with descriptive keywords (no stuffing).
- URL structure: short, kebab-case, keyword-rich (`/cyber-security-services`, `/blog/...`).

### 5.4 MEO — Local SEO / Google Business Profile
1. **Verify** Google Business Profile (GBP) — critical first step.
2. **Category**: Cybersecurity Consultant / IT Security Company / Computer Support.
3. **NAP consistency** — identical name, address, phone on website, GBP, and directories.
4. **Complete profile**: hours, services list, photos, description with keywords.
5. **Reviews**: ask real clients, respond to every review (relevance + prominence signal).
6. **Citations**: Justdial, Sulekha, IndiaMART, Clutch, G2, Trustpilot, LinkedIn company page.
7. **LocalBusiness schema** on contact page supports local ranking.
8. **Maps embed** already present on contact page — keep.

### 5.5 Measurement
- Google Search Console: submit sitemap, monitor indexing, fix coverage errors.
- Rich Results Test / Schema Validator: validate JSON-LD.
- PageSpeed Insights: keep LCP/CLS/INP in the green.
- Bing Webmaster Tools (optional).

---

## 6. NEO — AI Search, News & Generative Engine Optimization

> AI assistants (Claude, ChatGPT, Gemini, Perplexity) and AI Overviews read your site to answer
> user questions. Make it easy for them to find, parse, and cite CoreGenix.

### 6.1 What AI bots read
- `robots.txt` and `sitemap.xml` (discovery).
- HTML content (server-rendered — our site is SSR, good).
- **`llms.txt`** — a markdown index for LLMs.
- JSON-LD structured data.
- Clean, factual, well-structured prose.

### 6.2 Files to create for AI
1. **`src/app/llms.txt/route.ts`** — serve `https://coregenix.com/llms.txt`:
   - `# CoreGenix` H1 + blockquote summary (what the company does).
   - Short "About" paragraph.
   - H2 sections with `[Name](url): one-line description` lists:
     - **Services** → `/services`, `/solutions`, `/it-services`
     - **Company** → `/about`, `/contact`, `/career`
     - **Knowledge/Blog** → `/blog` + each post
   - Keep it concise, factual, jargon-free. No marketing fluff.
2. **`src/app/robots.ts`** — explicitly **allow** AI crawlers:
   - `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`,
     `Amazonbot`, `Applebot`, `bingbot`, `DuckDuckBot`, `anthropic-ai`.
   - Keep `Allow: /` for Googlebot.
3. **`sitemap.ts`** — helps AI crawlers discover all pages.
4. **JSON-LD** — Organization/LocalBusiness/Service/Article schemas give AI structured facts.

### 6.3 Content rules for AI visibility (from Google's AI optimization guide)
- **Non-commodity content**: unique expert insights, real experience, first-hand knowledge —
  not generic "7 tips" content anyone could write.
- **Direct answers**: answer questions clearly and early; use Q&A-style sections.
- **Clear headings**: logical h2/h3 so the right section can be quoted.
- **Facts over fluff**: precise services, cities served, compliance standards (ISO 27001, NIST CSF, GDPR).
- **Freshness**: publish blog articles regularly (News SEO).
- **Avoid**: keyword stuffing, page-per-variant spam, fabricated mentions.
- **Note (mythbusting)**: `llms.txt` does **not** change Google ranking — it helps *other* AI
  assistants and browser agents. Google ignores it. Do both anyway.

### 6.4 News SEO
- Each blog post gets real URL (`/blog/[slug]`), `Article` schema, publish date, author.
- Publish on a schedule (monthly minimum).
- Optional `rss.xml` Route Handler for feeds.

---

## 7. Quality Checks (run after every change)

```bash
npx tsc --noEmit        # typecheck
npm run lint            # eslint
npm run build           # production build (when required)
```

Also manually verify in the browser:
- Header mega menu shows full labels (no ellipsis truncation).
- Mobile menu opens/closes; body scroll locks.
- Blog cards link to real pages (not `#blog`).
- `/robots.txt`, `/sitemap.xml`, `/llms.txt` render correctly.

---

## 8. Suggested Improvements — Things Missing (add these)

**Content / UX**
- [ ] Real blog article pages (`src/app/blog/[slug]/page.tsx`) with `generateStaticParams` + `generateMetadata`; move posts to `src/data/posts.ts`.
- [ ] Fix all `href="#blog"` anchors in `BlogGrid.tsx` / `blog/page.tsx` to real URLs.
- [ ] Add a `404` page (`src/app/not-found.tsx`).
- [ ] Add case studies / client success pages (great for trust + long-tail SEO).
- [ ] Add an FAQ section (plain content — Google retired the FAQ rich result in 2026, but content helps users & AI).
- [ ] Add city-specific landing pages (Mumbai, Pune, Delhi, Bangalore) for local SEO.

**Technical SEO**
- [ ] Create all Phase-1 files in §5.2.
- [ ] Add `src/lib/site.ts` constants (site name, URL, phone, address, geo, hours, socials, keywords).
- [ ] Add favicon + apple-icon + OG image.
- [ ] Add `og:image` per page via `opengraph-image` convention.
- [ ] Add `not-found` metadata; verify `canonical` on every page.
- [ ] Add `themeColor` + `colorScheme` viewport.

**AI / NEO**
- [ ] Create `/llms.txt` (route handler) and AI crawler allow rules in `robots.ts`.
- [ ] Keep blog content factual & structured so AI can cite it.

**Brand / Trust**
- [ ] Add real client logos and certifications (files exist under `public/images/coregenix/` — use with user approval).
- [ ] Testimonials: convert to real attributed quotes; only then add `AggregateRating` schema (self-serving reviews policy).

**Off-page (manual — not code)**
- [ ] Google Business Profile verify + optimize (MEO, §5.4).
- [ ] Directory citations & backlinks.
- [ ] LinkedIn / social presence linking back to site.

---

## 9. Definition of Done
- [ ] Change matches user's request exactly (nothing extra).
- [ ] Follows existing conventions (§4).
- [ ] Typecheck + lint pass.
- [ ] No secrets, no fabricated data, no unrequested comments.
- [ ] Reported to user: what changed, how to verify.

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";
import "./career.css";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CoreGenix — a growing team of IT infrastructure, cloud and cyber security professionals. Explore open roles and build your career with us.",
  keywords: [
    "IT jobs Mumbai",
    "cyber security jobs India",
    "network engineer careers",
    "IT company careers",
    "CoreGenix jobs",
  ],
  alternates: { canonical: "/career" },
  openGraph: {
    title: "Careers — CoreGenix",
    description:
      "Join CoreGenix — a growing team of IT infrastructure, cloud and cyber security professionals.",
    url: `${SITE.url}/career`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — CoreGenix",
    description:
      "Join CoreGenix — a growing team of IT infrastructure, cloud and cyber security professionals.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE.url}/career` },
  ],
};

const perks = [
  { title: "Growth & Learning", desc: "Work on real enterprise projects with a culture that invests in your skills and certifications." },
  { title: "Remote & Flexible", desc: "Flexible work options that respect your time and help you balance life and work." },
  { title: "Great Team Culture", desc: "Collaborative, respectful and fun — we celebrate wins together and support each other." },
  { title: "Competitive Rewards", desc: "Attractive compensation, performance bonuses and benefits that value your contribution." },
];

const jobs = [
  {
    title: "Enterprise Account Manager",
    type: "Full Time",
    location: "Mumbai (Hybrid)",
    openings: "2",
    desc: "Own and grow relationships with enterprise clients, driving revenue across CoreGenix's IT infrastructure, cloud, and cyber security portfolio. Manage the full account lifecycle — from renewals to upsells — working closely with our technical team to design solutions that match client needs.",
    tags: ["Enterprise Sales", "Account Management", "Client Relationships"],
  },
  {
    title: "Business Development Executive",
    type: "Full Time",
    location: "Mumbai",
    openings: "2",
    desc: "Identify and pursue new business opportunities for CoreGenix's IT infrastructure and cyber security services. Generate qualified leads, build a pipeline through outreach and networking, and work with the sales team to convert prospects into long-term clients.",
    tags: ["Lead Generation", "B2B Sales", "Client Outreach"],
  },
  {
    title: "Inside Sales Representative",
    type: "Full Time",
    location: "Mumbai",
    openings: "4",
    desc: "Handle inbound and outbound sales conversations for CoreGenix's IT and cyber security services. Qualify leads, schedule demos and consultations, and maintain accurate CRM records to keep the sales pipeline moving efficiently.",
    tags: ["Inside Sales", "CRM", "Lead Qualification"],
  },
  {
    title: "Technical / Cyber Security / IT Sales Intern",
    type: "Internship",
    location: "Mumbai",
    openings: "Multiple",
    desc: "Learn the fundamentals of technical sales in IT infrastructure and cyber security. Support the sales team with prospect research, client meeting preparation, and proposal support — with hands-on exposure to how enterprise IT deals are won, guided by experienced mentors.",
    tags: ["Sales Training", "Cyber Security Basics", "Mentorship"],
  },
];

const jobPostingJsonLd = jobs.map((job, i) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.desc,
  employmentType: job.type,
  datePosted: new Date().toISOString().split("T")[0],
  hiringOrganization: {
    "@type": "Organization",
    name: SITE.name,
    sameAs: SITE.url,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: job.location,
      addressCountry: "IN",
    },
  },
  url: `${SITE.url}/career#job-${i}`,
}));

const steps = [
  { num: "01", title: "Apply", desc: "Send us your resume and tell us why you'd be a great fit for the role." },
  { num: "02", title: "Screening Call", desc: "A quick conversation with our HR team to understand your experience and goals." },
  { num: "03", title: "Technical Interview", desc: "A practical discussion with our technical leads to assess your expertise." },
  { num: "04", title: "Offer & Onboarding", desc: "Meet the team, sign the offer and start your journey with CoreGenix." },
];

export default function CareerPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {jobPostingJsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero-title">
              Grow Your Career with a <span className="grad">Team That Cares</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              Join a team of passionate IT and security professionals solving real business problems for
              75+ clients — with learning, growth and ownership at every step.
            </Reveal>
          </div>
        </section>

        <section className="section career-perks">
          <div className="container">
            <Reveal as="span" className="eyebrow" delay={1}>
              Why Work With Us
            </Reveal>
            <Reveal as="h2" className="career-section-title" delay={2}>
              A Workplace That <span className="grad">Invests in You</span>
            </Reveal>
            <div className="perks-grid">
              {perks.map((perk, i) => (
                <Reveal key={perk.title} delay={i + 1}>
                  <div className="perk-card">
                    <span className="perk-num">0{i + 1}</span>
                    <h3>{perk.title}</h3>
                    <p>{perk.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section career-jobs section-dark">
          <div className="container">
            <Reveal as="span" className="eyebrow" delay={1}>
              Open Positions
            </Reveal>
            <Reveal as="h2" className="career-section-title" delay={2}>
              Find Your Next <span className="grad">Role</span>
            </Reveal>
            <Reveal as="p" className="career-section-desc" delay={3}>
              We&apos;re growing our sales team. Explore current openings in enterprise sales, business
              development, and inside sales — plus internship opportunities for those starting out.
            </Reveal>
            <div className="jobs-grid">
              {jobs.map((job, i) => (
                <Reveal key={job.title} delay={(i % 3) + 1}>
                  <div className="job-card" id={`job-${i}`}>
                    <div className="job-top">
                      <span className="job-type">{job.type}</span>
                      <span className="job-location">
                        <MapPinIcon />
                        {job.location}
                      </span>
                    </div>
                    <span className="job-openings">{job.openings} Openings</span>
                    <h3>{job.title}</h3>
                    <p>{job.desc}</p>
                    <div className="job-tags">
                      {job.tags.map((tag) => (
                        <span key={tag} className="job-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="mailto:sales@cgcein.com?subject=Application%20for%20job" className="job-apply">
                      Apply Now
                      <ArrowRightIcon />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section career-process">
          <div className="container">
            <Reveal as="span" className="eyebrow" delay={1}>
              Hiring Process
            </Reveal>
            <Reveal as="h2" className="career-section-title" delay={2}>
              Simple, Transparent & <span className="grad">Fast</span>
            </Reveal>
            <div className="process-grid">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i + 1}>
                  <div className="process-card">
                    <span className="process-num">{step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section career-cta">
          <div className="container">
            <Reveal>
              <div className="career-cta-box">
                <div>
                  <span className="career-cta-icon">
                    <ClockIcon />
                  </span>
                  <h2>Don&apos;t see the right role?</h2>
                  <p>We&apos;re always looking for great talent. Send us your resume and we&apos;ll keep you in mind.</p>
                </div>
                <a href="mailto:sales@cgcein.com?subject=Open%20Application" className="btn btn-light">
                  Send Your Resume
                  <ArrowRightIcon />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

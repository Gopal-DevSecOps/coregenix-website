import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import "./career.css";

export const metadata: Metadata = {
  title: "Careers — CoreGenix",
  description:
    "Join CoreGenix — a growing team of IT infrastructure, cloud and cyber security professionals. Explore open roles and build your career with us.",
};

const perks = [
  { title: "Growth & Learning", desc: "Work on real enterprise projects with a culture that invests in your skills and certifications." },
  { title: "Remote & Flexible", desc: "Flexible work options that respect your time and help you balance life and work." },
  { title: "Great Team Culture", desc: "Collaborative, respectful and fun — we celebrate wins together and support each other." },
  { title: "Competitive Rewards", desc: "Attractive compensation, performance bonuses and benefits that value your contribution." },
];

const jobs = [
  {
    title: "Senior Network Engineer",
    type: "Full Time",
    location: "Mumbai (Hybrid)",
    desc: "Design, deploy and maintain enterprise networks, routing and switching, and data center infrastructure.",
    tags: ["CCNP", "SD-WAN", "Firewall"],
  },
  {
    title: "Cloud Infrastructure Engineer",
    type: "Full Time",
    location: "Mumbai (Hybrid)",
    desc: "Architect and manage Azure / AWS cloud environments, migrations and automation for enterprise clients.",
    tags: ["Azure", "AWS", "Terraform"],
  },
  {
    title: "Cyber Security Analyst",
    type: "Full Time",
    location: "Remote",
    desc: "Monitor, detect and respond to security threats across IT and OT environments with SIEM and SOC tools.",
    tags: ["SIEM", "SOC", "Incident Response"],
  },
  {
    title: "IT Support / Helpdesk Engineer",
    type: "Full Time",
    location: "Mumbai",
    desc: "Provide 24/7 managed support and helpdesk services, resolving issues quickly with great service.",
    tags: ["Windows", "Active Directory", "Troubleshooting"],
  },
  {
    title: "Data Backup & DR Specialist",
    type: "Full Time",
    location: "Mumbai",
    desc: "Implement and maintain backup, disaster recovery and business continuity solutions for clients.",
    tags: ["Veeam", "Backup", "DR"],
  },
  {
    title: "Project Manager — IT Services",
    type: "Full Time",
    location: "Mumbai (Hybrid)",
    desc: "Lead IT infrastructure and security projects end-to-end — planning, delivery and stakeholder management.",
    tags: ["Project Delivery", "ITIL", "Client Facing"],
  },
];

const steps = [
  { num: "01", title: "Apply", desc: "Send us your resume and tell us why you'd be a great fit for the role." },
  { num: "02", title: "Screening Call", desc: "A quick conversation with our HR team to understand your experience and goals." },
  { num: "03", title: "Technical Interview", desc: "A practical discussion with our technical leads to assess your expertise." },
  { num: "04", title: "Offer & Onboarding", desc: "Meet the team, sign the offer and start your journey with CoreGenix." },
];

export default function CareerPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Careers at CoreGenix
            </Reveal>
            <h1 className="page-hero-title">
              Grow Your Career with a <span className="grad">Team That Cares</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              Join a team of passionate IT and security professionals solving real business problems for
              55+ clients — with learning, growth and ownership at every step.
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
            <div className="jobs-grid">
              {jobs.map((job, i) => (
                <Reveal key={job.title} delay={(i % 3) + 1}>
                  <div className="job-card">
                    <div className="job-top">
                      <span className="job-type">{job.type}</span>
                      <span className="job-location">
                        <MapPinIcon />
                        {job.location}
                      </span>
                    </div>
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

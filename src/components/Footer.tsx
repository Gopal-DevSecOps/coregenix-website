import Reveal from "./Reveal";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Our Services", href: "/services" },
  { label: "Our Solutions", href: "/solutions" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
];
const serviceLinks = [
  { label: "Vulnerability & Cyber Security Assessment", href: "/solutions#vapt" },
  { label: "Security Operation Center (SOC)", href: "/solutions#soc" },
  { label: "Threat Operation Center (TOC)", href: "/solutions#toc" },
  { label: "OT Security", href: "/solutions#ot-security" },
  { label: "GRC & InfoSec Audits", href: "/solutions#grc" },
  { label: "X-as-a-Service", href: "/solutions#xaas" },
  { label: "IT Security Solutions", href: "/solutions#it-security" },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <Reveal className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/coregenix/logo.png" alt="CoreGenix" />
              </span>
            </a>
            <p>
              CoreGenix provides IT Infrastructure & Cyber Security Services — trusted
              technology partnership for your business growth and safety.
            </p>
            <div className="footer-social">
              <a href="https://in.linkedin.com/company/cgces-pvt-ltd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/people/CoreGenix/61583901786730/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
                </svg>
              </a>
              <a href="#home" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2.1h3.68l-8.04 9.19L24 23.4h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 2.1h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.14h2.04L6.48 4.18H4.29l13.32 17.06Z" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h4>Company</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <h4>Solutions</h4>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={3}>
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="icon">
                  <MapPinIcon />
                </span>
                <span>
                  C 1405 Kailash Business Park,
                  <br />
                  Park Side, Vikhroli (W),
                  <br />
                  Mumbai - 400059
                </span>
              </li>
              <li>
                <span className="icon">
                  <PhoneIcon />
                </span>
                <a href="tel:+918355958119">+91 83559 58119</a>
              </li>
              <li>
                <span className="icon">
                  <MailIcon />
                </span>
                <a href="mailto:sales@cgcein.com">sales@cgcein.com</a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="footer-bottom">
          <span>2025 © All rights reserved by CoreGenix.</span>
          <span>
            <a href="#home">Privacy Policy</a> &nbsp;·&nbsp;{" "}
            <a href="#home">Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

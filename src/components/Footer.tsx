import Image from "next/image";
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
  { label: "VAPT", href: "/services/vapt" },
  { label: "Managed SOC", href: "/services/soc-mss" },
  { label: "OT Security", href: "/services/ot-security" },
  { label: "GRC & DPDPA", href: "/services/grc-dpdpa" },
  { label: "Cyber Security Solutions", href: "/solutions#it-security" },
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
              <a href="https://www.youtube.com/@cgcepvtltd" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
                </svg>
              </a>
            </div>
            <div className="footer-certs">
              <Image
                src="/images/coregenix/cert-badge.png"
                alt="CoreGenix certification badge"
                width={72}
                height={72}
              />
              <Image
                src="/images/coregenix/cert-iso-27001.png"
                alt="ISO 27001 certified"
                width={72}
                height={72}
              />
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
                  India — Mumbai, Bengaluru, Jaipur
                  <br />
                 
                </span>
              </li>
              <li>
                <span className="icon">
                  <PhoneIcon />
                </span>
                <span>
                  <a href="tel:+918355958119">+91 83559 58119</a>
                  <br />
                  <a href="tel:+918369339809">+91 83693 39809</a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <MailIcon />
                </span>
                <span>
                  <a href="mailto:sales@cgcein.com">sales@cgcein.com</a>
                  <br />
                  <a href="mailto:sales@coregenix.in">sales@coregenix.in</a>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="footer-bottom">
          <span>{new Date().getFullYear()} © All rights reserved by CoreGenix.</span>
          <span>
            <a href="#home">Privacy Policy</a> &nbsp;·&nbsp;{" "}
            <a href="#home">Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

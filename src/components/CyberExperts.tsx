import Image from "next/image";
import Wow from "./Wow";
import { ArrowRightIcon, CheckIcon } from "./Icons";

const listItems = [
  "24/7 threat monitoring and response",
  "Advanced protection against malware and ransomware",
  "Customized security solutions for your business",
  "Compliance-ready and future-proof defense strategies",
];

export default function CyberExperts() {
  return (
    <section id="cyber-experts" className="section cyber-experts">
      <div className="float-shape float-shape-1" aria-hidden="true" />
      <div className="container">
        <div className="ce-head">
          <Wow delay={200} as="span" className="eyebrow">
            Cyber Security Experts
          </Wow>
          <Wow delay={350} as="h2" className="ce-title">
            Comprehensive Cybersecurity Solutions for <span className="grad">Modern Threats</span>
          </Wow>
        </div>

        <div className="ce-grid">
          <div className="ce-media">
            <Wow animation="zoom" delay={300} className="ce-main-img">
              <Image
                src="/images/coregenix/service-3.png"
                alt="Cybersecurity expert analyzing threats"
                width={1376}
                height={768}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Wow>
            <Wow animation="right" delay={500} className="ce-stat-card">
              <span className="ce-stat-num">99.9%</span>
              <span className="ce-stat-label">Threat detection and prevention rate</span>
            </Wow>
          </div>

          <div className="ce-content">
            <Wow delay={300} as="p" className="ce-text">
              For over 15 years, we have safeguarded organizations from evolving cyber
              threats. Our team provides end-to-end security solutions — from proactive
              threat detection and vulnerability assessments to rapid incident response —
              ensuring your data, systems, and reputation stay fully protected in an
              ever-changing digital landscape.
            </Wow>
            <ul className="ce-list">
              {listItems.map((item, i) => (
                <Wow as="li" delay={400 + i * 80} key={item}>
                  <span className="ce-check">
                    <CheckIcon />
                  </span>
                  {item}
                </Wow>
              ))}
            </ul>
            <Wow delay={600} className="ce-actions">
              <a href="#contact" className="btn btn-grad">
                Request a Security Audit
                <ArrowRightIcon />
              </a>
            </Wow>
          </div>
        </div>
      </div>
    </section>
  );
}

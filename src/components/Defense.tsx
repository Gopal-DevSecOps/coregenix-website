import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SearchIcon, SettingsIcon, DatabaseIcon } from "./Icons";

const features = [
  {
    icon: SearchIcon,
    title: "Tech Consultation & Analysis",
    desc: "Our experts first understand your business and systems, then recommend the right solution — the perfect fit for every problem.",
  },
  {
    icon: SettingsIcon,
    title: "Implementation & Automation",
    desc: "We bring solutions to life with modern tools, automation, and ITIL processes — fast, secure, and future-ready.",
  },
  {
    icon: DatabaseIcon,
    title: "Ongoing Support & Security",
    desc: "With 24/7 monitoring, backup, and proactive maintenance, your IT infrastructure stays stable and secure at all times.",
  },
];

export default function Defense() {
  return (
    <section className="section defense">
      <div className="container">
        <SectionHeading
          center
          title={
            <>
              Solving Business Problems With <span className="grad">Technical Solutions</span>
            </>
          }
          desc="We turn your business challenges into smart IT solutions — end-to-end responsibility, from planning to support."
        />
        <div className="defense-column">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i + 1}>
              <div className="defense-feature">
                <span className="icon">
                  <feature.icon />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="defense-media" delay={2}>
          <Image
            src="/images/coregenix/service-3.png"
            alt="CoreGenix IT infrastructure solutions"
            width={900}
            height={600}
            className="main-img"
          />
        </Reveal>
      </div>
    </section>
  );
}

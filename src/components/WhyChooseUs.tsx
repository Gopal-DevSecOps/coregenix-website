import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CheckIcon, ArrowRightIcon } from "./Icons";

const features = [
  "Dedicated consultation to understand your business needs",
  "We turn challenges into opportunities",
  "Expert team with 18+ years of industry experience",
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="about-media">
          <Image
            src="/images/coregenix/Solving Business Problems With Technical Solutions.png"
            alt="Solving business problems with technical solutions"
            width={2752}
            height={1536}
            className="main-img"
          />
          <div className="float-card">
            <span className="num">18+</span>
            <span className="txt">
              Years of
              <br />
              your trust
            </span>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            title={
              <>
                18+ Years of Your Trust & <span className="grad">Successful IT Services</span>
              </>
            }
            lead="We provide IT Infrastructure & Cyber Security Services for your Business"
            desc="We are a team of skilled experts dedicated to delivering tailored IT solutions to support our clients in meeting their business goals. At CoreGenix, we pride ourselves on our commitment to resolving intricate technological hurdles through thorough planning and consultancy services. Rest assured, every project we undertake strictly adheres to the relevant standards and specifications."
          />
          <ul className="about-list">
            {features.map((feature, i) => (
              <Reveal as="li" key={feature} delay={i + 1}>
                <span className="check">
                  <CheckIcon />
                </span>
                {feature}
              </Reveal>
            ))}
          </ul>
          <Reveal delay={3}>
            <Link href="/contact" className="btn btn-grad">
              Request Consultation
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./Icons";

interface CtaSectionProps {
  title: React.ReactNode;
  desc?: string;
}

export default function CtaSection({ title, desc }: CtaSectionProps) {
  return (
    <section className="section sl-cta">
      <div className="container">
        <Reveal>
          <div className="sl-cta-box">
            <div>
              <h2>{title}</h2>
              {desc && <p className="sl-cta-desc">{desc}</p>}
              <p>
                Call +91 83559 58119 · Email sales@cgcein.com · C 1405 Kailash Business
                Park, Vikhroli (W), Mumbai
              </p>
            </div>
            <Link href="/contact" className="btn btn-light">
              Get Free Consultation
              <ArrowRightIcon />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const partners = Array.from({ length: 29 }, (_, i) => i + 1);

export default function Partners() {
  return (
    <section className="section partners">
      <div className="container">
        <SectionHeading
          center
          title={
            <>
              Our <span className="grad">Partnerships & Alliances</span>
            </>
          }
          desc="Together with world-class technology partners, we deliver best-in-class IT solutions."
        />
        <Reveal className="partner-strip">
          {partners.map((n) => (
            <div className="partner-item" key={n}>
              <Image
                src={`/images/coregenix/partner-${n}.jpg`}
                alt={`Technology partner ${n}`}
                width={200}
                height={80}
                sizes="(max-width: 1100px) 25vw, 16vw"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

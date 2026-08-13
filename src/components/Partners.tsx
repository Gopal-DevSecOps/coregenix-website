import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const partnerBrands = [
  { name: "Barracuda Networks", logo: "/images/coregenix/partners/barracuda.png" },
  { name: "Cloudflare", logo: "/images/coregenix/partners/cloudflare.png" },
  { name: "Check Point", logo: "/images/coregenix/partners/checkpoint.png" },
  { name: "Trend Micro", logo: "/images/coregenix/partners/trendmicro.png" },
  { name: "SentinelOne", logo: "/images/coregenix/partners/sentinelone.png" },
];

const corePartners = [
  { name: "Partner", logo: "/images/coregenix/partners-core/p01.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p02.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p03.jpg" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p04.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p05.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p06.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p07.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p08.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p09.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p10.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p11.jpeg" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p12.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p13.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p14.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p15.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p16.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p17.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p18.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p19.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p20.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p21.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p22.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p23.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p24.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p25.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p26.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p27.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p28.png" },
  { name: "Partner", logo: "/images/coregenix/partners-core/p29.png" },
];

export default function Partners() {
  return (
    <section className="section partners">
      <div className="container">
        <SectionHeading
          center
          title={
            <>
              Our <span className="grad">Technology Partners</span>
            </>
          }
          desc="Backed by world-class security and cloud technology partners to deliver best-in-class solutions."
        />
        <Reveal className="partner-strip">
          {[...partnerBrands, ...corePartners].map((p) => (
            <div className="partner-item" key={p.logo}>
              <Image
                src={p.logo}
                alt={`${p.name} partner logo`}
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

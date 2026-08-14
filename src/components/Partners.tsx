import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const partnerLogos = [
  { name: "Barracuda Networks", logo: "/images/coregenix/partners/barracuda.png", width: 428, height: 118 },
  { name: "Cloudflare", logo: "/images/coregenix/partners/cloudflare.png", width: 390, height: 129 },
  { name: "Check Point", logo: "/images/coregenix/partners/checkpoint.png", width: 325, height: 155 },
  { name: "Trend Micro", logo: "/images/coregenix/partners/trendmicro.png", width: 301, height: 101 },
  { name: "SentinelOne", logo: "/images/coregenix/partners/sentinelone.png", width: 300, height: 168 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p01.png", width: 300, height: 61 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p02.png", width: 300, height: 58 },
  { name: "Fortinet", logo: "/images/coregenix/partners-core/p03.jpg", width: 300, height: 234 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p04.png", width: 116, height: 155 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p05.png", width: 300, height: 69 },
  { name: "Sophos", logo: "/images/coregenix/partners-core/p07.png", width: 300, height: 158 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p08.png", width: 180, height: 113 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p09.png", width: 300, height: 54 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p10.png", width: 160, height: 51 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p12.png", width: 160, height: 107 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p13.png", width: 172, height: 48 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p14.png", width: 275, height: 58 },
  { name: "Trustify", logo: "/images/coregenix/partners-core/p16.png", width: 300, height: 103 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p17.png", width: 225, height: 225 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p19.png", width: 300, height: 227 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p20.png", width: 177, height: 58 },
  { name: "Lenovo", logo: "/images/coregenix/partners-core/p21.png", width: 225, height: 68 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p23.png", width: 275, height: 80 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p24.png", width: 125, height: 125 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p25.png", width: 300, height: 60 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p26.png", width: 300, height: 107 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p27.png", width: 300, height: 158 },
  { name: "Partner", logo: "/images/coregenix/partners-core/p28.png", width: 207, height: 124 },
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
          {partnerLogos.map((p) => (
            <div className="partner-item" key={p.logo}>
              <Image
                src={p.logo}
                alt={`${p.name} partner logo`}
                width={p.width}
                height={p.height}
                sizes="(max-width: 1100px) 25vw, 16vw"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

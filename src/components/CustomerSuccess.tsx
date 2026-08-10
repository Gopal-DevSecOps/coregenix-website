"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const justifiedImages = [
  "download.jpeg",
  "Picture2-1.png",
  "Picture1.png",
  "image-13.png",
  "Picture4.png",
  "Picture9.png",
  "Picture5.png",
  "Picture7.png",
  "image-14.png",
  "image-15.png",
  "Picture8.png",
  "Picture10.png",
  "Picture3.jpg",
  "image-11.png",
  "image-12.png",
  "image-10.png",
  "Picture6.png",
];

const masonryImages = [
  "image-59-1-e1743753075795.png",
  "image-68.png",
  "image-67.png",
  "image-69.png",
  "image-73.png",
  "image-58.png",
  "image-70.png",
  "11.png",
  "dovetail-india-logo.jpg",
  "image-62.png",
  "image-64.png",
  "Home-19-768x569.png",
  "12-1.png",
  "download-3.png",
  "image-63.png",
  "image-72.png",
  "image-61.png",
  "image-66.png",
  "12.jpg",
  "image-65.png",
  "image-71.png",
];

export default function CustomerSuccess() {
  return (
    <section className="cs-section" aria-label="Customer success gallery">
      <div className="container">
        <Reveal className="cs-heading">
          <span className="cs-tag">Our Happy Clients</span>
          <h2>
            Customer Success is <em>our Mission</em>
          </h2>
        </Reveal>

        <div className="cs-marquee cs-marquee--justified">
          <div className="cs-track" aria-hidden="true">
            {justifiedImages.map((name, i) => (
              <div className="cs-item" key={`ja-${i}`}>
                <Image
                  src={`/images/coregenix/clients/${name}`}
                  alt=""
                  width={300}
                  height={200}
                  sizes="(max-width: 768px) 48vw, 18vw"
                  className="cs-img"
                />
              </div>
            ))}
          </div>
          <div className="cs-track">
            {justifiedImages.map((name, i) => (
              <div className="cs-item" key={`jb-${i}`}>
                <Image
                  src={`/images/coregenix/clients/${name}`}
                  alt={`Client showcase ${i + 1}`}
                  width={300}
                  height={200}
                  sizes="(max-width: 768px) 48vw, 18vw"
                  className="cs-img"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="cs-marquee cs-marquee--masonry">
          <div className="cs-track" aria-hidden="true">
            {masonryImages.map((name, i) => (
              <div className="cs-item" key={`ma-${i}`}>
                <Image
                  src={`/images/coregenix/clients/${name}`}
                  alt=""
                  width={220}
                  height={160}
                  sizes="(max-width: 768px) 48vw, 15vw"
                  className="cs-img"
                />
              </div>
            ))}
          </div>
          <div className="cs-track">
            {masonryImages.map((name, i) => (
              <div className="cs-item" key={`mb-${i}`}>
                <Image
                  src={`/images/coregenix/clients/${name}`}
                  alt={`Client showcase ${justifiedImages.length + i + 1}`}
                  width={220}
                  height={160}
                  sizes="(max-width: 768px) 48vw, 15vw"
                  className="cs-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

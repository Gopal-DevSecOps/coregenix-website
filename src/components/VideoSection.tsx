"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const videoUrl =
    "https://coregenix.in/wp-content/uploads/2024/01/Empowering-Your-Business-with-IT-Solutions-Routing-IT-Solutions-for-Innovative-Business-Results-and-Technology-Expertise-Applied-to-Diverse-Environments.mp4";

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.muted = true;
    video.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
  }, []);

  return (
    <section ref={sectionRef} className="section video-section">
      <div className="container">
        <div className="video-content">
          <h2>
            Empowering Your Business With <span className="grad">IT Solutions</span>
          </h2>
          <p>
            See how our IT expertise helps move your business forward with innovative solutions
            and technology.
          </p>

          <div className="video-frame">
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

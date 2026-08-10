"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneIcon } from "./Icons";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);

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
    video.muted = muted;
  }, [muted]);

  const toggleMute = () => {
    setMuted((m) => !m);
  };

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

          <div className="video-actions">
            <button
              className="btn btn-grad btn-sound"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5 6 9H2v6h4l5 4V5z" />
                    <path d="m23 9-6 6M17 9l6 6" />
                  </svg>
                  Unmute
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5 6 9H2v6h4l5 4V5z" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                  Mute
                </>
              )}
            </button>
            <a href="#contact" className="btn btn-light">
              Get Free Consultation
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

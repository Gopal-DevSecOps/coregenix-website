import { ImageResponse } from "next/og";

export const alt = "CoreGenix — IT Infrastructure & Cyber Security Company in Mumbai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 60,
          background: "linear-gradient(135deg, #0d1b2a 0%, #1b2838 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg, #f26b21 0%, #f26b21 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 28,
              fontWeight: 800,
              fontFamily: "sans-serif",
            }}
          >
            CG
          </div>
          <div style={{ color: "#f2a25c", fontSize: 28, fontWeight: 700, fontFamily: "sans-serif" }}>
            CoreGenix
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ color: "#ffffff", fontSize: 56, fontWeight: 800, fontFamily: "sans-serif", lineHeight: 1.1 }}>
            IT Infrastructure & Cyber Security
          </div>
          <div style={{ color: "#f2a25c", fontSize: 32, fontWeight: 600, fontFamily: "sans-serif" }}>
            Trusted IT partner for 18+ years · Mumbai · Pan-India
          </div>
        </div>

        <div style={{ color: "#9fb0c0", fontSize: 22, fontFamily: "sans-serif" }}>
          coregenix.com · +91 83559 58119 · sales@cgcein.com
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #f26b21 0%, #0d1b2a 100%)",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 34,
            fontWeight: 800,
            fontFamily: "sans-serif",
          }}
        >
          CG
        </span>
      </div>
    ),
    { ...size }
  );
}

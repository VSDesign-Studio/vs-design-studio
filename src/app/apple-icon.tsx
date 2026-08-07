import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #070B16 0%, #101B35 55%, #EA580C 100%)",
          borderRadius: "38px",
          border: "5px solid rgba(255,255,255,0.14)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: "#FFFFFF",
            fontSize: "82px",
            fontWeight: 900,
            letterSpacing: "-6px",
          }}
        >
          VS
          <span
            style={{
              color: "#F97316",
              marginLeft: "3px",
            }}
          >
            .
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
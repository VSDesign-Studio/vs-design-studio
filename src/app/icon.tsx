import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

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
          background:
            "linear-gradient(135deg, #070B16 0%, #101B35 55%, #EA580C 100%)",
          borderRadius: "16px",
          border: "2px solid rgba(255,255,255,0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: "#FFFFFF",
            fontSize: "29px",
            fontWeight: 900,
            letterSpacing: "-2px",
          }}
        >
          VS
          <span
            style={{
              color: "#F97316",
              marginLeft: "1px",
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
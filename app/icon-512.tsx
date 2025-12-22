import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon512() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 340,
          background: "linear-gradient(135deg, #0048ff 0%, #57ff8f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          borderRadius: "85px",
        }}
      >
        C
      </div>
    ),
    {
      ...size,
    }
  );
}

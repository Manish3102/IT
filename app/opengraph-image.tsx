import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Techscalify — IT Services, Software & Digital Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const mark = await readFile(join(process.cwd(), "public/logo-mark.png"));
  const src = `data:image/png;base64,${mark.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 15% 10%, #4e2484 0%, #0c0718 55%), #0c0718",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={84} height={84} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>TECH SCALIFY</span>
            <span style={{ fontSize: 18, letterSpacing: 8, color: "rgba(255,255,255,0.6)" }}>IT SERVICES</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2, maxWidth: 950 }}>
            Transforming Ideas Into Powerful Digital Solutions
          </span>
          <span style={{ marginTop: 24, fontSize: 26, color: "#86cbf4" }}>
            Software · Web · Mobile Apps · Cloud · Digital Marketing · SEO
          </span>
        </div>
      </div>
    ),
    size,
  );
}

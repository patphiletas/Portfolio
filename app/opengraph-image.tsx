import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Patrice Philétas — Développeur full stack et graphiste éditorial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const portrait = await readFile(join(process.cwd(), "public/images/patrice-philetas.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#fafafa",
          padding: "0 80px",
          gap: 64,
        }}
      >
        <img
          src={portraitSrc}
          alt=""
          width={300}
          height={320}
          style={{ borderRadius: 999, objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#2563eb" }}>
            Alternance dès maintenant
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, color: "#0a0a0b", lineHeight: 1.05 }}>
            Patrice Philétas
          </div>
          <div style={{ fontSize: 36, color: "#3f3f46", lineHeight: 1.3, maxWidth: 680 }}>
            Développeur full stack · 20 ans de graphisme éditorial
          </div>
          <div style={{ fontSize: 24, color: "#71717a" }}>Next.js · TypeScript · PostgreSQL</div>
        </div>
      </div>
    ),
    size,
  );
}

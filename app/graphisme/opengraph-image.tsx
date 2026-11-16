import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image de partage de /graphisme (LinkedIn, messageries…). Sans elle, LinkedIn prenait
// la première image de la page (la couverture « Éco-théologie »). Pièces choisies hors
// édition religieuse : affiche, illustration de voyage, planche scientifique.
export const alt = "Portfolio graphisme — Patrice Philétas, graphiste-maquettiste";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PIECES = [
  { id: "k_hiphop", width: 220, height: 314 },
  { id: "i_taxi", width: 260, height: 222 },
  { id: "sci_04", width: 260, height: 128 },
];

async function dataUri(id: string) {
  const fichier = await readFile(join(process.cwd(), "public/images/graphisme/thumb", `${id}.jpg`));
  return `data:image/jpeg;base64,${fichier.toString("base64")}`;
}

export default async function Image() {
  const [affiche, taxi, planche] = await Promise.all(PIECES.map((p) => dataUri(p.id)));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fafafa",
          padding: "0 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 520 }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#2563eb" }}>
            Portfolio graphisme
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#0a0a0b", lineHeight: 1.05 }}>
            Patrice Philétas
          </div>
          <div style={{ fontSize: 34, color: "#3f3f46", lineHeight: 1.3 }}>
            Graphiste-maquettiste · PAO · Fabrication
          </div>
          <div style={{ fontSize: 24, color: "#71717a" }}>20 ans · plus de 700 ouvrages</div>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <img src={affiche} alt="" width={PIECES[0].width} height={PIECES[0].height} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <img src={taxi} alt="" width={PIECES[1].width} height={PIECES[1].height} />
            <img src={planche} alt="" width={PIECES[2].width} height={PIECES[2].height} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}

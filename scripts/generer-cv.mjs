// Génère les CV en PDF (A4, une page, liens cliquables) à partir de cv/*.html.
//
//   npm run cv
//
// cv/cv.html           → public/cv-patrice-philetas.pdf            (CV développeur, accueil)
// cv/cv-graphisme.html → public/cv-patrice-philetas-graphisme.pdf  (CV graphiste, page /graphisme)
// Chrome, déjà installé sur le Mac, fait l'export en headless.

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const CHROME = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const CV = [
  ["cv/cv.html", "public/cv-patrice-philetas.pdf"],
  ["cv/cv-graphisme.html", "public/cv-patrice-philetas-graphisme.pdf"],
];

if (!existsSync(CHROME)) {
  console.error(`Chrome introuvable : ${CHROME} (définir CHROME_PATH)`);
  process.exit(1);
}

let erreur = false;
for (const [source, sortie] of CV) {
  const profil = mkdtempSync(join(tmpdir(), "cv-"));
  try {
    execFileSync(
      CHROME,
      [
        "--headless=new",
        "--disable-gpu",
        "--allow-file-access-from-files",
        `--user-data-dir=${profil}`,
        "--no-pdf-header-footer",
        "--virtual-time-budget=4000",
        `--print-to-pdf=${resolve(sortie)}`,
        pathToFileURL(resolve(source)).href,
      ],
      { stdio: "ignore" }
    );
  } finally {
    rmSync(profil, { recursive: true, force: true });
  }

  // Contrôle : chaque CV doit tenir sur une seule page
  const pages = (readFileSync(sortie, "latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
  console.log(`${source} → ${sortie} (${pages} page${pages > 1 ? "s" : ""})`);
  if (pages !== 1) {
    console.error(`Attention : ${source} dépasse une page, raccourcir son contenu.`);
    erreur = true;
  }
}
process.exit(erreur ? 1 : 0);

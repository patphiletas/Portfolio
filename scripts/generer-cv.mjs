// Génère le CV en PDF (A4, une page, liens cliquables) à partir de cv/cv.html.
//
//   npm run cv
//
// Le PDF remplace public/cv-patrice-philetas.pdf (celui que le site propose au
// téléchargement). Chrome, déjà installé sur le Mac, fait l'export en headless.

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const CHROME = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const SOURCE = resolve("cv/cv.html");
const SORTIE = resolve("public/cv-patrice-philetas.pdf");

if (!existsSync(CHROME)) {
  console.error(`Chrome introuvable : ${CHROME} (définir CHROME_PATH)`);
  process.exit(1);
}

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
      `--print-to-pdf=${SORTIE}`,
      pathToFileURL(SOURCE).href,
    ],
    { stdio: "ignore" }
  );
} finally {
  rmSync(profil, { recursive: true, force: true });
}

// Contrôle : le CV doit tenir sur une seule page
const pages = (readFileSync(SORTIE, "latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
console.log(`CV généré : public/cv-patrice-philetas.pdf (${pages} page${pages > 1 ? "s" : ""})`);
if (pages !== 1) {
  console.error("Attention : le CV dépasse une page, raccourcir le contenu de cv/cv.html.");
  process.exit(1);
}

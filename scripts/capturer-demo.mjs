// Filme une démo muette de quelques secondes d'un projet et l'enregistre en WebM.
//
//   node scripts/capturer-demo.mjs <projet>        (on-sort, alternative, kpratik, real-book)
//   node scripts/capturer-demo.mjs tous
//
// Aucun outil vidéo n'est nécessaire : Chrome (installé sur le Mac) est piloté
// en arrière-plan par le protocole DevTools. Il joue le scénario du projet sur
// le site en ligne, enregistre l'écran image par image (Page.startScreencast),
// puis rassemble les images en vidéo WebM (VP9) dans un <canvas> avec
// MediaRecorder. Les longues attentes (réseau, IA) sont raccourcies au montage.
// Un faux curseur est dessiné dans la page (le mode headless n'affiche pas le vrai).

import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const CHROME = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const LARGEUR = 1280;
const HAUTEUR = 800;
const VIDEO_LARGEUR = 960; // la vignette du portfolio fait moins de 800 px de large
const VIDEO_HAUTEUR = 600;
const ATTENTE_MAX_MS = 700; // au montage, aucune image ne reste plus longtemps (attentes réseau raccourcies)
const PORT = 9334;

const pause = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------------------------------------------------------
// Scénarios : chacun reçoit des outils (souris, attente…) et joue la démo.

const SCENARIOS = {
  "on-sort": {
    url: "https://adataviz-patphiletas.vercel.app/",
    pret: `document.querySelectorAll(".card").length > 0`,
    async jouer({ cliquerSur, attendre, pause }) {
      await pause(700);
      await cliquerSur(`.filtre-quand[data-quand="weekend"]`);
      await attendre(`!document.querySelector(".etat-chargement") && document.querySelector(".card")`);
      await pause(900);
      await cliquerSur(`.filtre-gratuit`);
      await attendre(`!document.querySelector(".etat-chargement") && document.querySelector(".card")`);
      await pause(1300);
      await cliquerSur(`.card-visuel`, { index: 1, survol: 1100 });
      await pause(2200);
    },
  },

  alternative: {
    url: "https://demo-day-wine.vercel.app/",
    pret: `document.querySelectorAll(".publication-card-cover img").length > 0`,
    async jouer({ cliquerSur, defiler, attendre, pause }) {
      await pause(900);
      await defiler(560);
      await pause(1200);
      await cliquerSur(`.publication-card-cover`, { index: 1, survol: 900 });
      await attendre(`location.pathname.startsWith("/publications/")`);
      await pause(1800);
      await defiler(520);
      await pause(1200);
      await defiler(1100);
      await pause(1800);
    },
  },

  kpratik: {
    url: "https://kpratik.vercel.app/",
    pret: `document.querySelector('input[placeholder="stripe.com"]') !== null`,
    async jouer({ cliquerSur, defiler, attendre, pause }) {
      await pause(800);
      await cliquerSur(`button[title="stripe.com"]`);
      await pause(500);
      await cliquerSur(`button[type="submit"]`);
      await attendre(`document.body.innerText.includes("/100")`, 40000);
      await pause(1200);
      await defiler(520);
      await pause(1500);
      await defiler(1100);
      await pause(1800);
    },
  },

  "real-book": {
    url: "https://real-book-patphiletas.vercel.app/",
    pret: `document.querySelectorAll("ul button").length > 50`,
    async jouer({ cliquerSur, attendre, pause, evaluer }) {
      await pause(800);
      await cliquerSur(`[aria-label="Filtrer par tonalité"] button`, { texte: "Bb" });
      await pause(900);
      await cliquerSur(`ul button`, { texte: "Blue Monk" });
      await attendre(`document.querySelector(".react-pdf__Page__canvas")`, 20000);
      await pause(1500);
      await cliquerSur(`[aria-label="Ajouter aux favoris"]`);
      await pause(900);
      await cliquerSur(`button[aria-pressed]`, { texte: "Mode scène" });
      await pause(2400);
      await evaluer(`localStorage.clear()`);
    },
  },
};

// ---------------------------------------------------------------
// Moteur commun

async function capturer(nom) {
  const scenario = SCENARIOS[nom];
  if (!scenario) throw new Error(`Projet inconnu : ${nom} (${Object.keys(SCENARIOS).join(", ")})`);
  const sortie = `public/videos/${nom}.webm`;

  const profil = mkdtempSync(join(tmpdir(), `demo-${nom}-`));
  const chrome = spawn(CHROME, [
    "--headless=new",
    "--hide-scrollbars",
    "--mute-audio",
    "--force-color-profile=srgb",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profil}`,
    `--window-size=${LARGEUR},${HAUTEUR}`,
    "about:blank",
  ]);

  let url = null;
  for (let i = 0; i < 40 && !url; i++) {
    try {
      const cibles = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
      url = cibles.find((c) => c.type === "page")?.webSocketDebuggerUrl ?? null;
    } catch {
      /* Chrome démarre encore */
    }
    if (!url) await pause(250);
  }
  if (!url) throw new Error("Chrome ne répond pas sur le port DevTools");

  const ws = new WebSocket(url);
  await new Promise((r) => (ws.onopen = r));
  let prochainId = 0;
  const enAttente = new Map();
  const ecouteurs = new Map();
  ws.onmessage = ({ data }) => {
    const msg = JSON.parse(data);
    if (msg.id && enAttente.has(msg.id)) {
      const { resoudre, rejeter } = enAttente.get(msg.id);
      enAttente.delete(msg.id);
      if (msg.error) rejeter(new Error(msg.error.message));
      else resoudre(msg.result);
    } else if (msg.method && ecouteurs.has(msg.method)) {
      ecouteurs.get(msg.method)(msg.params);
    }
  };
  const envoyer = (method, params = {}) =>
    new Promise((resoudre, rejeter) => {
      const id = ++prochainId;
      enAttente.set(id, { resoudre, rejeter });
      ws.send(JSON.stringify({ id, method, params }));
    });
  const evaluer = async (expression) => {
    const r = await envoyer("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (r.exceptionDetails) throw new Error(`${r.exceptionDetails.text} — ${expression.slice(0, 80)}`);
    return r.result.value;
  };
  const attendre = (condition, delai = 15000) =>
    evaluer(`new Promise((ok, ko) => { const debut = Date.now(); const t = setInterval(() => {
      let vrai = false; try { vrai = Boolean(${condition}); } catch {}
      if (vrai) { clearInterval(t); ok(true); } else if (Date.now() - debut > ${delai}) { clearInterval(t); ko(new Error("délai dépassé")); }
    }, 100); })`);

  // Préparation : taille d'écran, faux curseur, chargement
  await envoyer("Page.enable");
  await envoyer("Emulation.setDeviceMetricsOverride", { width: LARGEUR, height: HAUTEUR, deviceScaleFactor: 1, mobile: false });
  await envoyer("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: "light" }] });
  await envoyer("Page.addScriptToEvaluateOnNewDocument", {
    source: `
      addEventListener("DOMContentLoaded", () => {
        const c = document.createElement("div");
        c.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M4 2l15 11-6.5 1.2L16 21l-3 1.3-3.4-6.6L4 20z" fill="#1a1714" stroke="#fff" stroke-width="1.5"/></svg>';
        Object.assign(c.style, { position: "fixed", left: (window.__curseur?.x ?? 900) + "px", top: (window.__curseur?.y ?? 120) + "px", zIndex: 2147483647, pointerEvents: "none" });
        document.documentElement.appendChild(c);
        addEventListener("mousemove", (e) => { c.style.left = e.clientX + "px"; c.style.top = e.clientY + "px"; }, true);
      });
    `,
  });
  await envoyer("Page.navigate", { url: scenario.url });
  await pause(1500);
  await attendre(`(${scenario.pret}) && document.fonts.status === "loaded"`, 30000);
  await pause(1500);

  // Souris : déplacements progressifs et vrais clics (pour les états :hover)
  let souris = { x: 900, y: 120 };
  async function deplacer(x, y, duree = 600) {
    const etapes = Math.max(6, Math.round(duree / 16));
    const depart = { ...souris };
    for (let i = 1; i <= etapes; i++) {
      const t = i / etapes;
      const e = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      souris = { x: depart.x + (x - depart.x) * e, y: depart.y + (y - depart.y) * e };
      await envoyer("Input.dispatchMouseEvent", { type: "mouseMoved", x: souris.x, y: souris.y });
      await pause(duree / etapes);
    }
  }
  async function cliquer() {
    for (const type of ["mousePressed", "mouseReleased"]) {
      await envoyer("Input.dispatchMouseEvent", { type, x: souris.x, y: souris.y, button: "left", clickCount: 1 });
    }
  }
  async function cliquerSur(selecteur, { index = 0, texte = null, survol = 200 } = {}) {
    const p = await evaluer(`(() => {
      let els = [...document.querySelectorAll(${JSON.stringify(selecteur)})];
      ${texte ? `els = els.filter((e) => e.textContent.includes(${JSON.stringify(texte)}));` : ""}
      const el = els[${index}];
      if (!el) return null;
      el.scrollIntoView({ block: "nearest" });
      const r = el.getBoundingClientRect();
      return { x: r.x + r.width / 2, y: Math.min(r.y + r.height / 2, ${HAUTEUR} - 40) };
    })()`);
    if (!p) throw new Error(`Élément introuvable : ${selecteur}${texte ? ` « ${texte} »` : ""}`);
    await deplacer(p.x, p.y);
    await pause(survol);
    await cliquer();
  }
  async function defiler(y) {
    await evaluer(`window.scrollTo({ top: ${y}, behavior: "smooth" }); true`);
    await pause(900);
  }

  // Enregistrement
  const images = [];
  ecouteurs.set("Page.screencastFrame", ({ data, metadata, sessionId }) => {
    images.push({ data, t: metadata.timestamp });
    envoyer("Page.screencastFrameAck", { sessionId });
  });
  await envoyer("Page.startScreencast", { format: "jpeg", quality: 88, maxWidth: LARGEUR, maxHeight: HAUTEUR, everyNthFrame: 1 });
  await deplacer(910, 130, 50); // force une première image
  await scenario.jouer({ cliquerSur, defiler, attendre, pause, evaluer });
  // Chrome n'envoie une image que si l'écran change : un dernier petit mouvement
  // du curseur garantit que l'état final (après transitions) est bien capté.
  await deplacer(souris.x + 60, souris.y + 30, 900);
  await pause(300);
  await envoyer("Page.stopScreencast");
  await pause(200);

  // Montage : temps réel, sauf les attentes trop longues, ramenées à ATTENTE_MAX_MS
  let temps = 0;
  const minutage = images.map((img, i) => {
    if (i > 0) temps += Math.min((img.t - images[i - 1].t) * 1000, ATTENTE_MAX_MS);
    return temps;
  });
  await envoyer("Page.navigate", { url: "about:blank" });
  await pause(500);
  await evaluer(`window.__images = []; true`);
  for (let i = 0; i < images.length; i++) {
    await evaluer(`window.__images.push({ src: "data:image/jpeg;base64,${images[i].data}", t: ${minutage[i]} }); true`);
  }
  const base64 = await evaluer(`(async () => {
    const W = ${VIDEO_LARGEUR}, H = ${VIDEO_HAUTEUR};
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");
    const imgs = await Promise.all(window.__images.map(({ src }) => new Promise((ok) => { const i = new Image(); i.onload = () => ok(i); i.src = src; })));
    ctx.drawImage(imgs[0], 0, 0, W, H);
    const rec = new MediaRecorder(canvas.captureStream(30), { mimeType: "video/webm;codecs=vp9", videoBitsPerSecond: 1200000 });
    const morceaux = [];
    rec.ondataavailable = (e) => morceaux.push(e.data);
    const fini = new Promise((ok) => (rec.onstop = ok));
    rec.start();
    const debut = performance.now();
    for (let i = 0; i < imgs.length; i++) {
      const attente = window.__images[i].t - (performance.now() - debut);
      if (attente > 0) await new Promise((r) => setTimeout(r, attente));
      ctx.drawImage(imgs[i], 0, 0, W, H);
    }
    await new Promise((r) => setTimeout(r, 300));
    rec.stop();
    await fini;
    const octets = new Uint8Array(await new Blob(morceaux, { type: "video/webm" }).arrayBuffer());
    let binaire = "";
    for (let i = 0; i < octets.length; i += 0x8000) binaire += String.fromCharCode(...octets.subarray(i, i + 0x8000));
    return btoa(binaire);
  })()`);

  writeFileSync(sortie, Buffer.from(base64, "base64"));
  console.log(`${nom} : ${images.length} images, ${(temps / 1000).toFixed(1)} s → ${sortie} (${Math.round(Buffer.byteLength(base64, "base64") / 1024)} Ko)`);

  ws.close();
  chrome.kill();
  await pause(500);
  rmSync(profil, { recursive: true, force: true });
}

const demande = process.argv[2];
if (!demande) {
  console.error(`Usage : node scripts/capturer-demo.mjs <${Object.keys(SCENARIOS).join("|")}|tous>`);
  process.exit(1);
}
for (const nom of demande === "tous" ? Object.keys(SCENARIOS) : [demande]) {
  await capturer(nom);
}
process.exit(0);

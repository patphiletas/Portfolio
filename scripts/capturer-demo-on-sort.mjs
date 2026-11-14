// Capture une démo de quelques secondes de « On sort ? » et l'enregistre en WebM.
//
//   node scripts/capturer-demo-on-sort.mjs [sortie.webm]
//
// Aucun outil vidéo n'est nécessaire : Chrome (installé sur le Mac) est piloté
// en arrière-plan par le protocole DevTools. Il joue le scénario sur le site en
// ligne, enregistre l'écran image par image (Page.startScreencast), puis
// rassemble les images en vidéo WebM (VP9) dans un <canvas> avec MediaRecorder.
//
// Scénario : clic sur « Ce week-end », puis « Gratuit », survol d'une image,
// ouverture de l'encart « Infos pratiques ». Un faux curseur est dessiné dans
// la page (le mode headless n'affiche pas le vrai).

import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const SITE = "https://adataviz-patphiletas.vercel.app/";
const SORTIE = process.argv[2] ?? "public/videos/on-sort.webm";
const CHROME = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const LARGEUR = 1280;
const HAUTEUR = 800;
const VIDEO_LARGEUR = 960; // la carte du portfolio fait moins de 600 px de large
const VIDEO_HAUTEUR = 600;
const PORT = 9334;

const pause = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------------------------------------------------------
// Lancement de Chrome et connexion DevTools

const profil = mkdtempSync(join(tmpdir(), "demo-on-sort-"));
const chrome = spawn(CHROME, [
  "--headless=new",
  "--hide-scrollbars",
  "--mute-audio",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profil}`,
  `--window-size=${LARGEUR},${HAUTEUR}`,
  "about:blank",
]);

async function connecter() {
  for (let i = 0; i < 40; i++) {
    try {
      const cibles = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
      const page = cibles.find((c) => c.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      /* Chrome démarre encore */
    }
    await pause(250);
  }
  throw new Error("Chrome ne répond pas sur le port DevTools");
}

const ws = new WebSocket(await connecter());
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
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text);
  return r.result.value;
};

// ---------------------------------------------------------------
// Préparation : taille d'écran, faux curseur, chargement du site

await envoyer("Page.enable");
await envoyer("Emulation.setDeviceMetricsOverride", { width: LARGEUR, height: HAUTEUR, deviceScaleFactor: 1, mobile: false });
await envoyer("Page.addScriptToEvaluateOnNewDocument", {
  source: `
    addEventListener("DOMContentLoaded", () => {
      const c = document.createElement("div");
      c.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M4 2l15 11-6.5 1.2L16 21l-3 1.3-3.4-6.6L4 20z" fill="#1a1714" stroke="#fff" stroke-width="1.5"/></svg>';
      Object.assign(c.style, { position: "fixed", left: "-40px", top: "-40px", zIndex: 2147483647, pointerEvents: "none" });
      document.documentElement.appendChild(c);
      addEventListener("mousemove", (e) => { c.style.left = e.clientX + "px"; c.style.top = e.clientY + "px"; }, true);
    });
  `,
});
await envoyer("Page.navigate", { url: SITE });
await pause(1500);
await evaluer(`new Promise((ok) => { const t = setInterval(() => { if (document.querySelectorAll(".card").length && document.fonts.status === "loaded") { clearInterval(t); ok(); } }, 100); })`);
await pause(1500); // images de la première rangée

// ---------------------------------------------------------------
// Souris : déplacements progressifs, clics réels (pour les états :hover)

let souris = { x: 900, y: 120 };
async function deplacer(x, y, duree = 450) {
  const etapes = Math.max(6, Math.round(duree / 16));
  const depart = { ...souris };
  for (let i = 1; i <= etapes; i++) {
    const t = i / etapes;
    const e = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2; // accélération douce
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
async function centre(selecteur) {
  return evaluer(`(() => { const r = document.querySelector(${JSON.stringify(selecteur)}).getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; })()`);
}
const attendreCartes = () =>
  evaluer(`new Promise((ok) => { const t = setInterval(() => { if (!document.querySelector(".etat-chargement") && document.querySelector(".card")) { clearInterval(t); ok(); } }, 50); })`);

// ---------------------------------------------------------------
// Enregistrement

const images = [];
ecouteurs.set("Page.screencastFrame", ({ data, metadata, sessionId }) => {
  images.push({ data, t: metadata.timestamp });
  envoyer("Page.screencastFrameAck", { sessionId });
});
await envoyer("Page.startScreencast", { format: "jpeg", quality: 88, maxWidth: LARGEUR, maxHeight: HAUTEUR, everyNthFrame: 1 });
await deplacer(910, 130, 50); // force une première image

await pause(700);
let p = await centre('.filtre-quand[data-quand="weekend"]');
await deplacer(p.x, p.y, 700);
await pause(200);
await cliquer();
await attendreCartes();
await pause(900);

p = await centre(".filtre-gratuit");
await deplacer(p.x, p.y, 600);
await pause(150);
await cliquer();
await attendreCartes();
await pause(1300); // laisse les images apparaître

p = await evaluer(`(() => { const r = document.querySelectorAll(".card-visuel")[1].getBoundingClientRect(); return { x: r.x + r.width / 2, y: Math.min(r.y + r.height / 2, ${HAUTEUR} - 60) }; })()`);
await deplacer(p.x, p.y, 700);
await pause(1100); // zoom de survol
await cliquer();
await pause(2200); // encart ouvert

await envoyer("Page.stopScreencast");
await pause(200);
console.log(`${images.length} images capturées`);

// ---------------------------------------------------------------
// Montage : les images sont rejouées à leur rythme réel dans un <canvas>
// enregistré par MediaRecorder (WebM VP9).

await envoyer("Page.navigate", { url: "about:blank" });
await pause(500);
await evaluer(`window.__images = []; true`);
for (const { data, t } of images) {
  await evaluer(`window.__images.push({ src: "data:image/jpeg;base64,${data}", t: ${t} }); true`);
}
const base64 = await evaluer(`(async () => {
  const W = ${VIDEO_LARGEUR}, H = ${VIDEO_HAUTEUR};
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");
  const imgs = await Promise.all(window.__images.map(({ src }) => new Promise((ok) => { const i = new Image(); i.onload = () => ok(i); i.src = src; })));
  ctx.drawImage(imgs[0], 0, 0, W, H);
  const flux = canvas.captureStream(30);
  const rec = new MediaRecorder(flux, { mimeType: "video/webm;codecs=vp9", videoBitsPerSecond: 1200000 });
  const morceaux = [];
  rec.ondataavailable = (e) => morceaux.push(e.data);
  const fini = new Promise((ok) => (rec.onstop = ok));
  rec.start();
  const t0 = window.__images[0].t;
  const debut = performance.now();
  for (let i = 0; i < imgs.length; i++) {
    const attente = (window.__images[i].t - t0) * 1000 - (performance.now() - debut);
    if (attente > 0) await new Promise((r) => setTimeout(r, attente));
    ctx.drawImage(imgs[i], 0, 0, W, H);
  }
  await new Promise((r) => setTimeout(r, 300));
  rec.stop();
  await fini;
  const blob = new Blob(morceaux, { type: "video/webm" });
  const octets = new Uint8Array(await blob.arrayBuffer());
  let binaire = "";
  for (let i = 0; i < octets.length; i += 0x8000) binaire += String.fromCharCode(...octets.subarray(i, i + 0x8000));
  return btoa(binaire);
})()`);

writeFileSync(SORTIE, Buffer.from(base64, "base64"));
console.log(`Vidéo écrite : ${SORTIE} (${Math.round(Buffer.byteLength(base64, "base64") / 1024)} Ko)`);

ws.close();
chrome.kill();
await pause(300);
rmSync(profil, { recursive: true, force: true });
process.exit(0);

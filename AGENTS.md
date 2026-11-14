<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Portfolio : conventions

- Répondre et documenter en français. Mettre à jour le README à chaque changement visible.
- Contenu (projets, compétences, clients) : `lib/data.ts`. Accueil : `app/components/Cover.tsx`.
- Disponibilité : « dès que possible, prochaine rentrée janvier 2027 » ; expérience : « 20 ans ». Garder ces formulations cohérentes partout (Navbar, About, Contact, README, métadonnées).
- Section Projets (`app/components/Projects.tsx`) : « sommaire de revue » choisi par Patrice le 2026-11-14 — pas de cartes encadrées, de boutons ni de pastilles (jugés « trop carte, trop grossier ») ; filets fins, numéros, titres serif, stack en petites capitales séparées par « · », liens soulignés.
- Page `/graphisme` : même règle « pas de cartes » (2026-11-14). `Figure` (`app/graphisme/Lightbox.tsx`) affiche l'image nue + légende en petit ; la vue d'ensemble est un sommaire illustré numéroté ; « Voir plus » (`ShowMore`) et les étiquettes sont du texte souligné ou en petites capitales. Ne pas supprimer `public/portfolio-graphisme.pdf` (book PDF corrigé par Patrice). (`affiche sessd.pdf`, 3,5 Mo non référencé, retiré le 2026-11-14 avec l'accord de Patrice.)
- Remplacer une capture : **changer le nom du fichier** (ex. `adataviz.jpg` → `on-sort.jpg`), sinon les images optimisées de Next/Vercel et le cache du navigateur peuvent continuer à servir l'ancienne.
- Captures des projets : `public/images/<projet>.jpg`, 1600×1000 (16:10), JPEG qualité ~82, prises sur le site en ligne en fenêtre 1280×800 à densité 2 (Chrome headless), puis réduites avec `sips -s format jpeg -s formatOptions 82 -Z 1600`. Les cartes affichent les images en `aspect-[16/10]`.
- Images Next 16 : `priority` est déprécié, utiliser `loading="eager"` (ou `preload`) pour une image au-dessus de la ligne de flottaison.
- Démos vidéo des cartes projets : champ optionnel `video` dans `lib/data.ts` (fichier `public/videos/<projet>.webm`), affiché par `app/components/ProjectMedia.tsx` par-dessus la vignette. `preload="none"`, lecture au survol de l'`article` (ordinateur, `hover: hover`), via `IntersectionObserver` sur écran tactile, jamais si `prefers-reduced-motion: reduce`. Garder la vidéo muette, en boucle, ~8-11 s, ≤ 750 Ko, 960×600.
- `scripts/capturer-demo.mjs <projet|tous>` refait les démos sans outil vidéo (pas de ffmpeg sur le Mac) : Chrome headless piloté par le protocole DevTools, un scénario par projet dans `SCENARIOS` (on-sort, alternative, kpratik, real-book), faux curseur injecté, images via `Page.startScreencast`, montage WebM VP9 par `MediaRecorder` dans un `<canvas>`. Les attentes longues (réseau, IA de Kpratik) sont raccourcies au montage (`ATTENTE_MAX_MS`). Un dernier mouvement de curseur force la capture de l'état final (Chrome n'envoie une image que si l'écran change). Le relancer après tout changement visible d'un site. Ces démos sont provisoires en attendant les vidéos commentées (scripts dans `docs/scripts-videos.md`).

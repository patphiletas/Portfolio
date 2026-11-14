<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Portfolio : conventions

- Répondre et documenter en français. Mettre à jour le README à chaque changement visible.
- Contenu (projets, compétences, clients) : `lib/data.ts`. Accueil : `app/components/Cover.tsx`.
- Disponibilité : « dès que possible, prochaine rentrée janvier 2027 » ; expérience : « 20 ans ». Garder ces formulations cohérentes partout (Navbar, About, Contact, README, métadonnées).
- Captures des projets : `public/images/<projet>.jpg`, 1600×1000 (16:10), JPEG qualité ~82, prises sur le site en ligne en fenêtre 1280×800 à densité 2 (Chrome headless), puis réduites avec `sips -s format jpeg -s formatOptions 82 -Z 1600`. Les cartes affichent les images en `aspect-[16/10]`.
- Images Next 16 : `priority` est déprécié, utiliser `loading="eager"` (ou `preload`) pour une image au-dessus de la ligne de flottaison.

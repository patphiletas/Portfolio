export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  readmeUrl?: string;
  image: string;
};

export type GraphismeItem = {
  title: string;
  description: string;
  image: string;
};

export type SkillItem = { name: string; featured?: true };

export type Skill = {
  category: string;
  items: SkillItem[];
};

export const projects: Project[] = [
  {
    id: "alternative",
    title: "AlterNative",
    description:
      "Maison d'édition fictive. Soumission de manuscrits avec import EPUB, modération admin, publications avec notation et commentaires, recherche full-text, upload d'images via Cloudinary, emails transactionnels, rate limiting, dashboards auteur et admin, dark mode et CI/CD.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle", "Neon", "Better Auth", "Zod", "Vitest", "Resend", "Cloudinary", "GitHub Actions"],
    liveUrl: "https://demo-day-wine.vercel.app/",
    githubUrl: "https://github.com/patphiletas/DemoDay",
    readmeUrl: "https://github.com/patphiletas/DemoDay#readme",
    image: "/images/demoday.png",
  },
  {
    id: "kpratik",
    title: "Kpratik",
    description:
      "Application d’intelligence commerciale B2B : analyse le site public d’une entreprise et produit des informations actionnables — stack technique, signaux commerciaux, enrichissement Wikipedia/Wikidata, agent IA autonome (tool-use, personnalisation ICP) et score de fit /100.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod", "Vitest", "Groq", "Upstash", "GitHub Actions"],
    liveUrl: "https://kpratik.vercel.app/",
    githubUrl: "https://github.com/patphiletas/konsole-analyzer",
    readmeUrl: "https://github.com/patphiletas/konsole-analyzer#readme",
    image: "/images/kpratik.png",
  },
  {
    id: "real-book",
    title: "My Real Book",
    description:
      "Bibliothèque de partitions jazz façon Real Book : recherche par titre, compositeur ou tonalité, lecture PDF en split view, synchronisation Cloudinary et fiche IA (biographie, grille, anecdotes) mise en cache par morceau.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Neon", "Cloudinary", "API IA", "Vitest"],
    liveUrl: "https://real-book-patphiletas-projects.vercel.app/",
    githubUrl: "https://github.com/patphiletas/AdaRealBook",
    readmeUrl: "https://github.com/patphiletas/AdaRealBook#readme",
    image: "/images/real-book.png",
  },
  {
    id: "adaverse",
    title: "Adaverse",
    description: `Application web répertoriant les projets des étudiants d’Ada Tech School. Projet démontrant la maîtrise du routing, des composants typés et du déploiement.`,
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Drizzle", "Neon"],
    liveUrl: "https://adaverse-one.vercel.app/",
    githubUrl: "https://github.com/patphiletas/Adaverse",
    readmeUrl: "https://github.com/patphiletas/Adaverse#readme",
    image: "/images/adaverse.png",
  },
  {
    id: "adataviz",
    title: "Adataviz – Événements Paris",
    description:
      "Application web de visualisation de données permettant d’explorer en temps réel les événements et loisirs de la ville de Paris. Recherche dynamique, filtrage par thématiques.",
    stack: ["JavaScript", "Vite", "API", "CSS"],
    liveUrl: "https://adataviz-patphiletas.vercel.app/",
    githubUrl: "https://github.com/patphiletas/adataviz-patphiletas",
    readmeUrl: "https://github.com/patphiletas/adataviz-patphiletas#readme",
    image: "/images/adataviz.png",
  },
  // {
  //   id: "skills",
  //   title: "Mes Compétences",
  //   description:
  //     "Application de gestion de compétences par catégorie (Backend, Front-end, Graphisme) : ajout, affichage et suppression de compétences avec un niveau de maîtrise.",
  //   stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Neon"],
  //   liveUrl: "https://skills-patphiletas.vercel.app/",
  //   githubUrl: "https://github.com/patphiletas/skills",
  //   readmeUrl: "https://github.com/patphiletas/skills#readme",
  //   image: "/images/skills.png",
  // },
  // {
  //   id: "harry-potter",
  //   title: "Harry Potter",
  //   description:
  //     "Page vitrine interactive dédiée à l'univers Harry Potter. Intégration d'une timeline dynamique, gestion du responsive avec Tailwind CSS, composants typés.",
  //   stack: ["React.js", "TypeScript", "Tailwind CSS", "React Router"],
  //   liveUrl: "https://adapage-harry-potter.vercel.app/",
  //   githubUrl: "https://github.com/patphiletas/Adapage-Harry-Potter",
  //   readmeUrl: "https://github.com/patphiletas/Adapage-Harry-Potter#readme",
  //   image: "/images/harry-potter.png",
  // },
  // {
  //   id: "quiz",
  //   title: "Quiz Interactif",
  //   description:
  //     "Application de quiz interactive. Algorithme de calcul de résultats en temps réel et interface optimisée pour la lecture de données complexes.",
  //   stack: ["CSS", "JavaScript"],
  //   liveUrl: "https://quiz-patphiletas.vercel.app/",
  //   githubUrl: "https://github.com/patphiletas/quiz-project",
  //   readmeUrl: "https://github.com/patphiletas/quiz-project#readme",
  //   image: "/images/quiz.png",
  // },
];

export const graphismeItems: GraphismeItem[] = [
  {
    title: "Maquette de livres",
    description:
      "Direction artistique et maquette de couvertures et intérieurs pour des maisons d'édition (Groupe Grego, Éditions jésuites, Éditions La Martinière, VG Éditions). Plus de 800 ouvrages publiés.",
    image: "/images/graphisme-livres.png",
  },
  {
    title: "Illustration",
    description:
      "Séries d'illustrations numériques et conventionnelles pour des projets éditoriaux : guides de voyage, livrets d'accueil, mascotte de collections médicales.",
    image: "/images/graphisme-illustration.jpg",
  },
  {
    title: "Communication print",
    description:
      "Catalogues, mailings, affiches, flyers, kakémonos, identités visuelles. Suivi de fabrication complet : choix prestataires, imposition, prépresse.",
    image: "/images/graphisme-logos.png",
  },
];

export const skills: Skill[] = [
  {
    category: "Front-End",
    items: [
      { name: "Next JS", featured: true },
      { name: "React JS", featured: true },
      { name: "JavaScript", featured: true },
      { name: "TypeScript", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "Python" },
      { name: "Angular" },
    ],
  },
  {
    category: "Back-End",
    items: [
      { name: "NodeJS" },
      { name: "ExpressJS" },
      { name: "PostgreSQL / SQL", featured: true },
      { name: "API Rest" },
      { name: "CRUD" },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "VSCode", featured: true },
      { name: "Git / Github", featured: true },
      { name: "Terminal" },
      { name: "Neon / Cloudinary" },
      { name: "Docker" },
      { name: "Figma", featured: true  },
      { name: "Codex", featured: true  },
      { name: "ChatGPT", featured: true  },
      { name: "Claude Code", featured: true  },
      { name: "Gemini" },
    ],
  },
  {
    category: "Graphisme",
    items: [
      { name: "Photoshop", featured: true },
      { name: "Indesign", featured: true },
      { name: "Illustrator", featured: true },
      { name: "Acrobat Pro", featured: true },
    ],
  },
];

export const clients = [
  "Groupe Grego",
  "Éditions jésuites",
  "Éditions La Martinière",
  "VG Éditions",
  "Éditions Inpress",
  "Éditions Medline",
  "Éditions Nanika",
  "Éditions Danger Public",
  "ACAT-France",
  "UFISC",
  "Maison des Réseaux",
  "Institut de Pathologie de Paris",
  "Salon Automedon-Motorama",
  "Croix-Rouge française",
  "Association des Paralysés de France",
  "Mairie de Maisons-Alfort",
];

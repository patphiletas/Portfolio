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
      "Après 20 ans dans l'édition, j'ai codé la maison d'édition que j'aurais voulu avoir. Un auteur dépose son EPUB : titre, auteur, chapitres et couverture sont extraits automatiquement. L'éditeur relit, corrige et publie, et l'auteur est prévenu par e-mail. Les lecteurs notent et commentent. Projet solo, full stack : authentification, rôles, validation, rate limiting, tests et CI.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Better Auth", "Vitest"],
    liveUrl: "https://demo-day-wine.vercel.app/",
    githubUrl: "https://github.com/patphiletas/DemoDay",
    readmeUrl: "https://github.com/patphiletas/DemoDay#readme",
    image: "/images/demoday.jpg",
  },
  {
    id: "kpratik",
    title: "Kpratik",
    description:
      "Un commercial perd de longues minutes à fouiller le site d'un prospect. Ici, on colle une URL et on obtient en moins de 5 secondes la stack technique, les signaux commerciaux, les données Wikipedia et un score /100. Sans API payante. Un agent IA décide seul s'il doit lire d'autres pages ; le score, lui, reste calculé par des règles explicables. 98 tests.",
    stack: ["Next.js", "TypeScript", "Zod", "Groq", "Vitest"],
    liveUrl: "https://kpratik.vercel.app/",
    githubUrl: "https://github.com/patphiletas/kpratik",
    readmeUrl: "https://github.com/patphiletas/kpratik#readme",
    image: "/images/kpratik.jpg",
  },
  {
    id: "real-book",
    title: "My Real Book",
    description:
      "Le Real Book, la bible des musiciens de jazz, en version web : on cherche un standard par titre, compositeur ou tonalité et la partition s'ouvre à côté de la liste. Une fiche IA (biographie, grille, anecdotes) est générée une fois puis gardée en base. Architecture Vite + Express migrée vers un seul projet Next.js.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Cloudinary", "OpenAI"],
    liveUrl: "https://real-book-patphiletas.vercel.app/",
    githubUrl: "https://github.com/patphiletas/AdaRealBook",
    readmeUrl: "https://github.com/patphiletas/AdaRealBook#readme",
    image: "/images/real-book.jpg",
  },
  // {
  //   id: "adaverse",
  //   title: "Adaverse",
  //   description: `Application web répertoriant les projets des étudiants d’Ada Tech School. Projet démontrant la maîtrise du routing, des composants typés et du déploiement.`,
  //   stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Drizzle", "Neon"],
  //   liveUrl: "https://adaverse-one.vercel.app/",
  //   githubUrl: "https://github.com/patphiletas/Adaverse",
  //   readmeUrl: "https://github.com/patphiletas/Adaverse#readme",
  //   image: "/images/adaverse.png",
  // },
  {
    id: "adataviz",
    title: "On sort ?",
    description:
      "Que faire ce week-end, gratuitement, dans le 11e ? L'app répond en un clic parmi plus de 3 000 concerts, expos et ateliers, à partir des données ouvertes de la Ville, en direct. Filtres par date, prix, arrondissement et thème, lien partageable, mise en page façon agenda de magazine. Sans framework, volontairement : 80 tests, Lighthouse 97 à 100.",
    stack: ["JavaScript", "Vite", "Open Data Paris", "Vitest"],
    liveUrl: "https://adataviz-patphiletas.vercel.app/",
    githubUrl: "https://github.com/patphiletas/adataviz-patphiletas",
    readmeUrl: "https://github.com/patphiletas/adataviz-patphiletas#readme",
    image: "/images/adataviz.jpg",
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

export const skills: Skill[] = [
  {
    category: "Front-End",
    items: [
      { name: "Next JS", featured: true },
      { name: "React JS", featured: true },
      { name: "JavaScript", featured: true },
      { name: "TypeScript", featured: true },
      { name: "Tailwind CSS", featured: true },
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
      { name: "Python" },
    ],
  },
  {
    category: "Outils & IA",
    items: [
      { name: "Git / Github", featured: true },
      { name: "Vitest", featured: true },
      { name: "GitHub Actions" },
      { name: "Vercel" },
      { name: "Docker" },
      { name: "Neon / Cloudinary" },
      { name: "VSCode" },
      { name: "Figma", featured: true },
      { name: "Claude Code", featured: true },
      { name: "Codex" },
      { name: "ChatGPT" },
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

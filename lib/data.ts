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

export type Skill = {
  category: string;
  items: string[];
};

export const projects: Project[] = [
  {
    id: "alternative",
    title: "AlterNative",
    description:
      "Projet en cours de développement : plateforme full stack de maison d'édition fictive. Soumission de manuscrits, dashboard admin, publications, commentaires, notation, authentification, base PostgreSQL et CI/CD.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle", "Neon", "Better Auth", "Zod", "Vitest"],
    liveUrl: "https://demo-day-wine.vercel.app/",
    githubUrl: "https://github.com/patphiletas/DemoDay",
    readmeUrl: "https://github.com/patphiletas/DemoDay#readme",
    image: "/images/demoday.png",
  },
  {
    id: "real-book",
    title: "My Real Book",
    description:
      "Application Full Stack de partitions issues du célèbre Real Book. Gestion rigoureuse des données musicales, stockage média (Cloudinary), table SQL (Neon), intégration d'une API d'IA pour l'enrichissement de contenu.",
    stack: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Neon", "Tailwind CSS", "Cloudinary", "API IA"],
    liveUrl: "https://real-book-patphiletas-projects.vercel.app/",
    githubUrl: "https://github.com/patphiletas/AdaRealBook",
    readmeUrl: "https://github.com/patphiletas/AdaRealBook#readme",
    image: "/images/real-book.png",
  },
  {
    id: "adaverse",
    title: "Adaverse",
    description:
      "Application web interactive et immersive. Projet full stack démontrant la maîtrise du routing, des composants typés et du déploiement.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Drizzle", "Neon"],
    liveUrl: "https://adaverse-one.vercel.app/",
    githubUrl: "https://github.com/patphiletas/Adaverse",
    readmeUrl: "https://github.com/patphiletas/Adaverse#readme",
    image: "/images/adaverse.png",
  },
  {
    id: "adataviz",
    title: "Que faire à Paris ?",
    description:
      "Application web de visualisation de données permettant d'explorer en temps réel les événements et loisirs de la ville de Paris. Recherche dynamique, filtrage par thématiques.",
    stack: ["JavaScript", "Vite", "API", "CSS"],
    liveUrl: "https://adataviz-patphiletas.vercel.app/",
    githubUrl: "https://github.com/patphiletas/adataviz-patphiletas",
    readmeUrl: "https://github.com/patphiletas/adataviz-patphiletas#readme",
    image: "/images/adataviz.png",
  },
  {
    id: "skills",
    title: "Mes Compétences",
    description:
      "Plateforme d'auto-évaluation des compétences techniques. Interface dynamique permettant de suivre sa progression par palier avec le CRUD.",
    stack: ["Vanilla JS", "JavaScript", "PostgreSQL", "Neon", "LocalStorage"],
    liveUrl: "https://skills-patphiletas.vercel.app/",
    githubUrl: "https://github.com/patphiletas/skills",
    readmeUrl: "https://github.com/patphiletas/skills#readme",
    image: "/images/skills.png",
  },
  {
    id: "harry-potter",
    title: "Harry Potter",
    description:
      "Page vitrine interactive dédiée à l'univers Harry Potter. Intégration d'une timeline dynamique, gestion du responsive avec Tailwind CSS, composants typés.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "React Router"],
    liveUrl: "https://adapage-harry-potter.vercel.app/",
    githubUrl: "https://github.com/patphiletas/Adapage-Harry-Potter",
    readmeUrl: "https://github.com/patphiletas/Adapage-Harry-Potter#readme",
    image: "/images/harry-potter.png",
  },
  {
    id: "quiz",
    title: "Quiz Interactif",
    description:
      "Application de quiz interactive. Algorithme de calcul de résultats en temps réel et interface optimisée pour la lecture de données complexes.",
    stack: ["CSS", "JavaScript"],
    liveUrl: "https://quiz-patphiletas.vercel.app/",
    githubUrl: "https://github.com/patphiletas/quiz-project",
    readmeUrl: "https://github.com/patphiletas/quiz-project#readme",
    image: "/images/quiz.png",
  },
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
    items: ["Next JS", "React JS", "JavaScript", "TypeScript", "Tailwind CSS", "Python", "Angular"],
  },
  {
    category: "Back-End",
    items: ["NodeJS", "ExpressJS", "PostgreSQL / SQL", "API Rest", "CRUD"],
  },
  {
    category: "Outils",
    items: ["VSCode", "Git / Github", "Terminal", "Neon / Cloudinary", "Docker", "Figma", "Codex", "ChatGPT", "Claude", "Gemini"],
  },
  {
    category: "Graphisme",
    items: ["Photoshop", "Indesign", "Illustrator", "Acrobat Pro"],
  },
];

export const clients = [
  "Groupe Grego",
  "Éditions jésuites",
  "Éditions La Martinière",
  "VG Éditions",
  "Éditions Inpress",
  "Éditions Medline",
];

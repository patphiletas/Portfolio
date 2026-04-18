export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
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
    id: "real-book",
    title: "My Real Book",
    description:
      "Application Full Stack de partitions issues du célèbre Real Book. Gestion rigoureuse des données musicales, stockage média (Cloudinary), table SQL (Neon), intégration d'une API d'IA pour l'enrichissement de contenu.",
    stack: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Cloudinary", "API IA"],
    liveUrl: "https://real-book-patphiletas-projects.vercel.app/",
    githubUrl: "https://github.com/patphiletas",
    image: "/images/real-book.png",
  },
  {
    id: "adaverse",
    title: "Adaverse",
    description:
      "Application web interactive et immersive. Projet full stack démontrant la maîtrise du routing, des composants typés et du déploiement.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    liveUrl: "https://adaverse-one.vercel.app/",
    githubUrl: "https://github.com/patphiletas",
    image: "/images/adaverse.png",
  },
  {
    id: "adataviz",
    title: "Que faire à Paris ?",
    description:
      "Application web de visualisation de données permettant d'explorer en temps réel les événements et loisirs de la ville de Paris. Recherche dynamique, filtrage par thématiques.",
    stack: ["JavaScript", "Vite", "API", "CSS"],
    liveUrl: "https://adataviz-patphiletas.vercel.app/",
    githubUrl: "https://github.com/patphiletas",
    image: "/images/adataviz.png",
  },
  {
    id: "skills",
    title: "Mes Compétences",
    description:
      "Plateforme d'auto-évaluation des compétences techniques. Interface dynamique permettant de suivre sa progression par palier avec le CRUD.",
    stack: ["Vanilla JS", "JavaScript", "PostgreSQL", "LocalStorage"],
    liveUrl: "https://skills-patphiletas.vercel.app/",
    githubUrl: "https://github.com/patphiletas",
    image: "/images/skills.png",
  },
  {
    id: "harry-potter",
    title: "Harry Potter",
    description:
      "Page vitrine interactive dédiée à l'univers Harry Potter. Intégration d'une timeline dynamique, gestion du responsive avec Tailwind CSS, composants typés.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "React Router"],
    liveUrl: "https://adapage-harry-potter.vercel.app/",
    githubUrl: "https://github.com/patphiletas",
    image: "/images/harry-potter.png",
  },
  {
    id: "quiz",
    title: "Quiz Interactif",
    description:
      "Application de quiz interactive. Algorithme de calcul de résultats en temps réel et interface optimisée pour la lecture de données complexes.",
    stack: ["CSS", "JavaScript"],
    liveUrl: "https://quiz-patphiletas.vercel.app/",
    githubUrl: "https://github.com/patphiletas",
    image: "/images/quiz.png",
  },
];

export const graphismeItems: GraphismeItem[] = [
  {
    title: "Maquette de livres",
    description:
      "Direction artistique et maquette de couvertures et intérieurs pour des maisons d'édition (Groupe Grego, Éditions jésuites, Éditions La Martinière, VG Éditions). Plus de 100 ouvrages publiés.",
    image: "/images/graphisme-livres.png",
  },
  {
    title: "Identités visuelles & logos",
    description:
      "Création de logos et identités visuelles pour des institutions : Alternatives Communes, Institut de Pathologie de Paris, Afri'Monde, Éditions jésuites.",
    image: "/images/graphisme-logos.png",
  },
  {
    title: "Illustration",
    description:
      "Séries d'illustrations numériques et conventionnelles pour des projets éditoriaux : guides de voyage, livrets d'accueil, mascotte de collections médicales.",
    image: "/images/graphisme-illustration.png",
  },
  {
    title: "Communication print",
    description:
      "Catalogues, mailings, affiches, flyers, kakémonos. Suivi de fabrication complet : choix prestataires, imposition, prépresse.",
    image: "/images/graphisme-print.png",
  },
];

export const skills: Skill[] = [
  {
    category: "Front-End",
    items: ["Next JS", "React JS", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Back-End",
    items: ["NodeJS", "ExpressJS", "PostgreSQL / SQL", "API Rest", "CRUD"],
  },
  {
    category: "Outils",
    items: ["VSCode", "Git / Github", "Terminal", "Neon / Cloudinary", "Docker", "Figma"],
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

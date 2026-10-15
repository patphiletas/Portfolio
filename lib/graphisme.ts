export type GraphismeImage = {
  id: string;
  caption: string;
  width: number;
  height: number;
  link?: string;
};

export const graphismeDir = "/images/graphisme";
export const thumbSrc = (id: string) => `${graphismeDir}/thumb/${id}.jpg`;
export const fullSrc = (id: string) => `${graphismeDir}/full/${id}.jpg`;

export const mockups: GraphismeImage[] = [
  { id: "mock_eco", caption: "", width: 495, height: 640 },
  { id: "mock_saveur", caption: "", width: 495, height: 640 },
  { id: "mock_pottier", caption: "", width: 495, height: 640 },
  { id: "mock_ecologie", caption: "", width: 687, height: 1007 },
];

export const academic: GraphismeImage[] = [
  { id: "c_eco", caption: "Éco-théologie", width: 453, height: 640 },
  { id: "c_saveur", caption: "La saveur des récits évangéliques", width: 453, height: 640 },
  { id: "c_gyn", caption: "Gynécologie obstétrique", width: 467, height: 640 },
  { id: "c_luc", caption: "L’Évangile selon saint Luc", width: 422, height: 597, link: "https://www.calameo.com/read/006730137e380798973e0" },
  { id: "c_myst", caption: "Mysterium Christi", width: 422, height: 596, link: "https://www.calameo.com/read/00673013789fd985d0307" },
  { id: "c_phenomene", caption: "Le Phénomène Humain", width: 422, height: 596, link: "https://www.calameo.com/read/006730137563f28b23b7e" },
  { id: "c_creux", caption: "Au creux du malheur, la lumière ?", width: 989, height: 1400 },
  { id: "c_enfant", caption: "Prends l’enfant et sa mère", width: 695, height: 1011 },
];

export const general: GraphismeImage[] = [
  { id: "c_autain", caption: "Clémentine Autain — biographie", width: 422, height: 640 },
  { id: "c_musulmane", caption: "Musulmane, disciple du Christ", width: 404, height: 640, link: "https://www.calameo.com/read/006730137c506b192a13a" },
  { id: "c_politique", caption: "Politique et écologie", width: 453, height: 640 },
  { id: "c_portraits", caption: "15 portraits philosophiques du Christ", width: 990, height: 1400 },
  { id: "c_pascote", caption: "Un pas de côté", width: 884, height: 1400, link: "https://www.calameo.com/read/0067301378c221a790ced" },
  { id: "c_choisir", caption: "Choisissez bien votre psy", width: 391, height: 640 },
  { id: "c_ecologie", caption: "Guide pratique de l’écologie intégrale", width: 404, height: 640, link: "https://www.calameo.com/read/006730137e0cda3411a3b" },
  { id: "c_kobik", caption: "Ignace de Loyola, le pèlerinage intérieur", width: 421, height: 640, link: "https://www.calameo.com/read/00673013785915b69059c" },
  { id: "c_feujbook", caption: "Feujbook", width: 313, height: 449 },
  { id: "c_bible", caption: "Prier avec la Bible", width: 990, height: 1400 },
  { id: "b_cover", caption: "Revenir à l’olivier", width: 640, height: 640, link: "https://www.calameo.com/read/00673013712ab99379d85" },
];

export const scholar: GraphismeImage[] = [
  { id: "c_route", caption: "En route vers la lecture", width: 1400, height: 1400 },
  { id: "c_lire", caption: "Lire et écrire", width: 256, height: 368 },
  { id: "c_abc", caption: "L’ABCdaire médical", width: 954, height: 1400 },
  { id: "c_psy", caption: "Carnets de stage infirmiers — Psychiatrie", width: 331, height: 455 },
  { id: "c_inter", caption: "Intermemo — Gynécologie obstétrique", width: 307, height: 455 },
  { id: "c_corps", caption: "Corps, tonus et psychomotricité", width: 284, height: 455 },
  { id: "c_cut", caption: "Carnet ultime tour — Méthodologie", width: 290, height: 455 },
  { id: "c_mariage", caption: "Guide pour préparer son mariage", width: 450, height: 640, link: "https://www.calameo.com/read/0067301371784dff2435d" },
  { id: "c_hema", caption: "Hématologie", width: 448, height: 640 },
  { id: "c_ortho", caption: "Orthopédie traumatologie", width: 452, height: 640 },
];

export const avent: GraphismeImage[] = [
  { id: "f_avent", caption: "Calendrier de l’Avent 2024", width: 1600, height: 1131 },
];

export const fabrication: GraphismeImage[] = [
  { id: "f_noel", caption: "Dépliant — La sélection de Noël", width: 1313, height: 643 },
  { id: "f_signets_avent", caption: "Marque-pages illustrés — Avent 2022", width: 854, height: 971 },
  { id: "f_signets_careme", caption: "Marque-pages illustrés — Carême 2023", width: 1367, height: 972 },
  { id: "f_kak", caption: "Kakémono, hauteur 2 m", width: 577, height: 1400 },
];

export const posters: GraphismeImage[] = [
  { id: "k_hiphop", caption: "Affiche concert de soutien (Togo)", width: 753, height: 1075 },
  { id: "k_acat", caption: "Plaquette de l’ACAT-France — intérieur", width: 1369, height: 968 },
  { id: "k_acat2", caption: "Plaquette de l’ACAT-France — extérieur", width: 1334, height: 943 },
  { id: "k_altgen1", caption: "Plaquette Alternatives Générations — extérieur", width: 1390, height: 980 },
  { id: "k_altgen2", caption: "Plaquette Alternatives Générations — intérieur", width: 1390, height: 980 },
  { id: "k_careme", caption: "Mailing — Vivre le Carême", width: 729, height: 1010 },
  { id: "k_lire21", caption: "Lettre « Lire avec les Éditions jésuites » — automne 2021", width: 732, height: 1007 },
  { id: "k_bdc", caption: "Bon de commande — Pratique du discernement en commun", width: 707, height: 1011 },
];

export const catalogues: GraphismeImage[] = [
  { id: "k_cat_avent", caption: "Catalogue — Avent 2023", width: 438, height: 640 },
  { id: "k_cat1", caption: "Catalogue éditeur 2022", width: 1400, height: 990 },
  { id: "k_cat2", caption: "Catalogue éditeur 2023", width: 1400, height: 990 },
  { id: "k_soutien", caption: "Mailing — bon de soutien", width: 364, height: 640 },
  { id: "k_ete22", caption: "Catalogue — été 2022", width: 472, height: 631 },
  { id: "k_voeux", caption: "Mailing — cartes de vœux 2024", width: 1600, height: 1132 },
  { id: "k_noel", caption: "Mailing — C’est bientôt Noël", width: 477, height: 631 },
  { id: "k_cat3", caption: "Catalogue — été 2021 (double page)", width: 640, height: 430 },
];

export const plv: GraphismeImage[] = [
  { id: "p_vg", caption: "Affiche libraires — commande directe", width: 388, height: 537 },
  { id: "p_camsp", caption: "Livret d’accueil — CAMSP de Pontoise", width: 398, height: 538 },
  { id: "p_pape", caption: "Affiche conférence-débat — Le Pape François", width: 710, height: 1007 },
  { id: "p_myst", caption: "Affiche de lancement — Mysterium Christi", width: 1130, height: 1600 },
  { id: "p_avent", caption: "Affiche — Avent 2024", width: 414, height: 545 },
  { id: "p_var", caption: "Affiche de lancement — Varillon", width: 1130, height: 1600 },
  { id: "p_route", caption: "Affiche — méthode de lecture", width: 396, height: 545 },
];

export const illustration: GraphismeImage[] = [
  { id: "i_taxi", caption: "Guides de voyage alternatifs — éditions Nanika", width: 640, height: 547 },
  { id: "i_guys", caption: "", width: 530, height: 640 },
  { id: "i_woman", caption: "", width: 302, height: 640 },
  { id: "i_pool", caption: "", width: 529, height: 640 },
  { id: "i_market", caption: "", width: 640, height: 559 },
  { id: "i_woman2", caption: "", width: 531, height: 640 },
  { id: "i_mask", caption: "", width: 399, height: 640 },
  { id: "i_church", caption: "", width: 619, height: 640 },
];

export const illustrationSeries: GraphismeImage[] = [
  { id: "ser_1", caption: "", width: 680, height: 728 },
  { id: "ser_2", caption: "", width: 682, height: 810 },
  { id: "ser_3", caption: "", width: 707, height: 832 },
];

export const mascotteIcons: GraphismeImage[] = [
  { id: "ser_16", caption: "", width: 613, height: 387 },
  { id: "ser_17", caption: "", width: 761, height: 365 },
  { id: "ser_18", caption: "", width: 650, height: 411 },
  { id: "ser_19", caption: "", width: 682, height: 432 },
];

export const musiciens: GraphismeImage[] = [
  { id: "mus_1", caption: "5.6.7.8's — Festival West Side 2013", width: 924, height: 1400 },
  { id: "mus_2", caption: "Dustin Wong, l’artiste bicolore aux 1000 pédales", width: 785, height: 1400 },
  { id: "mus_3", caption: "Nisennenmondai — la charley obsessionnelle", width: 836, height: 1400 },
  { id: "mus_4", caption: "Gull — tout seul avec un masque diabolique", width: 836, height: 1400 },
  { id: "mus_5", caption: "Rock.fr", width: 920, height: 1380 },
  { id: "mus_6", caption: "Not for you", width: 649, height: 654 },
];

export const illustrationsDiverses: GraphismeImage[] = [
  { id: "div_1", caption: "", width: 739, height: 877 },
  { id: "div_2", caption: "", width: 701, height: 701 },
  { id: "div_3", caption: "", width: 709, height: 720 },
  { id: "div_5", caption: "", width: 1745, height: 2465 },
  { id: "div_6", caption: "", width: 1744, height: 1876 },
  { id: "div_7", caption: "", width: 1003, height: 954 },
  { id: "div_8", caption: "", width: 919, height: 958 },
  { id: "div_9", caption: "", width: 553, height: 794 },
  { id: "div_10", caption: "", width: 1255, height: 1011 },
];


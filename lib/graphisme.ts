export type GraphismeImage = {
  id: string;
  caption: string;
  width: number;
  height: number;
  link?: string;
  // Précision affichée uniquement dans la vue agrandie.
  note?: string;
};

export const graphismeDir = "/images/graphisme";
export const thumbSrc = (id: string) => `${graphismeDir}/thumb/${id}.jpg`;
export const fullSrc = (id: string) => `${graphismeDir}/full/${id}.jpg`;

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
  { id: "c_autain", caption: "Clémentine Autain — biographie", width: 422, height: 640, note: "Maquette intérieure uniquement — couverture d’un autre graphiste." },
  { id: "c_musulmane", caption: "Musulmane, disciple du Christ", width: 404, height: 640, link: "https://www.calameo.com/read/006730137c506b192a13a" },
  { id: "c_politique", caption: "Politique et écologie", width: 453, height: 640 },
  { id: "c_portraits", caption: "15 portraits philosophiques du Christ", width: 990, height: 1400 },
  { id: "c_pascote", caption: "Un pas de côté", width: 945, height: 1496, link: "https://www.calameo.com/read/0067301378c221a790ced", note: "Illustration de couverture : mon dessin." },
  { id: "c_choisir", caption: "Choisissez bien votre psy", width: 391, height: 640 },
  { id: "c_ecologie", caption: "Guide pratique de l’écologie intégrale", width: 404, height: 640, link: "https://www.calameo.com/read/006730137e0cda3411a3b" },
  { id: "c_kobik", caption: "Ignace de Loyola, le pèlerinage intérieur", width: 421, height: 640, link: "https://www.calameo.com/read/00673013785915b69059c" },
  { id: "c_feujbook", caption: "Feujbook", width: 313, height: 449, note: "Maquette intérieure uniquement — couverture d’un autre graphiste." },
  { id: "c_bible", caption: "Prier avec la Bible", width: 990, height: 1400 },
  { id: "b_cover", caption: "Revenir à l’olivier", width: 640, height: 640, link: "https://www.calameo.com/read/00673013712ab99379d85" },
];

export const scholar: GraphismeImage[] = [
  { id: "c_route", caption: "En route vers la lecture", width: 1400, height: 1400 },
  { id: "c_lire", caption: "Lire et écrire", width: 256, height: 368 },
  { id: "c_abc", caption: "L’ABCdaire médical", width: 954, height: 1400, note: "Illustration de couverture : mon dessin (série « L’étudiant en médecine »)." },
  { id: "c_psy", caption: "Carnets de stage infirmiers — Psychiatrie", width: 331, height: 455, note: "Illustration de couverture : mon dessin (série « Spécialités médicales »)." },
  { id: "c_inter", caption: "Intermemo — Gynécologie obstétrique", width: 307, height: 455, note: "Illustration de couverture : mon dessin (mascotte de la collection)." },
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
  { id: "k_hiphop", caption: "Affiche concert de soutien (Togo)", width: 753, height: 1075, note: "Illustration de l’affiche : mon dessin." },
  { id: "k_acat", caption: "Plaquette de l’ACAT-France — intérieur", width: 1369, height: 968 },
  { id: "k_acat2", caption: "Plaquette de l’ACAT-France — extérieur", width: 1334, height: 943 },
  { id: "k_altgen1", caption: "Plaquette Alternatives Générations — extérieur", width: 1390, height: 980 },
  { id: "k_altgen2", caption: "Plaquette Alternatives Générations — intérieur", width: 1390, height: 980 },
  { id: "k_careme", caption: "Mailing — Vivre le Carême", width: 729, height: 1010 },
  { id: "k_lire21", caption: "Lettre « Lire avec les Éditions jésuites » — automne 2021", width: 732, height: 1007 },
  { id: "k_bdc", caption: "Bon de commande — Pratique du discernement en commun", width: 707, height: 1011 },
  { id: "k_sessd1", caption: "Plaquette SESSD APF — couverture", width: 1128, height: 1600, note: "Illustrations : mes dessins (série SESSD APF)." },
  { id: "k_sessd2", caption: "Plaquette SESSD APF — intérieur", width: 1600, height: 1135, note: "Illustrations : mes dessins (série SESSD APF)." },
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
  { id: "p_camsp", caption: "Livret d’accueil — CAMSP de Pontoise", width: 398, height: 538, note: "Illustrations : mes coccinelles (série « La coccinelle »)." },
  { id: "p_sessd", caption: "Affiche A1 pour le service — Charte des droits et libertés, SESSD APF", width: 1131, height: 1600, note: "Illustrations : mes dessins (série SESSD APF)." },
  { id: "p_pape", caption: "Affiche conférence-débat — Le Pape François", width: 710, height: 1007 },
  { id: "p_myst", caption: "Affiche de lancement — Mysterium Christi", width: 1130, height: 1600 },
  { id: "p_avent", caption: "Affiche — Avent 2024", width: 414, height: 545 },
  { id: "p_var", caption: "Affiche de lancement — Varillon", width: 1130, height: 1600 },
  { id: "p_route", caption: "Affiche — méthode de lecture", width: 396, height: 545, note: "Illustration de l’affiche : mon dessin." },
];

export const illustration: GraphismeImage[] = [
  { id: "i_taxi", caption: "Côte d’Ivoire — les taxis d’Abidjan", width: 640, height: 547 },
  { id: "i_guys", caption: "", width: 530, height: 640 },
  { id: "i_woman", caption: "Martinique — le madras", width: 302, height: 640 },
  { id: "i_pool", caption: "", width: 529, height: 640 },
  { id: "i_market", caption: "", width: 640, height: 559 },
  { id: "i_woman2", caption: "", width: 531, height: 640 },
  { id: "i_mask", caption: "Côte d’Ivoire — danse des masques", width: 399, height: 640 },
  { id: "i_church", caption: "", width: 619, height: 640 },
];


export type IllustrationSeries = { title: string; items: GraphismeImage[] };

export const illustrationSeries: IllustrationSeries[] = [
  {
    title: "Pictogrammes de collection",
    items: [
      { id: "ser_16", caption: "", width: 613, height: 387 },
      { id: "ser_17", caption: "", width: 761, height: 365 },
      { id: "ser_18", caption: "", width: 650, height: 411 },
      { id: "ser_19", caption: "", width: 682, height: 432 },
    ],
  },
  {
    title: "Spécialités médicales",
    items: [
      { id: "ser_bebe_cardio", caption: "", width: 1013, height: 1600 },
      { id: "ser_bebe_gyneco", caption: "", width: 1328, height: 1600 },
      { id: "ser_bebe_neuro", caption: "", width: 1467, height: 1600 },
      { id: "ser_bebe_psy", caption: "", width: 1524, height: 1600 },
      { id: "ser_bebe_famille", caption: "", width: 1449, height: 1600 },
    ],
  },
  {
    title: "L’étudiant en médecine",
    items: [
      { id: "ser_2", caption: "", width: 682, height: 810 },
      { id: "ser_11", caption: "", width: 1310, height: 1400 },
      { id: "ser_14", caption: "", width: 1400, height: 1400 },
      { id: "ser_etu_mm", caption: "", width: 1600, height: 1519 },
      { id: "ser_etu_od", caption: "", width: 1553, height: 1600 },
      { id: "ser_etu_noms", caption: "", width: 1032, height: 1060 },
      { id: "ser_etu_amie", caption: "", width: 1181, height: 997 },
    ],
  },
  {
    title: "Pictogrammes de rubriques",
    items: [
      { id: "ser_rond_epidemio", caption: "", width: 1600, height: 1294 },
      { id: "ser_rond_micro", caption: "", width: 1548, height: 1502 },
      { id: "ser_rond_mots", caption: "", width: 1600, height: 1406 },
    ],
  },
  {
    title: "SESSD APF — enfants en situation de handicap",
    items: [
      { id: "ser_3", caption: "", width: 707, height: 832 },
      { id: "ser_sessd_fauteuil", caption: "", width: 768, height: 750 },
      { id: "ser_sessd_bequille", caption: "", width: 1175, height: 1600 },
      { id: "ser_sessd_velo", caption: "", width: 1064, height: 1168 },
      { id: "ser_sessd_sport", caption: "", width: 924, height: 838 },
      { id: "ser_sessd_ecole", caption: "", width: 724, height: 821 },
      { id: "ser_sessd_deambulateur", caption: "", width: 642, height: 656 },
      { id: "ser_sessd_lunettes", caption: "", width: 454, height: 630 },
      { id: "ser_sessd_therapeute", caption: "", width: 609, height: 698 },
      { id: "ser_sessd_garcon", caption: "", width: 1056, height: 1600 },
    ],
  },
  {
    title: "La coccinelle",
    items: [
      { id: "ser_cox_02", caption: "", width: 1395, height: 1600 },
      { id: "ser_cox_03", caption: "", width: 1395, height: 1600 },
      { id: "ser_cox_04", caption: "", width: 1432, height: 1600 },
      { id: "ser_cox_dos", caption: "", width: 1393, height: 1600 },
      { id: "ser_cox_loupe", caption: "", width: 1574, height: 1600 },
    ],
  },
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
  { id: "div_2", caption: "Portrait — Donald Trump", width: 701, height: 701 },
  { id: "div_3", caption: "Carnet de croquis", width: 709, height: 720 },
  { id: "div_5", caption: "", width: 1745, height: 2465 },
  { id: "div_6", caption: "Dessin de presse — « Merci Charlie »", width: 1744, height: 1876 },
  { id: "div_7", caption: "Dessin de presse — Avon, 2014", width: 1003, height: 954 },
  { id: "div_8", caption: "Dessin de presse — Avon, 2014", width: 919, height: 958 },
  { id: "div_9", caption: "Dessin de presse — « Circuler est un droit… »", width: 553, height: 794 },
];

export const illustrationScientifique: GraphismeImage[] = [
  { id: "sci_01", caption: "Structure d’une immunoglobuline", width: 1600, height: 1320 },
  { id: "sci_02", caption: "Clivage d’un anticorps par la papaïne", width: 1303, height: 1600 },
  { id: "sci_03", caption: "Hématopoïèse — lignées cellulaires", width: 1600, height: 1169 },
  { id: "sci_04", caption: "Planche — cellules sanguines et immunitaires", width: 1600, height: 786 },
  { id: "sci_05", caption: "Morphologie du plasmocyte", width: 973, height: 1255 },
  { id: "sci_06", caption: "Schéma cellulaire", width: 1600, height: 823 },
  { id: "sci_07", caption: "Les phases de la mitose", width: 1192, height: 1600 },
  { id: "sci_08", caption: "Translocation chromosomique", width: 1507, height: 1356 },
  { id: "sci_09", caption: "Tube d’hématocrite après centrifugation", width: 1587, height: 1600 },
  { id: "sci_10", caption: "Hématocrite — normal et pathologique", width: 1600, height: 1169 },
  { id: "sci_11", caption: "Rate — structure", width: 1555, height: 1600 },
  { id: "sci_12", caption: "Ganglion lymphatique", width: 1435, height: 1600 },
  { id: "sci_13", caption: "Foie — vascularisation", width: 1600, height: 1148 },
  { id: "sci_14", caption: "Formes de début et d’extension lymphatique", width: 1600, height: 1000 },
  { id: "sci_15", caption: "Médiastin", width: 876, height: 798 },
  { id: "sci_16", caption: "Cerveau — coupe sagittale", width: 1600, height: 1310 },
  { id: "sci_17", caption: "Cerveau — coupe horizontale", width: 1600, height: 1443 },
  { id: "sci_18", caption: "Cerveau — face inférieure", width: 1138, height: 1242 },
  { id: "sci_19", caption: "Vertèbre et moelle épinière", width: 1561, height: 1600 },
  { id: "sci_20", caption: "Fibre musculaire", width: 801, height: 867 },
];

export const webBanners: GraphismeImage[] = [
  { id: "w_rivages", caption: "Bannière — revue Rivages", width: 2400, height: 300 },
  { id: "w_rouleau", caption: "Bannière — opération « Le livre et le rouleau »", width: 2400, height: 300 },
];

export const webSlides: GraphismeImage[] = [
  { id: "w_ikb", caption: "Slide — iKB Cardiologie", width: 1920, height: 655 },
  { id: "w_khalifa", caption: "Slide — réunion de méthodologie DFASM2", width: 1920, height: 700 },
];

export const webVisuals: GraphismeImage[] = [
  { id: "w_avent24", caption: "Visuel — campagne de l’Avent 2024", width: 1417, height: 992 },
  { id: "w_voeux", caption: "Visuel — cartes de vœux", width: 1416, height: 992 },
  { id: "w_avent23", caption: "Visuel — Avent 2023", width: 1000, height: 1333 },
  { id: "w_rmpp_signets", caption: "Visuel — Réseau mondial de prière du Pape", width: 1226, height: 1600 },
];

export const webAuthorBanners: GraphismeImage[] = [
  { id: "wb_30", caption: "Nikolaas Sintobin — Prier avec la Bible", width: 1983, height: 500 },
  { id: "wb_29", caption: "Nikolaas Sintobin — l’auteur qui monte", width: 1983, height: 500 },
  { id: "wb_28", caption: "Alain Patin — Se laisser étonner par l’Ancien Testament", width: 1983, height: 500 },
  { id: "wb_40", caption: "Jean-Noël Aletti — les 4 derniers titres", width: 1983, height: 500 },
  { id: "wb_33", caption: "Jean-Noël Aletti — La saveur des récits évangéliques", width: 1983, height: 500 },
  { id: "wb_9", caption: "Dominique Struyf et Bernard Pottier — Psychologie et spiritualité", width: 1983, height: 500 },
  { id: "wb_36", caption: "Bernard Pottier — Portraits philosophiques du Christ", width: 1983, height: 500 },
  { id: "wb_31", caption: "Christoph Wrembek — Judas, mon ami", width: 1983, height: 500 },
  { id: "wb_32", caption: "Geneviève Perret — Marie-Thérèse de Soubiran", width: 1983, height: 500 },
  { id: "wb_21", caption: "Pape François — Politique et écologie", width: 1983, height: 500 },
  { id: "wb_42", caption: "Guide pratique de l’écologie intégrale", width: 1983, height: 500 },
  { id: "wb_44", caption: "Celia Deane-Drummond — Éco-théologie", width: 1983, height: 500 },
  { id: "wb_50", caption: "Austen Ivereigh — En retraite avec le pape François", width: 1983, height: 500 },
  { id: "wb_51", caption: "Nicolas Rousselot — Le tour de la foi", width: 1983, height: 500 },
  { id: "wb_39", caption: "Jean Rouet — Libérez l’Évangile", width: 1983, height: 500 },
  { id: "wb_37", caption: "Claude Lichtert — Vers un paradis urbain", width: 1983, height: 500 },
];

export const webEventBanners: GraphismeImage[] = [
  { id: "wb_8", caption: "Conférence-débat — Michel de Certeau, Alfonso Mendiola", width: 1983, height: 500 },
  { id: "wb_10", caption: "Conférence de sœur Anne-Catherine Avril", width: 1983, height: 500 },
];

export const webOpsBanners: GraphismeImage[] = [
  { id: "wb_7", caption: "Avent 2023 — signets et affiches", width: 1983, height: 500 },
  { id: "wb_18", caption: "Carême 2024 — signets, affiches, calendriers", width: 1983, height: 500 },
  { id: "wb_46", caption: "Avent 2024 — signets, affiches, calendrier", width: 1983, height: 500 },
  { id: "wb_6", caption: "Nouveautés de la rentrée", width: 1983, height: 500 },
  { id: "wb_11", caption: "Idée cadeau — romans pour ados", width: 1983, height: 500 },
  { id: "wb_49", caption: "Carte de la Toussaint", width: 1983, height: 500 },
];

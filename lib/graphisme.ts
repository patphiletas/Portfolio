export type GraphismeImage = {
  id: string;
  caption: string;
  width: number;
  height: number;
  grey: boolean;
};

export const graphismeDir = "/images/graphisme";
export const thumbSrc = (id: string) => `${graphismeDir}/thumb/${id}.jpg`;
export const fullSrc = (id: string) => `${graphismeDir}/full/${id}.jpg`;

export const mockups: GraphismeImage[] = [
  { id: "mock_eco", caption: "", width: 495, height: 640, grey: false },
  { id: "mock_saveur", caption: "", width: 495, height: 640, grey: false },
  { id: "mock_pottier", caption: "", width: 495, height: 640, grey: false },
];

export const academic: GraphismeImage[] = [
  { id: "c_eco", caption: "Éco-théologie", width: 453, height: 640, grey: false },
  { id: "c_saveur", caption: "La saveur des récits évangéliques", width: 453, height: 640, grey: false },
  { id: "c_gyn", caption: "Gynécologie obstétrique", width: 467, height: 640, grey: false },
  { id: "c_luc", caption: "L’Évangile selon saint Luc", width: 422, height: 597, grey: false },
  { id: "c_myst", caption: "Mysterium Christi", width: 422, height: 596, grey: false },
  { id: "c_phenomene", caption: "Le Phénomène Humain", width: 422, height: 596, grey: false },
  { id: "c_creux", caption: "Au creux du malheur, la lumière ?", width: 448, height: 640, grey: false },
];

export const general: GraphismeImage[] = [
  { id: "c_autain", caption: "Clémentine Autain — biographie", width: 422, height: 640, grey: false },
  { id: "c_musulmane", caption: "Musulmane, disciple du Christ", width: 404, height: 640, grey: false },
  { id: "c_politique", caption: "Politique et écologie", width: 453, height: 640, grey: false },
  { id: "c_portraits", caption: "15 portraits philosophiques du Christ", width: 453, height: 640, grey: false },
  { id: "c_pascote", caption: "Un pas de côté", width: 404, height: 640, grey: false },
  { id: "c_choisir", caption: "Choisissez bien votre psy", width: 391, height: 640, grey: false },
  { id: "c_ecologie", caption: "Guide pratique de l’écologie intégrale", width: 404, height: 640, grey: false },
  { id: "c_ignace", caption: "Ignace de Loyola (bande dessinée)", width: 456, height: 640, grey: false },
  { id: "c_kobik", caption: "Ignace de Loyola, le pèlerinage intérieur", width: 421, height: 640, grey: false },
  { id: "c_feujbook", caption: "Feujbook", width: 313, height: 449, grey: false },
  { id: "c_bible", caption: "Prier avec la Bible", width: 453, height: 640, grey: false },
];

export const scholar: GraphismeImage[] = [
  { id: "c_route", caption: "En route vers la lecture", width: 318, height: 449, grey: false },
  { id: "c_lire", caption: "Lire et écrire", width: 256, height: 368, grey: false },
  { id: "c_abc", caption: "L’ABCdaire médical", width: 436, height: 640, grey: false },
  { id: "c_psy", caption: "Carnets de stage infirmiers — Psychiatrie", width: 331, height: 455, grey: false },
  { id: "c_inter", caption: "Intermemo — Gynécologie obstétrique", width: 307, height: 455, grey: false },
  { id: "c_corps", caption: "Corps, tonus et psychomotricité", width: 284, height: 455, grey: false },
  { id: "c_cut", caption: "Carnet ultime tour — Méthodologie", width: 290, height: 455, grey: false },
  { id: "c_mariage", caption: "Guide pour préparer son mariage", width: 450, height: 640, grey: false },
  { id: "c_hema", caption: "Hématologie", width: 448, height: 640, grey: false },
  { id: "c_ortho", caption: "Orthopédie traumatologie", width: 452, height: 640, grey: false },
];

export const beauLivreCover: GraphismeImage[] = [
  { id: "b_cover", caption: "Revenir à l’olivier — couverture", width: 640, height: 640, grey: false },
];

export const beauLivreSpreads: GraphismeImage[] = [
  { id: "b_s1", caption: "Double page — avant-propos", width: 640, height: 319, grey: false },
  { id: "b_s2", caption: "Double page — texte et iconographie", width: 640, height: 320, grey: false },
];

export const avent: GraphismeImage[] = [
  { id: "f_avent", caption: "Calendrier de l’Avent 2024", width: 1600, height: 1131, grey: false },
];

export const fabrication: GraphismeImage[] = [
  { id: "f_depliant", caption: "Dépliant accordéon 3 volets", width: 640, height: 365, grey: true },
  { id: "f_mailing", caption: "Mailing papier", width: 362, height: 640, grey: true },
  { id: "f_coffret", caption: "Coffret six livres", width: 468, height: 477, grey: true },
  { id: "f_cal", caption: "Calendrier avec pages détachables", width: 585, height: 443, grey: true },
  { id: "f_nappe", caption: "Nappe promotionnelle", width: 386, height: 525, grey: true },
  { id: "f_kak", caption: "Kakémono, hauteur 2 m", width: 290, height: 640, grey: true },
];

export const posters: GraphismeImage[] = [
  { id: "k_hiphop", caption: "Affiche concert de soutien (Togo)", width: 462, height: 640, grey: false },
  { id: "k_acat", caption: "Plaquette de l’ACAT-France", width: 640, height: 460, grey: false },
];

export const catalogues: GraphismeImage[] = [
  { id: "k_cat_avent", caption: "Catalogue — Avent 2023", width: 438, height: 640, grey: false },
  { id: "k_cat1", caption: "Catalogue — automne 2021", width: 441, height: 640, grey: false },
  { id: "k_cat2", caption: "Catalogue — carême 2022", width: 441, height: 640, grey: false },
  { id: "k_soutien", caption: "Mailing — bon de soutien", width: 364, height: 640, grey: false },
  { id: "k_ete22", caption: "Catalogue — été 2022", width: 472, height: 631, grey: false },
  { id: "k_voeux", caption: "Mailing — cartes de vœux 2024", width: 1600, height: 1132, grey: false },
  { id: "k_noel", caption: "Mailing — C’est bientôt Noël", width: 477, height: 631, grey: false },
  { id: "k_cat3", caption: "Catalogue — été 2021 (double page)", width: 640, height: 430, grey: false },
];

export const plv: GraphismeImage[] = [
  { id: "p_vg", caption: "Affiche libraires — commande directe", width: 388, height: 537, grey: false },
  { id: "p_camsp", caption: "Livret d’accueil — CAMSP de Pontoise", width: 398, height: 538, grey: false },
  { id: "p_myst", caption: "Affiche de lancement — Mysterium Christi", width: 1130, height: 1600, grey: false },
  { id: "p_avent", caption: "Affiche — Avent 2024", width: 414, height: 545, grey: false },
  { id: "p_var", caption: "Affiche de lancement — Varillon", width: 1130, height: 1600, grey: false },
  { id: "p_route", caption: "Affiche — méthode de lecture", width: 396, height: 545, grey: false },
];

export const illustration: GraphismeImage[] = [
  { id: "i_taxi", caption: "Guides de voyage alternatifs — éditions Nanika", width: 640, height: 547, grey: false },
  { id: "i_guys", caption: "", width: 530, height: 640, grey: false },
  { id: "i_woman", caption: "", width: 302, height: 640, grey: false },
  { id: "i_pool", caption: "", width: 529, height: 640, grey: false },
  { id: "i_market", caption: "", width: 640, height: 559, grey: false },
  { id: "i_woman2", caption: "", width: 531, height: 640, grey: false },
  { id: "i_mask", caption: "", width: 399, height: 640, grey: false },
  { id: "i_church", caption: "", width: 619, height: 640, grey: false },
];

export const illustrationSeries: GraphismeImage[] = [
  { id: "ser_1", caption: "", width: 1307, height: 1400, grey: false },
  { id: "ser_2", caption: "", width: 1178, height: 1400, grey: false },
  { id: "ser_3", caption: "", width: 1189, height: 1400, grey: false },
  { id: "ser_4", caption: "", width: 1288, height: 1400, grey: false },
  { id: "ser_5", caption: "", width: 1395, height: 1400, grey: false },
  { id: "ser_6", caption: "", width: 1221, height: 1400, grey: false },
];

export const mascotteIcons: GraphismeImage[] = [
  { id: "ser_16", caption: "", width: 1400, height: 884, grey: false },
  { id: "ser_17", caption: "", width: 1400, height: 671, grey: false },
  { id: "ser_18", caption: "", width: 1400, height: 885, grey: false },
  { id: "ser_19", caption: "", width: 1400, height: 887, grey: false },
];

export const musiciens: GraphismeImage[] = [
  { id: "mus_1", caption: "5.6.7.8's — Festival West Side 2013", width: 924, height: 1400, grey: false },
  { id: "mus_2", caption: "Dustin Wong, l’artiste bicolore aux 1000 pédales", width: 785, height: 1400, grey: false },
  { id: "mus_3", caption: "Nisennenmondai — la charley obsessionnelle", width: 836, height: 1400, grey: false },
  { id: "mus_4", caption: "Gull — tout seul avec un masque diabolique", width: 836, height: 1400, grey: false },
  { id: "mus_5", caption: "", width: 1023, height: 1400, grey: false },
  { id: "mus_6", caption: "", width: 1020, height: 1400, grey: false },
];

export const illustrationsDiverses: GraphismeImage[] = [
  { id: "div_1", caption: "", width: 1179, height: 1400, grey: false },
  { id: "div_2", caption: "", width: 1400, height: 1400, grey: false },
  { id: "div_3", caption: "", width: 1378, height: 1400, grey: false },
  { id: "div_4", caption: "", width: 1400, height: 1400, grey: false },
  { id: "div_5", caption: "", width: 1356, height: 1400, grey: false },
  { id: "div_6", caption: "", width: 1392, height: 1400, grey: false },
];


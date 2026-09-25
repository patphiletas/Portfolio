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
  { id: "mock_eglise", caption: "", width: 495, height: 640, grey: false },
  { id: "mock_pottier", caption: "", width: 495, height: 640, grey: false },
  { id: "mock_saveur", caption: "", width: 495, height: 640, grey: false },
  { id: "mock_soubiran", caption: "", width: 495, height: 640, grey: false },
];

export const academic: GraphismeImage[] = [
  { id: "c_eco", caption: "Éco-théologie", width: 453, height: 640, grey: false },
  { id: "c_saveur", caption: "La saveur des récits évangéliques", width: 453, height: 640, grey: false },
  { id: "c_judas", caption: "Judas, mon ami", width: 453, height: 640, grey: false },
  { id: "c_eglise", caption: "Une Église se lève", width: 403, height: 640, grey: false },
  { id: "c_psy2", caption: "Psychologie et spiritualité", width: 452, height: 640, grey: false },
  { id: "c_portraits", caption: "15 portraits philosophiques du Christ", width: 453, height: 640, grey: false },
];

export const general: GraphismeImage[] = [
  { id: "c_ignace", caption: "Ignace de Loyola (bande dessinée)", width: 456, height: 640, grey: false },
  { id: "c_pape", caption: "Le pape François", width: 453, height: 640, grey: false },
  { id: "c_ecologie", caption: "Guide pratique de l’écologie intégrale", width: 404, height: 640, grey: false },
  { id: "c_politique", caption: "Politique et écologie", width: 453, height: 640, grey: false },
  { id: "c_bible", caption: "Prier avec la Bible", width: 453, height: 640, grey: false },
  { id: "c_mariage", caption: "Guide pour préparer son mariage", width: 450, height: 640, grey: false },
  { id: "c_varillon", caption: "Sept conférences inédites sur la foi", width: 387, height: 640, grey: false },
  { id: "c_oiseaux", caption: "Les oiseaux de Paris, 20e arrondissement (couverture dépliée)", width: 640, height: 444, grey: false },
];

export const medical: GraphismeImage[] = [
  { id: "c_abc", caption: "L’ABCdaire médical", width: 436, height: 640, grey: false },
  { id: "c_ophta", caption: "L’essentiel en ophtalmologie", width: 498, height: 640, grey: false },
  { id: "c_rea", caption: "L’essentiel en réanimation", width: 498, height: 640, grey: false },
  { id: "c_hge", caption: "HGE — collection de référence", width: 456, height: 640, grey: false },
  { id: "c_gyn", caption: "Gynécologie obstétrique", width: 467, height: 640, grey: false },
  { id: "c_choisir", caption: "Choisissez bien votre psy", width: 391, height: 640, grey: false },
  { id: "c_fiches", caption: "Fiches iECN de poche", width: 451, height: 640, grey: false },
  { id: "c_esthe", caption: "Médecine et chirurgie esthétiques", width: 451, height: 640, grey: false },
];

export const beauLivreCover: GraphismeImage[] = [
  { id: "b_cover", caption: "Revenir à l’olivier — couverture", width: 640, height: 640, grey: false },
];

export const beauLivreSpreads: GraphismeImage[] = [
  { id: "b_s1", caption: "Double page — avant-propos", width: 640, height: 319, grey: false },
  { id: "b_s2", caption: "Double page — texte et iconographie", width: 640, height: 320, grey: false },
];

export const avent: GraphismeImage[] = [
  { id: "f_avent", caption: "Calendrier de l’Avent 2024 — format fermé A4, 25 petites fenêtres", width: 384, height: 640, grey: true },
];

export const fabrication: GraphismeImage[] = [
  { id: "f_depliant", caption: "Dépliant accordéon 3 volets", width: 640, height: 365, grey: true },
  { id: "f_mailing", caption: "Mailing papier", width: 362, height: 640, grey: true },
  { id: "f_coffret", caption: "Coffret six livres", width: 468, height: 477, grey: true },
  { id: "f_cal", caption: "Calendrier de Carême, pages détachables à suspendre", width: 452, height: 640, grey: true },
  { id: "f_nappe", caption: "Nappe promotionnelle", width: 386, height: 525, grey: true },
  { id: "f_kak", caption: "Kakémono, hauteur 2 m", width: 290, height: 640, grey: true },
];

export const series: GraphismeImage[] = [
  { id: "k_careme1", caption: "Carême 2024 — 8 affiches A3", width: 480, height: 640, grey: false },
  { id: "k_careme2", caption: "Carême 2024 — visuel principal", width: 480, height: 640, grey: false },
  { id: "k_careme3", caption: "Carême 2024 — signets", width: 480, height: 640, grey: false },
  { id: "k_avent23", caption: "Avent 2023 — signets et affiches", width: 480, height: 640, grey: false },
];

export const posters: GraphismeImage[] = [
  { id: "k_vl1", caption: "Affiche conférence-débat", width: 453, height: 640, grey: false },
  { id: "k_vl2", caption: "Affiche conférence-débat (Rome)", width: 453, height: 640, grey: false },
  { id: "k_mend", caption: "Affiche conférence-débat", width: 453, height: 640, grey: false },
  { id: "k_voeux", caption: "Mailing — cartes de vœux 2023", width: 453, height: 640, grey: false },
  { id: "k_hiphop", caption: "Affiche concert de soutien (Togo)", width: 462, height: 640, grey: false },
  { id: "k_acat", caption: "Plaquette de l’ACAT-France", width: 640, height: 460, grey: false },
];

export const catalogues: GraphismeImage[] = [
  { id: "k_cat1", caption: "Catalogue — automne 2021", width: 441, height: 640, grey: false },
  { id: "k_cat2", caption: "Catalogue — carême 2022", width: 441, height: 640, grey: false },
  { id: "k_cat3", caption: "Catalogue — été 2021 (double page)", width: 640, height: 430, grey: false },
];

export const web: GraphismeImage[] = [
  { id: "w_ado", caption: "Bannière web — romans pour ados", width: 640, height: 161, grey: false },
  { id: "w_sint", caption: "Bannière web — Nikolaas Sintobin", width: 640, height: 161, grey: false },
];

export const plv: GraphismeImage[] = [
  { id: "p_vg", caption: "Affiche libraires — commande directe", width: 388, height: 537, grey: false },
  { id: "p_camsp", caption: "Livret d’accueil — CAMSP de Pontoise", width: 398, height: 538, grey: false },
  { id: "p_myst", caption: "Affiche de lancement — Mysterium Christi", width: 393, height: 545, grey: false },
  { id: "p_avent", caption: "Affiche — Avent 2024", width: 414, height: 545, grey: false },
  { id: "p_var", caption: "Affiche de lancement — Varillon", width: 394, height: 545, grey: false },
  { id: "p_route", caption: "Affiche — méthode de lecture", width: 396, height: 545, grey: false },
];

export const illustration: GraphismeImage[] = [
  { id: "i_taxi", caption: "Guide de voyage alternatif (éditions Nanika, 2018)", width: 640, height: 547, grey: false },
  { id: "i_guys", caption: "", width: 530, height: 640, grey: false },
  { id: "i_woman", caption: "", width: 302, height: 640, grey: false },
  { id: "i_pool", caption: "", width: 529, height: 640, grey: false },
  { id: "i_market", caption: "", width: 640, height: 559, grey: false },
  { id: "i_woman2", caption: "", width: 531, height: 640, grey: false },
  { id: "i_mask", caption: "", width: 399, height: 640, grey: false },
  { id: "i_church", caption: "", width: 619, height: 640, grey: false },
];


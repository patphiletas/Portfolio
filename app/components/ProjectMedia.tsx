"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  image: string;
  alt: string;
  sizes: string;
  /** Courte démo muette en boucle (WebM), jouée au survol ou quand la carte est visible sur mobile. */
  video?: string;
};

// Vignette du projet, avec une démo vidéo facultative :
// - la vidéo n'est téléchargée qu'au moment de la lire (preload="none") ;
// - ordinateur : lecture au survol de la carte, pause à la sortie ;
// - écran tactile : lecture quand la vignette est bien visible à l'écran ;
// - « réduire les animations » activé : on garde l'image fixe.
export default function ProjectMedia({ image, alt, sizes, video }: Props) {
  const conteneur = useRef<HTMLDivElement>(null);
  const lecteur = useRef<HTMLVideoElement>(null);
  const [reduit, setReduit] = useState(false);
  const [enLecture, setEnLecture] = useState(false);
  const actif = Boolean(video) && !reduit;

  useEffect(() => {
    const requete = window.matchMedia("(prefers-reduced-motion: reduce)");
    const suivre = () => setReduit(requete.matches);
    suivre();
    requete.addEventListener("change", suivre);
    return () => requete.removeEventListener("change", suivre);
  }, []);

  useEffect(() => {
    if (!actif) return;

    const carte = conteneur.current?.closest("article");
    const v = lecteur.current;
    if (!carte || !v) return;

    const jouer = () => {
      v.play().then(() => setEnLecture(true)).catch(() => {});
    };
    const arreter = () => {
      v.pause();
      setEnLecture(false);
    };

    if (window.matchMedia("(hover: hover)").matches) {
      carte.addEventListener("mouseenter", jouer);
      carte.addEventListener("mouseleave", arreter);
      carte.addEventListener("focusin", jouer);
      carte.addEventListener("focusout", arreter);
      return () => {
        carte.removeEventListener("mouseenter", jouer);
        carte.removeEventListener("mouseleave", arreter);
        carte.removeEventListener("focusin", jouer);
        carte.removeEventListener("focusout", arreter);
      };
    }

    const observateur = new IntersectionObserver(
      ([entree]) => (entree.isIntersecting ? jouer() : arreter()),
      { threshold: 0.6 }
    );
    observateur.observe(conteneur.current!);
    return () => observateur.disconnect();
  }, [actif]);

  return (
    <div ref={conteneur} className="absolute inset-0">
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      {video && actif && (
        <video
          ref={lecteur}
          src={video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ${
            enLecture ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      {video && actif && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-[11px] text-white transition-opacity ${
            enLecture ? "opacity-0" : "opacity-100"
          }`}
        >
          ▶ Démo
        </span>
      )}
    </div>
  );
}

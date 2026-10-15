"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { fullSrc, thumbSrc, type GraphismeImage } from "@/lib/graphisme";

type LightboxContextValue = { open: (image: GraphismeImage) => void };

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<GraphismeImage | null>(null);
  const close = useCallback(() => setCurrent(null), []);

  useEffect(() => {
    if (!current) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [current, close]);

  return (
    <LightboxContext.Provider value={{ open: setCurrent }}>
      {children}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption || "Agrandissement"}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-6"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Fermer ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={fullSrc(current.id)}
            alt={current.caption || "Réalisation graphique"}
            className="max-h-[82vh] max-w-[96vw] rounded bg-white object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          {current.caption && (
            <p className="mt-3 text-center text-sm text-zinc-300">{current.caption}</p>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}

// Le cadre paysage occupe 2 colonnes de grille (gap-4) et garde la hauteur d'un cadre portrait 5:7.
const FRAMES = {
  square: "aspect-square",
  portrait: "aspect-[5/7]",
  landscape: "h-0 pb-[calc(70%-0.7rem)]",
};

type FigureProps = {
  item: GraphismeImage;
  sizes: string;
  shape?: "square" | "portrait" | "landscape";
  className?: string;
};

export function Figure({ item, sizes, shape = "portrait", className = "" }: FigureProps) {
  const lightbox = useContext(LightboxContext);
  const label = item.caption || "Réalisation graphique";

  return (
    <figure className={`theme-surface theme-card-border flex flex-col overflow-hidden rounded-lg ${className}`}>
      <button
        type="button"
        onClick={() => lightbox?.open(item)}
        aria-label={`Agrandir : ${label}`}
        className={`relative block w-full cursor-zoom-in bg-white ${FRAMES[shape]}`}
      >
        <Image src={thumbSrc(item.id)} alt={label} fill sizes={sizes} className="object-cover" />
      </button>
      {item.caption && (
        <figcaption className="theme-text-muted line-clamp-2 px-3 py-2 text-[13px] leading-snug">
          {item.caption}
        </figcaption>
      )}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="theme-link mt-auto block border-t theme-border-subtle px-3 py-1.5 text-[11px] uppercase tracking-widest transition-colors hover:opacity-80"
        >
          Aperçu en ligne ↗
        </a>
      )}
    </figure>
  );
}

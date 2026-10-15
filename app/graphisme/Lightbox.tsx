"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { fullSrc, thumbSrc, type GraphismeImage } from "@/lib/graphisme";

type LightboxContextValue = {
  open: (image: GraphismeImage) => void;
  register: (image: GraphismeImage) => () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<GraphismeImage | null>(null);
  const [position, setPosition] = useState({ index: 0, total: 0 });
  const images = useRef(new Map<string, GraphismeImage>());
  const touchStartX = useRef<number | null>(null);
  const close = useCallback(() => setCurrent(null), []);

  const register = useCallback((image: GraphismeImage) => {
    images.current.set(image.id, image);
    return () => {
      images.current.delete(image.id);
    };
  }, []);

  // L'ordre de navigation suit l'ordre des vignettes dans la page.
  const pageOrder = useCallback(() => {
    const ids = Array.from(document.querySelectorAll<HTMLElement>("[data-lightbox-id]"), (el) => el.dataset.lightboxId!);
    return Array.from(new Set(ids));
  }, []);

  const open = useCallback(
    (image: GraphismeImage) => {
      const ids = pageOrder();
      setPosition({ index: ids.indexOf(image.id), total: ids.length });
      setCurrent(image);
    },
    [pageOrder],
  );

  const step = useCallback(
    (direction: 1 | -1) => {
      if (!current) return;
      const ids = pageOrder();
      const index = (ids.indexOf(current.id) + direction + ids.length) % ids.length;
      const next = images.current.get(ids[index]);
      if (!next) return;
      setPosition({ index, total: ids.length });
      setCurrent(next);
    },
    [current, pageOrder],
  );

  useEffect(() => {
    if (!current) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [current, close, step]);

  const arrowClass =
    "absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 px-4 py-3 text-2xl leading-none text-white hover:bg-white/10";

  return (
    <LightboxContext.Provider value={{ open, register }}>
      {children}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption || "Agrandissement"}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-6"
          onClick={close}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const dx = event.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Fermer ✕
          </button>
          <button
            type="button"
            aria-label="Image précédente"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className={`${arrowClass} left-2 sm:left-4`}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Image suivante"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className={`${arrowClass} right-2 sm:right-4`}
          >
            ›
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.id}
            src={fullSrc(current.id)}
            alt={current.caption || "Réalisation graphique"}
            className="max-h-[80vh] max-w-[86vw] rounded bg-white object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <p className="mt-3 text-center text-sm text-zinc-300">
            {current.caption && <span>{current.caption} · </span>}
            <span className="text-zinc-500">
              {position.index + 1} / {position.total}
            </span>
          </p>
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
  natural: "",
};

type FigureProps = {
  item: GraphismeImage;
  sizes: string;
  shape?: "square" | "portrait" | "landscape" | "natural";
  contain?: boolean;
  className?: string;
};

export function Figure({ item, sizes, shape = "portrait", contain = false, className = "" }: FigureProps) {
  const lightbox = useContext(LightboxContext);
  const label = item.caption || "Réalisation graphique";
  const register = lightbox?.register;

  useEffect(() => register?.(item), [register, item]);

  return (
    <figure className={`theme-surface theme-card-border flex flex-col overflow-hidden rounded-lg ${className}`}>
      <button
        type="button"
        onClick={() => lightbox?.open(item)}
        data-lightbox-id={item.id}
        aria-label={`Agrandir : ${label}`}
        className={`relative block w-full cursor-zoom-in bg-white ${FRAMES[shape]}`}
        style={shape === "natural" ? { aspectRatio: `${item.width} / ${item.height}` } : undefined}
      >
        <Image
          src={thumbSrc(item.id)}
          alt={label}
          fill
          sizes={sizes}
          className={contain ? "object-contain p-2" : shape === "square" ? "object-cover" : "object-cover object-top"}
        />
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

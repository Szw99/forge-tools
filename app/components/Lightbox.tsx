"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type LightboxProps = {
  src: string;
  alt: string;
  className?: string;
  fit?: "contain" | "cover";
};

export default function Lightbox({ src, alt, className = "", fit = "contain" }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.documentElement.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.documentElement.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open]);

  const modal = open && typeof document !== "undefined" ? createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt}>
      <div className="lightbox-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button ref={closeRef} type="button" className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close image">×</button>
        <Image src={src} alt={alt} fill sizes="92vw" className="lightbox-image" priority />
      </div>
    </div>,
    document.body
  ) : null;

  return <>
    <button type="button" className={`image-trigger ${className}`} onClick={() => setOpen(true)} aria-label={`View larger image: ${alt}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 650px) 92vw, 50vw" className={fit === "cover" ? "image-cover" : "image-contain"} />
    </button>
    {modal}
  </>;
}

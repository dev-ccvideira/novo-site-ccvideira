"use client";

import { useState } from "react";

type ClickToPlayVideoProps = {
  src: string;
  poster: string;
  title: string;
  className?: string;
  mediaClassName?: string;
};

export function ClickToPlayVideo({ src, poster, title, className = "", mediaClassName = "" }: ClickToPlayVideoProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {playing ? (
        <video
          src={src}
          className={`w-full bg-black ${mediaClassName}`}
          controls
          autoPlay
          playsInline
          aria-label={title}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative block w-full bg-black text-white"
          aria-label={`Reproduzir vídeo: ${title}`}
        >
          <img src={poster} alt={title} className={`w-full bg-black ${mediaClassName}`} />
          <span className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" aria-hidden="true" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-300 text-black shadow-soft transition group-hover:scale-105 group-hover:bg-white">
            <span
              className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-black"
              aria-hidden="true"
            />
          </span>
        </button>
      )}
    </div>
  );
}

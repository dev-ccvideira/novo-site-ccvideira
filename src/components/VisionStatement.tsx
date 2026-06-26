"use client";

import { useEffect, useRef, useState } from "react";

const visionLines = [
  "Eu vejo...",
  "Uma igreja onde cada membro é conhecido por Deus através de um profundo relacionamento com Ele.",
  "Uma igreja onde cada um é conhecedor e praticante da Palavra de Deus."
];

export function VisionStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    section.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    section.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }

  return (
    <section
      id="visao-da-casa"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-white py-24 text-stonewarm-900 sm:py-32"
      style={{
        background:
          "radial-gradient(circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(230, 193, 90, 0.24), transparent 28rem), #fff"
      }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vine-900/15 to-transparent" />

      <div className="container-page relative z-10 mx-auto max-w-5xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.32em] text-gold-300">Visao da casa</p>
        <div className="mt-8 grid gap-5">
          {visionLines.map((line, index) => (
            <p
              key={line}
              className={`transform-gpu font-heading font-black leading-tight tracking-tight transition-all duration-700 ${
                index === 0 ? "text-5xl text-gold-500 sm:text-7xl" : "text-2xl text-stonewarm-900 sm:text-4xl"
              } ${visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-sm"}`}
              style={{ transitionDelay: `${index * 160}ms` }}
            >
              {line}
            </p>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="/images/home/eu-vejo.pdf"
            download
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-gold-300 px-8 py-3 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_18px_40px_rgba(230,193,90,0.28)] transition hover:-translate-y-0.5 hover:bg-gold-400"
          >
            Baixar texto completo
          </a>
        </div>
      </div>
    </section>
  );
}

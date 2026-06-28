import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A13",
  description: "Página institucional do ministério A13 da CCVideira."
};

export default function A13Page() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-24 text-white">
      <video
        src="/videos/a13.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        controls
        playsInline
        preload="metadata"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/76 via-black/38 to-black/10" />

      <div className="container-page pointer-events-none relative z-10 flex min-h-[calc(100svh-96px)] items-start pt-20 sm:pt-24">
        <div className="max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-gold-300">Ministério</p>
          <h1 className="mt-5 text-6xl font-black uppercase tracking-tight sm:text-8xl lg:text-9xl">A13</h1>
        </div>
      </div>
    </section>
  );
}

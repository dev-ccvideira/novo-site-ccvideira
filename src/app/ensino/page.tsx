import type { Metadata } from "next";
import { TeachingCards, TeachingHero } from "./_components/TeachingPage";

export const metadata: Metadata = {
  title: "Ensino",
  description: "Cursos, discipulado e formações da CCVideira."
};

export default function TeachingPage() {
  return (
    <>
      <TeachingHero
        title="Ensino, discipulado e formação"
        text="Uma área preparada para reunir cursos, trilhas de crescimento, formações bíblicas e jornadas para diferentes fases da vida."
      />

      <section className="bg-stonewarm-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Trilhas de ensino</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Escolha uma jornada para crescer.
            </h2>
          </div>
          <div className="mt-10">
            <TeachingCards />
          </div>
        </div>
      </section>
    </>
  );
}

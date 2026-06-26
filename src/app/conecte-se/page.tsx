import type { Metadata } from "next";
import { ConnectCards, ConnectHero } from "./_components/ConnectPage";

export const metadata: Metadata = {
  title: "Conecte-se",
  description: "Canais, eventos, podcast e aplicativo da CCVideira."
};

export default function ConnectPage() {
  return (
    <>
      <ConnectHero
        title="Caminhos para ficar perto da casa"
        text="Encontre canais oficiais, agenda, podcast e recursos digitais para acompanhar a CCVideira durante a semana."
      />

      <section className="bg-stonewarm-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Conexões</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Escolha como deseja se conectar.
            </h2>
          </div>
          <div className="mt-10">
            <ConnectCards />
          </div>
        </div>
      </section>
    </>
  );
}

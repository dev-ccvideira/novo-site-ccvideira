import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ao vivo",
  description: "Transmissão online da CCVideira, programação, oração, decisão por Jesus e generosidade."
};

export default function LivePage() {
  return (
    <>
      <PageHero
        eyebrow="Ao vivo"
        title="Cultos online"
        text="[Inserir programação dos cultos online e link oficial de transmissão.]"
        primary={{ href: "/pedido-de-oracao", label: "Pedido de oração" }}
        secondary={{ href: "/generosidade", label: "Generosidade" }}
      />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="image-wash grid aspect-video place-items-center rounded-lg text-center text-white shadow-soft">
            <div>
              <p className="text-2xl font-black">Player do YouTube</p>
              <p className="mt-2 text-vine-50">[Inserir link/embed oficial do YouTube]</p>
            </div>
          </div>
          <aside className="grid gap-4">
            <ButtonLink href="/pedido-de-oracao" variant="primary">
              Enviar pedido de oração
            </ButtonLink>
            <ButtonLink href="/proximos-passos" variant="ghost">
              Decidi seguir Jesus
            </ButtonLink>
            <ButtonLink href="/generosidade" variant="secondary">
              Contribuir
            </ButtonLink>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-vine-900">Programação</h2>
              <p className="mt-3 text-stonewarm-700">[Inserir dias e horários das transmissões]</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

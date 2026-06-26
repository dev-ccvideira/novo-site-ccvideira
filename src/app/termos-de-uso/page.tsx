import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Termos de uso editáveis da CCVideira."
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Termos"
        title="Termos de uso"
        text="[Inserir termos oficiais revisados pela liderança e assessoria jurídica antes da publicação.]"
      />
      <section className="py-16">
        <div className="container-page max-w-3xl rounded-lg bg-white p-6 leading-7 text-stonewarm-700 shadow-sm">
          [Inserir regras de uso do site, responsabilidades, links externos, conteúdos, formulários e contatos.]
        </div>
      </section>
    </>
  );
}

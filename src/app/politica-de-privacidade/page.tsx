import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Política de privacidade editável da CCVideira."
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de privacidade"
        text="[Inserir política oficial de privacidade revisada juridicamente antes da publicação.]"
      />
      <section className="py-16">
        <div className="container-page max-w-3xl rounded-lg bg-white p-6 leading-7 text-stonewarm-700 shadow-sm">
          [Inserir texto oficial sobre tratamento de dados, formulários, cookies, analytics, contato e direitos do titular.]
        </div>
      </section>
    </>
  );
}

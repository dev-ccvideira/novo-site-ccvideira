import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Generosidade",
  description: "Contribuições, dízimos, ofertas e campanhas da CCVideira com campos editáveis no CMS."
};

export default function GenerosityPage() {
  return (
    <>
      <PageHero
        eyebrow="Generosidade"
        title="Contribuir para alcançar novas vidas"
        text="[Inserir mensagem pastoral oficial sobre generosidade, responsabilidade, gratidão e cuidado com pessoas.]"
        primary={{ href: "#formas", label: "Contribuir agora" }}
        secondary={{ href: "/projetos-sociais", label: "Projetos sociais" }}align="left"
        contentClassName="flex min-h-[360px] flex-col justify-left py-28 sm:min-h-[440px] sm:py-36"
      />
      <section id="formas" className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Formas de contribuição"
            title="Dados editáveis e publicados somente após validação"
            description="Não há dados bancários reais no código. Pix, links e campanhas entram pelo CMS depois de aprovados pela liderança."
          />
          <div className="grid gap-4">
            {["Pix: [Inserir chave Pix]", "Cartão: [Inserir link autorizado]", "Transferência: [Inserir dados validados]", "Presencial: [Inserir orientação]"].map(
              (item) => (
                <div key={item} className="rounded-lg border border-vine-900/10 bg-white p-5 text-lg font-bold text-vine-900">
                  {item}
                </div>
              )
            )}
            <ButtonLink href="#" variant="secondary">
              [Inserir link de contribuição]
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Transparência"
            title="Sua generosidade apoia pessoas e a missão"
            description="Projetos sociais, missões, campus, discipulado, crianças, jovens, comunicação e expansão da igreja podem ser destacados aqui."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Campanhas ativas", "Perguntas frequentes", "Relatórios e testemunhos"].map((item) => (
              <div key={item} className="rounded-lg bg-vine-50 p-6">
                <h3 className="text-xl font-black text-vine-900">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-stonewarm-700">[Inserir conteúdo editável]</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteForm } from "@/components/forms/SiteForm";
import { campusOptionsFromCampuses, makeContactFields, makeVisitFields } from "@/components/forms/formFields";
import { siteSettings } from "@/lib/site";
import { getCampuses } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a CCVideira, planeje uma visita e encontre contatos dos campus."
};

export default async function ContactPage() {
  const campusOptions = campusOptionsFromCampuses(await getCampuses());

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Estamos aqui para caminhar com você"
        text="Envie uma mensagem, planeje sua visita ou fale com um campus. Os formulários podem salvar no CMS e enviar e-mail para a equipe."
      />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-8">
            <SiteForm formType="contato" title="Formulário de contato" fields={makeContactFields(campusOptions)} />
            <SiteForm
              formType="planeje-visita"
              title="Planeje sua visita"
              description="Conte para a equipe quando você pretende vir e como podemos ajudar."
              fields={makeVisitFields(campusOptions)}
            />
          </div>
          <aside className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-vine-900">Informações</h2>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-stonewarm-700">
              <li>WhatsApp: {siteSettings.phone}</li>
              <li>E-mail: {siteSettings.email}</li>
              <li>Endereço: [Inserir endereço principal]</li>
              <li>Mapa: [Inserir mapa integrado]</li>
              <li>Redes sociais: [Inserir links oficiais]</li>
              <li>Atendimento: [Inserir horários]</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

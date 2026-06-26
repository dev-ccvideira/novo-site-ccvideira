import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteForm } from "@/components/forms/SiteForm";
import { campusOptionsFromCampuses, makeNextStepFields } from "@/components/forms/formFields";
import { getCampuses } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Grupos de crescimento",
  description: "Grupos nos lares, grupos de comunhão e formulário de interesse por região."
};

export default async function GroupsPage() {
  const campusOptions = campusOptionsFromCampuses(await getCampuses());

  return (
    <>
      <PageHero
        eyebrow="Grupos"
        title="Crescer em comunhão durante a semana"
        text="[Inserir explicação oficial sobre grupos de crescimento, onde acontecem, como participar e como encontrar um grupo por região.]"
      />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {["O que são", "Como participar", "Onde acontecem", "Lista por região"].map((item) => (
              <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
                <h2 className="text-xl font-black text-vine-900">{item}</h2>
                <p className="mt-2 text-sm leading-6 text-stonewarm-700">[Inserir conteúdo editável]</p>
              </div>
            ))}
          </div>
          <SiteForm formType="proximos-passos" title="Quero participar de um grupo" fields={makeNextStepFields(campusOptions)} />
        </div>
      </section>
    </>
  );
}

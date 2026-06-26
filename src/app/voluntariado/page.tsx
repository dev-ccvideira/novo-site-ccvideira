import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteForm } from "@/components/forms/SiteForm";
import { campusOptionsFromCampuses, makeVolunteerFields } from "@/components/forms/formFields";
import { getCampuses } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Voluntariado",
  description: "Formulário para servir em áreas da igreja, projetos sociais e campus."
};

export default async function VolunteerPage() {
  const campusOptions = campusOptionsFromCampuses(await getCampuses());

  return (
    <>
      <PageHero
        eyebrow="Faça sua parte"
        title="Servir também é construir casa"
        text="[Inserir convite oficial para voluntariado, áreas de serviço, cultura de equipe e próximos passos.]"
      />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {["Recepção", "Crianças", "Jovens", "Adoração", "Mídia", "Social", "Intercessão", "Ensino"].map((area) => (
              <div key={area} className="rounded-lg bg-white p-5 shadow-sm">
                <h2 className="text-xl font-black text-vine-900">{area}</h2>
                <p className="mt-2 text-sm leading-6 text-stonewarm-700">[Inserir descrição da área]</p>
              </div>
            ))}
          </div>
          <SiteForm formType="voluntariado" title="Quero servir" fields={makeVolunteerFields(campusOptions)} />
        </div>
      </section>
    </>
  );
}

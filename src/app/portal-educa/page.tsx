import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteForm } from "@/components/forms/SiteForm";
import { campusOptionsFromCampuses, makeNextStepFields } from "@/components/forms/formFields";
import { getCampuses } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Portal Educa",
  description: "Cursos, escola bíblica, discipulado e formações da CCVideira."
};

export default async function EducationPage() {
  const campusOptions = campusOptionsFromCampuses(await getCampuses());

  return (
    <>
      <PageHero
        eyebrow="Portal Educa"
        title="Cursos, discipulado e formação"
        text="[Inserir apresentação oficial da escola bíblica, cursos, trilhas de discipulado e formações.]"
      />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {["Escola bíblica", "Discipulado", "Cursos de liderança", "Formações por ministério"].map((item) => (
              <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
                <h2 className="text-xl font-black text-vine-900">{item}</h2>
                <p className="mt-2 text-sm leading-6 text-stonewarm-700">[Inserir descrição e link de inscrição]</p>
              </div>
            ))}
          </div>
          <SiteForm formType="proximos-passos" title="Tenho interesse em cursos" fields={makeNextStepFields(campusOptions)} />
        </div>
      </section>
    </>
  );
}

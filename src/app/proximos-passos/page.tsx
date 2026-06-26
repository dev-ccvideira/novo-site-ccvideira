import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteForm } from "@/components/forms/SiteForm";
import { campusOptionsFromCampuses, makeNextStepFields } from "@/components/forms/formFields";
import { nextSteps } from "@/lib/site";
import { getCampuses } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Próximos passos",
  description: "Decisão por Jesus, batismo, grupos, voluntariado e cuidado pastoral."
};

export default async function NextStepsPage() {
  const campusOptions = campusOptionsFromCampuses(await getCampuses());

  return (
    <>
      <PageHero
        eyebrow="Próximos passos"
        title="Um caminho claro para continuar"
        text="Se você chegou agora, tomou uma decisão por Jesus ou quer servir, este é o lugar para dar o próximo passo."
        align="left"
        contentClassName="flex min-h-[360px] flex-col justify-left py-28 sm:min-h-[440px] sm:py-36"
      />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {nextSteps.map((step) => (
              <div key={step} className="rounded-lg bg-white p-5 shadow-sm">
                <h2 className="text-xl font-black text-vine-900">{step}</h2>
                <p className="mt-2 text-sm leading-6 text-stonewarm-700">[Inserir texto e orientações deste passo]</p>
              </div>
            ))}
          </div>
          <SiteForm formType="proximos-passos" title="Formulário de conexão" fields={makeNextStepFields(campusOptions)} />
        </div>
      </section>
    </>
  );
}

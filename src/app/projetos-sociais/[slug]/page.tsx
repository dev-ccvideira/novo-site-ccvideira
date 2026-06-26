import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SiteForm } from "@/components/forms/SiteForm";
import { campusOptionsFromCampuses, makeVolunteerFields } from "@/components/forms/formFields";
import { getCampuses, getSocialProject } from "@/sanity/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getSocialProject(slug);
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [project, campuses] = await Promise.all([getSocialProject(slug), getCampuses()]);
  const campusOptions = campusOptionsFromCampuses(campuses);

  return (
    <>
      <PageHero
        eyebrow="Projeto social"
        title={project.title}
        text={project.description}
        primary={{ href: "#voluntario", label: "Quero ajudar" }}
        secondary={{ href: project.donationUrl || "/generosidade", label: "Contribuir" }}
      />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-vine-900">Informações</h2>
            <ul className="mt-5 grid gap-4 text-stonewarm-700">
              <li>
                <strong>Objetivo:</strong> {project.objective}
              </li>
              <li>
                <strong>Público atendido:</strong> {project.audience}
              </li>
              <li>
                <strong>Responsável:</strong> {project.leader}
              </li>
              <li>
                <strong>Como ajudar:</strong> {project.howToHelp}
              </li>
            </ul>
            <div className="mt-6">
              <ButtonLink href={project.donationUrl || "/generosidade"} variant="secondary">
                Contribuir com este projeto
              </ButtonLink>
            </div>
          </aside>
          <div id="voluntario">
            <SiteForm formType="voluntariado" title="Formulário de voluntariado" fields={makeVolunteerFields(campusOptions)} />
          </div>
        </div>
      </section>
    </>
  );
}

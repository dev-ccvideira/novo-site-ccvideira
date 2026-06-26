import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteForm } from "@/components/forms/SiteForm";
import { campusOptionsFromCampuses, makeVolunteerFields } from "@/components/forms/formFields";
import { getCampuses, getMinistry } from "@/sanity/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ministry = await getMinistry(slug);
  return { title: ministry.title, description: ministry.description };
}

export default async function MinistryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [ministry, campuses] = await Promise.all([getMinistry(slug), getCampuses()]);
  const campusOptions = campusOptionsFromCampuses(campuses);

  return (
    <>
      <PageHero
        eyebrow="Ministério"
        title={ministry.title}
        text={ministry.description}
        primary={{ href: "#servir", label: "Quero participar" }}
      />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-vine-900">Sobre esta área</h2>
            <p className="mt-4 text-stonewarm-700">Público: {ministry.audience}</p>
            <p className="mt-2 text-stonewarm-700">Líder: {ministry.leader}</p>
          </aside>
          <div id="servir">
            <SiteForm formType="voluntariado" title="Tenho interesse em servir" fields={makeVolunteerFields(campusOptions)} />
          </div>
        </div>
      </section>
    </>
  );
}

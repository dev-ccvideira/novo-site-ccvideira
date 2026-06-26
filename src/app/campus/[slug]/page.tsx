import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { InfoBand } from "@/components/InfoBand";
import { PageHero } from "@/components/PageHero";
import { SiteForm } from "@/components/forms/SiteForm";
import { campusOptionsFromCampuses, makeVisitFields } from "@/components/forms/formFields";
import { getCampus, getCampuses } from "@/sanity/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const campus = await getCampus(slug);
  return { title: campus.title, description: campus.intro };
}

export default async function CampusDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [campus, campuses] = await Promise.all([getCampus(slug), getCampuses()]);
  const campusOptions = campusOptionsFromCampuses(campuses);

  return (
    <>
      <PageHero
        eyebrow={`${campus.city}/${campus.state}`}
        title={campus.title}
        text={campus.intro}
        primary={{ href: "#visita", label: "Planejar visita" }}
        secondary={{ href: campus.mapUrl || "#", label: "Como chegar" }}
      />
      <section className="py-16">
        <div className="container-page grid gap-8">
          <InfoBand
            items={[
              { label: "Endereço", value: campus.address },
              { label: "Horários", value: campus.serviceTimes.join(" / ") },
              { label: "Liderança", value: campus.leader },
              { label: "Contato", value: campus.whatsapp }
            ]}
          />
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-vine-900">Fale com este campus</h2>
              <p className="mt-3 text-stonewarm-700">WhatsApp: {campus.whatsapp}</p>
              <p className="mt-2 text-stonewarm-700">E-mail: {campus.email}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href={campus.mapUrl || "#"} variant="ghost">
                  Como chegar
                </ButtonLink>
                <ButtonLink href="/contato" variant="primary">
                  Contato
                </ButtonLink>
              </div>
            </div>
            <div id="visita">
              <SiteForm formType="planeje-visita" title="Planeje sua visita" fields={makeVisitFields(campusOptions)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

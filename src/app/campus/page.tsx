import type { Metadata } from "next";
import { CampusCard } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { getCampuses } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Campus",
  description: "Lista de campus da CCVideira com endereços, horários e contatos editáveis."
};

export default async function CampusesPage() {
  const campuses = await getCampuses();

  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="Encontre um campus da CCVideira"
        text="Cada campus tem sua própria página com endereço, horários, liderança, contatos e chamada para planejar visita."
        primary={{ href: "/contato", label: "Planejar visita" }}
        align="left"
        contentClassName="flex min-h-[360px] flex-col justify-left py-28 sm:min-h-[440px] sm:py-36"
      />
      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {campuses.map((campus) => (
            <CampusCard key={campus.slug} campus={campus} />
          ))}
        </div>
      </section>
    </>
  );
}

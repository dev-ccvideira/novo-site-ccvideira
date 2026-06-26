import type { Metadata } from "next";
import { EventCard } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { getEvents } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Agenda de eventos da CCVideira com datas, locais, campus e inscrições."
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <PageHero
        eyebrow="Eventos"
        title="Agenda da CCVideira"
        text="Eventos, cursos, encontros e campanhas podem ser publicados como rascunho ou publicado pelo painel."
      />
      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}

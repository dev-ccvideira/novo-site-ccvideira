import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { getEvent } from "@/sanity/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  return { title: event.title, description: event.description };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEvent(slug);

  return (
    <>
      <PageHero
        eyebrow={`${event.date} · ${event.time}`}
        title={event.title}
        text={event.description}
        primary={{ href: event.registrationUrl || "#", label: "Participar" }}
      />
      <section className="py-16">
        <div className="container-page rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-vine-900">Informações do evento</h2>
          <ul className="mt-5 grid gap-3 text-stonewarm-700">
            <li>Data: {event.date}</li>
            <li>Horário: {event.time}</li>
            <li>Local: {event.location}</li>
            <li>Campus: {event.campus}</li>
          </ul>
          <div className="mt-6">
            <ButtonLink href={event.registrationUrl || "#"} variant="secondary">
              Link de inscrição
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

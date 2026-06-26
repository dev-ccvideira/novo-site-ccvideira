import Link from "next/link";
import type { Campus, EventItem, ImageValue, Ministry, Sermon, SocialProject } from "@/lib/types";
import { AnimatedSection } from "./AnimatedSection";
import { ButtonLink } from "./ButtonLink";
import { VisualPlaceholder } from "./VisualPlaceholder";

function CardMedia({ image, label }: { image?: ImageValue; label: string }) {
  if (image?.url) {
    return (
      <img
        src={image.url}
        alt={image.alt || label}
        className="h-52 w-full object-cover"
        loading="lazy"
      />
    );
  }

  return <VisualPlaceholder label={label} className="min-h-52 rounded-none shadow-none" />;
}

export function CampusCard({ campus }: { campus: Campus }) {
  return (
    <AnimatedSection
      as="article"
      className="overflow-hidden rounded-lg border border-vine-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <CardMedia image={campus.image} label={`Foto do ${campus.title}`} />
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">
          {campus.city}/{campus.state}
        </p>
        <h3 className="mt-2 text-2xl font-black text-vine-900">{campus.title}</h3>
        <p className="mt-3 text-sm leading-6 text-stonewarm-700">{campus.address}</p>
        <ul className="mt-4 grid gap-2 text-sm font-semibold text-stonewarm-700">
          {campus.serviceTimes.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <ButtonLink href={`/campus/${campus.slug}`} variant="primary">
            Ver campus
          </ButtonLink>
          <ButtonLink href={campus.mapUrl || "#"} variant="ghost">
            Como chegar
          </ButtonLink>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function EventCard({ event }: { event: EventItem }) {
  return (
    <AnimatedSection
      as="article"
      className="overflow-hidden rounded-lg border border-vine-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <CardMedia image={event.image} label={`Imagem do evento ${event.title}`} />
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">
          {event.date} - {event.time}
        </p>
        <h3 className="mt-3 text-2xl font-black text-vine-900">{event.title}</h3>
        <p className="mt-2 text-sm font-semibold text-stonewarm-700">
          {event.location} - {event.campus}
        </p>
        <p className="mt-4 text-sm leading-6 text-stonewarm-700">{event.description}</p>
        <Link className="mt-5 inline-flex text-sm font-bold text-vine-700" href={`/eventos/${event.slug}`}>
          Ver detalhes
        </Link>
      </div>
    </AnimatedSection>
  );
}

export function ProjectCard({ project }: { project: SocialProject }) {
  return (
    <AnimatedSection
      as="article"
      className="overflow-hidden rounded-lg border border-vine-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <CardMedia image={project.image} label={`Imagem do projeto ${project.title}`} />
      <div className="p-6">
        <h3 className="text-2xl font-black text-vine-900">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-stonewarm-700">{project.description}</p>
        <p className="mt-4 text-sm font-bold text-stonewarm-900">Como ajudar: {project.howToHelp}</p>
        <Link className="mt-5 inline-flex text-sm font-bold text-vine-700" href={`/projetos-sociais/${project.slug}`}>
          Conhecer projeto
        </Link>
      </div>
    </AnimatedSection>
  );
}

export function SermonCard({ sermon }: { sermon: Sermon }) {
  return (
    <AnimatedSection
      as="article"
      className="overflow-hidden rounded-lg border border-vine-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <CardMedia image={sermon.image} label={`Capa da mensagem ${sermon.title}`} />
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">{sermon.series}</p>
        <h3 className="mt-3 text-2xl font-black text-vine-900">{sermon.title}</h3>
        <p className="mt-2 text-sm font-semibold text-stonewarm-700">
          {sermon.speaker} - {sermon.date}
        </p>
        <p className="mt-4 text-sm leading-6 text-stonewarm-700">{sermon.description}</p>
        <Link className="mt-5 inline-flex text-sm font-bold text-vine-700" href={`/mensagens/${sermon.slug}`}>
          Assistir mensagem
        </Link>
      </div>
    </AnimatedSection>
  );
}

export function MinistryCard({ ministry }: { ministry: Ministry }) {
  return (
    <AnimatedSection
      as="article"
      className="overflow-hidden rounded-lg border border-vine-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <CardMedia image={ministry.image} label={`Imagem do ministério ${ministry.title}`} />
      <div className="p-6">
        <h3 className="text-2xl font-black text-vine-900">{ministry.title}</h3>
        <p className="mt-3 text-sm leading-6 text-stonewarm-700">{ministry.description}</p>
        <p className="mt-4 text-sm font-semibold text-stonewarm-700">Público: {ministry.audience}</p>
        <Link className="mt-5 inline-flex text-sm font-bold text-vine-700" href={`/ministerios/${ministry.slug}`}>
          Ver ministério
        </Link>
      </div>
    </AnimatedSection>
  );
}

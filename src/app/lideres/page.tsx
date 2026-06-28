import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import type { ImageValue } from "@/lib/types";
import { getCampuses, getLeaderPageContent } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Líderes",
  description: "Conheça os líderes dos campus da CCVideira, com perfil pessoal, foto e Instagram."
};

type LeaderCardProps = {
  category: string;
  name: string;
  context: string;
  bio: string;
  photo?: ImageValue;
  photoLabel: string;
  instagram?: string;
  instagram2?: string;
  campusHref?: string;
};

function LeaderPhoto({ image, label }: { image?: ImageValue; label: string }) {
  if (image?.url) {
    return (
      <img
        src={image.url}
        alt={image.alt || label}
        className="aspect-[4/5] min-h-[420px] w-full object-cover lg:h-full lg:min-h-[480px]"
        loading="lazy"
      />
    );
  }

  return <VisualPlaceholder label={label} className="aspect-[4/5] min-h-[420px] rounded-none shadow-none lg:min-h-[480px]" />;
}

function InstagramSlot({ href, fallback, label }: { href?: string; fallback: string; label: string }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-vine-900/15 px-5 py-2.5 text-sm font-bold text-vine-900 transition hover:bg-vine-50"
      >
        {label}
      </a>
    );
  }

  return (
    <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-dashed border-vine-900/20 px-5 py-2.5 text-sm font-bold text-stonewarm-500">
      {fallback}
    </span>
  );
}

function getFirstNameAfterPrefix(name: string, prefix: "Pr" | "Pra") {
  const match =
    prefix === "Pr"
      ? name.match(/Pr\.?\s+(.+?)(?:\s+e\s+Pra\.?|\s+Pra\.?|,|\/|&|$)/i)
      : name.match(/Pra\.?\s+(.+?)(?:,|\/|&|$)/i);

  return match?.[1]?.trim().split(/\s+/)[0];
}

function getInstagramLabels(name: string) {
  const normalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  if (/\bpr\.?\s+lucas\s+costa\b/.test(normalizedName)) {
    return ["Instagram Videira Eusébio", "Instagram Lucas"];
  }

  const pastorName = getFirstNameAfterPrefix(name, "Pr");
  const pastorWifeName = getFirstNameAfterPrefix(name, "Pra");

  return [
    pastorName ? `Instagram ${pastorName}` : "Instagram 1",
    pastorWifeName ? `Instagram ${pastorWifeName}` : "Instagram 2"
  ];
}

function LeaderCard({ category, name, context, bio, photo, photoLabel, instagram, instagram2, campusHref }: LeaderCardProps) {
  const [instagramLabel, instagramLabel2] = getInstagramLabels(name);

  return (
    <article className="grid overflow-hidden rounded-lg border border-vine-900/10 bg-white shadow-sm lg:grid-cols-[0.75fr_1.25fr]">
      <LeaderPhoto image={photo} label={photoLabel} />

      <div className="flex flex-col justify-center p-7 sm:p-10">
        <p className="text-xs font-black uppercase tracking-[0.26em] text-gold-500">{category}</p>
        <h3 className="mt-3 text-3xl font-black tracking-tight text-vine-900 sm:text-4xl">{name}</h3>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-stonewarm-500">{context}</p>
        <p className="mt-6 text-base leading-8 text-stonewarm-700">{bio}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          {campusHref ? (
            <Link
              href={campusHref}
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-vine-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-black"
            >
              Ver campus
            </Link>
          ) : null}
          <InstagramSlot href={instagram} label={instagramLabel} fallback={`[Inserir ${instagramLabel}]`} />
          <InstagramSlot href={instagram2} label={instagramLabel2} fallback={`[Inserir ${instagramLabel2}]`} />
        </div>
      </div>
    </article>
  );
}

export default async function LeadersPage() {
  const [campuses, pageContent] = await Promise.all([
    getCampuses(),
    getLeaderPageContent({
      pageKey: "lideres",
      headline: "Pessoas que cuidam da casa",
      subheadline:
        "Espaço preparado para apresentar os líderes de cada campus, suas histórias, responsabilidades pastorais e canais oficiais de contato."
    })
  ]);

  return (
    <>
      <PageHero
        eyebrow="Líderes"
        title={pageContent.headline || "Pessoas que cuidam da casa"}
        text={
          pageContent.subheadline ||
          "Espaço preparado para apresentar os líderes de cada campus, suas histórias, responsabilidades pastorais e canais oficiais de contato."
        }
        align="left"
        contentClassName="flex min-h-[360px] flex-col justify-left py-28 sm:min-h-[440px] sm:py-36"
      />

      <section className="bg-stonewarm-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-gold-500">Por campus</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Liderança local, cuidado pessoal e visão compartilhada.
            </h2>
          </div>

          <div className="mt-12 grid gap-8">
            <LeaderCard
              category="Liderança Sênior"
              name={pageContent.seniorLeaderName || "[Inserir nome do líder sênior]"}
              context="CCVideira"
              bio={
                pageContent.seniorLeaderBio ||
                "[Inserir texto de descrição do perfil pessoal do líder sênior: história, família, chamado, visão pastoral e uma mensagem de acolhimento para toda a igreja.]"
              }
              photo={pageContent.seniorLeaderPhoto}
              photoLabel="Foto oficial do líder sênior da CCVideira"
              instagram={pageContent.seniorLeaderInstagram}
              instagram2={pageContent.seniorLeaderInstagram2}
            />

            {campuses.map((campus) => (
              <LeaderCard
                key={campus.slug}
                category={`${campus.city}/${campus.state}`}
                name={campus.leader && !campus.leader.includes("[") ? campus.leader : "[Inserir nome dos líderes]"}
                context={campus.title}
                bio={
                  campus.leaderBio ||
                  "[Inserir texto de descrição do perfil pessoal dos líderes: história, família, chamado, área de cuidado, tempo de caminhada com a igreja e uma mensagem de acolhimento para quem visita este campus.]"
                }
                photo={campus.leaderPhoto}
                photoLabel={`Foto oficial dos líderes do ${campus.title}`}
                instagram={campus.leaderInstagram}
                instagram2={campus.leaderInstagram2}
                campusHref={`/campus/${campus.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

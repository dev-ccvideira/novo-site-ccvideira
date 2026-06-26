import type { Metadata } from "next";
import { SermonCard } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { getSermons } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Mensagens",
  description: "Mensagens, sermões e séries com integração de YouTube, categorias e filtros futuros."
};

export default async function SermonsPage() {
  const sermons = await getSermons();

  return (
    <>
      <PageHero
        eyebrow="Mensagens"
        title="Palavra para crescer e praticar"
        primary={{ href: "https://www.youtube.com/@CCVideiraOnline", label: "CCVideira no YouTube" }}
        align="left"
        contentClassName="flex min-h-[360px] flex-col justify-left py-28 sm:min-h-[440px] sm:py-36"
      />
      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {sermons.map((sermon) => (
            <SermonCard key={sermon.slug} sermon={sermon} />
          ))}
        </div>
      </section>
    </>
  );
}

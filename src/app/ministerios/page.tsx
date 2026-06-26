import type { Metadata } from "next";
import { MinistryCard } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { getMinistries } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Ministérios",
  description: "Áreas da igreja: crianças, jovens, mulheres, homens, casais, adoração, ensino, social e mais."
};

export default async function MinistriesPage() {
  const ministries = await getMinistries();

  return (
    <>
      <PageHero
        eyebrow="Ministérios"
        title="Conecte-se, cresça e sirva"
        text="Ministérios editáveis para apresentar áreas da igreja, público, liderança e formas de participação."
        align="left"
        contentClassName="flex min-h-[360px] flex-col justify-left py-28 sm:min-h-[440px] sm:py-36"
      />
      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <MinistryCard key={ministry.slug} ministry={ministry} />
          ))}
        </div>
      </section>
    </>
  );
}

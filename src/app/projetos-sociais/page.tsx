import type { Metadata } from "next";
import { ProjectCard } from "@/components/CardGrid";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { getSocialProjects } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Projetos sociais",
  description: "Projetos sociais, campanhas solidárias, voluntariado e doações da CCVideira."
};

export default async function SocialProjectsPage() {
  const projects = await getSocialProjects();

  return (
    <>
      <PageHero
        eyebrow="Projetos sociais"
        title="Generosidade que transforma vidas"
        text="[Inserir introdução oficial sobre a atuação social da CCVideira, famílias atendidas, campanhas e voluntariado.]"
        primary={{ href: "/voluntariado", label: "Quero ajudar" }}
        secondary={{ href: "/generosidade", label: "Contribuir" }}
        align="left"
        contentClassName="flex min-h-[360px] flex-col justify-left py-28 sm:min-h-[440px] sm:py-36"
      />
      <section className="py-16">
        <div className="container-page">
          <SectionHeader
            title="Projetos ativos"
            description="Cada projeto pode ter página própria com objetivo, público atendido, fotos, vídeos, responsável e formulário."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Sirva pessoas com a sua disponibilidade"
        text="Voluntários podem se cadastrar por campus, área de interesse e disponibilidade."
        primaryLabel="Quero ser voluntário"
        primaryHref="/voluntariado"
        secondaryLabel="Fazer uma doação"
        secondaryHref="/generosidade"
      />
    </>
  );
}

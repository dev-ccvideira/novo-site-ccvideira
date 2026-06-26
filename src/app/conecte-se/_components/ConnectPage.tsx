import Link from "next/link";

type ConnectHeroProps = {
  title: string;
  eyebrow?: string;
  text?: string;
};

type ConnectTemplateProps = {
  title: string;
  description: string;
  sections: string[];
};

export const connectPages = [
  {
    title: "Redes Sociais",
    href: "/conecte-se/redes-sociais",
    description:
      "Modelo de página para reunir os canais oficiais da CCVideira, links de Instagram, YouTube, WhatsApp e outras redes.",
    sections: ["Canais oficiais", "Conteúdos em destaque", "Links rápidos"]
  },
  {
    title: "Eventos",
    href: "/conecte-se/eventos",
    description:
      "Modelo de página para destacar eventos, encontros especiais, conferências, agendas por campus e links de inscrição.",
    sections: ["Próximos eventos", "Agenda por campus", "Inscrições"]
  },
  {
    title: "Podcast",
    href: "/conecte-se/podcast",
    description:
      "Modelo de página para organizar episódios, séries, links de plataformas e chamadas para acompanhar os conteúdos da igreja.",
    sections: ["Episódios recentes", "Plataformas", "Séries em destaque"]
  },
  {
    title: "App CCVideira",
    href: "/conecte-se/app-ccvideira",
    description:
      "Modelo de página para apresentar o aplicativo da igreja, recursos disponíveis, links de download e instruções de acesso.",
    sections: ["Recursos do app", "Como baixar", "Acesso e suporte"]
  }
];

export function ConnectHero({ title, eyebrow = "Conecte-se", text }: ConnectHeroProps) {
  return (
    <section className="image-wash pt-24 text-white">
      <div className="container-page flex min-h-[360px] flex-col justify-center py-20 sm:min-h-[440px] sm:py-24">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-gold-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">{title}</h1>
        {text ? <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{text}</p> : null}
      </div>
    </section>
  );
}

export function ConnectTemplate({ title, description, sections }: ConnectTemplateProps) {
  return (
    <>
      <ConnectHero title={title} text={description} />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg border border-vine-900/10 bg-stonewarm-50 p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Modelo de página</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-vine-900">{title}</h2>
            <p className="mt-4 leading-7 text-stonewarm-700">{description}</p>
          </aside>

          <div className="grid gap-5">
            {sections.map((section) => (
              <div key={section} className="rounded-lg border border-vine-900/10 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-vine-900">{section}</h3>
                <p className="mt-3 leading-7 text-stonewarm-700">
                  [Inserir conteúdo oficial de {section.toLowerCase()} para {title}.]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ConnectCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {connectPages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className="rounded-lg border border-vine-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
        >
          <h2 className="text-2xl font-black text-vine-900">{page.title}</h2>
          <p className="mt-3 text-sm leading-7 text-stonewarm-700">{page.description}</p>
          <span className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.08em] text-gold-500">
            Saiba mais
          </span>
        </Link>
      ))}
    </div>
  );
}

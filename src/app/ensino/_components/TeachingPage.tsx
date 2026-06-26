import Link from "next/link";

type TeachingHeroProps = {
  title: string;
  eyebrow?: string;
  text?: string;
};

type TeachingTemplateProps = {
  title: string;
  audience: string;
  description: string;
};

export const teachingPages = [
  {
    title: "Fundamentos",
    href: "/ensino/fundamentos",
    audience: "Novos na fé, visitantes e membros que desejam firmar bases bíblicas.",
    description:
      "Modelo de página para apresentar a trilha de fundamentos da fé, com espaço para módulos, datas, inscrição, professores e materiais."
  },
  {
    title: "Antes de Sermos Um",
    href: "/ensino/antes-de-sermos-um",
    audience: "Noivos e casais em preparação para o casamento.",
    description:
      "Modelo de página para explicar o curso, apresentar encontros, requisitos, calendário, investimento e formulário de interesse."
  },
  {
    title: "Casados Pra Sempre",
    href: "/ensino/casados-pra-sempre",
    audience: "Casais que desejam fortalecer aliança, comunicação e vida espiritual.",
    description:
      "Modelo de página para detalhar a jornada do curso, encontros, liderança, inscrições, depoimentos e próximos ciclos."
  },
  {
    title: "Pais Pra Toda a Vida",
    href: "/ensino/pais-pra-toda-a-vida",
    audience: "Pais, mães e responsáveis que desejam crescer na missão de formar filhos.",
    description:
      "Modelo de página para apresentar conteúdo, encontros, público-alvo, materiais, inscrições e orientações para famílias."
  }
];

export function TeachingHero({ title, eyebrow = "Ensino", text }: TeachingHeroProps) {
  return (
    <section className="image-wash pt-24 text-white">
      <div className="container-page flex min-h-[360px] flex-col justify-center py-20 sm:min-h-[440px] sm:py-24">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-gold-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">{title}</h1>
        {text ? <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{text}</p> : null}
      </div>
    </section>
  );
}

export function TeachingTemplate({ title, audience, description }: TeachingTemplateProps) {
  return (
    <>
      <TeachingHero title={title} text={description} />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg border border-vine-900/10 bg-stonewarm-50 p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Público-alvo</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-vine-900">{audience}</h2>
          </aside>

          <div className="grid gap-5">
            {["Sobre o curso", "Próxima turma", "Inscrição"].map((item) => (
              <div key={item} className="rounded-lg border border-vine-900/10 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-vine-900">{item}</h3>
                <p className="mt-3 leading-7 text-stonewarm-700">
                  [Inserir conteúdo oficial de {item.toLowerCase()} para {title}.]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function TeachingCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {teachingPages.map((page) => (
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

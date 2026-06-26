import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossa história",
  description:
    "Conheça a história da CCVideira, desde o chamado inicial até os primeiros cultos, primeiras casas e vidas alcançadas."
};

const historySections = [
  {
    eyebrow: "Primeiras casas",
    title: "Uma visão que começou pequena, mas já carregava futuro.",
    image: "/images/historia/predio-antigo-ccvideira.jpeg",
    alt: "Prédio antigo da Comunidade Cristã Videira",
    reverse: false,
    text:
      "Nossa igreja começou em 2001 como fruto de um chamado de Deus na vida dos nossos pastores sêniores Costa Neto e Neném Costa. Antes de qualquer estrutura visível, havia uma visão no coração: uma igreja firmada em princípios bíblicos, chamada a levar pessoas a seguirem Jesus e a viverem o cristianismo fora das quatro paredes do templo."
  },
  {
    eyebrow: "Primeiros cultos",
    title: "A Palavra plantada em cada encontro.",
    image: "/images/historia/costa-neto2012.png",
    alt: "Pastor Costa Neto pregando em culto da CCVideira",
    reverse: true,
    text:
      "Com o passar dos anos, a visão foi sendo escrita em vidas, famílias e encontros de adoração. Deus deu a visão da nossa igreja aos nossos pastores quando a realidade que vivemos hoje ainda era apenas parte de uma promessa. Hoje, reconhecemos o cumprimento de muitas dessas sementes."
  },
  {
    eyebrow: "Primeiros decididos",
    title: "Histórias transformadas pela graça de Deus.",
    image: "/images/historia/primeiro-convertido-ccvideira.png",
    alt: "Juvêncio Sales, primeiro novo decidido da CCVideira",
    reverse: false,
    featured: true,
    text:
      "Do membro mais antigo ao mais novo, cada pessoa foi de alguma forma impactada e também contribuiu para que outras vidas fossem alcançadas. A CCVideira nasceu para servir, discipular, cuidar e participar de histórias transformadas pela generosidade e pela fé vivida no dia a dia."
  }
];

export default function HistoryPage() {
  return (
    <>
      <section className="relative isolate min-h-[720px] overflow-hidden bg-black text-white">
        <img
          src="/images/historia/igreja-2005.png"
          alt="Culto da CCVideira em 2005"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

        <div className="container-page grid min-h-[720px] items-end pb-20 pt-36">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-gold-300">Nossa história</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
              Uma visão escrita por Deus, vivida por pessoas.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80">
              Em 1º de julho de 2026, celebramos 25 anos de CCVideira. Desde 2001, a igreja tem vivido uma jornada de
              fé, serviço, comunhão e generosidade, impactando pessoas e formando uma casa para muitos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Fundação</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Um chamado, uma visão, uma casa.
            </h2>
          </div>

          <div className="grid gap-6 text-lg leading-9 text-stonewarm-700">
            <p>
              Talvez você esteja conosco desde a fundação, há alguns anos ou recentemente, mas temos certeza de que do
              mais antigo ao mais novo membro você de alguma forma foi impactado e também contribuiu para que pudéssemos
              impactar outras pessoas.
            </p>
            <p>
              A CCVideira nasceu como uma igreja que segue princípios bíblicos, levando pessoas a seguirem Jesus e a
              viverem o cristianismo fora das quatro paredes do templo, através de ações de generosidade que ajudam a
              transformar a história de outras vidas.
            </p>
            <blockquote className="border-l-4 border-gold-300 bg-stonewarm-50 p-6 text-xl font-black leading-9 text-vine-900">
              “Escreva em tábuas a visão que você vai ter, escreva com clareza o que vou lhe mostrar, para que possa ser
              lido com facilidade.” Habacuque 2:2-3
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-stonewarm-50 py-16 sm:py-24">
        <div className="container-page grid gap-12">
          {historySections.map((section) => (
            <article
              key={section.title}
              className={`grid overflow-hidden rounded-lg border border-vine-900/10 bg-white shadow-sm ${
                section.featured ? "lg:grid-cols-1" : "lg:grid-cols-2"
              }`}
            >
              <img
                src={section.image}
                alt={section.alt}
                className={`w-full bg-black ${
                  section.featured
                    ? "order-2 max-h-[520px] object-contain"
                    : `h-full min-h-[360px] object-cover ${section.reverse ? "lg:order-2" : ""}`
                }`}
              />
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">{section.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-vine-900 sm:text-5xl">{section.title}</h2>
                <p className="mt-6 text-base leading-8 text-stonewarm-700">{section.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="container-page mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-gold-300">A visão continua</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Guardar a visão fortalece o propósito.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-white/75">
            Entendemos que uma visão é dada por Deus para trazer clareza a respeito daquilo que Ele irá fazer. Guardar a
            visão no coração fortalece nosso propósito, nos dá direção e nos conduz a viver sob a Palavra dada por Deus,
            especialmente nos momentos desafiadores e de dúvidas.
          </p>
        </div>
      </section>
    </>
  );
}

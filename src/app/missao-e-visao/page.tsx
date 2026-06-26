import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Missão e Visão",
  description:
    "Conheça a missão da CCVideira: viver, amar e servir. Cumprindo a missão confiada por Cristo."
};

const pillars = [
  {
    title: "Viver",
    text:
      "Cremos na vida abundante que recebemos em Cristo. Uma vida integral, equilibrada e vivida com gratidão, propósito e alegria diante de Deus.",
    reference: "João 10:10"
  },
  {
    title: "Amar",
    text:
      "Amar a Deus acima de tudo e ao próximo como a nós mesmos é o centro da nossa cultura. O amor nos conduz à adoração, à obediência e ao cuidado com pessoas.",
    reference: "Mateus 22:36-40"
  },
  {
    title: "Servir",
    text:
      "Servimos porque Jesus serviu. Quando o amor é o combustível, servir deixa de ser peso e se torna resposta natural de quem entendeu o Reino.",
    reference: "João 13:12-17"
  }
];

export default function MissionVisionPage() {
  return (
    <>
      <section className="relative isolate min-h-[720px] overflow-hidden bg-black text-white">
        <img
          src="/images/home/banner-voluntarios.png"
          alt="Voluntários da CCVideira servindo na igreja"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/72 to-black/30" />

        <div className="container-page grid min-h-[720px] items-end pb-20 pt-36">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-gold-300">Missão e Visão</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
              Viver, amar e servir.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80">
              A missão da CCVideira nasce da missão confiada por Cristo: anunciar o evangelho, amar a Deus, amar pessoas
              e servir com aquilo que temos em nossas mãos.
            </p>
          </div>
        </div>
      </section>

      <section id="missao" className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Nossa missão</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Uma igreja comprometida com a missão de Cristo.
            </h2>
          </div>

          <div className="grid gap-6 text-lg leading-9 text-stonewarm-700">
            <p>
              Missão é quando nos comprometemos em realizar algo. Jesus nos confiou a missão de pregar o evangelho a
              toda criatura, e nos ensinou que esse chamado começa com amor a Deus sobre todas as coisas e amor ao
              próximo como a nós mesmos.
            </p>
            <p>
              A missão da nossa igreja é uma ferramenta para cumprir essa missão maior: aprender a viver, amar e servir
              como Jesus. Tudo o que fazemos como comunidade de fé precisa apontar para esse propósito.
            </p>
            <blockquote className="border-l-4 border-gold-300 bg-stonewarm-50 p-6 text-xl font-black leading-9 text-vine-900">
              “A missão é a razão principal da existência da comunidade de fé... Tudo o que se faz na comunidade é feito
              em função da Missão.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-stonewarm-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Como vivemos isso</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Três palavras que organizam a nossa cultura.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-lg border border-vine-900/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-500">{pillar.reference}</p>
                <h3 className="mt-4 text-4xl font-black tracking-tight text-vine-900">{pillar.title}</h3>
                <p className="mt-5 text-base leading-8 text-stonewarm-700">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visao" className="bg-black py-16 text-white sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="/images/home/voluntarios-interna.jpg"
              alt="Voluntários da CCVideira servindo durante a programação"
              className="h-[460px] w-full rounded-lg object-cover shadow-soft"
            />
            <img
              src="/images/missao-e-visao/servindo-pessoas.jpg"
              alt="Voluntário acolhendo pessoas na entrada da igreja"
              className="h-[460px] w-full rounded-lg object-cover shadow-soft sm:mt-12"
            />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-300">Nossa visão prática</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Uma igreja onde cada pessoa faz a sua parte.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/75">
              Encorajamos cada pessoa a servir com os recursos, dons, tempo e oportunidades que já possui. A solução do
              mundo não está em poucos fazendo muito, mas em cada um fazendo a sua parte com amor, consciência e
              fidelidade.
            </p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
        <div className="container-page grid overflow-hidden rounded-lg border border-vine-900/10 bg-stonewarm-50 shadow-sm lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Faça parte</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Sirva com o que Deus colocou em suas mãos.
            </h2>
            <p className="mt-6 text-base leading-8 text-stonewarm-700">
              Ninguém é tão pobre que não tenha algo a oferecer. Quando servimos por amor, a missão deixa de ser um
              conceito e passa a ser uma prática visível na vida da igreja.
            </p>
            <div className="mt-8">
              <Link
                href="/voluntariado"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-gold-300 px-7 text-sm font-black text-black transition hover:bg-gold-500"
              >
                Quero servir
              </Link>
            </div>
          </div>

          <img
            src="/images/missao-e-visao/obrigado-voluntario.jpg"
            alt="Culto de agradecimento aos voluntários da CCVideira"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}

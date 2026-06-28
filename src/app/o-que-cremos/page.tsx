import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O que cremos",
  description:
    "Conheça uma síntese dos princípios bíblicos que orientam a fé, a prática e a vida comunitária da CCVideira."
};

const beliefs = [
  {
    title: "Um só Deus soberano",
    text:
      "Cremos em Deus, criador dos céus e da terra, Senhor sobre todas as coisas e fonte de toda vida."
  },
  {
    title: "Pai, Filho e Espírito Santo",
    text:
      "Cremos na Trindade: um só Deus revelado como Pai, Filho e Espírito Santo, agindo em perfeita unidade."
  },
  {
    title: "A Bíblia como Palavra de Deus",
    text:
      "Cremos que toda a Escritura é inspirada por Deus e é autoridade para ensinar, corrigir, formar e conduzir a vida cristã."
  },
  {
    title: "Jesus Cristo, nosso Salvador",
    text:
      "Cremos em Jesus Cristo, Filho unigênito de Deus, único e suficiente Salvador, enviado para redimir a humanidade."
  },
  {
    title: "Salvação pela graça",
    text:
      "Cremos que somos salvos pela graça, por meio da fé em Cristo Jesus, e não por mérito ou obras humanas."
  },
  {
    title: "Perdão e nova vida",
    text:
      "Cremos que o sacrifício de Jesus nos concede perdão dos pecados, reconciliação com Deus e uma vida transformada."
  },
  {
    title: "Batismo nas águas",
    text:
      "Cremos no batismo por imersão, em nome do Pai, do Filho e do Espírito Santo, como sinal público de arrependimento e nova vida em Cristo."
  },
  {
    title: "Espírito Santo e dons espirituais",
    text:
      "Cremos no batismo com o Espírito Santo e na operação dos dons espirituais para edificação da igreja e testemunho do Reino."
  },
  {
    title: "A igreja como corpo de Cristo",
    text:
      "Cremos que a igreja é o corpo de Cristo e representante do Reino de Deus na terra, chamada a servir, discipular e anunciar Jesus."
  },
  {
    title: "Volta de Cristo e vida eterna",
    text:
      "Cremos na segunda vinda de Cristo, na ressurreição dos mortos e na promessa da vida eterna com Deus."
  }
];

export default function WhatWeBelievePage() {
  return (
    <>
      <section className="relative isolate min-h-[720px] overflow-hidden bg-black text-white">
        <img
          src="/images/o-que-cremos/comunhao.png"
          alt="Culto de adoração na CCVideira"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/72 to-black/30" />

        <div className="container-page grid min-h-[720px] items-end pb-20 pt-36">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-gold-300">O que cremos</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
              Uma fé bíblica, viva e praticada no dia a dia.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80">
              O nosso credo reúne, de forma simples e clara, princípios fundamentais da Palavra de Deus que orientam a
              fé, a comunhão e a missão da CCVideira.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Credo</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Clareza para crer, maturidade para viver.
            </h2>
          </div>

          <div className="grid gap-6 text-lg leading-9 text-stonewarm-700">
            <p>
              A palavra credo vem da ideia de declarar aquilo em que cremos. Para a CCVideira, isso não substitui a
              totalidade da Bíblia, mas ajuda a manter claros os fundamentos essenciais da fé cristã compartilhados por
              nossa comunidade.
            </p>
            <p>
              Somos uma igreja bíblica. Cremos que a Palavra de Deus não existe apenas para ampliar conhecimento, mas
              para transformar a vida de quem a recebe, medita nela e a pratica diariamente.
            </p>
            <blockquote className="border-l-4 border-gold-300 bg-stonewarm-50 p-6 text-xl font-black leading-9 text-vine-900">
              “Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a
              instrução na justiça.” 2 Timóteo 3:16
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-stonewarm-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Fundamentos</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Uma síntese do que declaramos como igreja.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {beliefs.map((belief, index) => (
              <article
                key={belief.title}
                className="rounded-lg border border-vine-900/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-black text-gold-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-vine-900">{belief.title}</h3>
                <p className="mt-3 text-base leading-8 text-stonewarm-700">{belief.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate min-h-[720px] overflow-hidden bg-black py-16 text-white sm:py-24">
        <img
          src="/images/home/biblia.png"
          alt="Pessoa lendo a Bíblia"
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover opacity-55 lg:w-1/2 lg:opacity-100"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/90 to-black/35" />

        <div className="container-page grid min-h-[560px] gap-8 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-300">Fé em movimento</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              O que cremos precisa aparecer no modo como vivemos.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/75">
              Cremos que a mensagem de Jesus transforma pessoas, famílias e comunidades. Por isso, nossa fé se expressa
              em adoração, serviço, generosidade, discipulado e vida prática diante de Deus.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page rounded-lg border border-vine-900/10 bg-stonewarm-50 p-8 text-center sm:p-12">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Próximo passo</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
            Quer conhecer mais a CCVideira?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stonewarm-700">
            Planeje sua visita, fale com nossa equipe ou participe de um próximo encontro. Será uma alegria caminhar com
            você.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-gold-300 px-7 text-sm font-black text-black transition hover:bg-gold-500"
            >
              Fale conosco
            </Link>
            <Link
              href="/proximos-passos"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-vine-900/15 bg-white px-7 text-sm font-black text-vine-900 transition hover:bg-vine-50"
            >
              Ver próximos passos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

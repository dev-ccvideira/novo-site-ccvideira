import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bem-vindo à casa",
  description: "Conheça a história, visão, missão, valores, liderança e fundamentos da CCVideira."
};

const overviewItems = [
  {
    title: "História",
    text:
      "A CCVideira nasceu em 1 de julho de 2001 como fruto de um chamado de Deus colocado nos corações dos nossos pastores Costa Neto e Neném.",
    href: "/historia"
  },
  {
    title: "Visão",
    text: "Uma igreja onde cada membro é conhecido por Deus através de um profundo relacionamento com Ele.",
    href: "/#visao-da-casa"
  },
  {
    title: "Missão",
    text:
      "Uma igreja que segue princípios bíblicos, levando pessoas a seguirem a Jesus e a viverem o cristianismo fora das quatro paredes do templo, através de ações de generosidade que ajudam transformar a história de outras vidas.",
    href: "/missao-e-visao#missao"
  },
  {
    title: "Valores",
    text: "Adoração, Comunhão, Serviço, Evangelismo e Edificação",
    href: "/bem-vindo-a-casa#valores"
  },
  {
    title: "O que cremos",
    text:
      "Acreditamos que a Bíblia é a Palavra de Deus para nós, que Deus é o Criador e Governante do universo e que Jesus Cristo é o Filho de Deus. A salvação é um presente gratuito de Deus para nós, mas devemos aceitá-lo.",
    href: "/o-que-cremos"
  }
];

export default function WelcomePage() {
  return (
    <>
      <section className="relative aspect-video min-h-[520px] overflow-hidden bg-vine-900 text-white">
        <video
          className="absolute left-0 top-1/2 h-[135%] w-full -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/bem-vindo-a-casa.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-vine-900/45 to-black/10"
          aria-hidden="true"
        />

        <div className="container-page relative z-10 grid h-full min-h-[520px] items-center py-16">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-100">Sobre nós</p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
              Bem-vindo à casa
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-vine-50">
              Somos uma igreja comprometida em criar um espaço onde todos possam experimentar o amor de Deus, crescer
              espiritualmente e fazer a diferença na sociedade através do serviço e da generosidade.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contato" variant="secondary">
                Planeje sua visita
              </ButtonLink>

              <ButtonLink href="/proximos-passos" variant="light">
                Próximos passos
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src="/images/bem-vindos-a-casa/pastores-seniors.jpeg"
            alt="Pastores sêniores Costa Neto e Neném"
            className="min-h-64 w-full rounded-lg object-cover shadow-soft"
          />
          <div className="grid gap-6">
            {overviewItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-vine-900/10 bg-white p-6">
                <h2 className="text-2xl font-black text-vine-900">{item.title}</h2>
                <p className="mt-3 leading-7 text-stonewarm-700">{item.text}</p>
                <Link
                  href={item.href}
                  className="focus-ring mt-4 inline-flex text-sm font-black uppercase tracking-[0.08em] text-gold-500 transition hover:text-vine-900"
                >
                  Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="valores" className="bg-vine-50 py-16">
        <div className="container-page">
          <SectionHeader eyebrow="Cultura" title="Pilares da casa" />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-lg bg-white p-5">
                <h3 className="font-black text-vine-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stonewarm-700">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

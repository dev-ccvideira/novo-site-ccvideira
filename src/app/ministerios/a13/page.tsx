import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "A13",
  description:
    "A13 é o ministério de pré-adolescentes, adolescentes e jovens adultos da CCVideira."
};

const groups = [
  {
    name: "A13 Junior",
    age: "12 a 14 anos",
    description:
      "Um ambiente para pré-adolescentes crescerem em identidade, amizade e primeiros passos de fé."
  },
  {
    name: "A13 School",
    age: "15 a 17 anos",
    description:
      "Uma jornada para adolescentes viverem Jesus no colégio, em casa e nas escolhas do dia a dia."
  },
  {
    name: "A13 Uni",
    age: "18 a 30 anos",
    description:
      "Um movimento de jovens adultos chamados para influenciar universidades, trabalho, família e cidade."
  }
];

const steps = ["Conhecer Deus", "Crescer juntos", "Descobrir propósito", "Fazer a diferença"];

const gallery = [
  {
    src: "/images/ministerios/a13/a13-worship.jpg",
    alt: "Jovens do A13 em momento de adoração"
  },
  {
    src: "/images/ministerios/a13/a13-uni.jpg",
    alt: "Jovens do A13 Uni em uma programação"
  },
  {
    src: "/images/ministerios/a13/a13-style.jpg",
    alt: "Detalhe visual de identidade do A13"
  },
  {
    src: "/images/ministerios/a13/a13-atreeze.jpg",
    alt: "Jovem adorando em encontro do A13"
  }
];

export default function A13Page() {
  return (
    <div className="overflow-hidden bg-black text-white">
      <section className="relative isolate min-h-[calc(100svh-112px)] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(220,38,38,0.26),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(217,249,68,0.18),transparent_28%),linear-gradient(135deg,#050505_0%,#111_48%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="container-page relative z-10 grid min-h-[calc(100svh-112px)] items-center gap-12 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-black tracking-[0.38em] text-[#d9f944]">Ministério de jovens</p>
            <div className="mt-8 max-w-[220px] rounded-[2rem] p-5 shadow-2xl shadow-black/40 sm:max-w-[280px]">
              <Image
                src="/images/ministerios/a13/a13.jpg"
                alt="Logo do ministério A13"
                width={1600}
                height={900}
                priority
                className="h-auto w-full"
              />
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              Uma geração posicionada.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              O A13 é o ministério de pré-adolescentes, adolescentes e jovens adultos da CCVideira:
              um lugar para seguir Jesus, construir amizades saudáveis e viver um chamado maior que nós mesmos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[#d9f944] px-7 text-sm font-black tracking-[0.08em] text-black transition hover:bg-white"
              >
                Quero me conectar
              </Link>
              <Link
                href="#grupos"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-white/24 px-7 text-sm font-black tracking-[0.08em] text-white transition hover:bg-white hover:text-black"
              >
                Conheça os grupos
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120} direction="left" className="relative min-h-[520px]">
            <div className="absolute right-0 top-0 h-[70%] w-[72%] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/50">
              <Image
                src="/images/ministerios/a13/a13-atreeze.jpg"
                alt="Jovens do A13 em adoração"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 86vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 h-[54%] w-[56%] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/50">
              <Image
                src="/images/ministerios/a13/a13-uni-collage.jpg"
                alt="Colagem com jovens do A13 Uni"
                fill
                sizes="(min-width: 1024px) 28vw, 70vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-10 right-8 hidden rounded-full bg-red-600 px-6 py-3 text-sm font-black tracking-[0.18em] text-white shadow-xl shadow-red-950/50 sm:block">
              This is A13
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="border-y border-white/10 bg-[#d9f944] py-8 text-black">
        <div className="container-page">
          <p className="text-center text-xl font-black tracking-tight sm:text-3xl md:text-5xl">
            Eu sou o A13. Chamados para anunciar a luz.
          </p>
        </div>
      </AnimatedSection>

      <section className="bg-black py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <AnimatedSection>
            <p className="text-xs font-black tracking-[0.3em] text-red-500">Nossa declaração</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Existe um chamado para esta geração.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100} className="space-y-6 text-lg leading-8 text-white/72">
            <p>
              Aquilo que Deus começou não deve ser guardado nem interrompido. O A13 existe para
              encorajar jovens a viverem quem Deus os criou para ser, mesmo em meio a processos,
              dúvidas e imperfeições.
            </p>
            <p>
              Somos chamados para ser relevantes nos colégios, universidades, famílias, empresas e
              cidades. Vamos amar, acreditar e arriscar nas pessoas, posicionando o chamado de Deus
              para a nossa geração.
            </p>
            <p className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white">
              "Geração eleita, sacerdócio real, nação santa, povo exclusivo de Deus, para anunciar
              as grandezas daquele que nos chamou das trevas para a sua maravilhosa luz."
              <span className="mt-3 block text-sm font-bold tracking-[0.2em] text-[#d9f944]">
                1 Pedro 2:9
              </span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20 text-black sm:py-24">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black tracking-[0.3em] text-red-600">Jornada A13</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Crescer em Cristo, juntos.
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/65">
              Ajudamos jovens a seguir Jesus por toda a vida por meio de uma jornada simples,
              intencional e relacional.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step}
                delay={index * 70}
                className="rounded-[2rem] border border-black/10 bg-black p-7 text-white shadow-sm"
              >
                <span className="text-sm font-black text-[#d9f944]">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-black tracking-tight">{step}</h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="grupos" className="bg-[#101010] py-20 sm:py-24">
        <div className="container-page">
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-black tracking-[0.3em] text-[#d9f944]">Grupos</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Um lugar para cada fase.
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {groups.map((group, index) => (
              <AnimatedSection
                key={group.name}
                delay={index * 90}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 transition hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                <p className="text-sm font-black tracking-[0.22em] text-red-500">{group.age}</p>
                <h3 className="mt-5 text-4xl font-black tracking-tight">{group.name}</h3>
                <p className="mt-5 text-base leading-7 text-white/68 transition group-hover:text-black/65">
                  {group.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 sm:py-24">
        <div className="container-page">
          <AnimatedSection className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-black tracking-[0.3em] text-red-500">Atmosfera</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                Fé, amizade e movimento.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/64">
              Encontros, adoração, conversas sinceras e uma comunidade que chama jovens para perto de Jesus.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-5 md:grid-cols-4 md:grid-rows-[220px_220px]">
            {gallery.map((image, index) => (
              <AnimatedSection
                key={image.src}
                delay={index * 70}
                className={
                  index === 0
                    ? "relative overflow-hidden rounded-[2rem] md:col-span-2 md:row-span-2"
                    : "relative min-h-[260px] overflow-hidden rounded-[2rem] md:min-h-0"
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 768px) 48vw, 92vw" : "(min-width: 768px) 24vw, 92vw"}
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d9f944] py-16 text-black sm:py-20">
        <AnimatedSection className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black tracking-[0.3em] text-black/60">Próximo passo</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
              Quer fazer parte do A13?
            </h2>
            <p className="mt-4 text-lg leading-8 text-black/68">
              Fale com a equipe da CCVideira para saber como participar, servir ou conectar alguém da sua família.
            </p>
          </div>
          <Link
            href="/contato"
            className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-black px-8 text-sm font-black tracking-[0.1em] text-white transition hover:bg-red-600"
          >
            Falar com a equipe
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

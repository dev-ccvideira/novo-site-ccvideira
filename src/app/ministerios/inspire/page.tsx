import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Inspire",
  description:
    "Inspire é o ministério de adultos solteiros da CCVideira, com encontros para conexão, fé e comunidade."
};

const groups = [
  {
    name: "Inspire",
    age: "31 a 40 anos",
    description:
      "Um ambiente para adultos solteiros viverem comunidade, fortalecerem a fé e criarem conexões saudáveis."
  },
  {
    name: "Inspire Up",
    age: "A partir de 41 anos",
    description:
      "Um espaço para caminhar com Jesus em maturidade, amizade e propósito nesta fase da vida."
  }
];

const pillars = ["Conexão com Jesus", "Comunidade real", "Amizades saudáveis", "Propósito no dia a dia"];

const instagramLinks = [
  { label: "Inspire Sul", href: "https://www.instagram.com/inspiresul/" },
  { label: "Inspire Capim Macio", href: "https://www.instagram.com/inspire_capimmacio/" },
  { label: "Inspire Santos Dumont", href: "https://www.instagram.com/inspire_santosdumont/" }
];

const gallery = [
  {
    src: "/images/ministerios/inspire/inspire-galera.jpg",
    alt: "Grupo do Inspire reunido em uma programação externa"
  },
  {
    src: "/images/ministerios/inspire/inspire-red.jpg",
    alt: "Momento de adoração em encontro do Inspire"
  },
  {
    src: "/images/ministerios/inspire/inspire-proximo-passo.jpg",
    alt: "Arte do Inspire com a frase próximo passo"
  },
  {
    src: "/images/ministerios/inspire/inspire-praia.jpg",
    alt: "Encontro do Inspire na praia"
  }
];

export default function InspirePage() {
  return (
    <div className="overflow-hidden bg-black text-white">
      <section className="relative isolate min-h-[calc(100svh-112px)] overflow-hidden bg-black">
        <Image
          src="/images/ministerios/inspire/inspire-galera.jpg"
          alt="Pessoas do ministério Inspire reunidas"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/28" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(190,255,70,0.22),transparent_30%),radial-gradient(circle_at_22%_74%,rgba(255,128,90,0.18),transparent_28%)]" />

        <div className="container-page relative z-10 grid min-h-[calc(100svh-112px)] items-center gap-12 py-20 lg:grid-cols-[0.96fr_1.04fr] lg:py-24">
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-black tracking-[0.38em] text-[#cfff4f]">Ministério de adultos solteiros</p>
            <div className="mt-8 inline-flex rounded-[2rem] border border-white/10 bg-black/70 p-6 shadow-2xl shadow-black/40 backdrop-blur">
              <Image
                src="/images/ministerios/inspire/inspire-logo.png"
                alt="Logo do ministério Inspire"
                width={360}
                height={360}
                priority
                className="h-24 w-24 object-contain sm:h-32 sm:w-32"
              />
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              Seu lugar também é aqui.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              O Inspire é o ministério de adultos solteiros da CCVideira. Um ambiente para se conectar com Jesus,
              construir amizades reais e viver comunidade nesta fase da vida.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[#cfff4f] px-7 text-sm font-black tracking-[0.08em] text-black transition hover:bg-white"
              >
                Quero participar
              </Link>
              <Link
                href="#grupos"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-white/24 px-7 text-sm font-black tracking-[0.08em] text-white transition hover:bg-white hover:text-black"
              >
                Conheça os grupos
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120} direction="left" className="relative min-h-[540px]">
            <div className="absolute right-0 top-0 h-[66%] w-[70%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/images/ministerios/inspire/inspire-vida.jpg"
                alt="Participantes do Inspire em área externa"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 h-[58%] w-[58%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/images/ministerios/inspire/inspire-pessoas.jpg"
                alt="Noite de adoração do Inspire"
                fill
                sizes="(min-width: 1024px) 28vw, 70vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="border-y border-white/10 bg-[#cfff4f] py-10 text-black">
        <div className="container-page">
          <p className="text-center text-xl font-black tracking-tight sm:text-3xl md:text-5xl">
            Comunidade para viver fé, amizade e propósito.
          </p>
        </div>
      </AnimatedSection>

      <section className="bg-white py-20 text-black sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <AnimatedSection>
            <p className="text-xs font-black tracking-[0.3em] text-[#ff805a]">Nossa missão</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Ninguém precisa caminhar sozinho.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100} className="space-y-6 text-lg leading-8 text-black/68">
            <p>
              Sabemos que pode ser difícil encontrar comunidade nesta fase da vida. Por isso, o Inspire existe para
              ajudar adultos solteiros a se conectarem com Jesus e com outras pessoas em um ambiente leve, intencional
              e cheio de vida.
            </p>
            <p>
              Nossos encontros são oportunidades para adoração, conversas, amizades, oração e próximos passos. Junte-se
              a nós no próximo encontro e traga um amigo. Estamos esperando por você.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section id="grupos" className="bg-[#101010] py-20 sm:py-24">
        <div className="container-page">
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-black tracking-[0.3em] text-[#cfff4f]">Divisões</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Dois ambientes, uma mesma casa.
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {groups.map((group, index) => (
              <AnimatedSection
                key={group.name}
                delay={index * 100}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 transition hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                <p className="text-sm font-black tracking-[0.22em] text-[#ff805a]">{group.age}</p>
                <h3 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">{group.name}</h3>
                <p className="mt-5 text-base leading-7 text-white/68 transition group-hover:text-black/65">
                  {group.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <AnimatedSection className="relative min-h-[560px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5">
            <Image
              src="/images/ministerios/inspire/brecha-inspire.jpg"
              alt="Arte do Inspire com referência a Ezequiel 22:30"
              fill
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={100} direction="left">
            <p className="text-xs font-black tracking-[0.3em] text-[#cfff4f]">Por que existimos</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Abra espaço para o novo de Deus.
            </h2>
            <div className="mt-8 grid gap-4">
              {pillars.map((pillar, index) => (
                <div key={pillar} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <span className="text-sm font-black text-[#ff805a]">0{index + 1}</span>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">{pillar}</h3>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20 text-black sm:py-24">
        <div className="container-page">
          <AnimatedSection className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-black tracking-[0.3em] text-[#ff805a]">Atmosfera</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                Encontros que viram comunidade.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-black/62">
              Momentos de adoração, praia, trilhas, conversas e vida compartilhada entre adultos solteiros da casa.
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

      <section className="bg-[#101010] py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="text-xs font-black tracking-[0.3em] text-[#cfff4f]">Acompanhe</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Encontre o Inspire perto de você.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/68">
              Os perfis do Inspire compartilham próximos encontros, programações e registros da comunidade.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100} className="grid gap-4">
            {instagramLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-5 text-lg font-black tracking-tight transition hover:bg-[#cfff4f] hover:text-black"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-black py-20 sm:py-24">
        <AnimatedSection className="container-page relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black tracking-[0.3em] text-[#cfff4f]">Próximo passo</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
              Venha para o próximo encontro.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Quer participar do Inspire ou saber qual grupo faz sentido para você? Fale com a equipe da CCVideira.
            </p>
          </div>
          <Link
            href="/contato"
            className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#cfff4f] px-8 text-sm font-black tracking-[0.1em] text-black transition hover:bg-white"
          >
            Falar com a equipe
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}





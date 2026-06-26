import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ButtonLink } from "@/components/ButtonLink";
import { VisionStatement } from "@/components/VisionStatement";

const actionCards = [
  {
    title: "Nossos Campus",
    href: "/campus",
    label: "Nossos Campus",
    image: "/images/home/campus.png"
  },
  {
    title: "Ministérios",
    href: "/ministerios",
    label: "Ministérios",
    image: "/images/home/ministerios.png"
  },
  {
    title: "Projetos Sociais",
    href: "/projetos-sociais",
    label: "Projetos Sociais",
    image: "/images/home/vida-videira.jpg"
  }
];

export default function HomePage() {
  return (
    <>
      <AnimatedSection className="relative min-h-screen overflow-hidden bg-vine-900 text-white" direction="none">
        <video
          className="absolute left-0 top-1/2 h-[125%] w-full -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/72 via-vine-900/42 to-black/10"
          aria-hidden="true"
        />

        <div className="container-page relative z-10 grid min-h-screen items-center pt-28">
          <div className="max-w-4xl pb-14">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-100">CCVideira</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Uma Igreja, Uma Casa</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-vine-50">
              Bem-vindo à Comunidade Cristã Videira. Um lugar para conhecer a Deus, crescer em comunhão, servir com
              propósito e viver a fé no dia a dia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/campus" variant="light">
                Encontre um campus
              </ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="overflow-hidden border-y border-vine-900/10 bg-white py-14 text-vine-900 sm:py-[72px]">
        <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap font-montserrat-black text-4xl uppercase sm:text-6xl lg:text-7xl">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index}>Bem-vindo à casa</span>
          ))}
        </div>
      </section>

      <AnimatedSection className="bg-black py-16 sm:py-20" direction="up">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {actionCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative min-h-[460px] overflow-hidden rounded-lg border border-white/10 bg-vine-900 text-white shadow-soft"
              >
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />
                <div className="relative z-10 flex h-full min-h-[460px] items-end justify-center p-8 text-center sm:p-10">
                  <span className="inline-flex w-fit rounded-full bg-gold-300 px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-vine-900 transition group-hover:bg-white">
                    {card.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <VisionStatement />
    </>
  );
}

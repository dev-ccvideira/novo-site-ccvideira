import type { ReactNode } from "react";

type MinistryHeroProps = {
  name: string;
  eyebrow?: string;
  contentClassName?: string;
};

type MinistryPlaceholderProps = {
  title: string;
  text?: string;
};

export function MinistryHero({ name, eyebrow = "Ministério", contentClassName = "" }: MinistryHeroProps) {
  return (
    <section className="bg-black pt-24 text-white">
      <div
        className={`container-page flex items-center ${
          contentClassName || "min-h-[520px] py-16 sm:min-h-[620px]"
        }`}
      >
        <div className="max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-gold-300">{eyebrow}</p>
          <h1 className="mt-5 text-6xl font-black uppercase tracking-tight sm:text-8xl lg:text-9xl">{name}</h1>
        </div>
      </div>
    </section>
  );
}

export function MinistryPlaceholder({ title, text }: MinistryPlaceholderProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-page rounded-lg border border-vine-900/10 bg-stonewarm-50 p-8 sm:p-12">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Próxima seção</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-stonewarm-700">
          {text ||
            "Espaço preparado para receber conteúdo oficial do ministério, como descrição, agenda, liderança, fotos, vídeos e chamadas de participação."}
        </p>
      </div>
    </section>
  );
}

export function MinistryLandingPage({ name, children }: { name: string; children?: ReactNode }) {
  return (
    <>
      <MinistryHero name={name} />
      {children || <MinistryPlaceholder title={`Sobre o ${name}`} />}
    </>
  );
}

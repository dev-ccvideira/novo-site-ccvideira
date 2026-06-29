import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Videira Kids",
  description:
    "Conheça o Videira Kids, o ministério infantil da CCVideira: um ambiente acolhedor para crianças conhecerem Jesus, fazerem amigos e amarem estar na igreja."
};

const experienceItems = [
  {
    title: "Ambiente acolhedor",
    text:
      "Um espaço pensado para que as crianças sejam recebidas com alegria, cuidado e atenção enquanto os pais participam do culto."
  },
  {
    title: "Base bíblica",
    text:
      "Momentos de ensino, louvor e atividades ajudam cada criança a conhecer Jesus de forma simples, verdadeira e apropriada para sua fase."
  },
  {
    title: "Igreja também é lugar de criança",
    text:
      "Queremos que os pequenos cresçam entendendo que a casa de Deus é também casa para eles: um lugar de presença, amizade e pertencimento."
  }
];

const visitSteps = [
  "Escolha o campus que deseja visitar e confira os horários dos cultos.",
  "Chegue alguns minutos antes para conversar com a equipe e receber orientação.",
  "Informe necessidades importantes da criança, como alergias, rotina ou cuidados específicos."
];

const programItems = [
  "Louvor e adoração",
  "Histórias bíblicas",
  "Dinâmicas e atividades",
  "Comunhão com outras crianças"
];

export default function VideiraKidsPage() {
  return (
    <>
      <section className="overflow-hidden bg-black pt-24 text-white">
        <div className="container-page grid min-h-[620px] gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-3xl">
            <img
              src="/images/ministerios/videira-kids/videira-kids-logo.jpg"
              alt="Logo Videira Kids"
              className="h-24 w-24 rounded-full border border-white/15 object-cover shadow-soft"
            />
            <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-gold-300">Ministério infantil</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">Videira Kids</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              Viver, amar, servir, e se divertir! Um ambiente alegre, seguro e cheio de propósito para crianças conhecerem Jesus, criarem vínculos e
              descobrirem que a igreja também é a casa delas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/campus" variant="secondary">
                Encontrar um campus
              </ButtonLink>
              <ButtonLink href="/contato" variant="light">
                Falar com a equipe
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="/images/ministerios/videira-kids/super-kids.jpg"
              alt="Criança sendo recebida no Videira Kids"
              className="h-[420px] w-full rounded-lg object-cover shadow-soft"
            />
            <img
              src="/images/ministerios/videira-kids/kids03.jpg"
              alt="Criança brincando em atividade do Videira Kids"
              className="h-[420px] w-full rounded-lg object-cover shadow-soft sm:mt-12"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Bem-vindo ao Kids</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Lugar de criança é no Kids.
            </h2>
            <p className="mt-6 text-lg leading-9 text-stonewarm-700">
              O Videira Kids existe para apoiar famílias e servir crianças com excelência. Em cada encontro, buscamos
              criar uma experiência leve, bíblica e memorável, onde os pequenos aprendem sobre Deus de um jeito que
              conversa com a idade deles.
            </p>
          </div>

          <img
            src="/images/ministerios/videira-kids/culto-kids.jpg"
            alt="Crianças participando de momento de ensino no Videira Kids"
            className="min-h-[420px] w-full rounded-lg object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="bg-stonewarm-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Experiência</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Cuidado, fé e alegria caminhando juntos.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {experienceItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-vine-900/10 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-black text-vine-900">{item.title}</h3>
                <p className="mt-4 leading-7 text-stonewarm-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="/images/ministerios/videira-kids/kids02.jpg"
              alt="Criança sorrindo em atividade do Videira Kids"
              className="h-[360px] w-full rounded-lg object-cover shadow-soft"
            />
            <img
              src="/images/ministerios/videira-kids/kids01.jpg"
              alt="Criança desenhando durante atividade"
              className="h-[360px] w-full rounded-lg object-cover shadow-soft sm:mt-12"
            />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-300">Primeira visita</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Uma chegada simples para a família toda.
            </h2>
            <div className="mt-8 grid gap-4">
              {visitSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-300 text-sm font-black text-black">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-white/80">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-white/60">
              A programação pode variar por campus. Para detalhes oficiais sobre horários, espaços e funcionamento,
              converse com a equipe do campus que você pretende visitar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Durante o encontro</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-vine-900 sm:text-5xl">
              Uma experiência pensada para formar fé desde cedo.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {programItems.map((item) => (
                <div key={item} className="rounded-lg border border-vine-900/10 bg-stonewarm-50 p-5">
                  <p className="font-black text-vine-900">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/images/ministerios/videira-kids/kids04.jpg"
            alt="Crianças adorando no Videira Kids"
            className="min-h-[460px] w-full rounded-lg object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="bg-stonewarm-50 py-16 sm:py-24">
        <div className="container-page rounded-lg bg-black p-8 text-center text-white shadow-soft sm:p-12">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-300">Famílias</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Traga sua criança para o Videira Kids!
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72">
            Encontre um campus, confirme a programação infantil local e venha viver esse momento com a gente.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/campus" variant="secondary">
              Ver campus
            </ButtonLink>
            <ButtonLink href="/contato" variant="light">
              Tenho uma dúvida
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

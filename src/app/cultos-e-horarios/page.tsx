import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { getCampuses } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Cultos e horários",
  description: "Horários de cultos da CCVideira organizados por campus."
};

export default async function ServicesPage() {
  const campuses = await getCampuses();

  return (
    <>
      <PageHero
        eyebrow="Cultos"
        title="Horários por campus"
        text="Atualize dias, horários e observações de cada campus no painel administrativo."
      />
      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {campuses.map((campus) => (
            <article key={campus.slug} className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-vine-900">{campus.title}</h2>
              <p className="mt-2 text-sm text-stonewarm-700">{campus.address}</p>
              <ul className="mt-5 grid gap-2 text-lg font-bold text-stonewarm-900">
                {campus.serviceTimes.map((time) => (
                  <li key={time}>{time}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

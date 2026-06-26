import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteForm } from "@/components/forms/SiteForm";
import { campusOptionsFromCampuses, makePrayerFields } from "@/components/forms/formFields";
import { getCampuses } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Pedido de oração",
  description: "Envie um pedido de oração para a equipe da CCVideira."
};

export default async function PrayerPage() {
  const campusOptions = campusOptionsFromCampuses(await getCampuses());

  return (
    <>
      <PageHero
        eyebrow="Oração"
        title="Queremos orar com você"
        text="Compartilhe seu pedido com cuidado e privacidade. A equipe pode receber notificação por e-mail quando configurado."
      />
      <section className="py-16">
        <div className="container-page max-w-3xl">
          <SiteForm formType="pedido-oracao" title="Pedido de oração" fields={makePrayerFields(campusOptions)} />
        </div>
      </section>
    </>
  );
}

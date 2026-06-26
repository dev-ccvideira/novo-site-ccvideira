import type { Field } from "./SiteForm";

type CampusOptionSource = {
  title?: string | null;
};

export function campusOptionsFromCampuses(campuses: CampusOptionSource[]) {
  const options = campuses
    .map((campus) => campus.title?.trim())
    .filter((title): title is string => Boolean(title && !title.includes("[")))
    .filter((title, index, list) => list.indexOf(title) === index);

  return options.length ? [...options, "Ainda não sei"] : ["Ainda não sei"];
}

export const campusOptions = ["Ainda não sei"];

export function makeContactFields(options: string[] = campusOptions): Field[] {
  return [
    { name: "name", label: "Nome", required: true },
    { name: "email", label: "E-mail", type: "email" as const, required: true },
    { name: "phone", label: "Telefone/WhatsApp", type: "tel" as const },
    { name: "campus", label: "Campus de interesse", type: "select" as const, options },
    { name: "subject", label: "Assunto", required: true },
    { name: "message", label: "Mensagem", type: "textarea" as const, required: true }
  ];
}

export function makeVisitFields(options: string[] = campusOptions): Field[] {
  return [
    { name: "name", label: "Nome", required: true },
    { name: "phone", label: "Telefone", type: "tel" as const, required: true },
    { name: "email", label: "E-mail", type: "email" as const },
    { name: "campus", label: "Campus", type: "select" as const, options },
    { name: "desiredDay", label: "Dia desejado", type: "date" as const },
    { name: "people", label: "Quantidade de pessoas", type: "number" as const },
    { name: "hasChildren", label: "Tem crianças?", type: "checkbox" as const },
    { name: "needsDirections", label: "Precisa de ajuda para chegar?", type: "checkbox" as const },
    { name: "message", label: "Mensagem", type: "textarea" as const }
  ];
}

export function makeNextStepFields(options: string[] = campusOptions): Field[] {
  return [
    { name: "name", label: "Nome", required: true },
    { name: "email", label: "E-mail", type: "email" as const },
    { name: "phone", label: "Telefone", type: "tel" as const, required: true },
    {
      name: "decision",
      label: "Decisão",
      type: "select" as const,
      options: ["Aceitei Jesus", "Quero batismo", "Quero grupo", "Quero servir", "Quero falar com pastor"],
      required: true
    },
    { name: "campus", label: "Campus", type: "select" as const, options },
    { name: "message", label: "Mensagem", type: "textarea" as const }
  ];
}

export function makeVolunteerFields(options: string[] = campusOptions): Field[] {
  return [
    { name: "name", label: "Nome", required: true },
    { name: "phone", label: "Telefone", type: "tel" as const, required: true },
    { name: "email", label: "E-mail", type: "email" as const },
    { name: "campus", label: "Campus", type: "select" as const, options },
    { name: "area", label: "Área de interesse" },
    { name: "availability", label: "Disponibilidade" },
    { name: "experience", label: "Experiência", type: "textarea" as const },
    { name: "message", label: "Mensagem", type: "textarea" as const }
  ];
}

export function makePrayerFields(options: string[] = campusOptions): Field[] {
  return [
    { name: "name", label: "Nome", required: true },
    { name: "phone", label: "Telefone", type: "tel" as const },
    { name: "email", label: "E-mail", type: "email" as const },
    { name: "request", label: "Pedido", type: "textarea" as const, required: true },
    { name: "pastoralContact", label: "Deseja contato pastoral?", type: "checkbox" as const },
    { name: "shareWithTeam", label: "Pode compartilhar com equipe de oração?", type: "checkbox" as const },
    { name: "campus", label: "Campus", type: "select" as const, options }
  ];
}

export const contactFields = makeContactFields();
export const visitFields = makeVisitFields();
export const nextStepFields = makeNextStepFields();
export const volunteerFields = makeVolunteerFields();
export const prayerFields = makePrayerFields();

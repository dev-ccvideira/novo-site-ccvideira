import { defineField, defineType } from "sanity";
import { imageField, seoFields } from "./shared";

export const socialProject = defineType({
  name: "socialProject",
  title: "Projetos sociais",
  type: "document",
  fields: [
    defineField({ name: "published", title: "Publicado", type: "boolean", initialValue: true }),
    defineField({ name: "title", title: "Nome do projeto", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL amigável", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    imageField,
    defineField({ name: "description", title: "Descrição", type: "text", rows: 5 }),
    defineField({ name: "objective", title: "Objetivo", type: "text", rows: 3 }),
    defineField({ name: "audience", title: "Público atendido", type: "string" }),
    defineField({ name: "howToHelp", title: "Como ajudar", type: "text", rows: 4 }),
    defineField({ name: "leader", title: "Responsável", type: "string" }),
    defineField({ name: "donationUrl", title: "Link para doação", type: "url" }),
    defineField({ name: "volunteerFormText", title: "Texto do formulário de voluntariado", type: "text", rows: 3 }),
    ...seoFields
  ]
});

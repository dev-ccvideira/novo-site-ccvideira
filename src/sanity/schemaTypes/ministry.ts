import { defineField, defineType } from "sanity";
import { imageField, seoFields } from "./shared";

export const ministry = defineType({
  name: "ministry",
  title: "Ministérios",
  type: "document",
  fields: [
    defineField({ name: "published", title: "Publicado", type: "boolean", initialValue: true }),
    defineField({ name: "title", title: "Nome do ministério", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL amigável", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    imageField,
    defineField({ name: "description", title: "Descrição", type: "text", rows: 4 }),
    defineField({ name: "audience", title: "Público", type: "string" }),
    defineField({ name: "leader", title: "Líder responsável", type: "string" }),
    ...seoFields
  ]
});

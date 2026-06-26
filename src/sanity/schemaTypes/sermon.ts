import { defineField, defineType } from "sanity";
import { imageField, seoFields } from "./shared";

export const sermon = defineType({
  name: "sermon",
  title: "Mensagens e sermões",
  type: "document",
  fields: [
    defineField({ name: "published", title: "Publicado", type: "boolean", initialValue: true }),
    defineField({ name: "title", title: "Título da mensagem", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL amigável", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    imageField,
    defineField({ name: "speaker", title: "Pregador", type: "string" }),
    defineField({ name: "date", title: "Data", type: "date" }),
    defineField({ name: "series", title: "Série", type: "string" }),
    defineField({ name: "campus", title: "Campus", type: "string" }),
    defineField({ name: "youtubeUrl", title: "Link do YouTube", type: "url" }),
    defineField({ name: "description", title: "Descrição", type: "text", rows: 4 }),
    ...seoFields
  ]
});

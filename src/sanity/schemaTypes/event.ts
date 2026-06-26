import { defineField, defineType } from "sanity";
import { imageField, seoFields } from "./shared";

export const event = defineType({
  name: "event",
  title: "Eventos",
  type: "document",
  fields: [
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["draft", "published"] },
      initialValue: "draft"
    }),
    defineField({ name: "title", title: "Nome do evento", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL amigável", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    imageField,
    defineField({ name: "date", title: "Data", type: "date" }),
    defineField({ name: "time", title: "Horário", type: "string" }),
    defineField({ name: "location", title: "Local", type: "string" }),
    defineField({ name: "campus", title: "Campus", type: "string" }),
    defineField({ name: "description", title: "Descrição", type: "text", rows: 5 }),
    defineField({ name: "registrationUrl", title: "Link de inscrição", type: "url" }),
    ...seoFields
  ]
});

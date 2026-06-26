import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configurações gerais",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nome do site", type: "string" }),
    defineField({ name: "description", title: "Descrição institucional", type: "text", rows: 3 }),
    defineField({ name: "phone", title: "WhatsApp institucional", type: "string" }),
    defineField({ name: "email", title: "E-mail institucional", type: "string" }),
    defineField({ name: "instagram", title: "Instagram", type: "url" }),
    defineField({ name: "youtube", title: "YouTube", type: "url" }),
    defineField({ name: "liveUrl", title: "Link do ao vivo", type: "url" }),
    defineField({ name: "givingUrl", title: "Link de contribuição", type: "url" })
  ]
});

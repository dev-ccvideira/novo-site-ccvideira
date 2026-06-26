import { defineField, defineType } from "sanity";
import { imageField, seoFields } from "./shared";

export const campus = defineType({
  name: "campus",
  title: "Campus",
  type: "document",
  fields: [
    defineField({ name: "published", title: "Publicado", type: "boolean", initialValue: true }),
    defineField({ name: "title", title: "Nome do campus", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL amigável", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    imageField,
    defineField({ name: "city", title: "Cidade", type: "string" }),
    defineField({ name: "state", title: "Estado", type: "string" }),
    defineField({ name: "address", title: "Endereço", type: "string" }),
    defineField({
      name: "serviceTimes",
      title: "Horários dos cultos",
      type: "array",
      of: [
        {
          type: "object",
          name: "serviceTime",
          title: "Horário",
          fields: [
            defineField({
              name: "time",
              title: "Dia e horário",
              type: "string",
              validation: (Rule) => Rule.required()
            })
          ],
          preview: {
            select: { title: "time" }
          }
        }
      ]
    }),
    defineField({ name: "leader", title: "Pastor ou líder responsável", type: "string" }),
    defineField({
      name: "leaderPhoto",
      title: "Foto do líder",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          description: "Exemplo: Pastor Nome Sobrenome, líder do Campus [nome]."
        })
      ]
    }),
    defineField({
      name: "leaderBio",
      title: "Descrição pessoal do líder",
      type: "text",
      rows: 5,
      description: "Conte um pouco da história, família, chamado, área de cuidado e mensagem de acolhimento."
    }),
    defineField({
      name: "leaderInstagram",
      title: "Instagram pessoal do líder 1",
      type: "url",
      description: "Use o link completo, por exemplo: https://www.instagram.com/usuario"
    }),
    defineField({
      name: "leaderInstagram2",
      title: "Instagram pessoal do líder 2",
      type: "url",
      description: "Use quando a liderança do campus for um casal. Não cria outro card, apenas outro botão."
    }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),
    defineField({ name: "email", title: "E-mail", type: "string" }),
    defineField({ name: "mapUrl", title: "Link do mapa", type: "url" }),
    defineField({ name: "intro", title: "Texto de apresentação", type: "text", rows: 4 }),
    ...seoFields
  ],
  preview: {
    select: { title: "title", subtitle: "city", media: "image" }
  }
});

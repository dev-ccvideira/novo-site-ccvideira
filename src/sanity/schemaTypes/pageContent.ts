import { defineField, defineType } from "sanity";
import { seoFields } from "./shared";

export const pageContent = defineType({
  name: "pageContent",
  title: "Páginas institucionais",
  type: "document",
  fields: [
    defineField({
      name: "pageKey",
      title: "Página",
      type: "string",
      options: {
        list: [
          "home",
          "bem-vindo-a-casa",
          "generosidade",
          "contato",
          "lideres",
          "proximos-passos",
          "grupos",
          "ao-vivo",
          "pedido-de-oracao",
          "voluntariado"
        ]
      }
    }),
    defineField({ name: "headline", title: "Título principal", type: "string" }),
    defineField({ name: "subheadline", title: "Subtítulo", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Conteúdo", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "seniorLeaderName",
      title: "Nome do líder sênior",
      type: "string",
      hidden: ({ parent }) => parent?.pageKey !== "lideres"
    }),
    defineField({
      name: "seniorLeaderPhoto",
      title: "Foto do líder sênior",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.pageKey !== "lideres",
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string"
        })
      ]
    }),
    defineField({
      name: "seniorLeaderBio",
      title: "Descrição pessoal do líder sênior",
      type: "text",
      rows: 5,
      hidden: ({ parent }) => parent?.pageKey !== "lideres"
    }),
    defineField({
      name: "seniorLeaderInstagram",
      title: "Instagram pessoal do líder sênior 1",
      type: "url",
      hidden: ({ parent }) => parent?.pageKey !== "lideres"
    }),
    defineField({
      name: "seniorLeaderInstagram2",
      title: "Instagram pessoal do líder sênior 2",
      type: "url",
      hidden: ({ parent }) => parent?.pageKey !== "lideres"
    }),
    ...seoFields
  ]
});

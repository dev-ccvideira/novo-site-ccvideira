import { defineField, defineType } from "sanity";
import { seoFields } from "./shared";

export const leaderPage = defineType({
  name: "leaderPage",
  title: "Liderança Sênior",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Título principal",
      type: "string",
      initialValue: "Pessoas que cuidam da casa"
    }),
    defineField({
      name: "subheadline",
      title: "Subtítulo",
      type: "text",
      rows: 3,
      initialValue:
        "Espaço preparado para apresentar os líderes de cada campus, suas histórias, responsabilidades pastorais e canais oficiais de contato."
    }),
    defineField({
      name: "seniorLeaderName",
      title: "Nome da liderança sênior",
      type: "string"
    }),
    defineField({
      name: "seniorLeaderPhoto",
      title: "Foto da liderança sênior",
      type: "image",
      options: { hotspot: true },
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
      title: "Descrição pessoal da liderança sênior",
      type: "text",
      rows: 5
    }),
    defineField({
      name: "seniorLeaderInstagram",
      title: "Instagram da liderança sênior 1",
      type: "url"
    }),
    defineField({
      name: "seniorLeaderInstagram2",
      title: "Instagram da liderança sênior 2",
      type: "url"
    }),
    ...seoFields
  ],
  preview: {
    prepare() {
      return {
        title: "Liderança Sênior",
        subtitle: "Conteúdo do card principal da página /lideres"
      };
    }
  }
});

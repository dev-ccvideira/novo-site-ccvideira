import { defineField, defineType } from "sanity";
import { imageField } from "./shared";

export const generosityCampaign = defineType({
  name: "generosityCampaign",
  title: "Campanhas de generosidade",
  type: "document",
  fields: [
    defineField({ name: "published", title: "Publicado", type: "boolean", initialValue: true }),
    defineField({ name: "title", title: "Nome da campanha", type: "string" }),
    imageField,
    defineField({ name: "description", title: "Descrição", type: "text", rows: 4 }),
    defineField({ name: "givingUrl", title: "Link de contribuição", type: "url" }),
    defineField({ name: "pixKey", title: "Chave Pix", type: "string", description: "Preencher somente após validação da liderança." })
  ]
});

import { defineField } from "sanity";

export const seoFields = [
  defineField({
    name: "seoTitle",
    title: "Título SEO",
    type: "string"
  }),
  defineField({
    name: "seoDescription",
    title: "Meta description",
    type: "text",
    rows: 3
  }),
  defineField({
    name: "ogImage",
    title: "Imagem de compartilhamento",
    type: "image",
    options: { hotspot: true }
  })
];

export const imageField = defineField({
  name: "image",
  title: "Imagem",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Texto alternativo",
      type: "string",
      validation: (Rule) => Rule.required()
    })
  ]
});

import { defineField, defineType } from "sanity";

export const formSubmission = defineType({
  name: "formSubmission",
  title: "Formulários recebidos",
  type: "document",
  readOnly: true,
  fields: [
    defineField({ name: "formType", title: "Tipo de formulário", type: "string" }),
    defineField({ name: "name", title: "Nome", type: "string" }),
    defineField({ name: "email", title: "E-mail", type: "string" }),
    defineField({ name: "phone", title: "Telefone", type: "string" }),
    defineField({ name: "campus", title: "Campus", type: "string" }),
    defineField({ name: "subject", title: "Assunto", type: "string" }),
    defineField({ name: "message", title: "Mensagem", type: "text" }),
    defineField({ name: "payload", title: "Dados completos", type: "object", fields: [{ name: "json", title: "JSON", type: "text" }] }),
    defineField({ name: "createdAt", title: "Recebido em", type: "datetime" })
  ],
  preview: {
    select: { title: "name", subtitle: "formType" }
  }
});

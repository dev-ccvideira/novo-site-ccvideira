import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["siteSettings", "leaderPage"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("Configurações gerais")
        .schemaType("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings").title("Configurações gerais")),
      S.listItem()
        .title("Liderança Sênior")
        .schemaType("leaderPage")
        .child(S.document().schemaType("leaderPage").documentId("leaderPage").title("Liderança Sênior")),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => !singletonTypes.has(listItem.getId() || ""))
    ]);

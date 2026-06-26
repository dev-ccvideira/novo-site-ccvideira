import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";
import { getCampuses, getEvents, getMinistries, getSermons, getSocialProjects } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [campuses, events, ministries, sermons, projects] = await Promise.all([
    getCampuses(),
    getEvents(),
    getMinistries(),
    getSermons(),
    getSocialProjects()
  ]);

  const staticRoutes = [
    "",
    "/bem-vindo-a-casa",
    "/historia",
    "/missao-e-visao",
    "/o-que-cremos",
    "/generosidade",
    "/contato",
    "/conecte-se",
    "/conecte-se/redes-sociais",
    "/conecte-se/eventos",
    "/conecte-se/podcast",
    "/conecte-se/app-ccvideira",
    "/campus",
    "/lideres",
    "/cultos-e-horarios",
    "/projetos-sociais",
    "/proximos-passos",
    "/mensagens",
    "/eventos",
    "/ensino",
    "/ensino/fundamentos",
    "/ensino/antes-de-sermos-um",
    "/ensino/casados-pra-sempre",
    "/ensino/pais-pra-toda-a-vida",
    "/ministerios",
    "/ministerios/a13",
    "/ministerios/inspire",
    "/ministerios/somos-um",
    "/ministerios/videira-kids",
    "/ministerios/videira-music",
    "/grupos",
    "/ao-vivo",
    "/pedido-de-oracao",
    "/voluntariado",
    "/videira-store",
    "/videira-store/sucesso",
    "/videira-store/cancelado",
    "/portal-educa",
    "/sobre",
    "/politica-de-privacidade",
    "/termos-de-uso"
  ];

  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date() })),
    ...campuses.map((item) => ({ url: absoluteUrl(`/campus/${item.slug}`), lastModified: new Date() })),
    ...projects.map((item) => ({ url: absoluteUrl(`/projetos-sociais/${item.slug}`), lastModified: new Date() })),
    ...sermons.map((item) => ({ url: absoluteUrl(`/mensagens/${item.slug}`), lastModified: new Date() })),
    ...events.map((item) => ({ url: absoluteUrl(`/eventos/${item.slug}`), lastModified: new Date() })),
    ...ministries.map((item) => ({ url: absoluteUrl(`/ministerios/${item.slug}`), lastModified: new Date() }))
  ];
}

import type { Campus, EventItem, Ministry, Sermon, SiteSettings, SocialProject } from "./types";

export const siteSettings: SiteSettings = {
  title: "CCVideira - Comunidade Cristã Videira",
  description:
    "Uma Igreja, Uma Casa. Um lugar para conhecer a Deus, crescer em comunhão, servir com propósito e viver a fé no dia a dia.",
  phone: "+55 85 8205-1313",
  email: "contato@ccvideira.com.br",
  instagram: "https://www.instagram.com/ccvideira/",
  youtube: "https://www.youtube.com/@CCVideiraOnline",
  liveUrl: "/ao-vivo",
  givingUrl: "/generosidade"
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Bem-vindo à casa", href: "/bem-vindo-a-casa" },
  { label: "Campus", href: "/campus" },
  { label: "Próximos passos", href: "/proximos-passos" },
  { label: "Projetos sociais", href: "/projetos-sociais" },
  { label: "Generosidade", href: "/generosidade" },
  { label: "Mensagens", href: "/mensagens" },
  { label: "Eventos", href: "/eventos" },
  { label: "Contato", href: "/contato" }
];

export const secondaryNavItems = [
  { label: "Cultos e horários", href: "/cultos-e-horarios" },
  { label: "Ministérios", href: "/ministerios" },
  { label: "Grupos", href: "/grupos" },
  { label: "Portal Educa", href: "/portal-educa" },
  { label: "Pedido de oração", href: "/pedido-de-oracao" },
  { label: "Voluntariado", href: "/voluntariado" }
];

export const pillars = [
  { title: "Adoração", text: "Cultivamos uma vida centrada na presença de Deus." },
  { title: "Comunhão", text: "Caminhamos como família, com cuidado e proximidade." },
  { title: "Serviço", text: "Servimos pessoas com excelência, humildade e alegria." },
  { title: "Evangelismo", text: "Compartilhamos Jesus em palavras, atitudes e missões." },
  { title: "Edificação", text: "Crescemos pela Palavra, discipulado e formação." }
];

export const campuses: Campus[] = [
  {
    title: "Campus [Nome do campus]",
    slug: "campus-principal",
    city: "[Cidade]",
    state: "[UF]",
    address: "[Inserir endereço]",
    serviceTimes: ["[Inserir horário do culto]", "[Inserir outro horário, se houver]"],
    leader: "[Inserir pastor ou líder responsável]",
    whatsapp: "[Inserir WhatsApp do campus]",
    email: "[Inserir e-mail do campus]",
    mapUrl: "#",
    intro: "[Inserir texto oficial de apresentação do campus]"
  },
  {
    title: "Campus [Novo campus]",
    slug: "novo-campus",
    city: "[Cidade]",
    state: "[UF]",
    address: "[Inserir endereço]",
    serviceTimes: ["[Inserir horários]"],
    leader: "[Inserir líder responsável]",
    whatsapp: "[Inserir WhatsApp]",
    email: "[Inserir e-mail]",
    mapUrl: "#",
    intro: "[Inserir texto de apresentação]"
  }
];

export const events: EventItem[] = [
  {
    title: "[Nome do próximo evento]",
    slug: "proximo-evento",
    date: "[Inserir data]",
    time: "[Inserir horário]",
    location: "[Inserir local]",
    campus: "[Inserir campus]",
    description: "[Inserir descrição oficial do evento]",
    registrationUrl: "#"
  },
  {
    title: "[Curso ou encontro]",
    slug: "curso-ou-encontro",
    date: "[Inserir data]",
    time: "[Inserir horário]",
    location: "[Inserir local]",
    campus: "[Inserir campus]",
    description: "[Inserir descrição oficial]",
    registrationUrl: "#"
  }
];

export const socialProjects: SocialProject[] = [
  {
    title: "[Nome do projeto social]",
    slug: "projeto-social",
    description: "[Inserir descrição oficial do projeto social]",
    objective: "[Inserir objetivo do projeto]",
    audience: "[Inserir público atendido]",
    howToHelp: "[Inserir formas de ajudar]",
    leader: "[Inserir responsável]",
    donationUrl: "#"
  },
  {
    title: "[Campanha solidária]",
    slug: "campanha-solidaria",
    description: "[Inserir descrição da campanha]",
    objective: "[Inserir objetivo]",
    audience: "[Inserir público atendido]",
    howToHelp: "[Inserir como ajudar]",
    leader: "[Inserir responsável]",
    donationUrl: "#"
  }
];

export const sermons: Sermon[] = [
  {
    title: "[Título da mensagem]",
    slug: "mensagem-recente",
    speaker: "[Inserir pregador]",
    date: "[Inserir data]",
    series: "[Inserir série]",
    campus: "[Inserir campus]",
    youtubeUrl: "#",
    description: "[Inserir descrição da mensagem]"
  },
  {
    title: "[Título da série]",
    slug: "serie-recente",
    speaker: "[Inserir pregador]",
    date: "[Inserir data]",
    series: "[Inserir série]",
    campus: "[Inserir campus]",
    youtubeUrl: "#",
    description: "[Inserir descrição]"
  }
];

export const ministries: Ministry[] = [
  {
    title: "Crianças",
    slug: "criancas",
    description: "[Inserir descrição oficial do ministério infantil]",
    audience: "[Inserir faixa etária]",
    leader: "[Inserir líder]"
  },
  {
    title: "Jovens",
    slug: "jovens",
    description: "[Inserir descrição oficial do ministério de jovens]",
    audience: "[Inserir público]",
    leader: "[Inserir líder]"
  },
  {
    title: "Adoração",
    slug: "adoracao",
    description: "[Inserir descrição oficial do ministério de adoração]",
    audience: "[Inserir público]",
    leader: "[Inserir líder]"
  }
];

export const nextSteps = [
  "Aceitei Jesus",
  "Quero conhecer a igreja",
  "Quero ser batizado",
  "Quero participar de um grupo",
  "Quero servir",
  "Quero falar com um pastor"
];

export const seoDefaults = {
  siteName: "CCVideira",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ccvideira.com.br"
};

export type StoreProduct = {
  id: string;
  name: string;
  category: "Livraria" | "Bíblias" | "Devocionais" | "Artigos";
  description: string;
  priceCents: number;
  image: string;
  available: boolean;
};

export const storeProducts: StoreProduct[] = [
  {
    id: "biblia-estudo",
    name: "Bíblia de Estudo",
    category: "Bíblias",
    description: "Edição de estudo para leitura, devocional e aprofundamento bíblico.",
    priceCents: 12990,
    image: "/images/store/biblia-estudo.jpg",
    available: true
  },
  {
    id: "devocional-familia",
    name: "Devocional para Família",
    category: "Devocionais",
    description: "Material devocional para fortalecer a fé no dia a dia da casa.",
    priceCents: 4990,
    image: "/images/store/devocional-familia.jpg",
    available: true
  },
  {
    id: "livro-discipulado",
    name: "Livro de Discipulado",
    category: "Livraria",
    description: "Conteúdo para novos convertidos, grupos e caminhada cristã.",
    priceCents: 3990,
    image: "/images/store/livro-discipulado.jpg",
    available: true
  },
  {
    id: "caderno-sermao",
    name: "Caderno de Mensagens",
    category: "Artigos",
    description: "Caderno para anotações de cultos, estudos e devocionais.",
    priceCents: 2990,
    image: "/images/store/caderno-sermao.jpg",
    available: true
  },
  {
    id: "kit-presente",
    name: "Kit Presente Vida com Deus",
    category: "Artigos",
    description: "Kit com itens de livraria e cuidado espiritual para presentear.",
    priceCents: 8990,
    image: "/images/store/kit-presente.jpg",
    available: true
  },
  {
    id: "plano-leitura",
    name: "Plano de Leitura Bíblica",
    category: "Devocionais",
    description: "Guia impresso para organizar uma rotina de leitura bíblica.",
    priceCents: 1990,
    image: "/images/store/plano-leitura.jpg",
    available: true
  }
];

export function formatCurrency(valueCents: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valueCents / 100);
}

export function getStoreProduct(id: string) {
  return storeProducts.find((product) => product.id === id);
}

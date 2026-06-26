import type { Metadata } from "next";
import { VideiraStore } from "@/components/store/VideiraStore";
import { storeProducts } from "@/lib/store";

export const metadata: Metadata = {
  title: "Videira Store",
  description: "Loja da CCVideira para artigos de livraria, Bíblias, devocionais e artigos bíblicos."
};

export default function VideiraStorePage() {
  return (
    <>
      <section className="bg-black pt-36 text-white">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-gold-300">Videira Store</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
              Livraria, Bíblias e artigos bíblicos
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/75">
            Uma loja preparada para venda online, com carrinho e estrutura pronta para conectar ao Stripe Checkout.
            Produtos, preços e imagens devem ser validados pela equipe antes da publicação.
          </p>
        </div>
      </section>

      <section className="bg-stonewarm-50 py-16">
        <div className="container-page">
          <VideiraStore products={storeProducts} />
        </div>
      </section>
    </>
  );
}

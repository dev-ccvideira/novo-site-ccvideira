import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Compra cancelada",
  description: "Retorno de checkout cancelado na Videira Store."
};

export default function StoreCanceledPage() {
  return (
    <section className="bg-stonewarm-50 pt-36">
      <div className="container-page max-w-3xl py-20 text-center">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-gold-500">Videira Store</p>
        <h1 className="mt-4 text-5xl font-black text-vine-900">Compra cancelada</h1>
        <p className="mt-5 text-lg leading-8 text-stonewarm-700">
          Nenhuma cobrança foi concluída. Você pode voltar para a loja e revisar seu carrinho.
        </p>
        <div className="mt-8">
          <ButtonLink href="/videira-store" variant="primary">
            Voltar para a loja
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

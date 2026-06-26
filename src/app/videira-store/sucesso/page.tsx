import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Compra recebida",
  description: "Confirmação de compra na Videira Store."
};

export default function StoreSuccessPage() {
  return (
    <section className="bg-stonewarm-50 pt-36">
      <div className="container-page max-w-3xl py-20 text-center">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-gold-500">Videira Store</p>
        <h1 className="mt-4 text-5xl font-black text-vine-900">Compra recebida</h1>
        <p className="mt-5 text-lg leading-8 text-stonewarm-700">
          Obrigado. Quando o Stripe estiver conectado, esta página será exibida após a confirmação do pagamento.
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

"use client";

import { useMemo, useState } from "react";
import type { StoreProduct } from "@/lib/store";
import { formatCurrency } from "@/lib/store";

type CartItem = {
  productId: string;
  quantity: number;
};

export function VideiraStore({ products }: { products: StoreProduct[] }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const cartProducts = useMemo(
    () =>
      cart
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId);
          return product ? { ...item, product } : null;
        })
        .filter((item): item is CartItem & { product: StoreProduct } => Boolean(item)),
    [cart, products]
  );

  const total = cartProducts.reduce((sum, item) => sum + item.product.priceCents * item.quantity, 0);

  function addToCart(productId: string) {
    setMessage(null);
    setCart((items) => {
      const existing = items.find((item) => item.productId === productId);
      if (existing) {
        return items.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { productId, quantity: 1 }];
    });
  }

  function updateQuantity(productId: string, quantity: number) {
    setCart((items) =>
      quantity <= 0
        ? items.filter((item) => item.productId !== productId)
        : items.map((item) => (item.productId === productId ? { ...item, quantity } : item))
    );
  }

  async function checkout() {
    setLoading(true);
    setMessage(null);

    const response = await fetch("/api/store/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart })
    });
    const data = await response.json();

    if (response.ok && data.url) {
      window.location.href = data.url;
      return;
    }

    setMessage(data.message || "Checkout ainda não configurado.");
    setLoading(false);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-lg border border-vine-900/10 bg-white shadow-sm">
              <div className="relative h-64 bg-stonewarm-100">
                <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-stonewarm-100 to-vine-50 text-center text-vine-900">
                  <div className="px-6">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">{product.category}</p>
                    <p className="mt-2 text-2xl font-black">{product.name}</p>
                  </div>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-500">{product.category}</p>
                <h2 className="mt-2 text-2xl font-black text-vine-900">{product.name}</h2>
                <p className="mt-3 min-h-16 text-sm leading-6 text-stonewarm-700">{product.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-xl font-black text-stonewarm-900">{formatCurrency(product.priceCents)}</p>
                  <button
                    type="button"
                    onClick={() => addToCart(product.id)}
                    className="focus-ring rounded-full bg-gold-300 px-4 py-2 text-sm font-black text-vine-900 transition hover:bg-gold-500"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="h-fit rounded-lg border border-vine-900/10 bg-white p-6 shadow-soft lg:sticky lg:top-28">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-500">Carrinho</p>
        <h2 className="mt-2 text-3xl font-black text-vine-900">Videira Store</h2>
        {cartProducts.length === 0 ? (
          <p className="mt-5 text-sm leading-6 text-stonewarm-700">Adicione produtos para preparar o checkout.</p>
        ) : (
          <div className="mt-5 grid gap-4">
            {cartProducts.map((item) => (
              <div key={item.productId} className="border-b border-vine-900/10 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-black text-vine-900">{item.product.name}</p>
                    <p className="mt-1 text-sm text-stonewarm-700">{formatCurrency(item.product.priceCents)}</p>
                  </div>
                  <input
                    aria-label={`Quantidade de ${item.product.name}`}
                    type="number"
                    min={0}
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.productId, Number(event.target.value))}
                    className="w-16 rounded-md border border-vine-900/15 px-2 py-1 text-center"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-vine-900/10 pt-5">
          <span className="text-sm font-bold text-stonewarm-700">Total</span>
          <span className="text-2xl font-black text-vine-900">{formatCurrency(total)}</span>
        </div>
        <button
          type="button"
          disabled={!cartProducts.length || loading}
          onClick={checkout}
          className="focus-ring mt-5 w-full rounded-full bg-vine-900 px-5 py-3 text-sm font-black text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-45"
        >
          {loading ? "Preparando..." : "Finalizar compra"}
        </button>
        {message ? <p className="mt-4 text-sm leading-6 text-stonewarm-700">{message}</p> : null}
        <p className="mt-5 text-xs leading-5 text-stonewarm-700">
          Checkout preparado para Stripe. Ative as variáveis de ambiente antes de receber pagamentos online.
        </p>
      </aside>
    </div>
  );
}

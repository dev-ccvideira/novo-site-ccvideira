import { NextResponse } from "next/server";
import { getStoreProduct } from "@/lib/store";

type CheckoutItem = {
  productId: string;
  quantity: number;
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const items = Array.isArray(body?.items) ? (body.items as CheckoutItem[]) : [];

  const lineItems = items
    .map((item) => {
      const product = getStoreProduct(item.productId);
      const quantity = Number(item.quantity);

      if (!product || !product.available || !Number.isFinite(quantity) || quantity <= 0) return null;

      return {
        product,
        quantity: Math.min(Math.floor(quantity), 20)
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (!lineItems.length) {
    return NextResponse.json({ message: "Carrinho vazio ou invalido." }, { status: 400 });
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!stripeSecretKey) {
    return NextResponse.json(
      {
        message:
          "Checkout preparado. Configure STRIPE_SECRET_KEY para criar uma sessao real no Stripe Checkout."
      },
      { status: 501 }
    );
  }

  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set("success_url", `${siteUrl}/videira-store/sucesso?session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${siteUrl}/videira-store/cancelado`);
  params.set("billing_address_collection", "auto");
  params.set("shipping_address_collection[allowed_countries][0]", "BR");

  lineItems.forEach((item, index) => {
    params.set(`line_items[${index}][quantity]`, String(item.quantity));
    params.set(`line_items[${index}][price_data][currency]`, "brl");
    params.set(`line_items[${index}][price_data][unit_amount]`, String(item.product.priceCents));
    params.set(`line_items[${index}][price_data][product_data][name]`, item.product.name);
    params.set(`line_items[${index}][price_data][product_data][description]`, item.product.description);
  });

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { message: data.error?.message || "Não foi possível criar o checkout." },
      { status: response.status }
    );
  }

  return NextResponse.json({ url: data.url });
}

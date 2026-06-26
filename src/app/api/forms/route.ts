import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sanityEnabled, writeClient } from "@/sanity/lib/client";

const allowedForms = new Set(["contato", "planeje-visita", "proximos-passos", "voluntariado", "pedido-oracao"]);

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const formType = String(payload.formType || "");
  const name = String(payload.name || "").trim();

  if (!allowedForms.has(formType) || !name) {
    return NextResponse.json({ error: "Formulário inválido" }, { status: 400 });
  }

  const document = {
    _type: "formSubmission",
    formType,
    name,
    email: String(payload.email || ""),
    phone: String(payload.phone || ""),
    campus: String(payload.campus || ""),
    subject: String(payload.subject || payload.decision || formType),
    message: String(payload.message || payload.request || ""),
    payload: { json: JSON.stringify(payload, null, 2) },
    createdAt: new Date().toISOString()
  };

  if (sanityEnabled && process.env.SANITY_API_WRITE_TOKEN) {
    await writeClient.create(document);
  }

  if (process.env.RESEND_API_KEY && process.env.FORMS_TO_EMAIL && process.env.FORMS_FROM_EMAIL) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.FORMS_FROM_EMAIL,
      to: process.env.FORMS_TO_EMAIL,
      subject: `Novo formulário: ${formType}`,
      text: Object.entries(payload)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")
    });
  }

  return NextResponse.json({ ok: true });
}

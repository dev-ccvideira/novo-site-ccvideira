"use client";

import { useState } from "react";
import { cx } from "@/lib/utils";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "number" | "textarea" | "select" | "checkbox";
  required?: boolean;
  options?: string[];
};

type SiteFormProps = {
  formType: string;
  title: string;
  description?: string;
  fields: Field[];
};

export function SiteForm({ formType, title, description, fields }: SiteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, ...payload })
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-vine-900/10 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black text-vine-900">{title}</h2>
      {description ? <p className="mt-2 text-sm leading-6 text-stonewarm-700">{description}</p> : null}
      <input type="hidden" name="formType" value={formType} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label
            key={field.name}
            className={cx("grid gap-2 text-sm font-bold text-stonewarm-900", field.type === "textarea" && "sm:col-span-2")}
          >
            {field.label}
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                required={field.required}
                rows={5}
                className="focus-ring rounded-lg border border-vine-900/15 bg-stonewarm-50 px-4 py-3 font-normal text-stonewarm-900"
              />
            ) : field.type === "select" ? (
              <select
                name={field.name}
                required={field.required}
                className="focus-ring min-h-11 rounded-lg border border-vine-900/15 bg-stonewarm-50 px-4 py-3 font-normal text-stonewarm-900"
              >
                <option value="">Selecionar</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "checkbox" ? (
              <span className="flex items-center gap-3 rounded-lg border border-vine-900/15 bg-stonewarm-50 px-4 py-3 font-normal">
                <input name={field.name} type="checkbox" value="Sim" className="size-4" />
                Sim
              </span>
            ) : (
              <input
                name={field.name}
                type={field.type || "text"}
                required={field.required}
                className="focus-ring min-h-11 rounded-lg border border-vine-900/15 bg-stonewarm-50 px-4 py-3 font-normal text-stonewarm-900"
              />
            )}
          </label>
        ))}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring mt-6 inline-flex min-h-11 rounded-full bg-vine-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-vine-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>
      {status === "success" ? (
        <p className="mt-4 text-sm font-semibold text-vine-700">Recebemos sua mensagem. A equipe entrara em contato.</p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-sm font-semibold text-red-700">Não foi possível enviar agora. Tente novamente em instantes.</p>
      ) : null}
    </form>
  );
}

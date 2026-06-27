"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";

type MenuChild = {
  label: string;
  href: string;
  description?: string;
};

type MenuItem = {
  label: string;
  href: string;
  children?: MenuChild[];
};

const menuItems: MenuItem[] = [
  {
    label: "Bem-vindo à casa",
    href: "/bem-vindo-a-casa",
    children: [
      { label: "Nossa história", href: "/historia" },
      { label: "Missão e Visão", href: "/missao-e-visao" },
      { label: "O que cremos", href: "/o-que-cremos" },
      { label: "Nossos Campus", href: "/campus" },
      { label: "Líderes", href: "/lideres" },
      { label: "Mensagens", href: "/mensagens" }
    ]
  },
  {
    label: "Ministérios",
    href: "/ministerios",
    children: [
      { label: "Videira Kids", href: "/ministerios/videira-kids" },
      { label: "A13", href: "/ministerios/a13" },
      { label: "Videira Music", href: "/ministerios/videira-music" },
      { label: "Inspire", href: "/ministerios/inspire" },
      { label: "Somos Um", href: "/ministerios/somos-um" }
    ]
  },
  {
    label: "Próximos Passos",
    href: "/proximos-passos",
    children: [
      { label: "Visitantes", href: "/contato" },
      { label: "Seguir Jesus", href: "/proximos-passos#seguir-jesus" },
      { label: "Novo de Novo", href: "/proximos-passos#novo-de-novo" },
      { label: "Grupos de Crescimento", href: "/grupos" },
      { label: "Voluntariado", href: "/voluntariado" },
      { label: "Missões", href: "/projetos-sociais" }
    ]
  },
  {
    label: "Ensino",
    href: "/ensino",
    children: [
      { label: "Fundamentos", href: "/ensino/fundamentos" },
      { label: "Antes de Sermos Um", href: "/ensino/antes-de-sermos-um" },
      { label: "Casados Pra Sempre", href: "/ensino/casados-pra-sempre" },
      { label: "Pais Pra Toda a Vida", href: "/ensino/pais-pra-toda-a-vida" }
    ]
  },
  {
    label: "Conecte-se",
    href: "/conecte-se",
    children: [
      { label: "Redes Sociais", href: "/conecte-se/redes-sociais" },
      { label: "Eventos", href: "/conecte-se/eventos" },
      { label: "Podcast", href: "/conecte-se/podcast" },
      { label: "App CCVideira", href: "/conecte-se/app-ccvideira" }
    ]
  },
  {
    label: "Projetos Sociais",
    href: "/projetos-sociais",
    children: [
      { label: "Instituto Vida Videira", href: "/projetos-sociais/instituto-vida-videira" },
      { label: "Ame Seu Vizinho", href: "/projetos-sociais/ame-seu-vizinho" },
      { label: "Compassion", href: "/projetos-sociais/compassion" }
    ]
  },
  {
    label: "Videira Store",
    href: "/videira-store",
    children: [
      { label: "Livraria", href: "/videira-store#livraria" },
      { label: "Bíblias", href: "/videira-store#biblias" },
      { label: "Devocionais", href: "/videira-store#devocionais" },
      { label: "Artigos bíblicos", href: "/videira-store#artigos" }
    ]
  },
  {
    label: "Generosidade",
    href: "/generosidade",
    children: [
      { label: "Faça Sua Parte", href: "/voluntariado" },
      { label: "Dízimos e Ofertas", href: "/generosidade" }
    ]
  }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        transparent
          ? "border-white/10 bg-transparent text-white"
          : "border-vine-900/10 bg-stonewarm-50/95 text-stonewarm-900 shadow-sm backdrop-blur"
      )}
    >
      <div className="container-page flex h-24 items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex shrink-0 items-center rounded-md">
          <Image
            src="/images/logo-ccvideira-header.png"
            alt="CCVideira - Comunidade Cristã Videira"
            width={118}
            height={88}
            priority
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden items-center justify-end gap-0 lg:flex" aria-label="Menu principal">
          {menuItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={cx(
                  "focus-ring inline-flex min-h-11 items-center rounded-full px-2.5 text-[13px] font-bold transition 2xl:px-3 2xl:text-sm",
                  transparent ? "text-white hover:bg-white/12" : "text-stonewarm-900 hover:bg-vine-50",
                  pathname === item.href && !transparent && "text-vine-700"
                )}
              >
                {item.label}
                {item.children ? <span className="ml-1 text-[10px] opacity-70">▾</span> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full w-72 pt-2 text-stonewarm-900 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid gap-1 rounded-lg border border-vine-900/10 bg-white p-3 shadow-soft">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group/item rounded-md px-3 py-2 transition hover:bg-vine-50"
                      >
                        <span className="block text-sm font-black text-vine-900">{child.label}</span>
                        {child.description ? (
                          <span className="mt-1 hidden text-xs leading-5 text-stonewarm-700 group-hover/item:block">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <button
          className={cx(
            "focus-ring inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-bold lg:hidden",
            transparent ? "border-white/30 text-white" : "border-vine-900/15 text-vine-900"
          )}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-vine-900/10 bg-stonewarm-50 text-vine-900 lg:hidden">
          <nav className="container-page grid max-h-[calc(100svh-96px)] gap-4 overflow-y-auto py-5" aria-label="Menu mobile">
            {menuItems.map((item) => (
              <div key={item.href} className="rounded-lg bg-white p-4 shadow-sm">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring text-lg font-black"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mt-3 grid gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-2 py-2 text-sm font-bold text-stonewarm-700"
                      >
                        {child.label}
                        {child.description ? (
                          <span className="mt-1 block text-xs font-normal leading-5 text-stonewarm-700">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

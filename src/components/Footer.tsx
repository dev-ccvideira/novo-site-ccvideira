import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { navItems, siteSettings } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

function socialHref(href: string) {
  return href.startsWith("http") ? href : "#";
}

function SocialIconLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const resolvedHref = socialHref(href);
  const isExternal = resolvedHref.startsWith("http");

  return (
    <Link
      href={resolvedHref}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="focus-ring grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-gold-100 transition hover:border-gold-300 hover:bg-gold-300 hover:text-vine-900"
    >
      {children}
    </Link>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none">
      <rect width="16" height="16" x="4" y="4" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" className="size-6" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12c0-2.1-.2-3.8-.5-4.8-.2-.8-.9-1.4-1.7-1.6C17.4 5.2 12 5.2 12 5.2s-5.4 0-6.8.4c-.8.2-1.5.8-1.7 1.6C3.2 8.2 3 9.9 3 12s.2 3.8.5 4.8c.2.8.9 1.4 1.7 1.6 1.4.4 6.8.4 6.8.4s5.4 0 6.8-.4c.8-.2 1.5-.8 1.7-1.6.3-1 .5-2.7.5-4.8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="m10.5 9.4 4.4 2.6-4.4 2.6V9.4Z" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.4 18.7 6.3 15A7.4 7.4 0 1 1 9 17.7l-3.6 1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.4 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3-.1.5.3.5.7 1 1.2 1.4.6.5 1.1.8 1.7 1 .2.1.4 0 .5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.3.4.5 0 .5-.2 1.2-.6 1.6-.4.4-1.1.6-1.8.5-1.5-.2-3.2-1-4.8-2.5-1.5-1.5-2.5-3.2-2.7-4.7-.1-.7.1-1.3.5-1.8.2-.2.4-.4.6-.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  const whatsappUrl = "https://wa.me/558582051313";

  return (
    <footer className="bg-black text-white">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-footer.png"
              alt="CCVideira - Comunidade Cristã Videira"
              width={56}
              height={56}
              className="h-14 w-auto"
            />
            <div>
              <p className="text-sm text-vine-100">Viver, Amar e Servir</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-vine-100">
            Bem-vindo a uma casa de fé, comunhão, serviço e generosidade.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/generosidade" variant="secondary">
              Contribuir
            </ButtonLink>
            <ButtonLink href="/pedido-de-oracao" variant="light">
              Pedido de oração
            </ButtonLink>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-100">Links rápidos</h3>
          <ul className="mt-4 grid gap-3 text-sm text-vine-100">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-100">Contato</h3>
          <ul className="mt-4 grid gap-3 text-sm text-vine-100">
            <li>Whatsapp {siteSettings.phone}</li>
            <li>{siteSettings.email}</li>
            <li>Rua Eliseu Oriá, 1553, Bairro José de Alencar, Fortaleza - CE</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-100">Redes</h3>
          <div className="mt-4 flex gap-3">
            <SocialIconLink href={siteSettings.instagram} label="Abrir Instagram da CCVideira">
              <InstagramIcon />
            </SocialIconLink>
            <SocialIconLink href={siteSettings.youtube} label="Abrir YouTube da CCVideira">
              <YouTubeIcon />
            </SocialIconLink>
            <SocialIconLink href={whatsappUrl} label="Falar com a CCVideira pelo WhatsApp">
              <WhatsAppIcon />
            </SocialIconLink>
          </div>
          <ul className="mt-6 grid gap-3 text-sm text-vine-100">
            <li>
              <Link href="/politica-de-privacidade">Política de privacidade</Link>
            </li>
            <li>
              <Link href="/termos-de-uso">Termos de uso</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page text-sm text-vine-100">
          © 2026 CCVideira - Comunidade Cristã Videira.
        </div>
      </div>
    </footer>
  );
}

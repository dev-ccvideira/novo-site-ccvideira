import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const variants = {
    primary: "bg-vine-700 text-white hover:bg-vine-900",
    secondary: "bg-gold-300 text-stonewarm-900 hover:bg-gold-500",
    light: "bg-white text-vine-900 hover:bg-vine-50",
    ghost: "border border-vine-700/20 text-vine-900 hover:bg-vine-50"
  };

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cx(
        "focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

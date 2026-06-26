import { ButtonLink } from "./ButtonLink";
import { AnimatedSection } from "./AnimatedSection";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  align?: "left" | "center";
  contentClassName?: string;
};

export function PageHero({ eyebrow, title, text, primary, secondary, align = "left", contentClassName = "" }: PageHeroProps) {
  const isCentered = align === "center";

  return (
    <AnimatedSection className="image-wash text-white" direction="none">
      <div className={`container-page py-20 sm:py-24 ${contentClassName}`}>
        {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-100">{eyebrow}</p> : null}
        <h1 className={`${eyebrow ? "mt-4" : ""} max-w-4xl text-5xl font-black tracking-tight sm:text-6xl ${isCentered ? "mx-auto text-center" : ""}`}>
          {title}
        </h1>
        {text ? <p className={`mt-5 max-w-2xl text-lg leading-8 text-vine-50 ${isCentered ? "mx-auto text-center" : ""}`}>{text}</p> : null}
        <div className={`mt-8 flex flex-wrap gap-3 ${isCentered ? "justify-center" : ""}`}>
          {primary ? (
            <ButtonLink href={primary.href} variant="secondary">
              {primary.label}
            </ButtonLink>
          ) : null}
          {secondary ? (
            <ButtonLink href={secondary.href} variant="light">
              {secondary.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </AnimatedSection>
  );
}

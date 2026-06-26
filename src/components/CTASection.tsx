import { ButtonLink } from "./ButtonLink";
import { AnimatedSection } from "./AnimatedSection";

type CTASectionProps = {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({ title, text, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: CTASectionProps) {
  return (
    <AnimatedSection className="bg-vine-900 py-16 text-white">
      <div className="container-page grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-300">Faca parte</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-vine-100">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={primaryHref} variant="secondary">
            {primaryLabel}
          </ButtonLink>
          {secondaryLabel && secondaryHref ? (
            <ButtonLink href={secondaryHref} variant="light">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </AnimatedSection>
  );
}

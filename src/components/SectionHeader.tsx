type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-500">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-stonewarm-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-stonewarm-700">{description}</p> : null}
    </div>
  );
}

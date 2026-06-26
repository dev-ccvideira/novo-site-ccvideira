type VisualPlaceholderProps = {
  label: string;
  className?: string;
};

export function VisualPlaceholder({ label, className = "" }: VisualPlaceholderProps) {
  return (
    <div
      className={`image-wash flex min-h-64 items-end overflow-hidden rounded-lg p-6 text-white shadow-soft ${className}`}
      role="img"
      aria-label={label}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-100">Imagem editavel</p>
        <p className="mt-2 max-w-sm text-lg font-bold">{label}</p>
      </div>
    </div>
  );
}

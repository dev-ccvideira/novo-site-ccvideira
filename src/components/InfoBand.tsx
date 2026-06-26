export function InfoBand({ items }: { items: Array<{ label: string; value: string }> }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-vine-900/10 bg-white p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-500">{item.label}</p>
          <p className="mt-2 text-lg font-black text-vine-900">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function PageHeader({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <section className="bg-gradient-hero relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute -right-32 top-0 size-80 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:py-24">
        {eyebrow && (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</div>
        )}
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">{title}</h1>
        {desc && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{desc}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <div className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent ${align === "center" ? "" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

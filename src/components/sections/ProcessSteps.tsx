import { PROCESS } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function ProcessSteps() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Our Process"
          title="A simple 4-step journey"
          desc="From the first conversation to fund disbursement — clear, guided, and stress-free."
        />

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent lg:block" />
          {PROCESS.map((p) => (
            <div
              key={p.n}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-gold text-lg font-bold text-primary-foreground shadow-elegant">
                {p.n}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

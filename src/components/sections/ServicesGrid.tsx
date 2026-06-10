import * as Icons from "lucide-react";
import { SERVICES } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section id="services" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Our Services"
          title="Financial solutions for every milestone"
          desc="A complete suite of lending and insurance products, matched to your needs with expert guidance."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon];
            return (
              <div
                key={s.slug}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-elegant"
              >
                <div className="absolute -right-12 -top-12 size-32 rounded-full bg-gold-soft/0 transition-colors group-hover:bg-gold-soft/40" />
                <div className="relative">
                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-gold shadow-soft">
                    {Icon && <Icon className="size-6 text-primary-foreground" />}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

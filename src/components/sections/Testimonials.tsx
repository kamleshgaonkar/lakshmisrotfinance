import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <Quote className="size-7 text-accent/70" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4 text-sm">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

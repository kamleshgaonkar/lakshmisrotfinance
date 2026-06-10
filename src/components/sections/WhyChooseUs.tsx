import { Check } from "lucide-react";
import { WHY_US } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="We make finance simple"
          desc="A trusted, end-to-end finance partner — backed by experience, transparency, and care."
        />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {WHY_US.map((w) => (
            <li
              key={w}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-gold/60"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-gradient-gold shadow-soft">
                <Check className="size-4 text-primary-foreground" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-foreground">{w}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

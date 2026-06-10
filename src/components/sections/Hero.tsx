import { Link } from "@tanstack/react-router";
import { Check, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const TRUST = [
  "Quick Assistance",
  "Competitive Interest Rates",
  "Hassle-Free Documentation",
  "Trusted Financial Guidance",
];

export function Hero() {
  return (
    <section className="bg-gradient-hero relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-10 size-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-80 rounded-full bg-crimson/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/40 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-foreground/80">
            <Sparkles className="size-3.5 text-accent" />
            Trusted Finance Partner
          </span>

          <h1 className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Your Trusted Partner for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Smart Financial</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-gold/40" />
            </span>{" "}
            Solutions
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Whether you're planning to buy a home, grow your business, purchase a vehicle, or secure your family's future, {SITE.short} helps you find the right financial products with expert guidance and personalized support.
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                <span className="flex size-6 items-center justify-center rounded-full bg-gradient-gold shadow-soft">
                  <Check className="size-3.5 text-primary-foreground" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Talk to an Expert <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold/50 bg-background/60">
              <a href={`tel:${SITE.phones[0]}`}>
                <Phone className="mr-1 size-4 text-accent" /> {SITE.phones[0]}
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Or call <a href={`tel:${SITE.phones[1]}`} className="font-semibold text-foreground hover:text-accent">{SITE.phones[1]}</a>
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl border border-gold/40 bg-card/70 p-8 shadow-elegant backdrop-blur">
            <div className="absolute -top-3 left-8 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              Why Choose Us
            </div>
            <div className="grid grid-cols-2 gap-6 pt-2">
              {[
                { k: "10+", v: "Years of Experience" },
                { k: "20+", v: "Banking Partners" },
                { k: "1000+", v: "Happy Clients" },
                { k: "9", v: "Loan Products" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-secondary/50 p-5">
                  <div className="text-3xl font-bold text-accent">{s.k}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-border/60 pt-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                From <span className="font-semibold text-foreground">application</span> to <span className="font-semibold text-foreground">approval</span>, we handle it all — so you can focus on what matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

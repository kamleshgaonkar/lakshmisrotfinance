import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-gold p-10 shadow-elegant sm:p-14">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 size-72 rounded-full bg-crimson/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                Ready to take the next step?
              </h2>
              <p className="mt-3 text-primary-foreground/85">
                Speak with our finance experts and discover the right solution for your goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-background/30 text-primary-foreground hover:bg-background/50">
                <a href={`tel:${SITE.phones[0]}`}>
                  <Phone className="mr-1 size-4" /> {SITE.phones[0]}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

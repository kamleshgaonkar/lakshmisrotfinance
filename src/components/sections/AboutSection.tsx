import { Link } from "react-router-dom";
import { ArrowRight, HandCoins, Handshake, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">About Us</div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Welcome to {SITE.short} Solutions
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              At {SITE.name}, we are committed to helping individuals, families, and businesses achieve their financial goals through customized lending and insurance solutions.
            </p>
            <p>
              With years of industry experience and strong banking relationships, we assist clients in finding suitable financial products that match their needs while ensuring a smooth and transparent process from application to approval.
            </p>
            <p>
              Whether you need a personal loan, business funding, home finance, mortgage solutions, or insurance support, our team is here to guide you every step of the way.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/about">
                Learn more about us <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { Icon: Handshake, title: "Strong Partnerships", desc: "Direct relationships with leading banks and NBFCs." },
            { Icon: HandCoins, title: "Best-fit Products", desc: "We match the right loan to your unique situation." },
            { Icon: FileCheck, title: "Transparent Process", desc: "Clear guidance from application to approval." },
            { Icon: Handshake, title: "Personalized Service", desc: "Real people, real advice — tailored to you." },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold/60 hover:shadow-soft"
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-gold-soft text-accent">
                <c.Icon className="size-5" />
              </div>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

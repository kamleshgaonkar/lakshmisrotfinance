import { useState } from "react";
import { Phone, Mail, MapPin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SITE, SERVICES } from "@/lib/site";

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll reach out within one business day.");
    }, 700);
  }

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contact Us</div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Let's discuss your financial needs</h2>
          <p className="mt-4 text-muted-foreground">
            Reach out for a no-obligation consultation. We respond quickly and guide you with clarity.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-accent">
                <MapPin className="size-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Office</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.line3}
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-accent">
                <Phone className="size-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Phone</div>
                <div className="mt-1 flex flex-col gap-0.5 text-sm">
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="text-muted-foreground hover:text-accent">{p}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-accent">
                <Mail className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground">Email</div>
                <div className="mt-1 flex flex-col gap-0.5 text-sm">
                  {SITE.emails.map((m) => (
                    <a key={m} href={`mailto:${m}`} className="break-all text-muted-foreground hover:text-accent">{m}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-accent">
                <Globe className="size-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Website</div>
                <p className="mt-1 text-sm text-muted-foreground">{SITE.website}</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-7 shadow-elegant sm:p-9"
        >
          <h3 className="text-xl font-semibold text-foreground">Send us a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">Fill the form and our team will contact you shortly.</p>

          <div className="mt-6 grid gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="Mobile number" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="service">Interested in</Label>
              <select
                id="service"
                name="service"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={4} placeholder="Tell us briefly about your requirement..." />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {loading ? "Sending..." : (<>Send Message <Send className="ml-1 size-4" /></>)}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img src={logo.url} alt={SITE.name} className="h-14 w-auto" />
            <p className="text-sm text-muted-foreground">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", l: "Home" },
                { to: "/about", l: "About Us" },
                { to: "/services", l: "Services" },
                { to: "/process", l: "Our Process" },
                { to: "/contact", l: "Contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-muted-foreground transition-colors hover:text-accent">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug} className="text-muted-foreground">{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.line3}</span>
              </li>
              {SITE.phones.map((p) => (
                <li key={p} className="flex gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                  <a href={`tel:${p}`} className="hover:text-accent">{p}</a>
                </li>
              ))}
              <li className="flex gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href={`mailto:${SITE.emails[0]}`} className="break-all hover:text-accent">{SITE.emails[0]}</a>
              </li>
              <li className="flex gap-2">
                <Globe className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{SITE.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="italic text-accent">"{SITE.tagline}"</p>
        </div>
      </div>
    </footer>
  );
}

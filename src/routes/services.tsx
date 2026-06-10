import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Lakshmi Srot Finance Solutions" },
      { name: "description", content: "Explore our full range of services: business, personal, home, mortgage, education, vehicle loans, insurance and auction property assistance." },
      { property: "og:title", content: "Services — Lakshmi Srot Finance Solutions" },
      { property: "og:description", content: "Complete suite of lending and insurance products tailored to your needs." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="A complete suite of financial solutions"
        desc="From loans to insurance — we help you find the right product for every life and business milestone."
      />
      <ServicesGrid />
      <CTABanner />
    </>
  );
}

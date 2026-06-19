import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Services() {
  usePageMeta({
    title: "Our Services — Lakshmi Srot Finance Solutions",
    description:
      "Explore our full range of services: business, personal, home, mortgage, education, vehicle loans, insurance and auction property assistance.",
  });
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

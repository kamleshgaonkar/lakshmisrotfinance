import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Lakshmi Srot Finance Solutions" },
      { name: "description", content: "Our simple 4-step process — from consultation and documentation to application and disbursement." },
      { property: "og:title", content: "Our Process — Lakshmi Srot Finance Solutions" },
      { property: "og:description", content: "Clear, transparent steps from application to approval." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How We Work"
        title="A simple, transparent process"
        desc="We guide you from the first conversation to fund disbursement — every step explained, every document handled."
      />
      <ProcessSteps />
      <Testimonials />
      <CTABanner />
    </>
  );
}

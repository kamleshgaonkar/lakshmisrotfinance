import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Process() {
  usePageMeta({
    title: "Our Process — Lakshmi Srot Finance Solutions",
    description:
      "Our simple 4-step process — from consultation and documentation to application and disbursement.",
  });
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

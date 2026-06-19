import { PageHeader } from "@/components/sections/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";
import { usePageMeta } from "@/lib/usePageMeta";

export default function About() {
  usePageMeta({
    title: "About Us — Lakshmi Srot Finance Solutions",
    description:
      "Learn about Lakshmi Srot Finance Solutions — our mission, experience, and commitment to transparent, personalized financial guidance.",
  });
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Helping you achieve your financial goals"
        desc="Customized lending and insurance solutions for individuals, families, and businesses — delivered with experience, transparency, and care."
      />
      <AboutSection />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}

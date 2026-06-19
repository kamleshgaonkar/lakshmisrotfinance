import { HeroSlider } from "@/components/sections/HeroSlider";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Lakshmi Srot Finance Solutions — Loans, Mortgage & Insurance",
    description:
      "Your trusted partner for smart financial solutions. Home, business, personal, vehicle, education loans, mortgage and insurance with expert guidance.",
  });
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesGrid limit={6} />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <CTABanner />
    </>
  );
}

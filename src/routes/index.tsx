import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakshmi Srot Finance Solutions — Loans, Mortgage & Insurance" },
      { name: "description", content: "Your trusted partner for smart financial solutions. Home, business, personal, vehicle, education loans, mortgage and insurance with expert guidance." },
      { property: "og:title", content: "Lakshmi Srot Finance Solutions" },
      { property: "og:description", content: "Trusted finance partner with personalized guidance and competitive rates." },
      { property: "og:image", content: logo.url },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesGrid limit={6} />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <CTABanner />
    </>
  );
}

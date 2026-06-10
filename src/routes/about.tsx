import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Lakshmi Srot Finance Solutions" },
      { name: "description", content: "Learn about Lakshmi Srot Finance Solutions — our mission, experience, and commitment to transparent, personalized financial guidance." },
      { property: "og:title", content: "About — Lakshmi Srot Finance Solutions" },
      { property: "og:description", content: "Years of industry experience and strong banking relationships, dedicated to your financial goals." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
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

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lakshmi Srot Finance Solutions" },
      { name: "description", content: "Talk to our finance experts. Visit our Vasai East office or call 8669013631 / 9158111013 for a no-obligation consultation." },
      { property: "og:title", content: "Contact — Lakshmi Srot Finance Solutions" },
      { property: "og:description", content: "Get personalized guidance from our finance experts." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's discuss your financial needs"
        desc="Send us a message or call directly — our team responds quickly with clear, personalized guidance."
      />
      <ContactSection />
    </>
  );
}

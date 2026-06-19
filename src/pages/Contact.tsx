import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Contact() {
  usePageMeta({
    title: "Contact — Lakshmi Srot Finance Solutions",
    description:
      "Talk to our finance experts. Visit our Vasai East office or call 8669013631 / 9158111013 for a no-obligation consultation.",
  });
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

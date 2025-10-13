import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export default function Contact() {
  return (
    <PlaceholderPage
      title="Let's Plan Your Event"
      description="Share your vision and we'll orchestrate every detail with precision, creativity, and seamless execution."
      ctas={[
        { label: "Email Us", href: "mailto:info@prideeventz.in" },
        { label: "Call Now", href: "tel:+919895690349" },
      ]}
    />
  );
}

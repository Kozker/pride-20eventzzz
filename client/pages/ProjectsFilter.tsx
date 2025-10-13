import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export default function ProjectsFilter() {
  return (
    <PlaceholderPage
      title="Projects Showcase"
      description="We're curating an interactive gallery to help you explore Pride Eventz experiences by category, city, and scale."
      ctas={[
        { label: "Explore Services", href: "/#services" },
        { label: "Talk to Us", href: "/contact" },
      ]}
    />
  );
}

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export default function ServiceEvents() {
  return (
    <PlaceholderPage
      title="Events Service Studio"
      description="Dive deeper into our blueprint for unforgettable launches, summits, and celebrations. We'll unveil interactive case studies and service playbooks shortly."
      ctas={[
        { label: "View Highlight Projects", href: "/#projects" },
        { label: "Plan an Event", href: "/contact" },
      ]}
    />
  );
}

import { Button } from "../../library";
import { Section } from "../../site";

const DestructiveButtonSection = () => (
  <Section
    title="Destructive"
    description="Destructive actions typically result in the removal of an item, and may result in an undesirable consequence."
  >
    <Button
      colors={{
        bg: "bg-red-500",
        hoverBg: "hover:bg-red-600",
        focusRing: "focus:ring-red-500",
      }}
    >
      Yes, I'm sure I want to delete this.
    </Button>
    <Button
      variant="secondary"
      colors={{
        text: "text-red-500",
        hoverBorder: "hover:border-red-500",
        hoverBg: "hover:bg-red-500",
        focusRing: "focus:ring-red-500",
      }}
    >
      Unsubscribe
    </Button>
    <Button
      variant="tertiary"
      colors={{
        text: "text-gray-500",
        hoverText: "hover:text-gray-700",
        focusRing: "focus:ring-gray-500",
      }}
    >
      Cancel
    </Button>
  </Section>
);

export default DestructiveButtonSection;

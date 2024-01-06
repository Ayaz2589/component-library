import { Button } from "../../library";
import { Section } from "../../site";

const TertiaryButtonSection = () => (
  <Section
    title="Tertiary"
    description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach."
  >
    <Button variant="tertiary">Default</Button>
    <Button variant="tertiary" disabled>
      Disabled
    </Button>
    <Button
      variant="tertiary"
      colors={{
        text: "text-amber-500",
        hoverText: "hover:text-amber-700",
        focusRing: "focus:ring-amber-500",
      }}
    >
      Amber
    </Button>
    <Button
      variant="tertiary"
      colors={{
        text: "text-rose-500",
        hoverText: "hover:text-rose-700",
        focusRing: "focus:ring-rose-500",
      }}
    >
      Rose
    </Button>
    <Button
      variant="tertiary"
      colors={{
        text: "text-fuchsia-500",
        hoverText: "hover:text-fuchsia-700",
        focusRing: "focus:ring-fuchsia-500",
      }}
    >
      Fuchsia
    </Button>
    <Button
      variant="tertiary"
      colors={{
        text: "text-indigo-500",
        hoverText: "hover:text-indigo-700",
        focusRing: "focus:ring-indigo-500",
      }}
    >
      Indigo
    </Button>
    <Button
      variant="tertiary"
      colors={{
        text: "text-[#1da1f2]",
        hoverText: "hover:text-[#1a8cd8]",
        focusRing: "focus:ring-[#1da1f2]",
      }}
    >
      Twitter Blue
    </Button>
  </Section>
);

export default TertiaryButtonSection;

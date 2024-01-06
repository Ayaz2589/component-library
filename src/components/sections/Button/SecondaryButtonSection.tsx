import { Button } from "../../library";
import { Section } from "../../site";

const SecondaryButtonSection = () => (
  <Section
    title="Secondary"
    description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options."
  >
    <Button variant="secondary">Default</Button>
    <Button variant="secondary" disabled>
      Disabled
    </Button>
    <Button
      variant="secondary"
      colors={{
        text: "text-amber-500",
        hoverBorder: "hover:border-amber-500",
        hoverBg: "hover:bg-amber-500",
        focusRing: "focus:ring-amber-500",
      }}
    >
      Amber
    </Button>
    <Button
      variant="secondary"
      colors={{
        text: "text-rose-500",
        hoverBorder: "hover:border-rose-500",
        hoverBg: "hover:bg-rose-500",
        focusRing: "focus:ring-rose-500",
      }}
    >
      Rose
    </Button>
    <Button
      variant="secondary"
      colors={{
        text: "text-fuchsia-500",
        hoverBorder: "hover:border-fuchsia-500",
        hoverBg: "hover:bg-fuchsia-500",
        focusRing: "focus:ring-fuchsia-500",
      }}
    >
      Fuchsia
    </Button>
    <Button
      variant="secondary"
      colors={{
        text: "text-indigo-500",
        hoverBorder: "hover:border-indigo-500",
        hoverBg: "hover:bg-indigo-500",
        focusRing: "focus:ring-indigo-500",
      }}
    >
      Indigo
    </Button>
    <Button
      variant="secondary"
      colors={{
        text: "text-[#1da1f2]",
        hoverBorder: "hover:border-[#1da1f2]",
        hoverBg: "hover:bg-[#1da1f2]",
        focusRing: "focus:ring-[#1da1f2]",
      }}
    >
      Twitter Blue
    </Button>
  </Section>
);

export default SecondaryButtonSection;

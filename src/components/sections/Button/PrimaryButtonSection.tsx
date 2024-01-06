import { Button } from "../../library";
import { Section } from "../../site";

const PrimaryButtonSection = () => (
  <Section
    title="Primary"
    description="Primary actions should be obvious. Solid, high contrast background colors work great here."
  >
    <Button>Default</Button>
    <Button disabled>Disabled</Button>
    <Button
      colors={{
        bg: "bg-amber-500",
        hoverBg: "hover:bg-amber-600",
        focusRing: "focus:ring-amber-500",
      }}
    >
      Amber
    </Button>
    <Button
      colors={{
        bg: "bg-rose-500",
        hoverBg: "hover:bg-rose-600",
        focusRing: "focus:ring-rose-500",
      }}
    >
      Rose
    </Button>
    <Button
      colors={{
        bg: "bg-fuchsia-500",
        hoverBg: "hover:bg-fuchsia-600",
        focusRing: "focus:ring-fuchsia-500",
      }}
    >
      Fuchsia
    </Button>
    <Button
      colors={{
        bg: "bg-indigo-500",
        hoverBg: "hover:bg-indigo-600",
        focusRing: "focus:ring-indigo-500",
      }}
    >
      Indigo
    </Button>
    <Button
      colors={{
        bg: "bg-[#1da1f2]",
        hoverBg: "hover:bg-[#1a8cd8]",
        focusRing: "focus:ring-[#1da1f2]",
      }}
    >
      Twitter Blue
    </Button>
  </Section>
);

export default PrimaryButtonSection;

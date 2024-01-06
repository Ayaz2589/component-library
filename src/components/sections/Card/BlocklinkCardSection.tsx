import { SiVite, SiNextdotjs } from "react-icons/si";
import { BlockLinkCard } from "../../library";
import { Section } from "../../site";

const BlocklinkCardSection = () => (
  <Section
    title="Block link"
    description="A simple card enhanced into a selectable block link."
  >
    <BlockLinkCard url="https://vitejs.dev/" text="Vite">
      <SiVite className="h-10 w-10" />
    </BlockLinkCard>
    <BlockLinkCard url="https://nextjs.org/" text="Next.js">
      <SiNextdotjs className="h-10 w-10" />
    </BlockLinkCard>
  </Section>
);

export default BlocklinkCardSection;

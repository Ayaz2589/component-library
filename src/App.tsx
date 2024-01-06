import { SiVite, SiNextdotjs } from "react-icons/si";
import "./App.css";
import { Section, Container, Layout } from "./components/site";
import { BlockLinkCard } from "./components/library";
import {
  PrimaryButtonSection,
  SecondaryButtonSection,
  TertiaryButtonSection,
  DestructiveButtonSection,
  SimpleCardSection,
  HeaderFooterCardSection
} from "./components/sections";

const ButtonContainer = () => (
  <Container
    title="Button"
    description="A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
  >
    <PrimaryButtonSection />
    <SecondaryButtonSection />
    <TertiaryButtonSection />
    <DestructiveButtonSection />
  </Container>
);

const CardContainer = () => (
  <Container
    title="Card"
    description="A card is a flexible and extensible content container."
  >
    <SimpleCardSection />
    <HeaderFooterCardSection />
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
  </Container>
);

export default function App() {
  return (
    <Layout>
      <ButtonContainer />
      <CardContainer />
    </Layout>
  );
}

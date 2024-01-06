import "./App.css";
import { Container, Layout } from "./components/site";
import {
  PrimaryButtonSection,
  SecondaryButtonSection,
  TertiaryButtonSection,
  DestructiveButtonSection,
  SimpleCardSection,
  HeaderFooterCardSection,
  BlocklinkCardSection,
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
    <BlocklinkCardSection />
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

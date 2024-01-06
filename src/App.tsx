import { SiVite, SiNextdotjs } from "react-icons/si";
import "./App.css";
import { Section, Container, Layout } from "./components/site";
import { Button, CardContent, BlockLinkCard } from "./components/library";
import {
  PrimaryButtonSection,
  SecondaryButtonSection,
  TertiaryButtonSection,
  DestructiveButtonSection,
} from "./components/sections";

export default function App() {
  return (
    <Layout>
      <Container
        title="Button"
        description="A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
      >
        <PrimaryButtonSection />
        <SecondaryButtonSection />
        <TertiaryButtonSection />
        <DestructiveButtonSection />
      </Container>
      <Container
        title="Card"
        description="A card is a flexible and extensible content container."
      >
        <Section
          title="Simple"
          description="Simple cards display content and can provide a distinct link that can be selected."
        >
          <CardContent
            title="Card title"
            subtitle="Card subtitle"
            plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
            link={{ url: "#", text: "Card link" }}
          ></CardContent>
        </Section>

        <Section
          title="Simple with a header and footer"
          description="Add an optional header and/or footer within a card."
        >
          <CardContent
            header="Featured"
            title="Card title"
            subtitle="Card subtitle"
            plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
            link={{ url: "#", text: "Card link" }}
          ></CardContent>
          <CardContent
            footer="Last updated 5 mins ago"
            title="Card title"
            subtitle="Card subtitle"
            plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
            link={{ url: "#", text: "Card link" }}
          ></CardContent>
        </Section>
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
    </Layout>
  );
}

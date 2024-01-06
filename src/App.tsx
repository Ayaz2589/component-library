import { SiVite, SiNextdotjs } from "react-icons/si";
import "./App.css";
import { Section, Container, Layout } from "./components/site";
import { Button, CardContent, BlockLinkCard } from "./components/library";
import {
  PrimaryButtonSection,
  SecondaryButtonSection,
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

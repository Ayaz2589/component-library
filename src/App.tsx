import "./App.css";
import { Section, Container, Layout } from "./components/site";
import { Button } from "./components/library";

function App() {
  return (
    <Layout>
      <Container
        title="Button"
        description="A Button is a fundamental interactive component in any user interface. It allows users to perform actions with a single click or tap. It can trigger a variety of functionality, such as submitting forms, opening dialogs, cancelling operations, or even navigating between pages."
      >
        <Section
          title="Primary"
          description="A Primary action should be obvious. Solid, high contrast background colors work great here."
        >
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </Section>
        <Section
          title="Secondary"
          description="Secondary actions should be clear but noy as prominent as Primary actions. Outlined styles work great here."
        >
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </Section>
        <Section
          title="Tertiary"
          description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach."
        >
          <Button variant="tertiary">Default</Button>
          <Button variant="tertiary" disabled>
            Disabled
          </Button>
        </Section>
      </Container>
    </Layout>
  );
}

export default App;

import "./App.css";
import { Section, Container, Layout } from "./components/site";

function App() {
  return (
    <Layout>
      <Container title="Header" description="Description">
        <Section title="About Me" description="A little bit about me">
          <div className="bg-blue-500/50 p-3">Component 1</div>
          <div className="bg-blue-500/50 p-3">Component 2</div>
        </Section>
        <Section title="About Me" description="A little bit about me">
          <div className="bg-blue-500/50 p-3">Component 1</div>
          <div className="bg-blue-500/50 p-3">Component 2</div>
        </Section>
        <Section title="About Me" description="A little bit about me">
          <div className="bg-blue-500/50 p-3">Component 1</div>
          <div className="bg-blue-500/50 p-3">Component 2</div>
        </Section>
      </Container>
    </Layout>
  );
}

export default App;

import "./App.css";
import { Section, Container, Navbar } from "./components/site";

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
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
    </div>
  );
}

export default App;

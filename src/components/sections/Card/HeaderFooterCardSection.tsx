import { CardContent } from "../../library";
import { Section } from "../../site";

const HeaderFooterCardSection = () => (
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
);

export default HeaderFooterCardSection;

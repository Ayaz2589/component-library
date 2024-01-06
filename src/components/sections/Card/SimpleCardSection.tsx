import { CardContent } from "../../library";
import { Section } from "../../site";
const SimpleCardSection = () => {
  return (
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
  )
}

export default SimpleCardSection
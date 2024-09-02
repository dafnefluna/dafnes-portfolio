import { Row } from "reactstrap";
import Card from "../pages/cards";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: "yellow",
  },
};

const feline = {
  name: "Fluffykins",
  description: "A cat that acts like a dog",
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section>
      <h2>Project Samples</h2>
      <div>
        <Card
          name={feline.name}
          description={feline.description}
          id={feline.id}
        />
      </div>
      <div>
        <Card
          name={feline.name}
          description={feline.description}
          id={feline.id}
        />
      </div>
      <div>
        <Card
          name={feline.name}
          description={feline.description}
          id={feline.id}
        />
      </div>
      <div>
        <Card
          name={feline.name}
          description={feline.description}
          id={feline.id}
        />
      </div>
      <div>
        <Card
          name={feline.name}
          description={feline.description}
          id={feline.id}
        />
      </div>
      <div>
        <Card
          name={feline.name}
          description={feline.description}
          id={feline.id}
        />
      </div>
    </section>
  );
}

export default Section;

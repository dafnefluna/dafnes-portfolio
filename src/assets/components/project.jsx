import { Row } from "reactstrap";
import Card from "../pages/cards";
import { Link } from "react-router-dom";

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

const dataSet = [
  { id: 1, name: 'Bingo', description: "black cat looking thing", deployedUrl: "", github: ""}, 
  { id: 2, name: 'Marion', description: "red cat looking thing", deployedUrl: "", github: ""}, 
  { id: 3, name: 'peach', description: "blue cat looking thing", deployedUrl: "", github: ""}, 

]

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section>
      <h2>Project Samples</h2>
      {dataSet.map( (feline) => (
        <div>
          <Card
            name={feline.name}
            description={feline.description}
            id={feline.id}
          />
          <Link to={feline.deployedUrl} />
        </div>
      ))}

      <div>
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

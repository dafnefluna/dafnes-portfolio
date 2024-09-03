import Card from "../pages/cards";
import { Link } from "react-router-dom";
import "../styles/projects.css"

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
    <section className="projectCards">
      {dataSet.map( (feline) => (
        <div className="singles">
          <Card
            name={feline.name}
            description={feline.description}
            id={feline.id}
          />
          <Link to={feline.deployedUrl} />
        </div>
      ))}
  
      </section>
  );
}

export default Section;

import Card from "../pages/cards";
import { Link } from "react-router-dom";
import "../styles/projects.css";

const dataSet = [
  {
    id: 1,
    name: "Bingo",
    description: "black cat looking thing",
    deployedUrl: "http://google.com",
  },
  {
    id: 2,
    name: "Marion",
    description: "red cat looking thing",
    deployedUrl: "",
  },
  {
    id: 3,
    name: "peach",
    description: "blue cat looking thing",
    deployedUrl: "",
  },
];

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section className="projectCards">
      {dataSet.map((project) => (
        <Link to={project.deployedUrl}>
          <div className="singles">
            <Card
              name={project.name}
              description={project.description}
            />
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Section;

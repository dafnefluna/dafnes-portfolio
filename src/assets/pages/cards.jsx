export default function Card(props) {
const cardStyle = {
    width: "18rem",
};

return (
    <div className="container">
    <div className="card" style={cardStyle}>
        <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
        <p className="card-text">Description: {props.description}</p>
        </div>
    </div>
    </div>
);
}

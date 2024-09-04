export default function Card(props) {
const cardStyle = {
    width: "18rem",
};

return (
    <div className="container">
    <div className="card" style={cardStyle}>
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <h6 className="card-link">{props.link}</h6>
        </div>
    </div>
    </div>
);
}

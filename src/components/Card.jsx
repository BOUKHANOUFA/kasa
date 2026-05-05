
import "./Card.css";

 function Card({ title, image }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="card-title">{title}</p>
    </div>
  );
}
export default Card
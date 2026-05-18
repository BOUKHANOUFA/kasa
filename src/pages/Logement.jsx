import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import logements from "../data/logements";
import { useParams } from "react-router-dom";

import Rating from "../components/Rating/Rating";
import Collapse from "../components/Collapse";

import "./Logement.css";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((l) => l.id === id);

  if (!logement) {
    return <p>Logement introuvable</p>;
  }

  return (
    <>
      <Header />

      <Slideshow pictures={logement.pictures} />

      <div className="logement-header">
        <div>
          <h1 className="title">{logement.title}</h1>
          <p className="text">{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="right-section">
          <div className="host">
            <div className="host-split">
              <p>{logement.host.name.split(" ")[0]}</p>
              <p>{logement.host.name.split(" ")[1]}</p>
            </div>
            <img src={logement.host.picture} alt="host" />
          </div>
<div>
          <Rating rate={logement.rating} />
          </div>
        </div>
      </div>

      <div className="logement-collapse">
        <Collapse title="Description" content={logement.description} />

        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>

      <Footer />
    </>
  );
}

export default Logement;

import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import logements from "../data/logements";
import { useParams } from "react-router-dom";
import "./Logement.css";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

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

      
        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="host" />
        </div>
      </div>

  
      <div className="box">
        <h2>Description</h2>
        <p>{logement.description}</p>
      </div>

  
      <div className="box">
        <h2>Équipements</h2>
        <ul>
          {logement.equipments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Logement;
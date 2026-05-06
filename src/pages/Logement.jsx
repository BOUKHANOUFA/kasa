
import Header from "../components/Header";
import Footer from "../components/Footer";
import logements from "../data/logements";
import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();

  const logement = logements.find(item => item.id === id);

  if (!logement) {
    return <p>Logement introuvable</p>;
  }

  return (
    <>
      <Header />

      <div>
        <h1>{logement.title}</h1>
        <img src={logement.cover} alt={logement.title} />
      </div>

      <Footer />
    </>
  );
}

export default Logement;
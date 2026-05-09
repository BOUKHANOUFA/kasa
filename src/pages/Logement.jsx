import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import logements from "../data/logements";
import { useParams } from "react-router-dom";

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

      <Footer />
    </>
  );
}

export default Logement;
import "./About.css";
import bannerImg from "../assets/about.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

 function About() {
  return (
    <>
          <Header />
         
         
<div className="about"></div>

  <Collapse 
    title="Fiabilité"
  content="Les annonces postées sur kasa garantissent une faibilité totale. Les photos sont conformes aux logements, et toute les informations sont régulièrement véfifiées par nos équipes. "/>
  <Collapse
  title="Respect"
  content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraiera une execusion de notre platforme."/>
  <Collapse 
  title="Service"
  content="La qualité du service est au coeur de notre engagement chez kasa.Nous veillons à ce que chaque interaction,que ce soit avec nos hote ou nos lacataires, soit empreinte de respect et de bienveillance."/>
<Collapse 
title="Sécurité"
content="La sécurité est la priorité de kasa.Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond au critères de sécurité établis par nos services.En laissant une note aussi bien à l'hte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous organisons également des ateliers sur la sécurité domestique pour nos hotes. "/>
 
   <Footer />
   </>
);
}
export default About

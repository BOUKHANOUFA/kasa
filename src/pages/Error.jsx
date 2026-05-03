import { Link } from "react-router-dom";
import "./Error.css";
import Header from "../components/Header";
import Footer from "../components/Footer";



 function Error() {
  return (
    <>
          <Header />
         
<div className="error404">
   <h1 className="error404-number">404</h1>
   <h2 className="error404-text">Oups! La page que vous demandez n'existe pas</h2>
   <Link to="/" className="error404-link">Retourner sur la page d'Accueil</Link>
  </div>
   <Footer />
   </>
);
}
export default Error
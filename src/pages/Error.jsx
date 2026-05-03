import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Error() {
  return (
    <>
          <Header />
         
<div className="error">
   <h1>Error</h1>
   <h2>Oups! La page que vous demandez n'existe pas</h2>
   <p>Retourner sur la page d'Accueil</p>
  </div>
   <Footer />
   </>
);
}
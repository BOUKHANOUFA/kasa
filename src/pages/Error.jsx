import Header from "../components/Header";
import Footer from "../components/Footer";


 function Error() {
  return (
    <>
          <Header />
         
<div className="error">
   <h1>404</h1>
   <h2>Oups! La page que vous demandez n'existe pas</h2>
   <p>Retourner sur la page d'Accueil</p>
  </div>
   <Footer />
   </>
);
}
export default Error
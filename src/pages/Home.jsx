import logements from "../data/logements";
import Card from "../components/Card";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

 function Home() {
  return (
    <>
      <Header />
      <Banner />

      <div className="cards">
        {logements.map((item) => (
          <Link to={`/logement/${item.id}`} key={item.id}>
          <Card
           
            title={item.title}
            image={item.cover}
             />
             </Link>
         ))}
      </div>
     
      
      <Footer />
    </>
  );
}
export default Home
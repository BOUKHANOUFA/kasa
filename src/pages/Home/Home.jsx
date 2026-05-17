import logements from "../../data/logements";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Banner />

      <div className="cards">
        {logements.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Card title={logement.title} image={logement.cover} />
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
export default Home;

import logements from "../data/logements";
import Card from "../components/Card";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <div className="cards">
        {logements.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.cover}
             />
         ))}
      </div>
     
      
      <Footer />
    </>
  );
}
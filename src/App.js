import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardList from "./components/CardList";
import cardData from "./data";
function App() {
  /*const cards = cardData.map((card) => {
    return (
      <Card
        coverImg={card.coverImg}
        title={card.title}
        price={card.price}
        rating={card.stats.rating}
        location={card.location}
        reviewCount={card.stats.reviewCount}
      />
    );
  });*/
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        <CardList CardList={cardData} />
      </section>
    </>
  );
}

export default App;

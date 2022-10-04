import CardsImg from "../../components/CardsImg";
import CardsInfo from "../../components/CardsInfo";
import { MapaReciclagem } from "../../components/MapaReciclagem";
import NavBar from "./../../components/NavBar/index";
import { Footer } from "./../../components/Footer/index";

const colorCallToAction = {
  background: "#17ACFF",
  height: "200px",
};

function Home() {
  return (
    <>
      <NavBar />
      <div
        className="container-fluid border d-flex align-items-center justify-content-center"
        style={colorCallToAction}
      >
        <h2 className="m-auto">Venha conhecer e aprender sobre Reciclagem</h2>
      </div>
      <MapaReciclagem />
      <CardsInfo />
      <CardsImg />
      <Footer />
    </>
  );
}

export default Home;

import CardsImg from "../../components/CardsImg";
import CardsInfo from "../../components/CardsInfo";
import { MapaReciclagem } from "../../components/MapaReciclagem";
import NavBar from "./../../components/NavBar/index";
import { Footer } from "./../../components/Footer/index";
import "./style.css";


function Home() {
  return (
    <>
      <NavBar />
      <div
        className="container-fluid border d-flex align-items-center justify-content-center colorCallToAction"
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

import CardsImg from "../../components/CardsWithIcon";
import CardsInfo from "../../components/CardsInformation";
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
        <h1 className="m-auto text-center">Venha conhecer e aprender sobre Reciclagem</h1>
      </div>
      <MapaReciclagem />
      <CardsInfo />
      <CardsImg />
      <Footer />
    </>
  );
}

export default Home;

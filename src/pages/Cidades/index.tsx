import CardCidades from "../../components/CardCidades";
import NavBar from "../../components/NavBar";
import { Footer } from "./../../components/Footer/index";

const colorCallToAction = {
  background: "#17ACFF",
  height: "200px"
};

function Cidades() {
  return (
    <>
      <NavBar />
      <div
        className="container-fluid border d-flex align-items-center justify-content-center"
        style={colorCallToAction}
      >
      </div><br />
      <h2 className="text-center">Cidades Inteligentes</h2>
      <CardCidades />
      <Footer />
    </>
  );
}

export default Cidades;

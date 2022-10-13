import NavBar from "../../components/NavBar";
import QSInfo from "../../components/QSInfo";
import { Footer } from "./../../components/Footer/index";
import "./style.css";


function QuemSomos() {
  return (
    <>
      <NavBar />
      <div
        className="container-fluid border d-flex align-items-center justify-content-center colorCallToAction"
      >
        <h1 className="text-center">Quem somos</h1>
      </div><br />
      <QSInfo />
      <Footer />
    </>
  );
}

export default QuemSomos;
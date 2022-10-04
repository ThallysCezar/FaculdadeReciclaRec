import NavBar from "../../components/NavBar";
import QSInfo from "../../components/QSInfo";
import { Footer } from "./../../components/Footer/index";

const colorCallToAction = {
  background: "#17ACFF",
  height: "200px"
};

function QuemSomos() {
  return (
    <>
      <NavBar />
      <div
        className="container-fluid border d-flex align-items-center justify-content-center"
        style={colorCallToAction}
      >
      </div><br />
      <h2 className="text-center">QUEM SOMOS</h2>
      <QSInfo />
      <Footer />
    </>
  );
}

export default QuemSomos;
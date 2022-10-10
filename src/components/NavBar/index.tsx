import { Link } from "react-router-dom";
import "./style.css";

const logo = require("../../assets/img/logo.png") as string;

const styleImg = {
  width: "120px",
  heitgh: "120px",
  left: "1px",
  top: "9px",
  transition: "none 0s ease 0s",
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg tatic-top shift">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="ReciclaRec" style={styleImg} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                  <Link className="nav-link text-dark" aria-current="page" to="/home">
                    Home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link text-dark" to="/cidades">
                    REC
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link text-dark" to="/quemSomos">
                    Quem Somos
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

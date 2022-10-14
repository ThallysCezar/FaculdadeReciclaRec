import { GiDeathStar } from "react-icons/gi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./style.css";

const thallys = require("../../assets/img/Thallys.png") as string;
const bea = require("../../assets/img/Bea.png") as string;

const QSInfo = () => {
  return (
    <>
      

      <div className="container">
        <div className="row">
            <div className="col-xs-6">
                {/* Cartao Thallys */}
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card p-3 py-4">
                        <div className="text-center">
                            <figure>
                            <img
                                src={thallys}
                                width="250"
                                className="rounded-circle"
                                alt="Imagem de Thallys"
                            />
                            </figure>
                        </div>
                        <div className="text-center mt-3">
                            <h5 className="mt-2 mb-0">Thallys Cézar</h5>
                            <span>Software Developer</span>

                            <div className="px-4 mt-1">
                            <p className="fonts">
                                Estudante do 2° período de Análise e Desenvolvimento de
                                Sistemas. Através do Projeto de Extensão fez parte do
                                Planejamento do Projeto e Desenvolvimento de Software.
                            </p>
                            </div>

                            <div>
                            <div className="container footer__social">
                                {/* Portfolio */}
                                <a
                                    className="btn btn-outline-dark btn-floating m-1"
                                    href="https://thallyscezar.github.io"
                                    role="button"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GiDeathStar />
                                </a>

                                {/* GitHub */}
                                <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="https://github.com/thallyscezar"
                                role="button"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaGithub />
                                </a>

                                {/* Facebook */}
                                <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="https://www.facebook.com/thallys.cezar/"
                                role="button"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaFacebook />
                                </a>

                                {/* Instagram */}
                                <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="https://www.instagram.com/thallyscezar/"
                                role="button"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaInstagram />
                                </a>

                                {/* Linkedin */}
                                <a
                                href="https://www.linkedin.com/in/thallyscezar/"
                                className="btn btn-outline-dark btn-floating m-1"
                                role="button"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaLinkedin />
                                </a>
                            </div>
                            {/* Grid container */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-6">
                {/* Cartao Beatriz */}
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card p-3 py-4">
                        <div className="text-center">
                            <figure>
                            <img
                                src={bea}
                                width="250"
                                className="rounded-circle"
                                alt="Imagem de Bea"
                            />
                            </figure>
                        </div>

                        <div className="text-center mt-3">
                            <h5 className="mt-2 mb-0">Beatriz Venceslau</h5>
                            <span>UI/UX Designer</span>

                            <div className="px-4 mt-1">
                            <p className="fonts">
                                Estudante do 2° período de Service Design e entusiasta dos
                                processos criativos. Através do Projeto de Extensão fez
                                parte do Planejamento do Projeto e processos de UX Design.
                            </p>
                            </div>

                            <div>
                            <div className="container footer__social">
                                {/* Instagram */}
                                <a
                                className="btn btn-outline-dark btn-floating m-1"
                                href="https://www.instagram.com/beatrizvenceslau/"
                                role="button"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaInstagram />
                                </a>

                                {/* Linkedin */}
                                <a
                                href="https://www.linkedin.com/in/beatrizven"
                                className="btn btn-outline-dark btn-floating m-1"
                                role="button"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaLinkedin />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div><br /><br /><br /><br />
            </div>
        </div>
    </div>
    </>
  );
};

export default QSInfo;

import { Link } from "react-router-dom";
import "./assets/styleCardsImg.css";

const city = require("../../assets/icon/city.png") as string;
const repense = require("../../assets/icon/repense.png") as string;

const CardsImg = () => {
  return (
    <>
      {/* Invertendo, para ficar diferente */}
      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black border-primary">
                <div className="row g-0">
                  <div className="col-lg-6 d-flex align-items-center justify-content-center bg-color"> {/* botar o negocio da cor bg-color*/}
                    <figure>
                      <img
                        src={city}
                        className="mx-auto d-block"
                        alt="Cidades Inteligentes"
                      />
                    </figure>
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1">Cidades Inteligentes</h4>
                      </div>

                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fugiat aperiam mollitia animi dignissimos
                          praesentium, voluptatibus libero voluptatum, illum,
                          repellat laborum exercitationem reiciendis quos
                          blanditiis! Doloribus, blanditiis. Quo placeat vel
                          inventore.Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Fugiat aperiam mollitia animi
                          dignissimos praesentium, voluptatibus libero
                          voluptatum, illum, repellat laborum exercitationem
                          reiciendis quos blanditiis! Doloribus, blanditiis. Quo
                          placeat vel inventore.
                        </p>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <Link className="nav-link" aria-current="page" to="/cidades">
                              <button
                                  type="button"
                                  className="btn btn-outline-primary botao-margin">
                                  Conheça
                              </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black border-primary">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1">Repense</h4>
                      </div>
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fugiat aperiam mollitia animi dignissimos
                          praesentium, voluptatibus libero voluptatum, illum,
                          repellat laborum exercitationem reiciendis quos
                          blanditiis! Doloribus, blanditiis. Quo placeat vel
                          inventore.Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Fugiat aperiam mollitia animi
                          dignissimos praesentium, voluptatibus libero
                          voluptatum, illum, repellat laborum exercitationem
                          reiciendis quos blanditiis! Doloribus, blanditiis. Quo
                          placeat vel inventore.
                        </p>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <Link className="nav-link" aria-current="page" to="/cidades">
                            <button
                                type="button"
                                className="btn btn-outline-primary botao-margin">
                                Conheça
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center justify-content-center bg-color">
                    <figure>
                      <img
                        src={repense}
                        className="mx-auto d-block"
                        alt="Cidades Inteligentes"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsImg;

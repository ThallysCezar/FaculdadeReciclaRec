import "./style.css";

const lixeira =
  require("../../assets/img/MapaReciclagemImg/lixeira.png") as string;
const recicla =
  require("../../assets/img/MapaReciclagemImg/recicla.png") as string;
const caminhao =
  require("../../assets/img/MapaReciclagemImg/caminhao.png") as string;
const consumidor =
  require("../../assets/img/MapaReciclagemImg/consumidor.png") as string;

const imgs = [
  {
    id: 1,
    caption: "Coleta e Triagem",
    path: caminhao,
    alt: "imagem do caminaho do lixo",
  },
  {
    id: 2,
    caption: "Reciclagem",
    path: lixeira,
    alt: "imagem da lixeira",
  },
  {
    id: 3,
    caption: "Distribuição",
    path: recicla,
    alt: "imagem da reciclagem",
  },
  {
    id: 4,
    caption: "Consumidor",
    path: consumidor,
    alt: "imagem do consumidor",
  },
];

export const MapaReciclagem = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center mt-2"> Mapa da Reciclagem</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row justify-content-center">
        {imgs.map((item) => {
          return (
              <div className="col-md-auto">
                <figure>
                  <img
                    src={item.path}
                    alt={item.alt}
                    className="mx-auto d-block styleImg"
                  />
                  <p className="text-center">{item.caption}</p>
                </figure>
              </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

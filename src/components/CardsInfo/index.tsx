import "./assets/styleCardsInfo.css";

const CardsInfo = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container p-5 m-auto">
          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="cardes h-100 shadow-lg">
                <div className="cardes-body">
                  <div className="text-center p-3">
                    <h2 className="cardes-title">O que é?</h2>
                    <br />
                    <br />
                  </div>
                  <p className="cardes-text">
                    A reciclagem é o processo de reaproveitamento do lixo
                    descartado, dando origem a um novo produto ou a uma nova
                    matéria-prima com o objetivo de diminuir a produção de
                    rejeitos e o seu acúmulo na natureza, reduzindo o impacto
                    ambiental
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="cardes h-100 shadow-lg">
                <div className="cardes-body">
                  <div className="text-center p-3">
                    <h2 className="cardes-title">Para que serve?</h2>
                    <br />
                    <br />
                  </div>
                  <p className="cardes-text">
                    A reciclagem serve para dar nova vida aos resíduos, evitando
                    o desperdício, o impacto ambiental e os problemas
                    sanitários. Com a reciclagem, um material que foi jogado na
                    lixeira reciclável pode virar o mesmo produto ou ser
                    transformado em algo com outra utilidade.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="cardes h-100 shadow-lg">
                <div className="cardes-body">
                  <div className="text-center p-3">
                    <h2 className="cardes-title text-center">Qual a sua importância?</h2>
                    <br />
                  </div>
                  <p className="cardes-text">
                    O processo de reciclagem é o método mais limpo e eficiente
                    para tratar os resíduos. Já na parte social, ele é essencial
                    para sustentar milhões de catadores que dependem da venda
                    desses itens recicláveis para sobreviver e manter suas
                    famílias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsInfo;

import "./assets/styleCardCidades.css";

const imgRecife = require("../../assets/img/recife.png") as string;
const imgRepense = require("../../assets/img/repense.png") as string;

const imgWidth = {
  width: "750px",
};

const imgWidthRecife = {
  width: "750px",
};

const CardCidades = () => {
  return (
    <>
    <br/>
      <div className="container-fluid">
        <div className="row text-center">
          <br/>
          <br/>
          <br/>
          <div className="col-md-6">
            <figure>
              <img
                src={imgRecife}
                className="mx-auto d-block"
                alt="Cidades Inteligentes"
                style={imgWidthRecife}
              />
            </figure>
          </div>
            <div className="col-md-6 text-center">
            <h3 className="d-flex justify-content-start">Recife</h3><br /><br />
              <p>
                Com artesanato, mulheres de PE reciclam 1 tonelada de plástico por mês... - Veja mais em
              </p>
              <a className="text-decoration-none" href="https://www.uol.com.br/ecoa/ultimas-noticias/2021/10/22/mulheres-de-pe-tiram-1t-de-plastico-de-circulacao-e-criam-objetos-para-casa.html?cmpid=copiaecola" target="_blank" rel="noreferrer">Link para mais informações</a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row text-center">
          <div className="col-md-6">
            <h3 className="text-center">Repense</h3>
            <br/>
            <br/>
            <h3>A ausência de separação entre lixo orgânico e inorgânico não é uma boa ideia.</h3><br />
            <ol>
              <li>Quando não separamos o lixo orgânico do inorgânico deixamos de fazer a nossa parte em relação ao desenvolvimento sustentável</li>
              <li>Isso por que o lixo inorgânico é composto de material que demora a ser decomposto. Enquanto que o lixo orgânico de progem vegetal ou animal tem um curto período de decomposição. Dessa forma, o lixo inorgânico quando nâo é separado do orgânico pode liberar gases poluentes e não terem o destino correto para realização do Processo de Reciclagem.</li>
              <li>Por isso, REPENSE, seu comportamento. Uma atitude simples de separar o lixo orgânico do inorgânico contribui muito para o Meio Ambiente.</li>
            </ol>
          </div>
          <div className="col-md-2">
            <figure>
              <img
                src={imgRepense}
                className="mx-auto d-block"
                alt="Cidades Inteligentes"
                style={imgWidth}
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCidades;

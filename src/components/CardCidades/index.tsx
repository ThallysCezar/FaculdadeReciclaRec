import "./assets/styleCardCidades.css";

const imgRecife = require("../../assets/img/recife.png") as string;
const imgRepense = require("../../assets/img/repense.png") as string;

const CardCidades = () => {
  return (
    <>
    <br/>
      <div className="container-fluid">
        <div className="row text-center">
          <br/>
          <br/>
          <br/>
          <div className="col-xl-6 col-lg-8 col-md-3 col-sm-12">
              <figure>
                <img
                  src={imgRecife}
                  className="mx-auto d-block imgWidthRecife"
                  alt="Cidades Inteligentes"
                />
              </figure>
          </div>
            <div className="col-xl-5 col-lg-4 col-md-9 col-sm text-center">
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
        <h3 className="mt-1 mb-5 pb-1">Análise seu modo de pensar</h3><br/><br/>
          <div className="col-xl-6 col-lg-7 col-md-7 col-sm-4">
            <h3 className="text-center">Repense</h3>
            <br/>
            <h4>A ausência de separação entre lixo orgânico e inorgânico não é uma boa ideia.</h4><br />
            <ol>
              <li>Quando não separamos o lixo orgânico do inorgânico deixamos de fazer a nossa parte em relação ao desenvolvimento sustentável</li>
              <li>Isso por que o lixo inorgânico é composto de material que demora a ser decomposto. Enquanto que o lixo orgânico de progem vegetal ou animal tem um curto período de decomposição. Dessa forma, o lixo inorgânico quando nâo é separado do orgânico pode liberar gases poluentes e não terem o destino correto para realização do Processo de Reciclagem.</li>
              <li>Por isso, REPENSE, seu comportamento. Uma atitude simples de separar o lixo orgânico do inorgânico contribui muito para o Meio Ambiente.</li>
            </ol>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4">
            <figure>
              <img
                src={imgRepense}
                className="mx-auto d-block imgWidth"
                alt="Cidades Inteligentes"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCidades;

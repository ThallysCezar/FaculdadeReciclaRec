
const mapa = require("../../assets/mapa.png") as string;

const styleImg = {
    width: "800px",
    heitgh: "800px"
}

export const MapaReciclagem = () => {
    return(
        <div className="container">
            <figure>
                <img src={mapa} className="mx-auto d-block" alt="Mapa Reciclagem" style={styleImg}/>
            </figure>
        </div>
    )
}
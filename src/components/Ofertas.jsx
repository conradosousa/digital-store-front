import PardeTenis from "../assets/PardeTenis.png";

const Ofertas = () => {
    return (
        <section id="ofertas">
            <div>
                <div className="produto-detalhe"></div>
                <img src={PardeTenis} alt="Par de Tênis" className="produto-oferta" />
            </div>
            <div className="flex-1">
                <h6>Oferta especial</h6>
                <h2>Air Jordan edição de <br />
                    colecionador</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus sequi, unde eaque sint
                    modi provident omnis ex quis consequuntur iste commodi quasi, adipisci nam sunt cum obcaecati.
                    Perspiciatis, provident!
                </p>
                <a href="" className="btn">Ver Ofertas</a>
        </div>
        </ section >
    );
}

export default Ofertas;
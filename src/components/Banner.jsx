import tenis1 from "../assets/tenis1.png";
import detalhe from "../assets/detalhe.png";



const Banner = () => {
    return (
        <section id="banner">
            <div className="conteudo">
                <h6>Melhores ofertas personalizadas</h6>
                <h2>Queima de<br />estoque Nike 🔥</h2>
                <p>Consequat culpa exercitation mollit nisi excepteur do<br />do tempor laboris eiusmod irure consectetur.
                </p>
                <a href="" className="btn">Ver Ofertas</a>
            </div>
            <div>
                <img src={tenis1} alt="" className="tenis1" />
                <img src={detalhe} alt="" className="detalhe" />
            </div>
        </section>
    );
}

export default Banner;
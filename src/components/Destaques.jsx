import camisa from "../assets/camisa.png";
import tenis from "../assets/tenis.png";
import fone from "../assets/fone.png";
import blusa from "../assets/blusa.svg";
import calça from "../assets/calça.svg";
import cap from "../assets/cap.svg";
import tenis2 from "../assets/tenis.svg";
import fone2 from "../assets/icon-fone.svg";




const Destaques = () => {
    return (
        <>
            <section id="destaques">
                <h3>Coleçoes em destaque</h3>
                <div className="colecoes">
                    <div>
                        <div className="conteudo">
                            <h6>30% off</h6>
                            <h2>Novo drop <br />Supreme</h2>
                            <a href="" className="btn inverso">Comprar</a>
                        </div>
                        <img src={camisa} alt="" />
                    </div>
                    <div>
                        <div className="conteudo">
                            <h6>30% off</h6>
                            <h2>Coleção <br />Adidas</h2>
                            <a href="" className="btn inverso">Comprar</a>
                        </div>
                        <img src={tenis} alt="" />
                    </div>
                    <div>
                        <div className="conteudo">
                            <h6>30% off</h6>
                            <h2>Novo <br />Beats Bass</h2>
                            <a href="" className="btn inverso">Comprar</a>
                        </div>
                        <img src={fone} alt="" />
                    </div>
                </div>

                <h3>Departamentos</h3>
                <div className="departamentos">
                    <div>
                        <div className="icon">
                            <img src={blusa} alt="blusa" />
                        </div>
                        Camisetas
                    </div>
                    <div>
                        <div className="icon">
                            <img src={calça} alt="calça" />
                        </div>
                        Calças
                    </div>
                    <div>
                        <div className="icon">
                            <img src={cap} alt="" className="bone" />
                        </div>
                        Boné
                    </div>
                    <div>
                        <div className="icon">
                            <img src={fone2} alt="fone2" />
                        </div>
                        Fones
                    </div>
                    <div>
                        <div className="icon">
                            <img src={tenis2} alt="tenis" />
                        </div>
                        Tênis
                    </div>
                </div>
            </section>
        </>
    );
}

export default Destaques;
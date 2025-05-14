import setinha from '../assets/setinha.png';
import TenisCard from '../assets/tenis-card.png';

const Produtos = () => {
    return (
        <section id="produtos">
            <div className="titulo">
                <h3>Produtos em alta</h3>
                <a href="">
                    Ver todos <img src={setinha} alt="Seta para ver todos os produtos" />
                </a>
            </div>
            <div className="cards">
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={TenisCard} alt="Tênis K-Swiss V8" />
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5>
                            <del>$200</del> $100
                        </h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={TenisCard} alt="Tênis K-Swiss V8" />
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5>
                            <del>$200</del> $100
                        </h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={TenisCard} alt="Tênis K-Swiss V8" />
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5>
                            <del>$200</del> $100
                        </h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={TenisCard} alt="Tênis K-Swiss V8" />
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5>
                            <del>$200</del> $100
                        </h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={TenisCard} alt="Tênis K-Swiss V8" />
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5>
                            <del>$200</del> $100
                        </h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={TenisCard} alt="Tênis K-Swiss V8" />
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5>
                            <del>$200</del> $100
                        </h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={TenisCard} alt="Tênis K-Swiss V8" />
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5>
                            <del>$200</del> $100
                        </h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={TenisCard} alt="Tênis K-Swiss V8" />
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5>
                            <del>$200</del> $100
                        </h5>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Produtos;
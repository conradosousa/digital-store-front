import Header from "../components/Header";
import Banner from "../components/Banner";
import Destaques from "../components/Destaques";
import Produtos from "../components/Produtos";
import Ofertas from "../components/Ofertas"; 
import Footer from "../components/Footer";


const Home = () => {
    return (
        <main>
            <Header />
            <Banner />
            <Destaques />
            <Produtos />
            <Ofertas />
            <Footer />
        </main>
    );
    
}

export default Home;
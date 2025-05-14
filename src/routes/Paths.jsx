import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Produtos from "../components/Produtos";




const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;
import { Link } from "react-router";

const NotFound = () => {
    return ( 
        <>
        <h1>Página não encontrada</h1>
        {/* <a href="/">Voltar</a> */}
        <Link to="/">Voltar</Link>
        
        </>
     );
}
 
export default NotFound;
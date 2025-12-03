import { Link } from 'react-router-dom' //Importamos el componente Link
function Nav (){
    return(
        <div className='hola'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contactos">Contactos</Link>
                <Link to="/perfil">Perfil</Link>
            </nav>
        </div>
    )
}
export default Nav
//useNavigate para llevar navegacion si uusar un link

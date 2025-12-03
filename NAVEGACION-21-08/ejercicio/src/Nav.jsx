import { Link } from 'react-router-dom' //Importamos el componente Link
function Nav (){
    return(
        <div className='hola'>
            <nav>
                <Link to='/'>Loguin</Link>
                <Link to='/register'>Register</Link>
            </nav>
        </div>
    )
}
export default Nav
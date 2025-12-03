//obtener correo y contraseña
import {useParams} from 'react-router-dom';

function Home() {
    const {correo} = useParams();
    const {contrasena} = useParams();
    
    return(
        <div>
            <h1>Bienvenido a HOme, {correo}</h1>
            <p>{contrasena}</p>
        </div>
    )
}
export default Home
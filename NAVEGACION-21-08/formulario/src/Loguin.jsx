import {useState} from 'react'
import { useNavigate  } from 'react-router-dom';
function Loguin() {
//comunicar el js => useState

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const navigate = useNavigate();
    const enviar = () => {
        navigate(`/home/${correo}/${contrasena}`) //${} es un signo de interpolacion para concatenar juntar pues
    }

//html
    return(
        <div>
            <h1>Bienvenidos al el LOguin Pro Plusx Hd 4k</h1>
            <form onSubmit={enviar}>
                <input type="email" placeholder="Escribe tu @" onChange={(event)=>setCorreo(event.target.value)}></input> {/*para que se pueda tomar lo que se escribe enel input*/}
                <input type="password" placeholder="Escribe tu contraseña" onChange={(event)=>setContrasena(event.target.value)}></input>
                <button type="submit">Entrar</button>
            </form>
            <p>{correo}</p>
        </div>
        
    )
}
export default Loguin
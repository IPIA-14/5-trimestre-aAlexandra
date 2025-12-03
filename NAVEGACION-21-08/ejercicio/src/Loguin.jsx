import {useNavigate} from 'react-router-dom'
function Loguin(){

    const navigate = useNavigate()
    const bienvenida = () =>{
        navigate('/bienvenida')
    }
    return(
        <div>
            <label>Usuario</label>
            <input type="text" placeholder="Usuario"/>
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña"/>

            <button onClick={bienvenida}>Entrar</button>
        </div>
    )
}
export default Loguin
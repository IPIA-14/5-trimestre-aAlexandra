//Ruta raiz => componente en llamarse
import { useNavigate } from "react-router-dom"
function Home(){

    const navigate = useNavigate() //useNavigate para llevar navegacion si uusar un link
    const llevarHome = () =>{ //llevarHome => funcion que llevara al home
        navigate('/dash') //llevarHome => funcion que llevara al home
    }
    return(
        <div>
            <h1>Bienvenido a la pagina del sena</h1>
            <button onClick={llevarHome} >Tocame</button>
        </div>
    )
}
export default Home
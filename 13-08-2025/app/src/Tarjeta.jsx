import App from "./App"
function Tarjeta(props){
    return(
        <div>
            <p>Nombre: {props.nombre}</p>
            <p>{props.apellido}</p>
            <p>{props.edad}</p>
            <p>{props.habilidades}</p>
            <ul>
                <li>Futbol</li>
                <li>Baile</li>
                <li>Comer</li>
            </ul>
            <ul>
                {props.habilidades.map(
                    (dato) =>{
                        <li>{dato}</li>
                    }
                )}
            </ul>
        </div>
    )
}
export default Tarjeta
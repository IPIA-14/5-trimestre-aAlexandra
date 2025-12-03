import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; //Utilizamos la libreria para navegar

function Loguin() {
    const [rol, setRol] = useState(""); //Declaramos la variable rol iniciada vacia
    const navigate = useNavigate(); //Declaramos la funcion de navegacion de react router

    const handleSubmit = (e) => { //Funcion 1ue se ejeccuta cuando se envía el formulario
        e.preventDefault(); //evitar recargar la pagina
        if (rol){
            navigate("/home", {state: {rol} }); //Navegamos a la ruta home con el rol donde este se guarda en un objeto
        }
        else{
            alert("NO has definido ningun rol")
        }
    } 

    return(
        <div classname="div">
            <h2>ROl</h2>
            <form onSubmit={handleSubmit}>
                <select value={rol} onChange={(e) => setRol(e.target.value)}>   {/*onchange funciona para manejar cambioes en los elementos de entrada y e targte value lo actualiza*/}
                    <option value="">Selecciona un rol</option>
                    <option value="administrador">Administrator</option>
                    <option value="usuario">Usuario</option>
                    <option value="editor">Editor</option>
                </select> 
                <button type="submit">Continuar ✅</button>
            </form> 

            {/*Enlace para home*/}
            {rol && ( //Solo si el rol es definido toma lo que este en rol osea el rol seleccionado lo verifica
                <h3>
                    <Link to="/home" state={{rol}}>  
                    Ir a home con el rol: {rol}
                    </Link>
                </h3>
                
            )}

         </div>
    )
}

export default Loguin;



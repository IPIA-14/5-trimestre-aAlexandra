import { useState } from 'react'

function Nombre({enviar}){
    const [name, setName] = useState("");
    return(
        <div>
            <input type="text" placeholder="Nombre"
                onChange={(event) => setName(event.target.value)} ></input>
            <p>{name}</p>

            <button onClick={enviar(name)}>Enviar</button>
        </div>
    )
}
export default Nombre
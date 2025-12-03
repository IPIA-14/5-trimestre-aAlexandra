import { useState } from 'react'

function Apellido(){
    const [name, setName] = useState("");
    return(
        <div>
            <input type="text" placeholder="Apellido"
                onChange={(event) => setName(event.target.value)} ></input>
            <p>{name}</p>
        </div>
    )
}
export default Apellido
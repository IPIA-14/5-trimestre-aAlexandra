import { useState } from 'react'

function Direccion(){
    const [name, setName] = useState("");
    return(
        <div>
            <input type="text" placeholder="Direccion"
                onChange={(event) => setName(event.target.value)} ></input>
            <p>{name}</p>
        </div>
    )
}
export default Direccion
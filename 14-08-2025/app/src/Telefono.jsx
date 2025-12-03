import { useState } from 'react'

function Telefono(){
    const [name, setName] = useState("");
    return(
        <div>
            <input type="text" placeholder="Telefon"
                onChange={(event) => setName(event.target.value)} ></input>
            <p>{name}</p>
        </div>
    )
}
export default Telefono
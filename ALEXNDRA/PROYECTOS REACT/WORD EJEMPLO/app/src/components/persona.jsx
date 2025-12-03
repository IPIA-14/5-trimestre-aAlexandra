import './../styles/estilo.css'
function Persona() {
    return(
        <div className="persona">
            <label>Nombre</label>
            <input type="text" placeholder="Nombre" name="nombre" />
            <br></br>
            <label>Apellido</label> 
            <input type="text" placeholder="Apellido" name="apellido" />
            <br></br>
            <label>Direccion</label>
            <input type="text" placeholder="Direccion" name="direccion" />
            <br></br>
            <label>Telefono</label>
            <input type="text" placeholder="Telefono" name="telefono" />
        </div>
            
        
    )
}
export default Persona
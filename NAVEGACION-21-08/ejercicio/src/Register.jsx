import{useNavigate} from 'react-router-dom'
import{useState} from 'react'

function Register(){

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState('')
    const [contraseña, setContraseña] = useState('')

    const navigate = useNavigate()
    const llevarLoguin = () =>{
        if(nombre && apellido && email && telefono && fecha && contraseña){
           
            localStorage.setItem('usuario', JSON.stringify({nombre, apellido, email, telefono, fecha, contraseña}))

            navigate('/dash ')
        }
        else{
            alert('Debes llenar todos los campos')
    }
    }

    return(
        <div>
            <h1>Hola, ME caes mal</h1>
            <div className="input">
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
                <label>Apellido</label>
                <input type="text" placeholder="Apellido" onChange={(e)=>{setApellido(e.target.value)}}/>
                <label>Email</label>
                <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Telefono</label>
                <input type="tel" placeholder="Telefono" onChange={(e)=>{setTelefono(e.target.value)}}/>
                <label>Fecha de nacimiento</label>
                <input type="date" placeholder="Fecha de nacimiento" onChange={(e)=>{setFecha(e.target.value)}}/>
                <label>Contraseña</label>
                <input type="password" placeholder="Contraseña"onChange={(e)=>{setContraseña(e.target.value)}}/>
                
                <button onClick={llevarLoguin}>Guardar</button>
            </div>
        </div>
    )
}
export default Register
import './App.css'
import Resultado from './Resultado'
import Saludo from './Saludo'
import Tarjeta from './Tarjeta'
import Tarjetica from './Tarjetica'
import Boton from './Boton'
import Nombre from './Nombre'
import Formulario from './Formulario'
import { useState } from 'react'
import Recibir from './Recibir'
function App() {
  
  const [nombre, setNombre] = useState("");
  //Colocar todad las funciones ect aqui
  const mostrarAlerta = ()=>{
    alert("Boton Presionado")
  }



  return (
    <div>
      <Tarjeta nombre="Pedro" apellido="Gomez" edad={25} habilidades={["Futbol", "Bailar", "Comer"]} ></Tarjeta>
      <Resultado nombre="Juan"/>
      <Saludo nombre="Juan"/>
      <Tarjetica frutas={["Manzana", "Naranja", "Lima"]}/>
      <Boton onClick={mostrarAlerta}></Boton>
      <Nombre enviar={setNombre}></Nombre>
      <Recibir nombre={nombre}></Recibir>
    </div>
  )
}

export default App

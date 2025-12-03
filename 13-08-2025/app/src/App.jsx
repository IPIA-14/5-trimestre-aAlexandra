import './App.css'
import Resultado from './Resultado'
import Tarjeta from './Tarjeta'

function App() {

  return (
    <div>
      <Tarjeta nombre="Pedro" apellido="Gomez" edad={25} habilidades={["Futbol", "Bailar", "Comer"]} ></Tarjeta>
      <Resultado nombre="Juan"/>
      <Saludo mensaje = "Hola"></Saludo>
    </div>
  )
}

export default App

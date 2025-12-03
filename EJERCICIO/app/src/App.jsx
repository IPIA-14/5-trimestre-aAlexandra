import Hola from './Hola.jsx'
import Nombre from './Nombre.jsx'
import Propiedad from './Propiedad.jsx'
import './App.css'

function App() {
  return (
    <div>
      <div><h1>Ejemplo react</h1></div>
      <div><p>Hola Mundo</p></div>
      <Hola />
      <Nombre />
      <Propiedad nombre = "Juan" />
    </div>
  )
}

export default App

import './App.css'
import Loguin from './Loguin'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loguin></Loguin>} ></Route>
          <Route path='/home/:correo/:contrasena' element={<Home></Home>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

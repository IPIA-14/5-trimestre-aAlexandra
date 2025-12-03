import './App.css'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Contactos from './Contactos'
import Perfil from './Perfil'
import Dashboard from './dashboard'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/contactos' element={<Contactos></Contactos>} ></Route>
          <Route path='/perfil' element={<Perfil></Perfil>} ></Route>
          <Route path='/dash' element={<Dashboard></Dashboard>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

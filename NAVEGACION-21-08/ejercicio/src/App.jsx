
import './App.css'
import Loguin from './Loguin'
import Register from './Register'
import Nav from './Nav'
import BienvenidaPag from './Bienvenida'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Loguin></Loguin>} ></Route>
          <Route path='/register' element={<Register></Register>} ></Route>
          <Route path='/bienvenida' element={<BienvenidaPag></BienvenidaPag>} ></Route>
          <Route path='/loguin' element={<Loguin></Loguin>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

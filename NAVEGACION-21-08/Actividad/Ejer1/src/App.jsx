import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //IMportamos las librerias necesarias
import Loguin from "./Loguin"; //Importamos la pagina de login
import Home from "./Home"; //Importamos la pagina de home
import Error from "./Error"; //Importamos la pagina de error

function App() { // Funcion principal
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Loguin />} />
                <Route path="/home" element={<Home />} />

                {/* Cualquier ruta no definida muestra la página 404 */}
                <Route path="*" element={<Error />} />

            </Routes>
        </Router>
    )
}
export default App;
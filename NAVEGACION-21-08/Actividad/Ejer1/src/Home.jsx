import {useNavigate, useLocation, Link } from "react-router-dom";
import Error from "./Error";


function Home() {
  const navigate = useNavigate(); //Utilizamos la libreria para navegar
  const location = useLocation(); //Utilizamos la libreria para obtener la ruta actual

  const rol = location.state?.rol; //Obtenemos el rol definido en el objeto de estado sin errores con el operador ?

  const Roles = ["administrador", "usuario", "editor"]; //Estos son los roles definidos por mi
  if (!rol || !Roles.includes(rol)) { //Si el rol no es uno de los roles definidos, muestra la página de error
    return <Error />;
  }

  return ( //Funcion que retorna el componente
    <div>
      <h2>Bienvenido a Home</h2> 
      <p>Tu rol es: {rol}</p>
      <button onClick={() => navigate("/")}>Volver</button> 
      {/* Nuevo enlace, sin quitar el botón */}
      <p>
        <Link to="/">Ir al Login</Link>
      </p>
    </div>
  );
}

//cuando lo haces clic, ejecuta navigate("/"), 
// lo que te redirige a la raíz (/), 
// es decir, al formulario de login.

export default Home;

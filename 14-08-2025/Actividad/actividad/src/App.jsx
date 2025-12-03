import React, { useState } from 'react'
import Saludo from './Saludo.jsx'
import Mensaje from './Mensaje.jsx'
import ListaHabilidades from './ListaHabilidades.jsx'
import TarjetaPerfil from './TarjetaPerfil.jsx'
import Boton from './Boton.jsx'
import Galeria from './Galeria.jsx'
import Producto from './Producto.jsx'
import EstadoUsuario from './EstadoUsuario.jsx'
import Contador from './Contador.jsx'
import Usuario from './Usuario.jsx'


export default function App() {
  const [logueado, setLogueado] = useState(false)

  const habilidades = ['JavaScript', 'React', 'CSS', 'Git']

  const fotos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop', titulo: 'Retrato' },
    { id: 2, url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop', titulo: 'Montañas' },
    { id: 3, url: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=800&auto=format&fit=crop', titulo: 'Ciudad' }
  ]

  const usuarios = [
    { id: 1, nombre: 'Ana', edad: 24 },
    { id: 2, nombre: 'Luis', edad: 31 },
    { id: 3, nombre: 'Sofía', edad: 28 },
  ]

  const handleBotonClick = () => {
    alert('¡Click desde el padre!')
  }

  return (
    <div className="container">
      <h1>ACTIVIDAD </h1>

      <section>
        <h2>1 Saludo</h2>
        <Saludo nombre="Juan" />
      </section>

      <section>
        <h2>2 Mensaje personalizado</h2>
        <Mensaje nombre="Ana" edad={25} />
      </section>

      <section>
        <h2>3 Lista de habilidades</h2>
        <ListaHabilidades habilidades={habilidades} />
      </section>

      <section>
        <h2>4 Tarjeta de perfil</h2>
        <TarjetaPerfil
          nombre="Foto"
          imagen=""
          descripcion="Programando ando con React"
        />
      </section>

      <section>
        <h2>5 Botón con evento</h2>
        <Boton onClick={handleBotonClick}>Haz clic aquí</Boton>
      </section>

      <section>
        <h2>6 Galería</h2>
        <Galeria items={fotos} />
      </section>

      <section>
        <h2>7 Producto con precio</h2>
        <Producto nombre="Mouse Gamer" precio={129900} moneda="COP" />
      </section>

      <section>
        <h2>8 Renderizado condicional</h2>
        <EstadoUsuario logueado={logueado} />
        <button className="btn" onClick={() => setLogueado(!logueado)}>
          Alternar logueado
        </button>
      </section>

      <section>
        <h2>9 Contador</h2>
        <Contador inicial={5} paso={1} />
      </section>

      <section>
        <h2>10 Lista de usuarios</h2>
        {usuarios.map(u => (
          <Usuario key={u.id} nombre={u.nombre} edad={u.edad} />
        ))}
      </section>
    </div>
  )
}

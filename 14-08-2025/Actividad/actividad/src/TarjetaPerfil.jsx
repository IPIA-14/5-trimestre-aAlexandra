import React from 'react'

function TarjetaPerfil({ nombre, imagen, descripcion }) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}
export default TarjetaPerfil

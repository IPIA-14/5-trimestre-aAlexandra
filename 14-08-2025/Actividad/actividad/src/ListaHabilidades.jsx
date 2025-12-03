import React from 'react'

function ListaHabilidades({ habilidades }) {
  return (
    <ul>
      {habilidades.map((hab, idx) => <li key={idx}>{hab}</li>)}
    </ul>
  )
}
export default ListaHabilidades
import React from 'react'

function EstadoUsuario({ logueado }) {
  return <span>{logueado ? 'Bienvenido' : 'Inicia sesión'}</span>
}
export default EstadoUsuario
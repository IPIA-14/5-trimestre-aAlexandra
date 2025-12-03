import React from 'react'

function Producto({ nombre, precio, moneda = 'USD' }) {
  const formateado = new Intl.NumberFormat('es-CO', { style: 'currency', currency: moneda }).format(precio)
  return (
    <p>{nombre} - {formateado}</p>
  )
}
export default Producto
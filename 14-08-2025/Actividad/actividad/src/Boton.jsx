import React from 'react'

function Boton({ onClick, children }) {
  return <button className="btn" onClick={onClick}>{children}</button>
}

export default Boton
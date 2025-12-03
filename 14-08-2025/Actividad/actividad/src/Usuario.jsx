import React from 'react'

function Usuario({ nombre, edad }) {
  return (
    <div style={{border:'1px solid #334155', borderRadius:'8px', padding:'8px'}}>
      <h4>{nombre}</h4>
      <p>Edad: {edad}</p>
    </div>
  )
}
export default Usuario
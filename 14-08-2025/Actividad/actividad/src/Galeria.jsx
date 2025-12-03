import React from 'react'

function Galeria({ items }) {
  return (
    <div className="grid">
      {items.map(item => (
        <div key={item.id}>
          <img src={item.url} alt={item.titulo} style={{width:'100%', borderRadius:'8px'}}/>
          <p>{item.titulo}</p>
        </div>
      ))}
    </div>
  )
}
export default Galeria

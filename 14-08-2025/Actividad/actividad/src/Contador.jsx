import React, { useState } from 'react'

function Contador({ inicial = 0, paso = 1 }) {
  const [count, setCount] = useState(inicial)
  return (
    <div style={{display:'flex', gap:12, alignItems:'center'}}>
      <button className="btn" onClick={() => setCount(c => c - paso)}>-</button>
      <span>{count}</span>
      <button className="btn" onClick={() => setCount(c => c + paso)}>+</button>
    </div>
  )
}
export default Contador

import { useState } from "react";

function Formulario() {
  const [form, setForm] = useState({ nombre: "", apellido: "", direccion: "", telefono: "" });

  return (
    <div>
      <input placeholder="Nombre" onChange={(event) => setForm({ ...form, nombre: event.target.value })} /><br></br>
      <input placeholder="Apellido" onChange={(event) => setForm({ ...form, apellido: event.target.value })} /><br></br>
      <input placeholder="Dirección" onChange={(event) => setForm({ ...form, direccion: event.target.value })} /><br></br>
      <input placeholder="Teléfono" onChange={(event) => setForm({ ...form,  telefono: event.target.value })} /><br></br>

      <p>Nombre: {form.nombre}</p>
      <p>Apellido: {form.apellido}</p>
      <p>Dirección: {form.direccion}</p>
      <p>Teléfono: {form.telefono}</p>
    </div>  
  );
}
export default Formulario;
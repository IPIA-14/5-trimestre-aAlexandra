import Manzana from "./Manzana";
import Piña from "./Piña";
import Limon from "./Limon";

function Frutas() {
  return (
    <div>
      <h2 className="titulo">FRUTAS FRUTITAS</h2>
      <div className="contenedor">
          <Manzana />
          <Piña />
          <Limon />
      </div>
    </div>
  );
}
export default Frutas;

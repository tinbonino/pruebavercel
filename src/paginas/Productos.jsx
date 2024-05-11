import { productos } from "../productos"
import Producto from "./Producto"
import "../styles.css"
function Productos() {
  return (
    <div id="container">
        {productos.map((prod)=>(
            <Producto key={prod.id} {...prod} />
        ))}
    </div>
  )
}

export default Productos
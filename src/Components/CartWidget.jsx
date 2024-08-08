import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"
import '../assets/styles/styles.css'

const CartWidget = () => {
    const { totalProductos } = useContext(CartContext)

    if (totalProductos() > 0) {
        return (
            <Link to={"/cart"}>
                <button className="calendarContainer">
                    <img src="https://images.vexels.com/media/users/3/200098/isolated/preview/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras.png" />
                    <span className="position-absolute p-1 top-0 start-100 traslate-middle badge rounded-pill bg-danger">{totalProductos()}</span>
                </button>
            </Link>
        )
    } else {

    }
}





export default CartWidget
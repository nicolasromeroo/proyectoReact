import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import '../assets/styles/styles.css';

const Cart = () => {
    const { cart, removeItem, clear, totalProductos, sumProducts } = useContext(CartContext);

    if (totalProductos() === 0) {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <img src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png" className="w-0" alt="Empty Cart" />
                        <h1>Tu carrito está vacío</h1>
                        <h4>Seguí buscando tu destino favorito.</h4>
                        <Link to={"/"} className="btn btn-dark rounded-pill mt-5">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container cartItems">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={5} className="text-end">
                                    <button className="btn btn-light btn-sm" title="Vaciar carrito" onClick={clear}>
                                        Vaciar carrito
                                        <img src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png" alt="Eliminar producto" width={24} />
                                    </button>
                                </td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle text-center"><img src={item.img} className="w-100" alt={item.nombre} /></td>
                                    <td className="align-middle text-center">{item.hospedaje}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                    <td className="align-middle text-center">
                                        <img className="trashLogo"
                                            src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                                            alt="Eliminar producto"
                                            onClick={() => removeItem(item.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle text-center">Total a pagar</td>
                                <td className="align-middle text-center">${sumProducts()}</td>
                                <td className="align-middle text-end">
                                    <Link to={"/checkout"} className="btn btn-light" title="Ir al checkout">Checkout</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;

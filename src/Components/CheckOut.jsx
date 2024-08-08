import { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CheckOut = () => {
    const { cart, totalProductos, sumProducts } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("")

    const generarOrden = () => {
        if (nombre == "") {
            return false
        }

        if (email == "") {
            return false
        }

        if (telefono == "") {
            return false
        }

        const order = {
            buyer: { name: nombre, phone: telefono, email: email },
            items: cart.map(item => ({ id: item.id, title: item.hospedaje, price: item.precio })),
            total: sumProducts()
        }

        // agregar doc a firestore
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then((response) => {
            setOrderId(response.id)
            clear()
        })
    }

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
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-light" onClick={generarOrden}>Generar orden</button>
                    </form>
                </div>

                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle text-center"><img src={item.img} className="w-100" alt={item.nombre} /></td>
                                    <td className="align-middle text-center">{item.hospedaje}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total a pagar</td>
                                <td>${sumProducts()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {orderId && <div>
                        <h2>Gracias por su compra, ¡disfrute su destino!</h2>
                        <p>Tu orden de compra es: <b>{orderId}</b></p>
                    </div>}
                </div>
            </div>
        </div>
    );
};

// Swal.fire({
//     position: "center",
//     icon: "success",
//     title: "Gracias por la compra. ¡Que disfrute su viaje!",
//     showConfirmButton: false,
//     timer: 1500 
// })}

export default CheckOut

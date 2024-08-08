import { useEffect, useState, useContext } from "react";
import arrayVuelos from "../json/articulos.json";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import '../assets/styles/styles.css'

const Vuelos = () => {
    const [items, setItems] = useState(arrayVuelos);
    const { id } = useParams();
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        setItems(id ? arrayVuelos.filter(item => item.pais === id) : arrayVuelos);
    }, [id]);

    const handleAdd = (item, cantidad) => {
        console.log(`Añadido ${cantidad} items al carrito`);
        addItem(item, cantidad);
    };

    return (
        <div className="container-fluid wallpaperContainer pb-5 pt-5 px-5">
            <div className="row w-100 h-100 containerVuelos">
                {items.map(item => (
                    <div key={item.id} className="col-md-3 mb-3 pb-5 card-container">
                        <div className="card pb-3">
                            <img src={item.img} className="card-img-top" alt={item.hospedaje} />
                            <div className="card-body text-center bg-white text-dark">
                                <h2 className="text-uppercase">{item.hospedaje}</h2>
                                <h5 className="text-uppercase">{item.pais}</h5>
                                
                                <p className="card-text">{item.descripcion}</p>
                                <p className="text-danger"><b>¡ DESDE $ {item.precio} !</b></p>
                                <ItemCount disponibilidad={item.disponibilidad} onAdd={(cantidad) => handleAdd(item, cantidad)} />
                                <p>Asientos disponibles en el siguiente vuelo: {item.disponibilidad}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vuelos;
